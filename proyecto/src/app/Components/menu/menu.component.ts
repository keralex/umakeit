import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {
  sushis : Array<any>;
  constructor(public menuService:MenuService, public router:Router) { }

  ngOnInit() {
    this.sushis=this.menuService.getSushis();
  }

}
