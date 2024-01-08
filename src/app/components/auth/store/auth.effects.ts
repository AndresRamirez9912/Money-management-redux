import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from './auth.actions';
import { catchError, first, map, of, switchMap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ISignUpResponse } from '../entities/entities.auth';
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
              ? actions.signUpSuccess(user)
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
}
