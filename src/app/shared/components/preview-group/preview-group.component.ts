import { Component, Input, OnInit } from '@angular/core';
import { GroupService } from 'core/services';
import { catchError, first } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'shared/components/confirm-dialog';

@Component({
  selector: 'app-preview-group',
  templateUrl: './preview-group.component.html',
  styleUrls: ['./preview-group.component.scss']
})
export class PreviewGroupComponent implements OnInit {
  @Input()
  group: any;
  @Input()
  isUserAdmin: boolean;

  userActionMenu: string;

  isDisabled: boolean = false;

  constructor(private groupService: GroupService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.userActionMenu = this.getUserActionMenu();
  }

  getUserActionMenu(): string {
    if (this.isUserAdmin) {
      return 'admin';
    } else if (this.group.invited) {
      return 'invite';
    } else if (this.group.participated) {
      return 'participate';
    } else {
      return 'default';
    }
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

  acceptInvite(): void {
    this.groupService.acceptInvite(this.group._id).pipe(
      first()
    ).subscribe(() => {
      this.userActionMenu = 'participate';
      this.group.participants++;
    });
  }

  leaveGroup(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(answer => {
      if (answer) {
        this.groupService.leaveGroup(this.group._id).pipe(
          first()
        ).subscribe(() => {
          this.userActionMenu = 'default';
          this.group.participants--;
        });
      }
    });
  }


}
