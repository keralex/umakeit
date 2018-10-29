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
  }
  foodType1="Sushi";
  foodType2="Bandejas";
  foodType3="Entrantes";
  foodType4="Postres";
  // provisional
  goToMenu(type){
    this.router.navigate([`/shopping/menu/${type}`]);
  }


 sushisTypes= [{
   "typeTittle":"Maki",
   "type":"Maki"

 },
 {
  "typeTittle":"Futomaki",
  "type":"Futomaki"
},
{
  "typeTittle":"Sashimi",
  "type":"Sashimi"
},
{
  "typeTittle":"Tartar",
  "type":"Tartar"
},
{
  "typeTittle":"Nigiri",
  "type":"Nigiri"
},
{
  "typeTittle":"Uramaki",
  "type":"Uramaki"
},
{
  "typeTittle":"Temaki",
  "type":"Temaki"
},
{
  "typeTittle":"Gunkan",
  "type":"Gunkan"
},
{
  "typeTittle":"Chirashi",
  "type":"Chirashi"
}]

}
