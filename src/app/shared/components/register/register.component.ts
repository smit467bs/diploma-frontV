import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthBaseComponent } from '../../../core/components/auth-base/auth-base.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RegisterComponent extends AuthBaseComponent {

  constructor(private fb: FormBuilder) {
    super();
    this.authForm = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
      firstName: fb.control('', [Validators.required]),
      surname: fb.control('', [Validators.required]),
      password: fb.control('', [Validators.required, Validators.minLength(8)]),
      confirm_password: fb.control('', [Validators.required, Validators.minLength(8)]),
      group: fb.control('')
    });
  }

  submitForm(): void {
    console.log(this.authForm.value);
  }
}
