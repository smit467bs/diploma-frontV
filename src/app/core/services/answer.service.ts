import { Injectable } from '@angular/core';
import { AnswerRepository } from 'core/repositories';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AnswerService {
  constructor(private answerRepository: AnswerRepository) {
  }

  saveAnswer(body: any): Observable<any> {
    return this.answerRepository.saveAnswer(body);
  }
}
