import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import { isEmpty, isNil } from 'lodash';

import { FieldErrorStateMatcher } from 'core/validators/error-state-mathcer';
import { GroupService, InterviewService } from 'core/services';
import { FormBaseComponent } from 'shared/components/base';
import { copyFormControl, getClasses } from 'core/utils';
import { QuestionType } from 'core/models/questions';
import { QuestionTypeDialogComponent } from './question-type-dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview-page.component.html',
  styleUrls: ['./add-interview-page.component.scss']
})
export class AddInterviewPageComponent extends FormBaseComponent {
  matcher = new FieldErrorStateMatcher();
  getClasses = getClasses;

  interviewSettings: any;
  isPrivateInterview: boolean;
  privateType: string = 'group';
  groups: Array<any> = null;
  selectedGroup: string = null;
  invitedUsers: Array<string> = [];


  @ViewChild('addInterviewForm') ngForm: NgForm;

  constructor(private fb: FormBuilder,
              private router: Router,
              private dialog: MatDialog,
              private interviewService: InterviewService,
              private groupService: GroupService,
              private snackBar: MatSnackBar
  ) {
    super();
    this.form = fb.group({
      label: fb.control('', [Validators.required]),
      questions: fb.array([this.createQuestion(QuestionType.CHOICE_ONE)])
    });
  }

  addQuestion(): void {
    const dialogRef = this.dialog.open(QuestionTypeDialogComponent);

    dialogRef.afterClosed().subscribe(type => {
      if (!isNil(type)) {
        this.formQuestions.push(this.createQuestion(type));
      }
    });

  }

  addOption(questionControl: AbstractControl): void {
    const options = questionControl.get('options') as FormArray;
    options.push(this.fb.control(''));
  }

  cloneQuestion(questionControl: AbstractControl): void {
    const control = copyFormControl(questionControl);
    this.formQuestions.push(control);
  }

  removeQuestion(index: number): void {
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
          label: '',
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
          label: ''
        });
        break;
    }
    return question;
  }

  privateChange(value: boolean): void {
    this.isPrivateInterview = value;
    if (isNil(this.groups)) {
      this.groupService.getAvailableGroupsForUser().pipe(
        first()
      ).subscribe(groups => this.groups = groups);
    }
  }

  privateTypeChange(value: string): void {
    this.privateType = value;
  }

  validateInterview(): boolean {
    if (this.isPrivateInterview) {
      if (this.privateType === 'group' && isNil(this.selectedGroup)) {
        this.showStackBar('You must select a group');
        return false;
      } else {
        this.interviewSettings = {
          is_public_interview: false,
          assigned_to_group: this.selectedGroup
        };
      }
      if (this.privateType === 'email' && isEmpty(this.invitedUsers)) {
        this.showStackBar('You must add at least one user');
        return false;
      } else {
        this.interviewSettings = {
          is_public_interview: false,
          assigned_to_group: this.selectedGroup
        };
      }
      return true;
    } else {
      this.interviewSettings = {
        is_public_interview: true
      };
      return true;
    }
  }

  submitForm(): void {
    if (this.validateInterview()) {
      const body = {
        ...this.interviewSettings,
        ...this.form.value
      };
      this.interviewService.addInterview(body)
        .pipe(
          first(),
        )
        .subscribe(() => {
          this.router.navigate(['./interviews']);
        }, err => {
          console.log(err);
          this.showStackBar(err);
        });
    }
  }

  showStackBar(message: string): void {
    this.snackBar.open(message, 'hide', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 15000,
    });
  }

  isEmpty<T>(value: Array<T>): boolean {
    return isEmpty(value);
  }

  get formQuestions(): FormArray {
    return this.form.get('questions') as FormArray;
  }
}
