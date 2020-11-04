import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared/shared.module';
import { AddInterviewPageComponent } from './add-interview-page.component';

@NgModule({
  declarations: [
    AddInterviewPageComponent,
  ],
  imports: [
    RouterModule.forChild([{path: '', component: AddInterviewPageComponent}]),
    CommonModule,
    SharedModule,
  ],
  exports: [
    AddInterviewPageComponent
  ]
})

export class AddInterviewPageModule {
}
