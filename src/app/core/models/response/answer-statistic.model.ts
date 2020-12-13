export interface AnswerStatistic {
  question_id: string;
  answers: Array<{
    name: any;
    value: number;
  }>;
}
