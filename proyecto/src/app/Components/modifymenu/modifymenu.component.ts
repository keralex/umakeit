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
  platoName:string;
  platoPrice:number;
  platoDescription:string;
  platoType:string;
  platoKey:number;
  sushisTypes;

  //editPlate

  editplatoName:string;
  editplatoPrice:number;
  editplatoDescription:string;
  editplatoType:string;
  editplatoKey:number;
  editplatoId:string;
  

  editing=false;
  

  constructor(public menuService:MenuService) { }

  ngOnInit() {
    this.tipos=[
      {Type:'Sushi'},
      {Type:'Entrantes'},
      {Type:'Postres'},
      {Type:'Bandejas'},
  
    ];

    this.sushisTypes=[
      {type:'Maki'
    },
    {
      type:"Futomaki"
   },
   {
     type:'Sashimi'
   },
   {
     type:'Tartar'
   },
   {
     type:'Nigiri'
   },
   {
     type:'Uramaki'
   },
   {
     type:'Temaki'
   },
   {
     type:'Gunkan'
   },
   {
     type:'Chirashi'
   }]
    this.platoType='Maki';
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
  addPlate(){
    console.log(this.platoName);
    console.log(this.platoPrice);
    console.log(this.platoDescription);
    
    if(this.tipoSelected==="Postres"){
      this.platoKey=75;
      this.menuService.addPlate(this.platoName,this.platoPrice, this.platoDescription,this.platoKey,this.tipoSelected);

    }
    if(this.tipoSelected==="Bandejas"){
      this.platoKey=91;
      this.menuService.addPlate(this.platoName,this.platoPrice, this.platoDescription,this.platoKey,this.tipoSelected);

    }
    if(this.tipoSelected==="Entrantes"){
      this.platoKey=88; 
      this.menuService.addPlate(this.platoName,this.platoPrice, this.platoDescription,this.platoKey,this.tipoSelected);

    }
    if(this.tipoSelected==="Sushi"){
        this.platoKey=64;
        console.log(this.platoType)
        console.log(this.platoKey);
        this.menuService.addSushi(this.platoName,this.platoPrice,this.platoType, this.platoDescription,this.platoKey);

    }

  }

   
  onTypeSelected(val:any){
    
    this.menuService.getByType(val).subscribe(platos=>{
      this.platos = platos.map( snap => {
        const obj = { 
          ...snap.payload.doc.data(),
          id: snap.payload.doc.id
        }
        return obj
      })
      console.log('tactico' , this.platos)
    });
  }
  editPlate(event, id){
    this.editing=!this.editing;
    this.editplatoId=id;
  }
  actualizarPlate(){
    console.log(this.editplatoId)
    if(this.tipoSelected==='Sushi'){
      this.menuService.editSushi(this.editplatoId,this.editplatoName,this.editplatoPrice,this.editplatoType,this.editplatoDescription);
      
    }
    else{
      console.log("entre al else");
      this.menuService.editPlate(this.editplatoId,this.tipoSelected,this.editplatoName,this.editplatoPrice,this.editplatoDescription);
  }
    }
    
 
  
}
