import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GroupsPageComponent } from './groups-page.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  declarations: [
    GroupsPageComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: GroupsPageComponent}]),
    CommonModule,
    MatButtonModule,
    SharedModule,
  ],
  exports: [
    GroupsPageComponent
  ]
})

export class GroupsPageModule {
}
