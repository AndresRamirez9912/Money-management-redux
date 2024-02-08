import { authReducer } from '../components/auth/store/auth.reducer';
import { authState } from '../components/auth/store/auth.state';
import { uiReducer } from '../components/shared/store/ui.reducer';
import { uiState } from './../components/shared/store/ui.state';
import { ActionReducerMap } from '@ngrx/store';

export interface appState {
  ui: uiState;
  // auth: authState;
}

export const appReducers: ActionReducerMap<appState> = {
  ui: uiReducer,
  // auth: authReducer,
};
