import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { PreviewInterviewModule } from '../../shared/components/preview-interview-container/preview-interview.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: HomePageComponent}]),
    CommonModule,
    PreviewInterviewModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})

export class HomePageModule {
}
