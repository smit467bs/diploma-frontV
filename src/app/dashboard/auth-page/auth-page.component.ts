import { Component } from '@angular/core';

export type ActiveAuthSection = 'IN' | 'UP';

@Component({
  selector: 'app-auth',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})

export class AuthPageComponent {
  activeAuthSection: ActiveAuthSection = null;


  onChangeActiveSection(section: ActiveAuthSection) {
    this.activeAuthSection = section;
  }
}
