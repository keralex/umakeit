import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable, iif, observable} from 'rxjs';

@Component({
  selector: 'app-modifymenu',
  templateUrl: './modifymenu.component.html',
  styleUrls: ['./modifymenu.component.css'],
  providers: [MenuService]

})
export class ModifymenuComponent implements OnInit {
  platos;
  tipoSelected:string;
  tipos;
 
  constructor(public menuService:MenuService) { }

  ngOnInit() {
    this.tipos=[
      {Type:'Sushi'},
      {Type:'Entrantes'},
      {Type:'Postres'},
      {Type:'Bandejas'},
  
    ]
     this.tipoSelected='Sushi';
    
    this.menuService.getByType(this.tipoSelected).subscribe(platos=>{
      this.platos=platos;
      console.log("he retornado");
      console.log(this.platos);
    });
     


  }
  //metodos
  deletePlate($event,id,type){
    this.menuService.deletePlate(id,type);  
  }
   
  onTypeSelected(val:any){
    
    this.menuService.getByType(val).subscribe(platos=>{
      
      this.platos=platos;
      console.log("he retornado");
      console.log(this.platos)
    });
  }
  
 
}
