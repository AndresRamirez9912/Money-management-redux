import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from './auth.actions';
import { catchError, first, map, of, switchMap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import {
  ILogOutResponse,
  ILoginResponse,
  ISignUpResponse,
} from '../entities/entities.auth';
import { MapperErrorAuthResponse } from '../mappers/auth.response.mapper';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.signUpUser),
      switchMap((user) => {
        return this.authService.createUser(user).pipe(
          first(),
          map((resp: ISignUpResponse) =>
            resp.success
              ? actions.signUpSuccess(resp)
              : actions.signUpError(resp)
          ),
          catchError((err) => {
            const errorResponse = MapperErrorAuthResponse(err);
            return of(actions.signUpError(errorResponse));
          })
        );
      })
    )
  );

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loginUser),
      switchMap((user) => {
        return this.authService.loginUser(user).pipe(
          first(),
          map((resp: ILoginResponse) =>
            resp.success
              ? actions.loginSuccess(resp)
              : actions.signUpError(resp)
          ),
          catchError((err) => {
            const errorResponse = MapperErrorAuthResponse(err);
            return of(actions.signUpError(errorResponse));
          })
        );
      })
    )
  );

  logOutUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.logOutUser),
      switchMap(({ token }) => {
        return this.authService.logOutUser(token).pipe(
          first(),
          map((resp: ILogOutResponse) =>
            resp.success
              ? actions.logOutSuccess(resp)
              : actions.logOutError(resp)
          ),
          catchError((err) => {
            const errorResponse = MapperErrorAuthResponse(err);
            return of(actions.signUpError(errorResponse));
          })
        );
      })
    )
  );
}
