import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AuthSection } from '../../../core/models/types';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})

export class CoverComponent {
  @Input()
  text: string;

  @Input()
  section: AuthSection;

  @Output()
  sectionChange = new EventEmitter();

  onSectionChange() {
    this.sectionChange.emit(this.section);
  }
}
