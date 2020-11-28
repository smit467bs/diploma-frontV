import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
  static passwordShouldMatch(control: AbstractControl) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirm_password').value;
    if (password !== confirmPassword) {
      return {passwordShouldMatch: true};
    }
    return null;
  }
}
