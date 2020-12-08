import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InterviewRepository } from 'core/repositories';
import { Interview } from 'core/models/response';

@Injectable({providedIn: 'root'})
export class InterviewService {
  constructor(private http: HttpClient,
              private interviewRepository: InterviewRepository) {
  }

  getInterviewPreview() {
    return this.interviewRepository.getPreviewInterview();
  }

  addInterview(body: Interview) {
    return this.interviewRepository.addInterview(body);
  }

  getInterviewById(id: string) {
    return this.interviewRepository.getInterviewById(id);
  }
}
