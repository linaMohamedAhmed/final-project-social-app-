import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDataResponse } from '../../models/user-data.interface';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly httpClient = inject(HttpClient);
  private readonly router = inject(Router);

  // ----------------signup function -----------
  signUp(data: object): Observable<UserDataResponse> {
    return this.httpClient.post<UserDataResponse>(`${environment.base_Url}/users/signup`, data);
  }

  // ----------------signIn function -----------
  signIn(data: object): Observable<UserDataResponse> {
    return this.httpClient.post<UserDataResponse>(`${environment.base_Url}/users/signIn`, data);
  }

  // -------------signaout function -----------

  signOut(): void {
    localStorage.removeItem('socialToken');
    localStorage.removeItem('userData');
    // --------------- navigate login -------------
    this.router.navigate(['/login']);
  }

  // ------------- change password -----------

  changePassword(data: object): Observable<UserDataResponse> {
    return this.httpClient.patch<UserDataResponse>(
      `${environment.base_Url}/users/change-password`,
      data,
    );
  }
}
