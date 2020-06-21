import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceHandlerService } from '../../../services/service-handler/user-service-handler/user-service-handler.service';
import { UserModel } from '../../../shared/models/user/user.model';
import { AuthorizationService } from '../../../shared/security/authorization/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  user: UserModel;
  returnUrl: string;
  error = '';

  constructor(
    private authorizationService: AuthorizationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authorizationService.logout();
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onLogin() {
    this.authorizationService.login(this.username, this.password)
        .then(value => {
          this.router.navigate([this.returnUrl]);
        })
        .catch(reason => {
          this.error = reason;
        });
  }

  onSingUp() {
    this.router.navigate(['sign-up'], {relativeTo: this.route});
  }

}
