import { merge, of } from 'rxjs';
import { catchError, first, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { version as APP_VERSION } from '../../package.json';
import { AuthService, LocalStorageService } from './core/services';
import { EipState } from 'core/store/reducers';
import { UserStoreService } from 'core/store/user';

export const APP_INITIALIZER_DEPS = [
  Store,
  AuthService,
  UserStoreService,
  LocalStorageService
];

export function appInitializerFactory(
  store: Store<EipState>,
  authService: AuthService,
  userStoreService: UserStoreService,
  localStoreService: LocalStorageService
): () => void {
  console.log(`app version: ${APP_VERSION} ...`);
  const storedToken = localStoreService.getValueFromLocalStorage('token') || '';
  return () => merge(
    authService.refreshToken(storedToken)
      .pipe(
        tap(({token, userInfo}) => {
          localStoreService.storeOnLocalStorage('token', token);
          userStoreService.loginUser(userInfo);
          userStoreService.updateToken(token);
        }),
        catchError(err => {
          console.log(err);
          return of(err);
        }),
        first(),
      )
  ).pipe(
      first(),
      map(() => userStoreService.changeLoadState(true))
    ).toPromise();
}
