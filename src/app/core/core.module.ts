import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HeaderComponent } from './components/header';
import { LoaderComponent } from './components/loader';
import { reducers } from './store/reducers';
import { effects } from './store/effects';

@NgModule({
  declarations: [
    HeaderComponent,
    LoaderComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)
  ],
  exports: [
    HeaderComponent,
    LoaderComponent,
  ]
})

export class CoreModule {}
