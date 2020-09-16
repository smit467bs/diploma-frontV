import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent
  ]
})

export class CoreModule {}
