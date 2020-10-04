import { Component } from '@angular/core';
import { Event as RouterEvent, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { UserStoreService } from '../core/store/user/user-store.service';
import { Theme } from '../core/models/types';
import { LocalStoreService } from '../core/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  showOverlay: boolean = true;
  theme: Theme = 'light';

  constructor(private router: Router,
              private userStoreService: UserStoreService,
              private localStoreService: LocalStoreService
  ) {
    this.theme = this.localStoreService.getValueFromLocalStorage('theme');
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

  hasRoute(route: string) {
    return window.location.href.includes(route);
  }

  onChangeTheme(theme: Theme) {
    this.localStoreService.storeOnLocalStorage('theme', theme);
    this.theme = theme;
  }

  getClassNames(): Array<string> {
    return [`${this.theme}-theme`, `${this.theme}-theme-background`];
  }
}
