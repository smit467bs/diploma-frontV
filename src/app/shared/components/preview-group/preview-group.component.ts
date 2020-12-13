import { Component, Input } from '@angular/core';

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
}
