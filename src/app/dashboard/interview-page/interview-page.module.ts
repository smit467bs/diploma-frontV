import { NgModule } from '@angular/core';

import { InterviewPageComponent } from './interview-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    InterviewPageComponent
  ],
  imports: [
    RouterModule.forChild([{
      path: '', component: InterviewPageComponent
    }])
  ],
  exports: [
    RouterModule
  ]
})
export class InterviewPageModule {
}
