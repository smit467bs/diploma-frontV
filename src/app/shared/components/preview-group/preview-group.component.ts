import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-preview-group',
  templateUrl: './preview-group.component.html',
  styleUrls: ['./preview-group.component.scss']
})
export class PreviewGroupComponent {
  @Input()
  group: any;
  @Input()
  isUserAdmin: boolean;
  @Output()
  requestToJoin = new EventEmitter<string>();

  requestJoinToGroup(): void {
    this.requestToJoin.emit(this.group._id);
  }
}
