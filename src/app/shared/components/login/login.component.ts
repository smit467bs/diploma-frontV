import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MyErrorStateMatcher } from '../../../core/matcher/error-state-mathcer';
import { ActiveAuthSection } from '../../../dashboard/auth-page/auth-page.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  @Input() activeAuthSection: ActiveAuthSection;
  @Output() changeActiveSection = new EventEmitter<ActiveAuthSection>();

  matcher = new MyErrorStateMatcher();

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  onSectionChange() {
    this.changeActiveSection.emit('IN');
  }

  loginUser() {
    console.log(this.userForm.value);
  }

  getControl(controlName: string) {
    return this.userForm.get(controlName);
  }
}
