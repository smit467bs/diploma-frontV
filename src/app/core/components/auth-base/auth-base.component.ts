import { EventEmitter, Input, Output } from '@angular/core';
import { ActiveAuthSection } from '../../../dashboard/auth-page/auth-page.component';
import { MyErrorStateMatcher } from '../../matcher/error-state-mathcer';
import { FormGroup } from '@angular/forms';

export class AuthBaseComponent {
  @Input() activeAuthSection: ActiveAuthSection;
  @Output() changeActiveSection = new EventEmitter<ActiveAuthSection>();

  authForm: FormGroup;

  matcher = new MyErrorStateMatcher();

  onSectionChange(type: ActiveAuthSection) {
    this.changeActiveSection.emit(type);
  }

  getControl(controlName: string) {
    return this.authForm.get(controlName);
  }
}
