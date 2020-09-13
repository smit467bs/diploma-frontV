import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login';
import { CoverComponent } from './components/cover';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    CoverComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,

    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    CoverComponent
  ]
})

export class SharedModule {
}
