import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { HeaderComponent } from './components/header';
import { RegisterComponent } from './components/register';
import { LoginComponent } from './components/login';
import { CoverComponent } from './components/cover';
import { NavbarComponent } from './components/navbar';
import { OverlayLoaderComponent } from './components/overlay-loader';
import { PreviewInterviewComponent } from './components/previrew-interview';
import { ControlPanelComponent } from './components/control-panel';
import { PreviewGroupComponent } from './components/preview-group';
import { ConfirmDialogComponent } from './components/confirm-dialog';

@NgModule({
  declarations: [
    HeaderComponent,
    OverlayLoaderComponent,
    RegisterComponent,
    LoginComponent,
    CoverComponent,
    NavbarComponent,
    PreviewInterviewComponent,
    PreviewGroupComponent,
    ControlPanelComponent,
    ConfirmDialogComponent
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
    MatTooltipModule,
    MatDialogModule,
  ],
  exports: [
    HeaderComponent,
    OverlayLoaderComponent,
    RegisterComponent,
    LoginComponent,
    CoverComponent,
    NavbarComponent,
    PreviewInterviewComponent,
    PreviewGroupComponent,
    ControlPanelComponent,
    ConfirmDialogComponent
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})

export class SharedModule {
}
