import { AbstractControl, FormGroup } from '@angular/forms';

import { MyErrorStateMatcher } from 'core/matcher/error-state-mathcer';

export class FormBaseComponent {
  form: FormGroup;

  matcher = new MyErrorStateMatcher();

  getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName);
  }
}
