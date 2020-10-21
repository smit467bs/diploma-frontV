import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GroupsPageComponent } from './groups-page.component';

@NgModule({
  declarations: [
    GroupsPageComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: GroupsPageComponent}]),
    CommonModule,
  ],
  exports: [
    GroupsPageComponent
  ]
})

export class GroupsPageModule {
}
