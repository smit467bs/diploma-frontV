import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,

    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    RegisterComponent
  ]
})

export class SharedModule {
}
