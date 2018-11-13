import { Component, AfterViewChecked } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/firestore.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { MenuService } from 'src/app/menu.service';
import { Router} from '@angular/router';
// import { ShoppingcartService } from 'src/app/shoppingcart.service';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';




declare let paypal: any;

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.css'],
  providers: [MenuService]
  
})


export class ShoppingCarComponent{

  usuario;
  products:Array<any>;
  constructor(private firestoreService: FirestoreService, private route:ActivatedRoute,public menuService:MenuService,public router:Router) { }

  ngOnInit() {
    //this.usuario=this.firestoreService.getbyid(this.route.snapshot.paramMap.get('id'))
    //this.products=this.shoppingcartService.FoodCart; 
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
          total: 25,
        }
      }]
    });
    
  }
}
