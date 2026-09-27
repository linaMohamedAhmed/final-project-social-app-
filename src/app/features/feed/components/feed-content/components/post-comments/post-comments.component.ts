import { Component, inject, Input, OnInit } from '@angular/core';
import { CommentsService } from './serivces/comments.service';
import { Comment } from '../post-comments/models/comments-data.interface';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-post-comments',
  imports: [ReactiveFormsModule],
  templateUrl: './post-comments.component.html',
  styleUrl: './post-comments.component.css',
})
export class PostCommentsComponent implements OnInit {
  private readonly commentsService = inject(CommentsService);
  commentList: Comment[] = [];
  private readonly fb = inject(FormBuilder);
  @Input({ required: true }) postId: string = '';
  userData: any;

  ngOnInit(): void {
    this.getPostCommentsData();
    this.commentFormInit();
    this.getUserData();
  }

  // ---------------- comments function--------
  getPostCommentsData(): void {
    this.commentsService.getPostComments(this.postId).subscribe({
      next: (res) => {
        if (res.success) {
          this.commentList = res.data.comments;
          // console.log(res);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  commentForm!: FormGroup;

  commentFormInit(): void {
    this.commentForm = this.fb.group({
      content: [''],
      image: [''],
    });
  }

  selectedFile!: File;
  // ------------------  create comment --------------
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files?.length) {
      this.selectedFile = input.files[0];

      console.log(this.selectedFile);
      console.log(this.selectedFile.name);
    }
  }
  submitComment(): void {
    this.createCommentData();
    console.log(this.commentForm.value);
  }

  onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];

      console.log(this.selectedFile);
      console.log(this.selectedFile.name);
    }
  }

  createCommentData(): void {
    const formData = new FormData();

    formData.append('content', this.commentForm.get('content')?.value || '');

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.commentsService.createComment(this.postId, formData).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // ---------------------- get user data
  getUserData(): void {
    if (localStorage.getItem('userData')) {
      this.userData = JSON.parse(localStorage.getItem('userData')!);
      console.log(this.userData);
    }
  }

  // -----------delete comment-----------
  openCommentMenuId: string | null = null;

  toggleCommentMenu(commentId: string): void {
    if (this.openCommentMenuId === commentId) {
      this.openCommentMenuId = null;
    } else {
      this.openCommentMenuId = commentId;
    }
  }
  // ---------------------- delete post ----------
  deleteComment(postId: string, commentId: string): void {
    this.commentsService.deleteComment(postId, commentId).subscribe({
      next: (res) => {
        // console.log(res);
        if (res.success) {
          this.getPostCommentsData();
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
