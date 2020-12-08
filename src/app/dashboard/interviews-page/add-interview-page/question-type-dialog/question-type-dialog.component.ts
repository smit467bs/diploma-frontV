import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { QuestionType } from 'core/models/questions';

@Component({
  selector: 'question-type-dialog',
  templateUrl: 'question-type-dialog.component.html',
})
export class QuestionTypeDialogComponent {
  options: Array<string> = [];

  constructor(
    public dialogRef: MatDialogRef<QuestionTypeDialogComponent>
  ) {
    this.options = Object.values(QuestionType);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
