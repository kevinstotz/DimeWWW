import { NgModule, NO_ERRORS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Buffer } from 'buffer';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { Chart } from 'chart.js';
import { CookieModule, CookieService  } from 'ngx-cookie';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingModule } from 'ngx-loading';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule, MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxCarouselModule } from 'ngx-carousel';
import { PageErrorsModule }  from './modules/page-errors/index';

import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider } from 'angular5-social-login';

import {} from 'jasmine';

import { AppComponent }  from './app.component';
import { AppRoutingModule }        from './app.routing';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';

import { AlertService, AuthenticationService, UserService } from './_services/index';
import { RegisterService, NewsletterService, DimeService, UserAgentService } from './_services/index';
import { ContactusService } from './_services/index';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { HeaderComponent } from './header/index';
import { FooterComponent } from './footer/index';
import { BannerComponent } from './banner/index';
import { Bodypart2Component } from './bodypart2/index';
import { Bodypart3Component } from './bodypart3/index';
import { Bodypart4Component } from './bodypart4/index';
import { Bodypart5Component } from './bodypart5/index';
import { Bodypart6Component } from './bodypart6/index';
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
import { PrivacypolicyComponent } from './privacypolicy/index';
import { TermsAndConditionsComponent } from './terms-and-conditions/index';
import { DimepiechartComponent } from './dimepiechart/index';
import { SocialsigninComponent } from './socialsignin/index';
import { ContactComponent } from './contact/index';
import { AffiliateComponent } from './affiliate/index';
import { DimelineComponent } from './dimeline/index';
import { AffiliateSignupComponent } from './affiliate-signup/index';
import { ForgotPasswordComponent } from './forgot-password/index';
import { ResetPasswordComponent } from './reset-password/index';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("196070577648287")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("428652396965-l4iettcbn7edvdhv7v0ia85iikva5tjg.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}

@NgModule({
    imports: [
        BrowserModule,
        CookieModule.forRoot(),
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        LoadingModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatMenuModule,
        MatInputModule,
        MatTableModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MDBBootstrapModule.forRoot(),
        NgbModule.forRoot(),
        NgxCarouselModule,
        PageErrorsModule,
        ReactiveFormsModule,
        SocialLoginModule
    ],
    declarations: [
        AboutComponent,
        AppComponent,
        AlertComponent,
        BannerComponent,
        Bodypart2Component,
        Bodypart3Component,
        Bodypart4Component,
        Bodypart5Component,
        Bodypart6Component,
        DisclaimerComponent,
        FaqComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        LoginComponent,
        LogoutComponent,
        NewsletterComponent,
        NewsletterResponseDialogComponent,
        TheteamComponent,
        PartnersComponent,
        PrivacypolicyComponent,
        RegisterComponent,
        ScrollComponent,
        TermsAndConditionsComponent,
        VerifyComponent,
        DimepiechartComponent,
        SocialsigninComponent,
        ContactComponent,
        AffiliateComponent,
        DimelineComponent,
        AffiliateSignupComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
    ],
    entryComponents: [
        NewsletterResponseDialogComponent,
        ForgotPasswordComponent
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDividerModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        ContactusService,
        CookieService,
        DimeService,
        NewsletterService,
        RegisterService,
        UserAgentService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        {
            provide: AuthServiceConfig,
            useFactory: getAuthServiceConfigs
        }

    ],
  //  schemas: [ NO_ERRORS_SCHEMA ],
    bootstrap: [AppComponent]
})

export class AppModule { }
