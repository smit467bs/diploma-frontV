import { Component } from '@angular/core';

import { AuthSection } from 'core/models/types';

@Component({
  selector: 'app-auth',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {
  activeAuthSection: AuthSection = null;

  onChangeActiveSection(section: AuthSection) {
    this.activeAuthSection = section;
  }
}
