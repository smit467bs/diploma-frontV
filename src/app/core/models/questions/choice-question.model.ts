import { QuestionType } from './question-type.enum';

export interface ChoiceQuestion {
  id?: string;
  label: string;
  options: Array<string>;
  type: QuestionType;
}
