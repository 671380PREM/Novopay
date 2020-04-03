import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthService } from './auth.service';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthService]
  },
  {
    path: 'home/:id',
    component: HomeComponent,
    canActivate: [AuthService]
  },
  {
    path: 'contactus',
    component: ContactUsComponent,
    canActivate: [AuthService]
  },
  {
    path: 'aboutus',
    component: AboutUsComponent,
    canActivate: [AuthService]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
