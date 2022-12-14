import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { SharedModule } from 'shared/shared.module';
import { PreviewInterviewsPageComponent } from './preview-interviews-page';
import { AddInterviewPageComponent, QuestionTypeDialogComponent } from './add-interview-page';
import { InterviewPageComponent } from './interview-page';
import { InterviewChartsPageComponent } from './interview-charts-page';
import { ChartsModule } from 'shared/components/charts/charts.module';
import { ChartTypeSelectComponent } from './interview-charts-page/chart-type-select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    PreviewInterviewsPageComponent,
    AddInterviewPageComponent,
    InterviewPageComponent,
    InterviewChartsPageComponent,
    QuestionTypeDialogComponent,
    ChartTypeSelectComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: PreviewInterviewsPageComponent},
      {path: 'add', component: AddInterviewPageComponent},
      {path: 'charts/:id', component: InterviewChartsPageComponent},
      {path: ':id', component: InterviewPageComponent},
    ]),
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ChartsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatListModule
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
