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
    return this.http.get<Array<Interview>>(`${environment.apiUrl}/interview`);
  }

  addInterview(body: Interview): Observable<any> {
    return this.http.post(`${environment.apiUrl}/interview`, body);
  }

  getInterviewById(id: string): Observable<Interview> {
    return this.http.get<Interview>(`${environment.apiUrl}/interview/${id}`);
  }
}
