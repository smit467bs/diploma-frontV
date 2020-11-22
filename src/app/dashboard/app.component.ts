import { Component, OnInit } from '@angular/core';
import { Event as RouterEvent, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';

import { UserStoreService } from 'core/store/user';
import { LocalStorageService } from 'core/services';
import { Theme } from 'core/models/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showOverlay: boolean = true;
  theme: Theme = 'light';

  constructor(private router: Router,
              private overlayContainer: OverlayContainer,
              private userStoreService: UserStoreService,
              private localStoreService: LocalStorageService
  ) {
    this.theme = this.localStoreService.getValueFromLocalStorage('theme');
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  ngOnInit(): void {
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    overlayContainerClasses.add(`${this.theme}-theme`, `${this.theme}-theme-background`);
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
    return [!this.hasRoute('auth') ? 'dashboard' : 'auth', `${this.theme}-theme`, `${this.theme}-theme-background`];
  }
}
