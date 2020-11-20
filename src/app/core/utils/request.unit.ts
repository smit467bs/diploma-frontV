import { isArray, isNil, keys } from 'lodash';

export const prepareDataToSaveAnswers = (formData, interview) => {
  const result =  keys(formData).reduce((acc, dataKey) => ({
    ...acc,
    [dataKey]: isArray(formData[dataKey])
      ? prepareArrayData(formData[dataKey], dataKey, interview)
      : formData[dataKey] || null
  }), {});
  console.log(result);
  return result;
};

const prepareArrayData = (formDataArray: Array<boolean>, key: string, interview): Array<string> => {
  const question = interview.questions.find(({id}) => id === key);
  return formDataArray.map((v, index) => v ? question.options[index] : null).filter(v => !isNil(v));
};
