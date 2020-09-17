import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HeaderComponent } from './components/header';
import { OverlayLoaderComponent } from './components/overlay-loader';
import { reducers } from './store/reducers';
import { effects } from './store/effects';

@NgModule({
  declarations: [
    HeaderComponent,
    OverlayLoaderComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)
  ],
  exports: [
    HeaderComponent,
    OverlayLoaderComponent,
  ]
})

export class CoreModule {}
