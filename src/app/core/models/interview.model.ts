export interface Interview {
  id: number;
  title: string;
  countOfPassed: number;
  needsCountOfPassed?: number;
  createdDate: Date;
}
