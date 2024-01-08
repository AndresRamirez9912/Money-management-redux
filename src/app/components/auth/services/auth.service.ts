import {
  IGenericUserRequest,
  ISignUpResponse,
} from './../entities/entities.auth';
import { HttpClient } from '@angular/common/http';
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
}
