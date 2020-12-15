import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, first, switchMap, tap } from 'rxjs/operators';

import { getRouteParam$ } from 'core/utils';
import { GroupService, UsersService } from 'core/services';
import { UserInfo } from 'core/store/user/models';

@Component({
  selector: 'app-group-page',
  templateUrl: 'group-page.component.html',
  styleUrls: ['./group-page.component.scss']
})
export class GroupPageComponent implements OnInit {
  @ViewChild('invite') inviteField: ElementRef;
  id$: Observable<string>;

  group: any;
  invitedUsers: Array<UserInfo> = [];

  constructor(private activatedRoute: ActivatedRoute,
              private groupService: GroupService,
              private usersService: UsersService) {
    this.id$ = getRouteParam$(this.activatedRoute, 'id');
  }

  ngOnInit() {
    this.id$.pipe(
      switchMap(id => this.groupService.getGroupById(id)),
      tap(group => this.group = group)
    ).subscribe();
  }

  inviteUser(email: string) {
    console.log(email);
    this.usersService.findUserByEmail(email).pipe(
      first(),
      tap((userInfo) => {
        this.invitedUsers.push(userInfo);
        this.inviteField.nativeElement.value = '';
      }),
      catchError(err => {
        console.log(email);
        return err;
      })
    ).subscribe();
  }

}
