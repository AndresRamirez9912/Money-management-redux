import { createReducer, on } from '@ngrx/store';
import { signUpError, signUpSuccess, signUpUser } from './auth.actions';
import { authState } from './auth.state';

export const initialState: authState = {
  hasTwoFactor: false,
  isLogged: false,
  session: '',
  userConfirmed: false,
  userName: '',
  userEmail: '',
  errorCode: 0,
  errorMessage: '',
  isLoading: false,
};

export const authReducer = createReducer(
  initialState,
  on(signUpUser, (state) => {
    return { ...state, isLoading: true };
  }),
  on(signUpSuccess, (state, user) => {
    return {
      ...state,
      isLogged: true,
      isLoading: false,
      userName: user.userName,
      userEmail: user.userEmail,
    };
  }),
  on(signUpError, (state, response) => {
    return {
      ...state,
      isLoading: false,
      errorCode: response.errorCode,
      errorMessage: response.errorMessage,
      isLogged: false,
    };
  })
);
