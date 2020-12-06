export interface AnswerStatistic {
  question_id: string;
  answers: Array<{
    name: string;
    value: number;
  }>;
}
