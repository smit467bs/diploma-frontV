import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { InterviewsPageComponent } from 'src/app/dashboard/interviews-page/interviews-page.component';
import { PreviewInterviewModule } from 'shared/components/preview-interview-container/preview-interview.module';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  declarations: [
    InterviewsPageComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: InterviewsPageComponent}]),
    CommonModule,
    PreviewInterviewModule,
    SharedModule
  ],
  exports: [
    InterviewsPageComponent
  ]
})

export class InterviewsPageModule {
}
