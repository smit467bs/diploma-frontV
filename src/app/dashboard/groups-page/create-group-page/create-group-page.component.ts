import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { FormBaseComponent } from 'shared/components/base';
import { FieldErrorStateMatcher } from 'core/validators';
import { first, map } from 'rxjs/operators';
import { GroupService } from 'core/services';

@Component({
  selector: 'app-create-group-page',
  templateUrl: './create-group-page.component.html',
  styleUrls: ['./create-group-page.component.scss']
})
export class CreateGroupPageComponent extends FormBaseComponent {
  matcher = new FieldErrorStateMatcher();

  constructor(private fb: FormBuilder,
              private router: Router,
              private groupService: GroupService) {
    super();
    this.form = fb.group({
      label: fb.control('', [Validators.required]),
    });
  }


  submitForm(): void {
    this.groupService.createGroup(this.form.value)
      .pipe(
        first(),
        map(() => {
          this.router.navigate(['./groups']);
        }),
      )
      .subscribe();
  }

}
