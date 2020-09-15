import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: HomePageComponent}]),
    CommonModule,
  ],
  exports: [
    HomePageComponent
  ]
})

export class HomePageModule {
}
