import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { NavigationRegistroComponent } from './navigation/navigation-registro/navigation-registro.component';
import { NavBarNavegationComponent } from './Components/nav-bar-navegation/nav-bar-navegation.component';
import { HomeComponent } from './Components/home/home.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LoginComponent } from './Components/login/login.component';
import { NavigationMenuComponent } from './navigation/navigation-menu/navigation-menu.component';
import { ShoppingCarComponent } from './Components/shopping-car/shopping-car.component';
import { MenuComponent } from './Components/menu/menu.component';
import { VistaComidaComponent } from './Components/vista-comida/vista-comida.component';
import { NavigationAdminComponent } from './navigation/navigation-admin/navigation-admin.component';
import { DisponibilidadTablaComponent } from './Components/disponibilidad-tabla/disponibilidad-tabla.component';
import { DisponibilidadModificarComponent } from './Components/disponibilidad-modificar/disponibilidad-modificar.component';
import { PedidosTablaComponent } from './Components/pedidos-tabla/pedidos-tabla.component';
import { NavBarAdminComponent } from './Components/nav-bar-admin/nav-bar-admin.component';
import { PedidosModificarComponent } from './Components/pedidos-modificar/pedidos-modificar.component';
import { MenuCategoriasComponent } from './components/menu-categorias/menu-categorias.component';
import {ShoppingcartService} from './shoppingcart.service';
import {MenuService} from './menu.service';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    NavigationComponent,
    NavigationRegistroComponent,
    NavBarNavegationComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    LoginComponent,
    NavigationMenuComponent,
    ShoppingCarComponent,
    MenuComponent,
    VistaComidaComponent,
    NavigationAdminComponent,
    DisponibilidadTablaComponent,
    DisponibilidadModificarComponent,
    PedidosTablaComponent,
    NavBarAdminComponent,
    PedidosModificarComponent,
    MenuCategoriasComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingcartService,MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
