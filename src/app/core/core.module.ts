import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header';
import { LoaderComponent } from './components/loader';

@NgModule({
  declarations: [
    HeaderComponent,
    LoaderComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    LoaderComponent,
  ]
})

export class CoreModule {
}
