import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegisterComponent
  ]
})

export class SharedModule {
}
