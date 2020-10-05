import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { InterviewPageComponent } from './interview-page.component';
import { PreviewInterviewModule } from '../../shared/components/preview-interview-container/preview-interview.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    InterviewPageComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: InterviewPageComponent}]),
    CommonModule,
    PreviewInterviewModule,
    SharedModule
  ],
  exports: [
    InterviewPageComponent
  ]
})

export class InterviewPageModule {
}
