export interface Interview {
  // countOfPassed: number;
  // needsCountOfPassed?: number;
  _id: string;
  label: string;
  admin: string;
  managers: Array<string>;
  questions: Array<any>;
  created_at: Date;
  updated_at: Date;
}
