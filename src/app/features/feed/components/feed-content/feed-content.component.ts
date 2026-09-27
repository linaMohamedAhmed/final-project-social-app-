import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../../../core/services/posts.service';
import { Post } from '../../../../core/models/posts-data.interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import { UserInfo } from '../../../../core/models/user-data.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feed-content',
  imports: [ReactiveFormsModule, PostCommentsComponent, RouterLink],
  templateUrl: './feed-content.component.html',
  styleUrl: './feed-content.component.css',
})
export class FeedContentComponent implements OnInit {
  private readonly postsService = inject(PostsService);
  userId: string = '';
  postsList: Post[] = [];
  imgUrl: string | ArrayBuffer | null | undefined;
  // --------------content control -----
  contentControl = new FormControl('');
  bodyControl = new FormControl('');
  privacyControl = new FormControl('public');
  userData: UserInfo = {} as UserInfo;
  selectedFile!: File;
  isEdit: boolean = true;
  post: any;
  editedPost: any;
  ngOnInit(): void {
    this.getAllPostsData();
    this.getUserData();
  }
  // --------------------get all posts in feed component ------------
  getAllPostsData(): void {
    this.postsService.getAllPosts().subscribe({
      next: (res) => {
        if (res.success) {
          this.postsList = res.data.posts;
          // console.log(res);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // ----------------get user id from localstroage ----------

  getUserData(): void {
    if (localStorage.getItem('userData')) {
      this.userData = JSON.parse(localStorage.getItem('userData')!);
      this.userId = JSON.parse(localStorage.getItem('userData')!)?._id;
      // console.log(this.userId);
    }
  }

  // -----------------change imge in create post --------------
  changeFile(e: Event): void {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
    // --------------preview image------
    const fileReader = new FileReader();

    fileReader.readAsDataURL(this.selectedFile);
    fileReader.addEventListener('load', (e) => {
      this.imgUrl = e.target?.result;
    });
  }
  // ----------------- remove image from post when click on (x)-----------------
  removeFile(): void {
    this.imgUrl = '';
  }

  // ----------------- submit formdata to backend  (create post)  --------------
  submitForm(e: SubmitEvent): void {
    e.preventDefault();

    // -------------create form data (object) to send back end ----------
    // console.log(this.contentControl.value);
    // console.log(this.privacyControl.value);
    // console.log(this.selectedFile);

    const formData = new FormData();
    // ----check values formcontrol ----------
    if (this.contentControl.value) {
      formData.append('body', this.contentControl.value);
    }
    if (this.privacyControl.value) {
      formData.append('privacy', this.privacyControl.value);
    }
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    // console.log(formData);

    // ------------call api to send formdata ---------

    this.postsService.createPost(formData).subscribe({
      next: (res) => {
        if (res.success) {
          this.getAllPostsData();
          // console.log(res);
          // ----------reset post --------
          this.contentControl.reset();
          this.privacyControl.reset();
          this.imgUrl = '';
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // ---------------- update post--------

  upDataMyPost(post: any): void {
    this.isEdit = false;
    this.contentControl.setValue(post.body);
    //  this.saveEditPost(post);
  }

  saveEditPost(post: any): void {
    const body = {
      body: this.bodyControl.value,
    };
    this.postsService.uddatePost(post._id, body).subscribe({
      next: (res) => {
        console.log(res);
        // this.isEdit = true;
        // this.getAllPostsData();
      },
    });
  }
  // ---------------------- delete post ----------
  deletePostItem(postId: string): void {
    this.postsService.deletePost(postId).subscribe({
      next: (res) => {
        // console.log(res);
        if (res.success) {
          this.getAllPostsData();
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
