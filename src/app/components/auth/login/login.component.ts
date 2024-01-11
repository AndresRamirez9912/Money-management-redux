import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/store/app.reducer';
import { User } from '../entities/entities.auth';
import { loginUser } from '../store/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginData: FormGroup;
  isLoading: boolean;
  isLogged: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<appState>,
    private router: Router
  ) {
    this.store.select('auth').subscribe((authData) => {
      this.isLoading = authData.isLoading;
      this.isLogged = authData.isLogged;
      if (this.isLogged) {
        this.router.navigate(['/', 'dashboard']);
      }
    });
  }

  ngOnInit() {
    this.loginData = this.formBuilder.group({
      userName: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  loginUser() {
    if (this.loginData.invalid) {
      return;
    }

    const { userName, userEmail, password } = this.loginData.value;
    const user = new User(userName, password, userEmail);
    this.store.dispatch(loginUser(user));
  }
}
