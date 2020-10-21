import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Theme } from 'core/models/types';

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

  onChangeTheme() {
    const theme: Theme = this.theme === 'light' ? 'dark' : 'light';
    this.changeTheme.emit(theme);
  }
}
