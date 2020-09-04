import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  exports: [
    RegisterComponent
  ]
})

export class SharedModule {
}
