import { AttemptModel } from './attempt.model';

export class ActivityModel {
  id: number;
  content: string;
  attempts: AttemptModel;
  student: string;
  time: string;
  skill: string;
  type: string;
}


