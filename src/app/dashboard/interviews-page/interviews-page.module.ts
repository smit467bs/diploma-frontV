import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared/shared.module';
import { InterviewsPageComponent } from './interviews-page.component';
import { PreviewInterviewModule } from 'shared/components/preview-interview-container/preview-interview.module';

@NgModule({
  declarations: [
    InterviewsPageComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: InterviewsPageComponent}
    ]),
    CommonModule,
    PreviewInterviewModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class InterviewsPageModule {
}
