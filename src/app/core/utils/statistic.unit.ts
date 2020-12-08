import { AnswerStatistic, Interview } from 'core/models/response';
import { isChoiceQuestion } from 'core/utils/type-check.util';

export const checkInterviewStatistic = (interview: Interview, statistic: Array<AnswerStatistic>): Array<AnswerStatistic> => {
  return interview.questions.reduce((acc, question) => {
    const questionStatistic = statistic.find(({question_id}) => question_id === question.id);
    const choiceOptions = questionStatistic.answers.map(({name}) => name);
    const options = isChoiceQuestion(question) ? question.options : [];
    options.forEach(option => {
      if (!choiceOptions.includes(option)) {
        questionStatistic.answers.push({
          name: option,
          value: 0
        });
      }
    });
    acc.push(questionStatistic);
    return acc;
  }, []);
};
