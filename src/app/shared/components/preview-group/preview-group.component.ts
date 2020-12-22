import { Component, Input } from '@angular/core';
import { GroupService } from 'core/services';
import { catchError, first } from 'rxjs/operators';

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

  isDisabled: boolean = false;

  constructor(private groupService: GroupService) {
  }

  requestJoinToGroup(): void {
    this.isDisabled = true;
    this.groupService.addCurrentUserTo(this.group._id, {addTo: 'requested'})
      .pipe(
        first(),
        catchError(err => {
          this.isDisabled = false;
          return err;
        })
      )
      .subscribe();
  }
}
