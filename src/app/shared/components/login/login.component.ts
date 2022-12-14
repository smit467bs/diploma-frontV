import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
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
  hidePassword = true;
  errorMessage: string;

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
      )
      .subscribe(
        () => {
          this.router.navigate(['./interviews']);
        },
        (err => {
          console.log(err);
          if (err.status === 403){
            this.errorMessage = 'Invalid login or password';
          } else{
            this.errorMessage = err.message;
          }
        })
      );
  }

}
