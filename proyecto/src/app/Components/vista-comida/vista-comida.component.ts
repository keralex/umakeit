import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import {  ReplaySubject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import {sushi} from '../../models/Sushi';
import {ShoppingCartService} from '../../shopping-cart.service'



@Component({
  selector: 'app-vista-comida',
  templateUrl: './vista-comida.component.html',
  styleUrls: ['./vista-comida.component.css'],
  providers: [MenuService,ShoppingCartService]
  
})
export class VistaComidaComponent implements OnInit {  

  starAt=new Subject();
  endAt=new Subject();
  startobs=this.starAt.asObservable();
  endobs=this.endAt.asObservable();
  type;
  searchterm:string;
  currentRoute = new Subject();
  plate;
  auxPlate: any;
  
  constructor(public menuService:MenuService , public router:Router,  private route:ActivatedRoute, public shoppingCartService:ShoppingCartService) { 
    let id=this.route.snapshot.paramMap.get('id');

    console.log(id);
    
    let type=this.route.snapshot.paramMap.get('type');
    var getDoc=this.menuService.getById(id,type).ref.get().then(doc=> {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
        this.plate=doc.data();
      }
    }

    ).catch(err => {
      console.log('Error getting document', err);
    });
  }


  ngOnInit() {
    

    }

  addToCart(id:string){
    let aux=this.route.snapshot.paramMap.get('type');
   
    this.menuService.getById(id,aux).ref.get().then(doc=> {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log(doc.data().price);
        this.shoppingCartService.calcularPrecio(doc.data().price);
        this.shoppingCartService.addToShoppingCart(doc.data());
      }
    }

    ).catch(err => {
      console.log('Error getting document', err);
    });
    console.log(this.auxPlate)

  
  }


}
