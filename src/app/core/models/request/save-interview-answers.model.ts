import { Answer } from 'core/models';

export interface SaveInterviewAnswers {
  user_id: string;
  interview_id: string;
  answers: Array<Answer>;
}
