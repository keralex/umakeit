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
  sushis=[];

  constructor(public menuService:MenuService, public router:Router,  private route:ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.menuService.getSushis().subscribe(sushis => {

      this.sushis=sushis;
    });
    // let aux=this.route.snapshot.paramMap.get('type');


  }
  goToFood(id,type){
    this.router.navigate([`/shopping/menu/${type}/${id}`]);
  }
}
