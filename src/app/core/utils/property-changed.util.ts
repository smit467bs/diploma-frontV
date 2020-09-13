import { SimpleChanges } from '@angular/core';

export const changed = <T>(changes: SimpleChanges, property: string): T | null =>
  changes[property]
    ? changes[property].currentValue
    : null;
