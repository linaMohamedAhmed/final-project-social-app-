import { Component, inject, Input, OnInit } from '@angular/core';
import { PostsService } from '../../core/services/posts.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Post } from '../../core/models/posts-data.interface';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  private readonly postsService = inject(PostsService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  postId: string = '';
  postData: Post = {} as Post;
  userId: string = '';

  ngOnInit(): void {
    this.getPostId();
    this.getUserData();
  }

  getUserData(): void {
    if (localStorage.getItem('userData')) {
      this.userId = JSON.parse(localStorage.getItem('userData')!)?._id;
      // console.log(this.userId);
    }
  }

  getPostId(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.postId = param.get('id')!;
      this.getSinglePoatData();
    });
  }

  getSinglePoatData(): void {
    this.postsService.getSinglePost(this.postId).subscribe({
      next: (res) => {
        if (res.success) {
          this.postData = res.data.post;
        }
        // console.log(res.data.post);
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
        if (res.success) {
          this.router.navigate(['/feed']);
          // console.log(res);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
