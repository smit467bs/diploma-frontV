import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor() {
  }

  authUser() {
    return of({firstName: 'John', surname: 'Doe', token: 'blablabla'})
      .pipe(delay(1000));
  }
}
