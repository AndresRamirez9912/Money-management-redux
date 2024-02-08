import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/store/app.reducer';
import { User } from '../entities/entities.auth';
import { loginUser } from '../store/auth.actions';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { appStateWithAuth } from '../store/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginData: FormGroup;
  isLoading: boolean;
  isLogged: boolean;
  authSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<appStateWithAuth>,
    private router: Router
  ) {
    this.authSubscription = this.store.select('auth').subscribe((authData) => {
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

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
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
