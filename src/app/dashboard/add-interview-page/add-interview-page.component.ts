import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, first, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { MyErrorStateMatcher } from 'core/matcher/error-state-mathcer';
import { InterviewService } from 'core/services';
import { FormBaseComponent } from 'shared/components/base';

@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview-page.component.html',
  styleUrls: ['./add-interview-page.component.scss']
})
export class AddInterviewPageComponent extends FormBaseComponent{
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder,
              private router: Router,
              private interviewService: InterviewService) {
    super();
    this.form = fb.group({
      label: fb.control('', [Validators.required])
    });
  }

  submitForm(): void {
    this.interviewService.addInterview(this.form.value)
      .pipe(
        first(),
        map(response => {
          this.router.navigate(['./interviews']);
        }),
        catchError(err => {
          console.log('err', err);
          return of(err);
        })
      )
      .subscribe();
  }
}
