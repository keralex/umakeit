import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { ShoppingcartService } from 'src/app/shoppingcart.service';



@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css'],
  providers: [MenuService,ShoppingcartService]

})
export class NavigationMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
