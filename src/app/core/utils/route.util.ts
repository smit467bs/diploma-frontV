import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export const getRouteParam$ = (activatedRoute: ActivatedRoute, param: string): Observable<string> => {
  return activatedRoute.paramMap.pipe(
    map(paramMap => paramMap.get(param) || null),
  );
};
