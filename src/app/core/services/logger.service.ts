import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class Logger {

  constructor(private errorHandler: ErrorHandler) {
  }

  log(value: any, ...rest: any[]) {
    if (!environment.production) {
      console.log('%c[INFO]', 'color:green', value, ...rest, );
    }
  }

  error(error: Error) {
    this.errorHandler.handleError(error);
  }

  warn(value: any, ...rest: any[]) {
    console.warn(value, ...rest);
  }
}
