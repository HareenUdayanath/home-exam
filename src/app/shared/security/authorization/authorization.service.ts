import { Injectable } from '@angular/core';
import { UserServiceHandlerService } from '../../../services/service-handler/user-service-handler/user-service-handler.service';
import { UserModel } from '../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private userServiceHandler: UserServiceHandlerService) { }

  public signUp(user: UserModel): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.userServiceHandler.getUser(user.name).subscribe(loggedUser => {
        if (loggedUser) {
          reject(new Error('User already exist'));
        } else {
          this.userServiceHandler.addUser(user).subscribe();
          resolve(true);
        }
      });
    });

  }

  public login(username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.userServiceHandler.getUser(username).subscribe(loggedUser => {
        if (loggedUser && loggedUser.password === password) {
          localStorage.setItem('user', username);
          resolve(true);
        } else {
          reject(new Error('Invalid user name or password'));
        }
      });
    });

  }

  public logout() {
    localStorage.removeItem('user');
  }

  public checkLogin() {
    return !!localStorage.getItem('user');
  }

}
