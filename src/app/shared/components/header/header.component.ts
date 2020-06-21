import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../security/authorization/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() heading: string

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authorizationService.logout();
    this.router.navigate(['/login']);

  }

}
