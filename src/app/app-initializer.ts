import { merge } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { version as APP_VERSION } from '../../package.json';
import { AuthService, LocalStoreService } from './core/services';
import { EipState } from './core/store/reducers';
import { UserStoreService } from './core/store/user/user-store.service';

export const APP_INITIALIZER_DEPS = [
  Store,
  AuthService,
  UserStoreService,
  // LocalStoreService
];

export function appInitializerFactory(
  store: Store<EipState>,
  authService: AuthService,
  userStoreService: UserStoreService,
  // localStoreService: LocalStoreService
): () => void {
  console.log(`app version: ${APP_VERSION} ...`);
  // const theme = localStoreService.getValueFromLocalStorage('theme');
  // document.querySelector('body').classList.add(`${theme}-theme`, `${theme}-theme-background`);

  return () => merge(
    authService.authUser()
      .pipe(
        tap(console.log),
        first(),
      ),
  )
    .pipe(
      first(),
      map(() => userStoreService.changeLoadState(true))
    ).toPromise();
}
