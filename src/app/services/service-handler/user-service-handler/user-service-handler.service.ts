import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../../shared/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceHandlerService {

  private LOAD_USER_EP = 'resources/users';

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<User> {
    return this.http
               .get(this.LOAD_USER_EP + `/?name=${username}`)
               .pipe(map(response => response[0] as User));

  }

  addUser(user: User): Observable<User> {
    return this.http
               .post(this.LOAD_USER_EP, user)
               .pipe(map(response => response[0] as User));

  }
}
