import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { NavigationRegistroComponent } from './navigation/navigation-registro/navigation-registro.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';


const routes: Routes = [
  {
    path: '',
    children:[
      { path: '', redirectTo:'/home' , pathMatch: 'full'},
      {path: 'home',component:HomeComponent}
    ], component: NavigationComponent

  },
  {
    path: 'login',
    children:[
      {path: '',  component:LoginComponent},
      {path: 'signin',component:SignInComponent}
      ,{path:'signup',component:SignUpComponent}
    ], component: NavigationRegistroComponent

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
