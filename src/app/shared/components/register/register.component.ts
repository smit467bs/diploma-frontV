import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { AuthBaseComponent } from '../base';
import { AuthService } from 'core/services';
import { UserStoreService } from 'core/store/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RegisterComponent extends AuthBaseComponent {
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private userStoreService: UserStoreService,
              private router: Router) {
    super();
    this.form = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
      first_name: fb.control('', [Validators.required]),
      surname: fb.control('', [Validators.required]),
      password: fb.control('', [Validators.required, Validators.minLength(8)]),
      confirm_password: fb.control('', [Validators.required, Validators.minLength(8)]),
      displayed_name: fb.control('')
    });
  }

  submitForm(): void {
    this.authService.register(this.form.value)
      .pipe(
        tap((authResponse) => {
          this.userStoreService.loginUser(authResponse);
        }),
        tap(() => {
          this.router.navigate(['./interviews']);
        }),
      )
      .subscribe();
    console.log(this.form.value);
  }
}
