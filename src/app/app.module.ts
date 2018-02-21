import { NgModule, NO_ERRORS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieModule, CookieService  } from 'ngx-cookie';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageErrorsModule }  from './modules/page-errors/index';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { MatDialogModule, MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatCardModule, MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingModule } from 'ngx-loading';
//Ngx-Charts
import {NgxChartsModule} from '@swimlane/ngx-charts';

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
import { RegisterService, NewsletterService, DimeService } from './_services/index';
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
import { PrivacypolicyComponent } from './privacypolicy/index';
import { TermsAndConditionsComponent } from './terms-and-conditions/index';
import { DimepiechartComponent } from './dimepiechart/index';
import { SocialsigninComponent } from './socialsignin/index';
import { ContactComponent } from './contact/index';

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
        DeviceDetectorModule.forRoot(),
        FormsModule,
        HttpClientModule,
        LoadingModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatFormFieldModule,
        MatMenuModule,
        MatInputModule,
        MatTableModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MDBBootstrapModule.forRoot(),
        NgxChartsModule,
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
        DimeindextableComponent,
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
        ContactComponent
    ],
    entryComponents: [
        NewsletterResponseDialogComponent
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatCardModule
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        ContactusService,
        CookieService,
        DimeService,
        fakeBackendProvider,
        NewsletterService,
        RegisterService,
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
        // provider used to create fake backend
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
    bootstrap: [AppComponent]
})

export class AppModule { }
