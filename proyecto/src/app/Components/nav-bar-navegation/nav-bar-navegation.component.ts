import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-nav-bar-navegation',
  templateUrl: './nav-bar-navegation.component.html',
  styleUrls: ['./nav-bar-navegation.component.css']
})
export class NavBarNavegationComponent implements OnInit {

usuarioiout;
  constructor(Fireout: AuthService) {

    this.usuarioiout=Fireout;

   }


   

  ngOnInit() {
  }

}
