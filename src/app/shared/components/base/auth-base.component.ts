import { EventEmitter, Input, Output } from '@angular/core';

import { AuthSection } from 'core/models/types';
import { FormBaseComponent } from './form-base.component';

export class AuthBaseComponent extends FormBaseComponent {
  @Input() activeAuthSection: AuthSection;
  @Output() changeActiveSection = new EventEmitter<AuthSection>();

  onSectionChange(type: AuthSection) {
    this.changeActiveSection.emit(type);
  }
}
