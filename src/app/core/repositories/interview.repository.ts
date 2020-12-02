import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { PreviewInterview } from 'core/store/common/models';
import { Interview } from 'core/models/client';

@Injectable({providedIn: 'root'})
export class InterviewRepository {
  route = 'interviews';

  constructor(private http: HttpClient) {
  }

  getPreviewInterview(): Observable<Array<PreviewInterview>> {
    return this.http.get<Array<PreviewInterview>>(`${environment.apiUrl}/${this.route}/preview`);
  }

  addInterview(body: Interview): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${this.route}`, body);
  }

  getInterviewById(id: string): Observable<Interview> {
    return this.http.get<Interview>(`${environment.apiUrl}/${this.route}/${id}`);
  }

}
