import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthPageComponent } from './auth-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AuthPageComponent,
  ],
  imports: [
    RouterModule.forChild([{path: '', component: AuthPageComponent}]),
    CommonModule,
    SharedModule,
  ],
  exports: [
    AuthPageComponent
  ]
})

export class AuthPageModule {}
