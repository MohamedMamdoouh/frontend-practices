import { createReducer, on } from '@ngrx/store';
import { languageAction } from './language.action';

const initialState = localStorage.getItem('language') || 'en';

export const languageReducer = createReducer(
  initialState,
  on(languageAction, (state, { language }) => language),
);
