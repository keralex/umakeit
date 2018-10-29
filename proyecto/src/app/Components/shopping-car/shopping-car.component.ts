import { Component, AfterViewChecked } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/firestore.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { MenuService } from 'src/app/menu.service';
import { Router} from '@angular/router';
import { ShoppingcartService } from 'src/app/shoppingcart.service';



declare let paypal: any;

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.css'],
  providers: [MenuService,ShoppingcartService]
  
})


export class ShoppingCarComponent implements AfterViewChecked {

  usuario;
  products:Array<any>;
  constructor(private firestoreService: FirestoreService, private route:ActivatedRoute,public menuService:MenuService,public router:Router,public shoppingcartService:ShoppingcartService) { }

  ngOnInit() {
    this.usuario=this.firestoreService.getbyid(this.route.snapshot.paramMap.get('id'))
    this.products=this.shoppingcartService.FoodCart; 


  }


  title = 'paypal';
  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = 1;
 
  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: '<AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R>',
      production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
      })
    }
  };
  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }
 
}
