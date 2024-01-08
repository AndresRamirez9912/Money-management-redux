import { NavbarComponent } from './../../shared/navbar/navbar.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../entities/entities.auth';
import { Store } from '@ngrx/store';
import { signUpUser } from '../store/auth.actions';
import { appState } from 'src/app/store/app.reducer';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerData: FormGroup;
  isLoading: boolean;
  uiSubscription: Subscription;
  isLoaded: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<appState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerData = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.uiSubscription = this.store.select('auth').subscribe((auth) => {
      this.isLoading = auth.isLoading;
      this.isLoaded = auth.isLogged;
      if (this.isLoaded) {
        this.router.navigate(['/', 'dashboard']);
      }
    });
  }

  ngOnDestroy(): void {
    this.uiSubscription.unsubscribe();
  }

  createUser() {
    if (this.registerData.invalid) {
      return;
    }

    const { userName, email, password } = this.registerData.value;
    const user = new User(userName, password, email);
    this.store.dispatch(signUpUser(user));
  }
}
