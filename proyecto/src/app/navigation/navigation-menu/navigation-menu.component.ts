import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { MenuService } from 'src/app/menu.service';


@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css'],

})
export class NavigationMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
