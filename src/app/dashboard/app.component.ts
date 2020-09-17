import { Component } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { UserStoreService } from '../core/store/user/user-store.service';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  showOverlay: boolean = true;
  isLoaded: boolean = false;

  constructor(private router: Router,
              private userStoreService: UserStoreService
  ) {
    this.userStoreService.appLoadState$.pipe(
      delay(2000),
      map(isLoaded => this.isLoaded = isLoaded)
    ).subscribe();

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = true;
    }
    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
    }
    if (event instanceof NavigationError) {
      this.showOverlay = false;
    }
  }

  isAuthPage(): boolean {
    return this.router.url === '/auth';
  }

}
