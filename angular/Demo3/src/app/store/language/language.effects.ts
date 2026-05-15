import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { languageAction } from './language.action';
import { tap } from 'rxjs';

@Injectable()
export class LanguageEffects {
  private actions = inject(Actions);

  savedLang$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(languageAction),
        tap((action) => {
          localStorage.setItem('language', action.language);
        }),
      ),
    { dispatch: false },
  );
}
