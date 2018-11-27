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
import { PedidosTablaComponent } from './Components/pedidos-tabla/pedidos-tabla.component';
import { NavBarAdminComponent } from './Components/nav-bar-admin/nav-bar-admin.component'; 
import { MenuCategoriasComponent } from './components/menu-categorias/menu-categorias.component';
import {MenuService} from './menu.service';
import { SushisearchComponent } from './components/sushisearch/sushisearch.component';
import { PerfilusuarioComponent } from './components/perfilusuario/perfilusuario.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgxPayPalModule } from 'ngx-paypal';

import { AngularFireAuth } from 'angularfire2/auth';


// firebase

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { NavigationUsuarioComponent } from './navigation/navigation-usuario/navigation-usuario.component';
import { PedidosAnterioresUsuarioComponent } from './components/pedidos-anteriores-usuario/pedidos-anteriores-usuario.component';
import { ModifymenuComponent } from './components/modifymenu/modifymenu.component';
import { ShoppingCartService } from './shopping-cart.service';

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
    PedidosTablaComponent,
    NavBarAdminComponent,
    MenuCategoriasComponent,
    SushisearchComponent,
    PerfilusuarioComponent,
    PedidosAnterioresUsuarioComponent,
    NavigationUsuarioComponent,
    ModifymenuComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgxPayPalModule,
  ],
  providers: [MenuService,ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }