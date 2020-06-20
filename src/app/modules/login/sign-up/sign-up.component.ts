import { Component, OnInit } from '@angular/core';
import { UserServiceHandlerService } from '../../../services/service-handler/user-service-handler/user-service-handler.service';
import { UserModel } from '../../../shared/models/user/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: UserModel;

  constructor(
    private userServiceHandler: UserServiceHandlerService
  ) {
    this.user = new UserModel();
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.userServiceHandler.addUser(this.user).subscribe();
  }

}
