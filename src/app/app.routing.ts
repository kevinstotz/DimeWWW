﻿import { NgModule }               from '@angular/core';
import { PreloadAllModules }      from '@angular/router';
import { Routes, RouterModule }   from '@angular/router';
import { PageNotFoundComponent }  from './modules/page-errors/page-not-found/page-not-found.component';
import { HomeComponent }          from './home/index';
import { AboutComponent }         from './about/index';
import { LoginComponent }         from './login/index';
import { LogoutComponent }        from './logout/index';
import { DashboardComponent }     from './dashboard/index';
import { RegisterComponent }      from './register/index';
import { VerifyComponent }        from './verify/index';
import { AuthGuard }              from './_guards/index';

const appRoutes: Routes = [
    { path: '',  component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'register/verify/:authenticationCode', component: VerifyComponent },
    { path: 'about', component: AboutComponent },
    { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})

export class AppRoutingModule  {}
