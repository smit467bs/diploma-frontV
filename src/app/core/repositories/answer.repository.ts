import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class AnswerRepository {
  constructor(private http: HttpClient) {
  }

  saveAnswer(body: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/answers`, body);
  }
}
