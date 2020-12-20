import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { getRouteParam$ } from 'core/utils';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GroupService, UsersService } from 'core/services';
import { first, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'edit-group-page',
  templateUrl: './edit-group-page.component.html',
  styleUrls: ['./edit-group-page.component.scss']
})
export class EditGroupPageComponent implements OnInit {
  @ViewChild('invite') inviteField: ElementRef;

  id$: Observable<string>;

  inviteError: string;

  group: any;

  tabs: Array<string> = ['Invited', 'Participants', 'Requested'];
  activeTab: string = 'Invited';

  constructor(private activatedRoute: ActivatedRoute,
              private groupService: GroupService,
              private usersService: UsersService) {
    this.id$ = getRouteParam$(this.activatedRoute, 'id');
  }

  ngOnInit(): void {
    this.id$.pipe(
      switchMap(id => this.groupService.getGroupById(id)),
      tap(group => this.group = group)
    ).subscribe();
  }

  inviteUser(email: string) {
    this.id$.pipe(
      switchMap(id => {
        return this.groupService.inviteUser(id, {email});
      }),
      first()
    ).subscribe(user => {
      this.group.invited.push(user);
      this.inviteField.nativeElement.value = '';
    }, ({error}) => {
      this.inviteError = error.error.message;
    });
  }

  activeTabChange(tab: string): void {
    this.activeTab = tab;
  }
}
