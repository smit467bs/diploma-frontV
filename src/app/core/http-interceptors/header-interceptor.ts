import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserStoreService } from 'core/store/user';
import { Logger } from 'core/services';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  token: string;

  constructor(private userStoreService: UserStoreService, private logger: Logger) {
    this.userStoreService.token$.subscribe((token) => this.token = token);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headers = req.headers;
    if (this.needsAuthToken(req)) {
      if (!this.token) {
        this.logger.warn('Failed to provide Authorization header for request:', req);
      }
      headers = headers.set('Authorization', 'Bearer ' + (this.token || ''));
    }
    return next.handle(req.clone({headers}));
  }

  private needsAuthToken(req: HttpRequest<any>): boolean {
    if (req.headers.has('Authorization')) {
      return false;
    }
    if (
      req.url.includes('/auth/login') ||
      req.url.includes('/auth/register')
    ) {
      return false;
    }
    return true;
  }
}
