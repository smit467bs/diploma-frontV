import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { AnswerStatistic } from 'core/models/response';

@Injectable({providedIn: 'root'})
export class AnswerRepository {
  routeGroup = 'answers';

  constructor(private http: HttpClient) {
  }

  saveAnswer(body: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/${this.routeGroup}`, body);
  }

  getAnswersByInterviewId(interviewId: string): Observable<Array<AnswerStatistic>> {
    return this.http.get<Array<AnswerStatistic>>(`${environment.apiUrl}/${this.routeGroup}/${interviewId}`);
  }
}
