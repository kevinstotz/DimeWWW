import { Component, OnInit } from '@angular/core';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular5-social-login';


@Component({
  selector: 'app-socialsignin',
  templateUrl: './socialsignin.component.html',
  styleUrls: ['./socialsignin.component.scss']
})
export class SocialsigninComponent implements OnInit {


    constructor( private socialAuthService: AuthService ) {}

    ngOnInit() {

        //this.authenticationService.logout();

    }

    public socialSignIn(socialPlatform : string) {
      let socialPlatformProvider;
      if(socialPlatform == "facebook"){
        socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
      }else if(socialPlatform == "google"){
        socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      }

      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          console.log(socialPlatform+" sign in data : " , userData);
          // Now sign-in with userData
          //...

        }
      );
    }

  }
