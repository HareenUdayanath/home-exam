import { Component, OnInit } from '@angular/core';
import { UserServiceHandlerService } from '../../../services/service-handler/user-service-handler/user-service-handler.service';
import { User } from '../../../shared/model/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: User;

  constructor(
    private userServiceHandler: UserServiceHandlerService
  ) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.userServiceHandler.addUser(this.user).subscribe();
  }

}
