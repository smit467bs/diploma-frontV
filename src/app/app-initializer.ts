import { merge } from 'rxjs';
import { first } from 'rxjs/operators';

import { version as APP_VERSION } from '../../package.json';
import { AuthService } from './core/services';

export const APP_INITIALIZER_DEPS = [
  AuthService
];

export function appInitializerFactory(
  authService: AuthService
): () => void {
  console.log(`app version: ${APP_VERSION} ...`);
  return () => merge(
    authService.authUser()
  )
    .pipe(
      first()
    ).toPromise();
}
