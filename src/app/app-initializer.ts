import { of } from 'rxjs';
import { first } from 'rxjs/operators';

export function appInitializerFactory(): () => void {
  console.log('app initializer ...');
  return () => of(null).pipe(
    first()
  ).toPromise();
}
