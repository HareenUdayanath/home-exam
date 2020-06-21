import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../../shared/models/user/user.model';
import { AuthorizationService } from '../../../shared/security/authorization/authorization.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: UserModel;
  error = '';

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) {
    this.user = new UserModel();
  }

  ngOnInit(): void {
  }

  onSignUp() {
    this.authorizationService.signUp(this.user)
        .then(value => {
          this.router.navigate(['/login']);
        })
        .catch(reason => {
          this.error = reason;
        });
  }

}
