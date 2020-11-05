import { Type } from '@angular/core';

import { UserEffects } from './user';
import { CommonEffects } from './common';

export const effects: Array<Type<any>> = [
  UserEffects,
  CommonEffects
];
