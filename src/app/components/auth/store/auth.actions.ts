import {
  ILogOutResponse,
  ILoginResponse,
  ISignUpResponse,
  User,
} from './../entities/entities.auth';
import { createAction, props } from '@ngrx/store';

export const signUpUser = createAction(
  '[Auth Component] SignUp User',
  props<User>()
);

export const signUpSuccess = createAction(
  '[Auth Component] SignUp Success',
  props<ISignUpResponse>()
);

export const signUpError = createAction(
  '[Auth Component] SignUp Error',
  props<ISignUpResponse | ILoginResponse>()
);

export const loginUser = createAction(
  '[Auth Component] Login User',
  props<User>()
);

export const loginSuccess = createAction(
  '[Auth Component] Login User successful',
  props<ILoginResponse>()
);

export const logOutUser = createAction(
  '[Auth Component] Log Out user',
  props<{ token: string }>()
);

export const logOutSuccess = createAction(
  '[Auth Component] Log Out successful',
  props<ILogOutResponse>()
);

export const logOutError = createAction(
  '[Auth Component] Log Out Error',
  props<ILogOutResponse>()
);
