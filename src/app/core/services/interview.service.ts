import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Interview } from 'core/store/common/models';

@Injectable({providedIn: 'root'})
export class InterviewService {
  constructor(private http: HttpClient) {
  }

  getInterviewPreview(): Observable<Array<Interview>> {
    console.log(environment.apiUrl);
    return this.http.get<Array<Interview>>(`${environment.apiUrl}/interview`);
  }

}
