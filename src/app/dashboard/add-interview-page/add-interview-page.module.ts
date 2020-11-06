import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared/shared.module';
import { AddInterviewPageComponent } from './add-interview-page.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AddInterviewPageComponent,
  ],
  imports: [
    RouterModule.forChild([{path: '', component: AddInterviewPageComponent}]),
    CommonModule,
    SharedModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    AddInterviewPageComponent
  ]
})

export class AddInterviewPageModule {
}
