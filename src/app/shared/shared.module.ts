import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './components/header';
import { RegisterComponent } from './components/register';
import { LoginComponent } from './components/login';
import { CoverComponent } from './components/cover';
import { NavbarComponent } from './components/navbar';
import { OverlayLoaderComponent } from './components/overlay-loader';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    OverlayLoaderComponent,
    RegisterComponent,
    LoginComponent,
    CoverComponent,
    NavbarComponent
  ],
    imports: [
        CommonModule,

        FormsModule,
        ReactiveFormsModule,

        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        RouterModule,
    ],
  exports: [
    HeaderComponent,
    OverlayLoaderComponent,
    RegisterComponent,
    LoginComponent,
    CoverComponent,
    NavbarComponent
  ]
})

export class SharedModule {
}
