import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { catchError, first, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { isNil } from 'lodash';

import { MyErrorStateMatcher } from 'core/matcher/error-state-mathcer';
import { InterviewService } from 'core/services';
import { FormBaseComponent } from 'shared/components/base';
import { copyFormControl } from 'core/utils';
import { QuestionType } from 'core/models/types';
import { QuestionTypeDialogComponent } from './question-type-dialog';

@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview-page.component.html',
  styleUrls: ['./add-interview-page.component.scss']
})
export class AddInterviewPageComponent extends FormBaseComponent {
  matcher = new MyErrorStateMatcher();

  questionType = QuestionType;

  constructor(private fb: FormBuilder,
              private router: Router,
              private interviewService: InterviewService,
              private dialog: MatDialog) {
    super();
    this.form = fb.group({
      label: fb.control('', [Validators.required]),
      questions: fb.array([this.createItem('CHOICE_ONE')])
    });
  }

  addQuestion() {
    const dialogRef = this.dialog.open(QuestionTypeDialogComponent);

    dialogRef.afterClosed().subscribe(type => {
      if (!isNil(type)) {
        this.formQuestions.push(this.createItem(type));
      }
    });

  }

  addOption(questionControl: AbstractControl): void {
    const options = questionControl.get('options') as FormArray;
    options.push(this.fb.control(''));
  }

  cloneQuestion(questionControl: AbstractControl) {
    const control = copyFormControl(questionControl);
    this.formQuestions.push(control);
  }

  removeQuestion(index: number) {
    this.formQuestions.removeAt(index);
  }

  removeOption(questionControl: AbstractControl, optionIndex: number): void {
    const options = questionControl.get('options') as FormArray;
    options.removeAt(optionIndex);
  }

  createItem(type: string): FormGroup {
    return this.fb.group({
      type,
      question: '',
      options: this.fb.array([
        this.fb.control(''),
        this.fb.control('')
      ])
    });
  }

  submitForm(): void {
    // console.log(this.form);
    // console.log(this.form.value);
    this.interviewService.addInterview(this.form.value)
      .pipe(
        first(),
        map(() => {
          this.router.navigate(['./interviews']);
        }),
        catchError(err => {
          console.log('err', err);
          return of(err);
        })
      )
      .subscribe();
  }

  get formQuestions(): FormArray {
    return this.form.get('questions') as FormArray;
  }
}
