import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PostsDataResponse } from '../models/posts-data.interface';
import { PostMutationDataReponse } from '../models/post-mutation-data.interface';
import { PostDetailsDataResponse } from '../models/post-details-data.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly httpClient = inject(HttpClient);

  myHeaders: object = {
    headers: {
      AUTHORIZATION: `Bearer ${localStorage.getItem('socialToken')}`,
    },
  };

  getAllPosts(): Observable<PostsDataResponse> {
    return this.httpClient.get<PostsDataResponse>(`${environment.base_Url}/posts`);
  }

  createPost(data: FormData): Observable<PostMutationDataReponse> {
    return this.httpClient.post<PostMutationDataReponse>(`${environment.base_Url}/posts`, data);
  }

  getSinglePost(postId: string): Observable<PostDetailsDataResponse> {
    return this.httpClient.get<PostDetailsDataResponse>(`${environment.base_Url}/posts/${postId}`);
  }

  uddatePost(postId: string, data: object): Observable<any> {
    return this.httpClient.put<any>(`${environment.base_Url}/posts/${postId}`, data);
  }

  deletePost(postId: string): Observable<PostMutationDataReponse> {
    return this.httpClient.delete<PostMutationDataReponse>(
      `${environment.base_Url}/posts/${postId}`,
    );
  }
}
