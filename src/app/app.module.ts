import { NgModule, NO_ERRORS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieModule, CookieService  } from 'ngx-cookie';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageErrorsModule }  from './modules/page-errors/index';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { MatTableModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider } from 'angular5-social-login';

import {} from 'jasmine';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { AppComponent }  from './app.component';
import { AppRoutingModule }        from './app.routing';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';

import { AlertService, AuthenticationService, UserService } from './_services/index';
import { RegisterService } from './_services/index';
import { NewsletterService } from './_services/index';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { HeaderComponent } from './header/index';
import { FooterComponent } from './footer/index';
import { BannerComponent } from './banner/index';
import { Bodypart2Component } from './bodypart2/index';
import { Bodypart3Component } from './bodypart3/index';
import { Bodypart4Component } from './bodypart4/index';
import { DimeindextableComponent } from './dimeindextable/index';
import { TheteamComponent } from './theteam/index';
import { PartnersComponent } from './partners/index';
import { ScrollComponent } from './scroll/index';
import { AboutComponent } from './about/index';
import { NewsletterComponent } from './newsletter/index';
import { NewsletterResponseDialogComponent } from './newsletter/newsletter-response-dialog/index';
import { VerifyComponent } from './verify/index';
import { LogoutComponent } from './logout/index';
import { DisclaimerComponent } from './disclaimer/index';
import { FaqComponent } from './faq/index';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("Your-Facebook-app-id")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("Your-Google-Client-Id")
        },
      ]
  );
  return config;
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SocialLoginModule,
        PageErrorsModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
        MatDialogModule,
        MDBBootstrapModule.forRoot(),
        DeviceDetectorModule.forRoot(),
        CookieModule.forRoot()
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        HeaderComponent,
        FooterComponent,
        BannerComponent,
        Bodypart2Component,
        Bodypart3Component,
        Bodypart4Component,
        DimeindextableComponent,
        TheteamComponent,
        PartnersComponent,
        ScrollComponent,
        AboutComponent,
        NewsletterComponent,
        NewsletterResponseDialogComponent,
        VerifyComponent,
        LogoutComponent,
        DisclaimerComponent,
        FaqComponent
    ],
    entryComponents: [
        NewsletterResponseDialogComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        {
            provide: AuthServiceConfig,
            useFactory: getAuthServiceConfigs
        },
        // provider used to create fake backend
        fakeBackendProvider,
        NewsletterService,
        RegisterService,
        CookieService
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
    bootstrap: [AppComponent]
})

export class AppModule { }
