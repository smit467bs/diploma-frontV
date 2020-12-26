import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { getRouteParam$ } from 'core/utils';
import { GroupService } from 'core/services';

@Component({
  selector: 'app-group-page',
  templateUrl: 'group-page.component.html',
  styleUrls: ['./group-page.component.scss']
})
export class GroupPageComponent implements OnInit {
  id$: Observable<string>;

  loading: boolean = true;
  errorMessage: string = null;
  group: any;

  constructor(private activatedRoute: ActivatedRoute,
              private groupService: GroupService) {
    this.id$ = getRouteParam$(this.activatedRoute, 'id');
  }

  ngOnInit() {
    this.id$.pipe(
      switchMap(id => this.groupService.getGroupById(id)),
    ).subscribe(group => {
      this.group = group;
      this.loading = false;
    }, ({error}) => {
      this.errorMessage = error.error.message;
      this.loading = false;
    });
  }

}
