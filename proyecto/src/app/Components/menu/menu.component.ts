import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
  



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})


export class MenuComponent implements OnInit {
  platos;
  starAt=new Subject();
  endAt=new Subject();
  startobs=this.starAt.asObservable();
  endobs=this.endAt.asObservable();
  type;
  searchterm:string;

  constructor(public menuService:MenuService, public router:Router,  private route:ActivatedRoute) { 
    
  }

  ngOnInit() {
   
    let aux;
    aux=this.route.snapshot.paramMap.get('type');
    
    
    this.menuService.getByType(aux).subscribe(platos=>{
      this.platos=platos;
      
      console.log(this.platos)
    });


    
  }

  goToFood(key: string){
    let aux=this.route.snapshot.paramMap.get('type');
    console.log(key);
    this.router.navigate([`/shopping/menu/${aux}/${key}`]);
  }
}
