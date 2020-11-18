import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { QuestionType } from 'core/models/types';

@Component({
  selector: 'question-type-dialog',
  templateUrl: 'question-type-dialog.component.html',
})
export class QuestionTypeDialogComponent {
  options: Array<Array<string>> = [];

  constructor(
    public dialogRef: MatDialogRef<QuestionTypeDialogComponent>
  ) {
    this.options = Object.entries(QuestionType);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
