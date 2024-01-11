import { createReducer, on } from '@ngrx/store';
import * as actions from './auth.actions';
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
  accessToken: '',
  IdToken: '',
};

export const authReducer = createReducer(
  initialState,
  on(actions.signUpUser, (state, user) => {
    return {
      ...state,
      isLoading: true,
      userName: user.userName,
      userEmail: user.userEmail,
    };
  }),
  on(actions.signUpSuccess, (state, response) => {
    return {
      ...state,
      isLogged: true,
      isLoading: false,
    };
  }),
  on(actions.signUpError, (state, response) => {
    return {
      ...state,
      isLoading: false,
      errorCode: response.errorCode,
      errorMessage: response.errorMessage,
      isLogged: false,
    };
  }),
  on(actions.loginUser, (state, user) => {
    return {
      ...state,
      isLoading: true,
      isLogged: false,
      userName: user.userName,
      userEmail: user.userEmail,
    };
  }),
  on(actions.loginSuccess, (state, response) => {
    return {
      ...state,
      isLogged: true,
      isLoading: false,
      session: response.response.Session,
      accessToken: response.response.AuthenticationResult.AccessToken || '',
      IdToken: response.response.AuthenticationResult.IdToken || '',
    };
  }),
  on(actions.logOutUser, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(actions.logOutSuccess, (state) => {
    return {
      ...initialState,
    };
  }),
  on(actions.logOutError, (state, response) => {
    return {
      ...state,
      isLoading: false,
      errorCode: response.errorCode,
      errorMessage: response.errorMessage,
      isLogged: true,
    };
  })
);
