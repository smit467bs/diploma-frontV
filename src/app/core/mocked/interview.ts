import { Interview } from '../models';

export const mockedInterviews: Array<Interview> = [{
  id: 1,
  title: 'first interview',
  countOfPassed: 10,
  createdDate: new Date()
}, {
  id: 2,
  title: 'second interview',
  countOfPassed: 23,
  createdDate: new Date()
}, {
  id: 3,
  title: 'third interview',
  countOfPassed: 51,
  createdDate: new Date()
}, {
  id: 4,
  title: 'fourth interview',
  countOfPassed: 21,
  createdDate: new Date()
}];
