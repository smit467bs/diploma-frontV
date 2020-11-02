import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class InterviewService {
  constructor(private http: HttpClient) {
  }

  getInterviewPreview(): Observable<any> {
    console.log(environment.apiUrl);
    return this.http.get(`${environment.apiUrl}/interview`);
  }

}
