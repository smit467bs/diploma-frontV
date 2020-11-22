import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

import { AuthBaseComponent } from '../base';
import { AuthService } from 'core/services';
import { UserStoreService } from 'core/store/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AuthBaseComponent {

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private userStoreService: UserStoreService) {
    super();
    this.form = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', [Validators.required]),
    });
  }

  submitForm(): void {
    this.authService.login(this.form.value)
      .pipe(
        tap((authResponse) => {
          this.userStoreService.loginUser(authResponse);
        }),
        tap(() => {
          this.router.navigate(['./interviews']);
        }),
        catchError(err => {
          console.log('err', err);
          return of(err);
        })
      )
      .subscribe();
  }

}
