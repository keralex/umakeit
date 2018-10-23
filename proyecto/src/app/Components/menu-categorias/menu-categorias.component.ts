import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-categorias',
  templateUrl: './menu-categorias.component.html',
  styleUrls: ['./menu-categorias.component.css']
})
export class MenuCategoriasComponent implements OnInit {
   @Input() foodType:String;
   
  
  constructor(public menuService:MenuService, public router:Router) { }

  ngOnInit() {
    console.log(this.foodType);
  }
  foodType1="Sushi";
  foodType2="Bandejas";
  foodType3="Entrantes";
  foodType4="Entrantes";
  
  goToMenu(type){
    this.router.navigate([`/shopping/menu/${type}`]);
     console.log(Id);
  }


 sushisTypes= [{
   "typeTittle":"Maki",
   "type":"maki"

 },
 {
  "typeTittle":"Futomaki",
  "type":"futomaki"
},
{
  "typeTittle":"Sashimi"
  "type":"sashimi"
},
{
  "typeTittle":"Tartar",
  "type":"tartar"
},
{
  "typeTittle":"Nigiri",
  "type":"nigiri"
},
{
  "typeTittle":"Uramaki",
  "type":"uramaki"
},
{
  "typeTittle":"Temaki",
  "type":"temaki"
},
{
  "typeTittle":"Gunkan",
  "type":"gunkan"
},
{
  "typeTittle":"Chirashi",
  "type":"chirashi"
}]

}
