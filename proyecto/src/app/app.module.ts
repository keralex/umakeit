import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { FooterComponent } from './Components/footer/footer.component';
import { IniciosesionComponent } from './Components/iniciosesion/iniciosesion.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { NavigationRegistroComponent } from './navigation/navigation-registro/navigation-registro.component';
import { RegistroComponent } from './Components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FooterComponent,
    IniciosesionComponent,
    NavbarComponent,
    NavigationComponent,
    NavigationRegistroComponent,
    RegistroComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
