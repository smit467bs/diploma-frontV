import { Component, OnInit } from '@angular/core';

import { AuthSection } from 'core/models/types';
import { AuthService } from 'core/services';
import { first, tap } from 'rxjs/operators';
import { UserStoreService } from 'core/store/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  activeAuthSection: AuthSection = null;
  isPageLoaded = false;

  constructor(private authService: AuthService,
              private userStoreService: UserStoreService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.authService.refreshToken()
      .pipe(
        tap((authResponse) => {
          this.userStoreService.loginUser(authResponse);
        }),
        tap(() => {
          this.router.navigate(['./interviews']);
        }),
        first(),
      ).subscribe(() => this.isPageLoaded = true,
      () => this.isPageLoaded = true);
  }

  onChangeActiveSection(section: AuthSection) {
    this.activeAuthSection = section;
  }
}
