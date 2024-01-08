import { ISignUpResponse, User } from './../entities/entities.auth';
import { createAction, props } from '@ngrx/store';

export const signUpUser = createAction(
  '[Auth Component] SignUp User',
  props<User>()
);
export const signUpSuccess = createAction(
  '[Auth Component] SignUp Success',
  props<User>()
);
export const signUpError = createAction(
  '[Auth Component] SignUp Error',
  props<ISignUpResponse>()
);
export const loginUser = createAction(
  '[Auth Component] Login User',
  props<User>()
);
