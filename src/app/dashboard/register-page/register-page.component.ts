import { Component } from '@angular/core';
import { UserType } from '../../core/models/enums';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})

export class RegisterPageComponent {
  activeUser: UserType = null;

  // to access in the template
  userType = UserType;


  changeActiveSection(type: UserType) {
    this.activeUser = type;
  }
}
