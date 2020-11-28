import { AbstractControl, FormGroup } from '@angular/forms';

import { FieldErrorStateMatcher } from 'core/validators/error-state-mathcer';
import { CrossFieldErrorStateMatcher } from 'core/validators';

export class FormBaseComponent {
  form: FormGroup;

  matcher = new FieldErrorStateMatcher();
  crossMatcher = new CrossFieldErrorStateMatcher();

  getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName);
  }
}
