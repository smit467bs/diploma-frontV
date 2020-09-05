import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { MyErrorStateMatcher } from '../../../core/matcher/error-state-mathcer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
}
