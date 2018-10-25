import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ShoppingcartService } from 'src/app/shoppingcart.service';

@Component({
  selector: 'app-vista-comida',
  templateUrl: './vista-comida.component.html',
  styleUrls: ['./vista-comida.component.css']
})
export class VistaComidaComponent implements OnInit {

  constructor(public menuService:MenuService , public router:Router,  private route:ActivatedRoute, public shoppingcartService:ShoppingcartService) { }
  food: any;

  ngOnInit() {
      let id=this.route.snapshot.paramMap.get('id');
      let type=this.route.snapshot.paramMap.get('type');
      this.food=this.menuService.getById(id,type);
  }

  addToCart(){
    console.log(this.food);
    this.shoppingcartService.addProduct(this.food);
    console.log(this.shoppingcartService.FoodCart);
  }


}
