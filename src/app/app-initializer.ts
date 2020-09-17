import { merge } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { version as APP_VERSION } from '../../package.json';
import { AuthService } from './core/services';
import { EipState } from './core/store/reducers';
import { UserStoreService } from './core/store/user/user-store.service';

export const APP_INITIALIZER_DEPS = [
  Store,
  AuthService,
  UserStoreService
];

export function appInitializerFactory(
  store: Store<EipState>,
  authService: AuthService,
  userStoreService: UserStoreService
): () => void {
  console.log(`app version: ${APP_VERSION} ...`);
  return () => merge(
    authService.authUser()
      .pipe(
        tap(console.log),
        first(),
      )
  )
    .pipe(
      first(),
      map(() => userStoreService.changeLoadState(true))
    ).toPromise();
}
