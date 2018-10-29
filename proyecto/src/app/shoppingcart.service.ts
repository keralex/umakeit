import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {


  constructor() { 

  }
  
  addProduct(product) { 
    this.FoodCart.push(product);
}
  FoodCart=[
    {
      "name":"Maki Ahumado de Queso",
      "id":"1",
      "type":"maki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque,porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/maki/det2x_maki_ahumado_queso.png"
    },
    {
      "name":"Maki de salmon",
      "id":"2",
      "type":"maki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/maki/det2x_maki-salmon-aguacate.png"
    }
  ]

 

}
