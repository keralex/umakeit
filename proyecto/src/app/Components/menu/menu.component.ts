import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {
  sushis : Array<any>;
  constructor(public menuService:MenuService, public router:Router,  private route:ActivatedRoute) { 
    
  }

  ngOnInit() {
    let aux=this.route.snapshot.paramMap.get('type');
    this.sushis=this.menuService.getByType(aux);
    console.log(aux,this.sushis);
  }

}
