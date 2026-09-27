import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../../../environments/environment';
import { CommentsDataResponse } from '../models/comments-data.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private readonly httpClient = inject(HttpClient);

  myHeaders: object = {
    headers: {
      AUTHORIZATION: `Bearer ${localStorage.getItem('socialToken')}`,
    },
  };

  getPostComments(postId: string): Observable<CommentsDataResponse> {
    return this.httpClient.get<CommentsDataResponse>(
      `${environment.base_Url}/posts/${postId}/comments?page=1&limit=10`,
    );
  }

  createComment(postId: string, data: object): Observable<any> {
    return this.httpClient.post<any>(`${environment.base_Url}/posts/${postId}/comments`, data);
  }
  deleteComment(postId: string, commentId: string): Observable<any> {
    return this.httpClient.delete<any>(
      `${environment.base_Url}/posts/${postId}/comments/${commentId}`,
    );
  }
}
