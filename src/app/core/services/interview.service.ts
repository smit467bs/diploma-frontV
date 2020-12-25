import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Interview, PreviewInterview } from 'core/models/response';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class InterviewService {
  route = 'interviews';

  constructor(private http: HttpClient) {
  }

  getInterviewPreview(): Observable<Array<PreviewInterview>> {
    return this.http.get<Array<PreviewInterview>>(`${environment.apiUrl}/${this.route}/preview`);
  }

  addInterview(body: any): Observable<Interview> {
    return this.http.post<Interview>(`${environment.apiUrl}/${this.route}`, body);
  }

  getInterviewById(id: string): Observable<Interview> {
    return this.http.get<Interview>(`${environment.apiUrl}/${this.route}/${id}`);
  }
}
