import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { getRouteParam$ } from 'core/utils';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
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
  render$ = new BehaviorSubject(0);
  inviteError: string;

  group: any;
  currentUserAction: string = null;

  tabs: Array<string> = ['Invited', 'Participants', 'Requested'];
  activeTab: string = 'Invited';

  constructor(private activatedRoute: ActivatedRoute,
              private groupService: GroupService,
              private usersService: UsersService) {
    this.id$ = getRouteParam$(this.activatedRoute, 'id');
  }

  ngOnInit(): void {
    combineLatest([this.id$, this.render$]).pipe(
      switchMap(([id]) => this.groupService.getGroupById(id)),
      tap(group => {
        this.group = group;
        this.currentUserAction = null;
      })
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

  removeUser(userId: string): void {
    this.currentUserAction = userId;
    this.id$.pipe(
      switchMap(id => {
        return this.groupService.removeUserFrom(id, {userId, removeFrom: this.activeTab.toLowerCase()});
      }),
      first()
    ).subscribe(() => {
      this.render$.next(this.render$.getValue() + 1);
    });
  }
}
