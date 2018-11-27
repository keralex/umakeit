//guard implementar***

import { Component, AfterViewChecked } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/firestore.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { MenuService } from 'src/app/menu.service';
import { Router} from '@angular/router';
import { ShoppingCartService } from 'src/app/shopping-cart.service';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import { sushi } from 'src/app/models/Sushi';

declare let paypal: any;

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.css'],
  providers: [MenuService,ShoppingCartService]
})


export class ShoppingCarComponent{

  usuario;
  priceAux:number;
  total:number;
  products;

  constructor(public shoppingCartService:ShoppingCartService, private firestoreService: FirestoreService, private route:ActivatedRoute,public menuService:MenuService,public router:Router) {
    
    this.shoppingCartService.getCarrito().subscribe(platos=>{
      this.products = platos.map( snap => {
        
        const obj = {  
          ...snap.payload.doc.data(),
          id: snap.payload.doc.id,

        }
        this.priceAux=snap.payload.doc.data().price;
        console.log(this.priceAux);
       this.shoppingCartService.calcularPrecio(snap.payload.doc.data().price);
        return obj
      })
      this.total=this.shoppingCartService.getTotal();
      console.log(this.total);     
      
      console.log('tactico' , this.products);
    }); 
    
   }

  ngOnInit() {
  
    
    this.initConfig();
}

public payPalConfig?: PayPalConfig;

  private initConfig(): void {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'AZ6Sea3wSIMQPfy_rcBusYwzlLHWrNr625L1uknWcQx8L016G1NMcqo1nMsL8xmnIY2WtsOza-RESSoC'
      },
      button: {
        label: 'paypal',
      },
      onPaymentComplete: (data, actions) => {
        console.log('OnPaymentComplete');
      },
      onCancel: (data, actions) => {
        console.log('OnCancel');
      },
      onError: (err) => {
        console.log('OnError');
      },
      transactions: [{
        amount: {
          currency: 'USD',
          total: this.total,
        }
      }]
    });
    
  }z
}
