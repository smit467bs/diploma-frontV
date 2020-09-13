import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthBaseComponent } from '../../../core/components/auth-base/auth-base.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RegisterComponent extends AuthBaseComponent {

  constructor() {
    super();
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirm_password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      group: new FormControl('')
    });
  }

  submitForm(): void {
    console.log(this.authForm.value);
  }
}
