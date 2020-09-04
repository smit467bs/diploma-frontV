import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RegisterPageComponent } from './register-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: RegisterPageComponent}]),
    SharedModule
  ],
  exports: [
    RegisterPageComponent
  ]
})

export class RegisterPageModule {}
