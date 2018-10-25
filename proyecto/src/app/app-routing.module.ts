import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { NavigationRegistroComponent } from './navigation/navigation-registro/navigation-registro.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { MenuComponent } from './Components/menu/menu.component';
import { NavigationMenuComponent } from './navigation/navigation-menu/navigation-menu.component';
import { VistaComidaComponent } from './Components/vista-comida/vista-comida.component';
import { DisponibilidadTablaComponent } from './Components/disponibilidad-tabla/disponibilidad-tabla.component';
import { DisponibilidadModificarComponent } from './Components/disponibilidad-modificar/disponibilidad-modificar.component';
import { PedidosTablaComponent } from './Components/pedidos-tabla/pedidos-tabla.component';
import { NavigationAdminComponent } from './navigation/navigation-admin/navigation-admin.component';
import { PedidosModificarComponent } from './Components/pedidos-modificar/pedidos-modificar.component';
import { PerfilusuarioComponent } from './components/perfilusuario/perfilusuario.component';


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
  ,
  {
    path: 'shopping',
    children:[
      {path: '',component:MenuComponent},
      {path: 'menu/:type',  component:MenuComponent},
      {path: 'menu/:type/:id',component:VistaComidaComponent},
      {path: 'User',component:PerfilusuarioComponent  }


       ], component: NavigationMenuComponent

  }
  ,
  {
    path: 'Admin',
    children:[
      {path: '',  component:DisponibilidadTablaComponent},
      {path: 'ModificarDisponibilidad',component:DisponibilidadModificarComponent},
      {path: 'Pedidos',component:PedidosTablaComponent},
      {path: 'ModificarPedidos',component:PedidosModificarComponent}
       ], component: NavigationAdminComponent

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
