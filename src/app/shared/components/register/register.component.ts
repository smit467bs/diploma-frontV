import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MyErrorStateMatcher } from '../../../core/matcher/error-state-mathcer';
import { ActiveAuthSection } from '../../../dashboard/auth-page/auth-page.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RegisterComponent {
  @Input() activeAuthSection: ActiveAuthSection;
  @Output() changeActiveSection = new EventEmitter<ActiveAuthSection>();

  matcher = new MyErrorStateMatcher();

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirm_password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    group: new FormControl('')
  });

  onSectionChange() {
    this.changeActiveSection.emit('UP');
  }

  createUser(): void {
    console.log(this.userForm.value);
  }

  getControl(controlName: string) {
    return this.userForm.get(controlName);
  }
}
