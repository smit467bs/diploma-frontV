import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GroupService } from 'core/services';
import { catchError, first } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'shared/components/confirm-dialog';
import { CommonStoreService } from 'core/store/common';

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

  @Output()
  deleteGroup = new EventEmitter<string>();

  userActionMenu: string;

  isRequestDisabled: boolean = false;
  isDeleteDisabled: boolean = false;

  constructor(private groupService: GroupService,
              private commonStoreService: CommonStoreService,
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
    this.isRequestDisabled = true;
    this.groupService.addCurrentUserTo(this.group._id, {addTo: 'requested'})
      .pipe(
        first(),
        catchError(err => {
          this.isRequestDisabled = false;
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

  onDeleteGroup(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(answer => {
      if (answer) {
        this.isDeleteDisabled = true;
        this.commonStoreService.deleteGroup(this.group._id);
      }
    });

  }


}
