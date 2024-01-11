import {
  IGenericUserRequest,
  ILogOutResponse,
  ILoginResponse,
  ISignUpResponse,
} from './../entities/entities.auth';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../entities/entities.auth';
import { urlBuilder } from 'src/app/utils/url-builder';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<ISignUpResponse> {
    const bodyRequest: IGenericUserRequest = {
      email: user.userEmail,
      name: user.userName,
      password: user.userPassword,
      userName: user.userName,
    };
    const url = urlBuilder(environment.auth.signUp);
    return this.http.post<ISignUpResponse>(url, bodyRequest);
  }

  loginUser(user: User): Observable<ILoginResponse> {
    const bodyRequest: IGenericUserRequest = {
      email: user.userEmail,
      name: user.userName,
      password: user.userPassword,
      userName: user.userName,
    };
    const url = urlBuilder(environment.auth.logIn);
    return this.http.post<ILoginResponse>(url, bodyRequest);
  }

  logOutUser(accessToken: string): Observable<ILogOutResponse> {
    const params = new HttpParams().set('accessToken', accessToken);
    const url = urlBuilder(environment.auth.logIn);
    return this.http.post<ILogOutResponse>(url, { params });
  }
}
