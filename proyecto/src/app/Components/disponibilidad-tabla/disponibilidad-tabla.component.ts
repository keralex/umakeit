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
  tipoSelected:string;
  tipos;  

  constructor(public menuService:MenuService, public router:Router,  private route:ActivatedRoute) { }

  ngOnInit() {
    this.tipoSelected='Sushi';
    this.tipos=[
      {Type:'Sushi'},
      {Type:'Entrantes'},
      {Type:'Postres'},
      {Type:'Bandejas'},
  
    ];
    
    this.menuService.getByType(this.tipoSelected).subscribe(platos=>{
      this.platos=platos;
      console.log("he retornado");
      console.log(this.platos);
    });
  }

  //metodos
  onTypeSelected(val:any){
    
    this.menuService.getByType(val).subscribe(platos=>{
      
      this.platos=platos;
      console.log("he retornado");
      console.log(this.platos)
    });
  }
}
