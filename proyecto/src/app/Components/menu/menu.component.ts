import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
  



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
  currentRoute = new Subject

  constructor(public menuService:MenuService, public router:Router,  private route:ActivatedRoute) { 
    let aux;
    aux = this.route.snapshot.paramMap.get('type');
    this.menuService.getByType(aux).subscribe(platos=>{
      this.platos = platos;
    })  

    this.route.paramMap.subscribe(data => {
      this.currentRoute.next(data.get('type')) 
    })
  }

  ngOnInit() {
    // this.route.params.subscribe(params=>{
    //   let route=params['type'];
    //   this.menuService.getByType( route as any ).subscribe(platos=>{
    //     this.platos = platos;
    //     console.log(this.platos)
    //   });
    // })
    this.currentRoute.subscribe( data => {
      console.log(data , 'data')
      this.menuService.getByType( data as any ).subscribe(platos=>{
        console.log(platos  )
        this.platos = platos;
        console.log(this.platos)
      });
    })
     
  }

  goToFood(key: string){
    let aux=this.route.snapshot.paramMap.get('type');
    this.router.navigate([`/shopping/menu/${aux}/${key}`]);
  }
}
