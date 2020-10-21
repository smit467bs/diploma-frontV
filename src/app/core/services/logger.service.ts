import { ErrorHandler, Injectable } from '@angular/core';
import * as moment from 'moment';

import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class Logger {

  constructor(private errorHandler: ErrorHandler) {
  }

  log(value: any, ...rest: any[]) {
    if (!environment.production) {
      const date = moment().format('DD.MM.YYYY hh:mm:ss');
      console.log(`%c[${date}] INFO: `, 'color:green', value, ...rest);
    }
  }

  error(error: Error) {
    this.errorHandler.handleError(error);
  }

  warn(value: any, ...rest: any[]) {
    console.warn(value, ...rest);
  }
}
