import { ChoiceQuestion } from './choice-question.model';
import { TextQuestion } from './text-question.model';

export type Question = ChoiceQuestion | TextQuestion;
