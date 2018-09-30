import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FooterComponent,
    IniciosesionComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
