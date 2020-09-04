import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RegisterPageComponent } from './register-page.component';

@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: RegisterPageComponent}]),
  ],
  exports: [
    RegisterPageComponent
  ]
})

export class RegisterPageModule {}
