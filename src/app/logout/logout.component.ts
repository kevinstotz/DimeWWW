import { Environment } from '../environments/index';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/index';
import { Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
    private environment: Environment;
    constructor(
        private authenticationService: AuthenticationService,
        private router: Router) {

        this.environment = new Environment();
    }

    ngOnInit() {
        this.authenticationService.logout();
        this.router.navigate([this.environment.global.WEBSITE_HOME]);
    }

}
