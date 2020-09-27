import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../../shared/shared.module';
import { PreviewInterviewModule } from '../../shared/components/preview-interview-container/preview-interview.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: HomePageComponent}]),
    CommonModule,
    SharedModule,
    PreviewInterviewModule
  ],
  exports: [
    HomePageComponent
  ]
})

export class HomePageModule {
}
