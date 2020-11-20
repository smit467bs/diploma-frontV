import { isArray, isNil, keys } from 'lodash';

import { Answer } from 'core/models';

export const prepareDataToSaveAnswers = (formData, interview): Array<Answer> => {
  return keys(formData).map((questionId) => ({
    question_id: questionId,
    answer: isArray(formData[questionId])
      ? prepareArrayData(formData[questionId], questionId, interview)
      : formData[questionId] || null
  }));
};

const prepareArrayData = (formDataArray: Array<boolean>, key: string, interview): Array<string> => {
  const question = interview.questions.find(({id}) => id === key);
  return formDataArray.map((v, index) => v ? question.options[index] : null).filter(v => !isNil(v));
};
