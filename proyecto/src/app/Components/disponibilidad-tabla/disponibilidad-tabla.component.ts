import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable, iif, observable} from 'rxjs';

@Component({
  selector: 'app-disponibilidad-tabla',
  templateUrl: './disponibilidad-tabla.component.html',
  styleUrls: ['./disponibilidad-tabla.component.css'],
  providers: [MenuService]


})
export class DisponibilidadTablaComponent implements OnInit {
  platos:Observable<Array<any>>;
  sushis;

  constructor(public menuService:MenuService, public router:Router,  private route:ActivatedRoute) { }

  ngOnInit() {
    //agregar sushis
    this.sushis=this.menuService.getSushis().subscribe(platos=>{
      this.sushis=platos;
      
      console.log(this.sushis);
    });
    
  }
}
