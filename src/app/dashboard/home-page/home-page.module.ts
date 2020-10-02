import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../../shared/shared.module';
import { PreviewInterviewModule } from '../../shared/components/preview-interview-container/preview-interview.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: HomePageComponent}]),
    CommonModule,
    SharedModule,
    PreviewInterviewModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    HomePageComponent
  ]
})

export class HomePageModule {
}
