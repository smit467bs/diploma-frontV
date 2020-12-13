import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from 'shared/shared.module';
import { PreviewGroupsPageComponent } from './preview-groups-page';
import { CreateGroupPageComponent } from './create-group-page';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PreviewGroupsPageComponent,
    CreateGroupPageComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: PreviewGroupsPageComponent},
      {path: 'create', component: CreateGroupPageComponent}
    ]),
    CommonModule,
    MatButtonModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [
    PreviewGroupsPageComponent,
    CreateGroupPageComponent
  ]
})

export class GroupsPageModule {
}
