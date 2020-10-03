import { EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MyErrorStateMatcher } from '../../../core/matcher/error-state-mathcer';
import { AuthSection } from '../../../core/models/types';

export class AuthBaseComponent {
  @Input() activeAuthSection: AuthSection;
  @Output() changeActiveSection = new EventEmitter<AuthSection>();

  authForm: FormGroup;

  matcher = new MyErrorStateMatcher();

  onSectionChange(type: AuthSection) {
    this.changeActiveSection.emit(type);
  }

  getControl(controlName: string) {
    return this.authForm.get(controlName);
  }
}
