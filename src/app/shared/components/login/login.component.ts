import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthBaseComponent } from '../../../core/components/auth-base/auth-base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent extends AuthBaseComponent {

  constructor(private fb: FormBuilder) {
    super();
    this.authForm = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', [Validators.required]),
    });
  }

  submitForm(): void {
    console.log(this.authForm.value);
  }

}
