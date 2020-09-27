import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DisplayType } from '../../../../core/models/types';

@Component({
  selector: 'app-control-panel',
  templateUrl: 'control-panel.component.html',
  styleUrls: ['control-panel.component.scss']
})
export class ControlPanelComponent {
  @Input()
  currentDisplayType: DisplayType;

  @Output()
  changeDisplayType = new EventEmitter<DisplayType>();

  onChangeDisplayType(value: DisplayType) {
    this.changeDisplayType.emit(value);
  }
}
