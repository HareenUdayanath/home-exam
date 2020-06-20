import { Injectable } from '@angular/core';
import { BarChartElement } from '../../../shared/components/bar-chart/bar-chart-element.model';
import { ActivityModel } from '../../../shared/models/class/activity.model';
import { AttemptResultModel } from '../../../shared/models/class/attempt-result.model';
import { Level, LevelColorCode } from '../../../shared/models/constant';

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
      attemptResult.date = this.getDate(weak);
      attemptResult.result = activity.attempts.values[index];
      attemptResult.content = activity.content;
      attemptResult.student = activity.student;
      attemptResult.skill = activity.skill;
      attemptResult.type = activity.type;
      attemptResult.time = activity.time;
      attemptResult.color = this.getLevelColor(attemptResult.result);
      attemptResult.level = this.getLevel(attemptResult.result);
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

  public getLevel(result: number): string {
    switch (true) {
      case (result < 60):
        return Level.WEAK;
      case (result < 80):
        return Level.OK;
      case (result < 90):
        return Level.GOOD;
      default:
        return Level.EXCELLENT;
    }
  }

  public getSummary(results: Array<AttemptResultModel>): Array<BarChartElement> {
    const summary = [];

    if (results) {
      const levelMap = new Map<string, BarChartElement>();
      let total = 0;

      results.forEach(result => {
        if (!levelMap.has(result.level)) {
          const element = new BarChartElement();
          element.title = result.level;
          element.color = result.color;
          element.width = 0;
          element.count = 0;
          levelMap.set(result.level, element);
        }
        levelMap.get(result.level).count = levelMap.get(result.level).count + 1;
        total = total + 1;
      });

      levelMap.forEach((value, key) => {
        value.percentage = Number(((value.count / total) * 100).toFixed(2));
        summary.push(value);
      });
    }
    return summary;
  }

  private getDate(date: string) {
    const tempArr = date.split('/');
    tempArr[2] = '20' + tempArr[2];
    return tempArr.join('/');
  }

}
