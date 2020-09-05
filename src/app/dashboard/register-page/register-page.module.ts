import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RegisterPageComponent } from './register-page.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: RegisterPageComponent}]),
    SharedModule,
    CommonModule
  ],
  exports: [
    RegisterPageComponent
  ]
})

export class RegisterPageModule {}
