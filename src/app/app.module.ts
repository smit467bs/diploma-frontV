import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './dashboard/app.component';
import { CoreModule } from './core/core.module';
import { APP_INITIALIZER_DEPS, appInitializerFactory } from './app-initializer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      multi: true,
      deps: APP_INITIALIZER_DEPS
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
