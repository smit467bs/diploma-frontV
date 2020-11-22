import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Theme } from 'core/models/types';
import { AuthService, Logger } from 'core/services';
import { UserStoreService } from 'core/store/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  theme: Theme;

  @Output()
  changeTheme = new EventEmitter<Theme>();

  constructor(private authService: AuthService,
              private userStoreService: UserStoreService,
              private router: Router,
              private logger: Logger) {
  }

  onChangeTheme() {
    const theme: Theme = this.theme === 'light' ? 'dark' : 'light';
    this.changeTheme.emit(theme);
  }

  logout() {
    this.authService.logout().subscribe(
      () => {
        this.userStoreService.updateToken(null);
        this.userStoreService.loginUser(null);
        this.router.navigate(['/auth']);
      },
      err => {
        this.logger.warn(err);
      }
    );
  }
}
