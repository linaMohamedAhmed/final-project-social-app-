import { Component, inject } from '@angular/core';
import { PostsService } from '../../core/services/posts.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  private readonly postsService = inject(PostsService);
  userData: any;
  postsList: any;
  myposts: any;
  bookmarks: [] = [];
  userId: string = '';

  ngOnInit(): void {
    this.getUserData();
    this.getAllPostsData();
  }

  getUserData(): void {
    if (localStorage.getItem('userData')) {
      this.userData = JSON.parse(localStorage.getItem('userData')!);
      console.log(this.userData);
    }
  }

  // ---------------- get user data in post --------

  // --------------------get all posts in feed component ------------
  getAllPostsData(): void {
    this.postsService.getAllPosts().subscribe({
      next: (res) => {
        if (res.success) {
          this.postsList = res.data.posts;
          this.myposts = this.postsList.filter((a: any) => a.user._id === this.userData._id);
          this.bookmarks = this.postsList.filter((a: any) => a.bookmarked);

          console.log(res.data);
        }
      },
      error: (err) => {
        console.log(err);
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
