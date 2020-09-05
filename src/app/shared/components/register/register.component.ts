import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MyErrorStateMatcher } from '../../../core/matcher/error-state-mathcer';
import { UserType } from '../../../core/models/enums';
import { changed } from '../../../core/utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RegisterComponent implements OnChanges {
  userType = UserType;

  @Input()
  type: UserType;

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required])
  });

  matcher = new MyErrorStateMatcher();

  ngOnChanges(changes: SimpleChanges): void {
    const type = changed(changes, 'type');
    if (type === UserType.student) {
      this.userForm.addControl('group', new FormControl(''));
    } else {
      this.userForm.removeControl('group');
    }
    console.log(type);
  }

  createUser(): void {
    console.log(this.userForm.value);
  }

  getControl(controlName: string) {
    return this.userForm.get(controlName);
  }
}
