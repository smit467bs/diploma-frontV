import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

import { SharedModule } from 'shared/shared.module';
import { PreviewGroupsPageComponent } from './preview-groups-page';
import { CreateGroupPageComponent } from './create-group-page';
import { GroupPageComponent } from './group-page';
import { EditGroupPageComponent } from './edit-group-page';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    PreviewGroupsPageComponent,
    CreateGroupPageComponent,
    GroupPageComponent,
    EditGroupPageComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: PreviewGroupsPageComponent},
      {path: 'create', component: CreateGroupPageComponent},
      {path: ':id', component: GroupPageComponent},
      {path: 'edit/:id', component: EditGroupPageComponent}
    ]),
    CommonModule,
    MatButtonModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
    MatTabsModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [
    PreviewGroupsPageComponent,
    CreateGroupPageComponent,
    GroupPageComponent,
    EditGroupPageComponent
  ]
})

export class GroupsPageModule {
}
