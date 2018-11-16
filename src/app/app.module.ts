import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UserService } from './user.service';
import { LoginGuardGuard } from './login-guard.guard';
import { UserComponentComponent } from './user-component/user-component.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const appRoutes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: ':name', component:UserComponentComponent},
  { path: 'dashboard', 
    canActivate:[LoginGuardGuard],
    component: DashboardComponent },
  { path:'**', component: PageNotFoundComponentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    DashboardComponent,
    UserComponentComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoginGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
