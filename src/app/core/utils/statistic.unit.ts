import { AnswerStatistic, Interview } from 'core/models/response';
import { isChoiceQuestion } from 'core/utils/type-check.util';
import { isArray, isEmpty, isString, sum } from 'lodash';

export const checkInterviewStatistic = (interview: Interview, statistic: Array<AnswerStatistic>): Array<AnswerStatistic> => {
  return interview.questions.reduce((acc, question) => {
    if (isChoiceQuestion(question)) {
      const questionStatistic = statistic.find(({question_id}) => question_id === question.id);
      const options = question.options;

      const answers = [];
      options.forEach((option => {
        const filteredSelectedOption = questionStatistic.answers.filter(({name}) => {
          if (isString(name) && name === option) {
            return true;
          }
          if (isArray(name) && name.includes(option)) {
            return true;
          }
        });

        const sumOfValue = isEmpty(filteredSelectedOption) ? 0 : sum(filteredSelectedOption.map(({value}) => value));
        answers.push({
          name: option,
          value: sumOfValue
        });

      }));

      acc.push({
        question_id: question.id,
        answers
      });
    } else {
      const questionStatistic = statistic.find(({question_id}) => question_id === question.id);
      acc.push(questionStatistic);
    }
    return acc;
  }, []);
};
