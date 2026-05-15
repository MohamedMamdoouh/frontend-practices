import { createAction } from '@ngrx/store';

export const languageAction = createAction('Change Language', (language: string) => ({
  language,
}));
