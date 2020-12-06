import { Injectable } from '@angular/core';
import { AnswerRepository } from 'core/repositories';
import { Observable } from 'rxjs';
import { AnswerStatistic } from 'core/models/response';

@Injectable({providedIn: 'root'})
export class AnswerService {
  constructor(private answerRepository: AnswerRepository) {
  }

  saveAnswer(body: any): Observable<any> {
    return this.answerRepository.saveAnswer(body);
  }

  getAnswersByInterviewId(interviewId: string): Observable<Array<AnswerStatistic>> {
    return this.answerRepository.getAnswersByInterviewId(interviewId);
  }
}
