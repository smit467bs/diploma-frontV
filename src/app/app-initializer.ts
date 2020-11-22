import { merge, of } from 'rxjs';
import { catchError, first, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { version as APP_VERSION } from '../../package.json';
import { AuthService, LocalStorageService } from './core/services';
import { EipState } from 'core/store/reducers';
import { UserStoreService } from 'core/store/user';
import { Router } from '@angular/router';

export const APP_INITIALIZER_DEPS = [
  Store,
  Router,
  AuthService,
  UserStoreService,
  LocalStorageService
];

export function appInitializerFactory(
  store: Store<EipState>,
  router: Router,
  authService: AuthService,
  userStoreService: UserStoreService,
  localStoreService: LocalStorageService
): () => void {
  console.log(`app version: ${APP_VERSION} ...`);
  const storedToken = localStoreService.getValueFromLocalStorage('token') || '';

  return () => merge(
    authService.refreshToken(storedToken)
      .pipe(
        tap((authResponse) => {
          userStoreService.loginUser(authResponse);
        }),
        catchError(err => {
          console.log(err);
          router.navigate(['/auth']);
          return of(err);
        }),
        first(),
      )
  ).pipe(
      first(),
      map(() => userStoreService.changeLoadState(true))
    ).toPromise();
}
