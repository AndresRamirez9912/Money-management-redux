import { createReducer, on } from '@ngrx/store';
import { isLoading, stopLoading } from './ui.actions';
import { uiState } from './ui.state';

export const initialState: uiState = {
  isLoading: false,
};

export const uiReducer = createReducer(
  initialState,
  on(isLoading, (state) => ({ ...initialState, isLoading: true })),
  on(stopLoading, (state) => ({ ...initialState, isLoading: false }))
);
