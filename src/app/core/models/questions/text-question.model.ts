import { QuestionType } from './question-type.enum';

export interface TextQuestion {
  id?: string;
  label: string;
  type: QuestionType;
}
