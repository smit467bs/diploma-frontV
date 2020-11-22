import { merge, of } from 'rxjs';
import { catchError, first, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { version as APP_VERSION } from '../../package.json';
import { AuthService, LocalStoreService } from './core/services';
import { EipState } from 'core/store/reducers';
import { UserStoreService } from 'core/store/user';

export const APP_INITIALIZER_DEPS = [
  Store,
  AuthService,
  UserStoreService,
  LocalStoreService
];

export function appInitializerFactory(
  store: Store<EipState>,
  authService: AuthService,
  userStoreService: UserStoreService,
  localStoreService: LocalStoreService
): () => void {
  console.log(`app version: ${APP_VERSION} ...`);
  const token = localStoreService.getValueFromLocalStorage('token') || '';
  return () => merge(
    authService.refreshToken(token)
      .pipe(
        tap((data) => {
          localStoreService.storeOnLocalStorage('token', data.token);
          userStoreService.loginUser(data);
          userStoreService.updateToken(data.token);
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
