import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from 'shared/shared.module';
import { PreviewInterviewsPageComponent } from './preview-interviews-page';
import { AddInterviewPageComponent, QuestionTypeDialogComponent } from './add-interview-page';
import { InterviewPageComponent } from './interview-page';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    PreviewInterviewsPageComponent,
    AddInterviewPageComponent,
    InterviewPageComponent,
    QuestionTypeDialogComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: PreviewInterviewsPageComponent},
      {path: 'add', component: AddInterviewPageComponent},
      {path: ':id', component: InterviewPageComponent}
    ]),
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  entryComponents: [
    QuestionTypeDialogComponent
  ],
  exports: [
    RouterModule
  ]
})
export class InterviewsPageModule {
}
