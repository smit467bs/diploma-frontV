import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

export const copyFormControl = (control: AbstractControl) => {
  if (control instanceof FormControl) {
    return new FormControl(control.value);
  } else if (control instanceof FormGroup) {
    const copy = new FormGroup({});
    Object.keys(control.controls).forEach(key => {
      copy.addControl(key, copyFormControl(control.controls[key]));
    });
    return copy;
  } else if (control instanceof FormArray) {
    const copy = new FormArray([]);
    control.controls.forEach(contrl => {
      copy.push(copyFormControl(contrl));
    });
    return copy;
  }
};

export const getClasses = (type: string): string => {
  return type.toLocaleLowerCase().split(' ').join('-');
};
