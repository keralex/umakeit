import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { IniciosesionComponent } from './Components/iniciosesion/iniciosesion.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { NavigationRegistroComponent } from './navigation/navigation-registro/navigation-registro.component';
import { RegistroComponent } from './Components/registro/registro.component';


const routes: Routes = [
  {
    path: '',
    children:[
      { path: '', redirectTo:'/home' , pathMatch: 'full'},
      {path: 'home',component:InicioComponent}
    ], component: NavigationComponent

  },
  {
    path: 'login',
    children:[
      {path: '',component:RegistroComponent}
    ], component: NavigationRegistroComponent

  }
  ,
  {
    path: 'login',
    children:[
      {path: '',component:RegistroComponent}
    ], component: NavigationRegistroComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
