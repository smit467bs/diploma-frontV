import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { catchError, first, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { isNil } from 'lodash';

import { MyErrorStateMatcher } from 'core/matcher/error-state-mathcer';
import { InterviewService } from 'core/services';
import { FormBaseComponent } from 'shared/components/base';
import { copyFormControl, getClasses } from 'core/utils';
import { QuestionType } from 'core/models/types';
import { QuestionTypeDialogComponent } from './question-type-dialog';

@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview-page.component.html',
  styleUrls: ['./add-interview-page.component.scss']
})
export class AddInterviewPageComponent extends FormBaseComponent {
  matcher = new MyErrorStateMatcher();
  getClasses = getClasses;

  @ViewChild('addInterviewForm') ngForm: NgForm;

  constructor(private fb: FormBuilder,
              private router: Router,
              private interviewService: InterviewService,
              private dialog: MatDialog) {
    super();
    this.form = fb.group({
      label: fb.control('', [Validators.required]),
      questions: fb.array([this.createQuestion(QuestionType.CHOICE_ONE)])
    });
  }

  addQuestion() {
    const dialogRef = this.dialog.open(QuestionTypeDialogComponent);

    dialogRef.afterClosed().subscribe(type => {
      if (!isNil(type)) {
        console.log(this.createQuestion(type));
        this.formQuestions.push(this.createQuestion(type));
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

  createQuestion(type: QuestionType): FormGroup {
    let question: FormGroup;
    switch (type) {
      case QuestionType.CHOICE_ONE:
      case QuestionType.CHOICE_MANY:
      case QuestionType.SELECT_ONE:
        question = this.fb.group({
          type,
          question: '',
          options: this.fb.array([
            this.fb.control(''),
            this.fb.control('')
          ])
        });
        break;
      case QuestionType.TEXT:
      case QuestionType.LONG_TEXT:
        question = this.fb.group({
          type,
          question: ''
        });
        break;
    }
    return question;
  }

  submitForm(): void {
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
