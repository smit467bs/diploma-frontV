import { ChoiceQuestion, Question } from 'core/models/questions';

export const isChoiceQuestion = (question: Question): question is ChoiceQuestion => {
  return (question as ChoiceQuestion).options !== undefined;
};
