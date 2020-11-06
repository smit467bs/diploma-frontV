import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MyErrorStateMatcher } from 'core/matcher/error-state-mathcer';

@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview-page.component.html',
  styleUrls: ['./add-interview-page.component.scss']
})
export class AddInterviewPageComponent {
  interviewForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder) {
    this.interviewForm = fb.group({
      label: fb.control('', [Validators.required])
    });
  }

  getControl(controlName: string) {
    return this.interviewForm.get(controlName);
  }

  submitForm(): void {
    console.log(this.interviewForm.value);
  }
}
