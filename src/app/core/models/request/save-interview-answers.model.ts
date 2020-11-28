import { Answer } from 'core/models';

export interface SaveInterviewAnswers {
  interview_id: string;
  answers: Array<Answer>;
}
