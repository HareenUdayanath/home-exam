import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceHandlerService } from '../../../services/service-handler/user-service-handler/user-service-handler.service';
import { UserModel } from '../../../shared/models/user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  user: UserModel;

  constructor(
    private userServiceHandler: UserServiceHandlerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.userServiceHandler.getUser(this.username).subscribe(user => {
      this.user = user;
    });
  }

  onSingUp() {
    this.router.navigate(['sign-up'], {relativeTo: this.route});
  }

}
