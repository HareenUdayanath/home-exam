import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from '../../../shared/models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceHandlerService {

  private LOAD_USER_EP = 'resources/users'; // refers to in-memory-web-api data source

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<UserModel> {
    return this.http
               .get(this.LOAD_USER_EP + `/?name=${username}`)
               .pipe(map(response => response[0] as UserModel));

  }

  addUser(user: UserModel): Observable<UserModel> {
    return this.http
               .post(this.LOAD_USER_EP, user)
               .pipe(map(response => response[0] as UserModel));

  }
}
