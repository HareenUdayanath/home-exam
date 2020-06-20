import { Injectable } from '@angular/core';
import { ActivityModel } from '../../../shared/models/class/activity.model';
import { AttemptResultModel } from '../../../shared/models/class/attempt-result.model';
import { LevelColorCode } from '../../../shared/models/constant';

@Injectable({
  providedIn: 'root'
})
export class ResultCalculationHelperService {

  constructor() { }

  /**
   * Map whole activity result with several attempts into array of attempt results
   * @param activity
   */
  public getResultsFromActivity(activity: ActivityModel): Array<AttemptResultModel> {
    if (!activity || !activity.attempts) {
      return [];
    }
    return activity.attempts.weeks.map((weak, index) => {
      const attemptResult = new AttemptResultModel();
      attemptResult.date = weak;
      attemptResult.result = activity.attempts.values[index];
      attemptResult.content = activity.content;
      attemptResult.student = activity.student;
      attemptResult.skill = activity.skill;
      attemptResult.type = activity.type;
      attemptResult.time = activity.time;
      attemptResult.color = this.getLevelColor(attemptResult.result);
      return attemptResult;
    });

  }

  /**
   * Return the color code according to marks
   * @param result
   */
  public getLevelColor(result: number): string {
    switch (true) {
      case (result < 60):
        return LevelColorCode.WEAK;
      case (result < 80):
        return LevelColorCode.OK;
      case (result < 90):
        return LevelColorCode.GOOD;
      default:
        return LevelColorCode.EXCELLENT;
    }
  }

  public getSummary() {

  }

}
