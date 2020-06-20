import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivityModel } from '../../../shared/models/class/activity.model';
import { ClassModel } from '../../../shared/models/class/class.model';
import { UserModel } from '../../../shared/models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class ClassServiceHandlerService {

  private LOAD_CLASSES_EP = 'resources/classes';
  private LOAD_ACTIVITIES_EP = 'resources/activities';

  constructor(private http: HttpClient) { }

  getClasses(): Observable<ClassModel[]> {
    return this.http
               .get(this.LOAD_CLASSES_EP)
               .pipe(map(response => response as ClassModel[]));

  }

  getActivities(): Observable<ActivityModel[]> {
    return this.http
               .get(this.LOAD_ACTIVITIES_EP)
               .pipe(map(response => response as ActivityModel[]));

  }
}
