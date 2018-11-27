import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { take } from 'rxjs/operators';
import { sushi } from './models/Sushi';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { FirebaseDatabase } from '@angular/fire';
import {AuthService} from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  CarritoCollection:AngularFirestoreCollection;
  ClienteCollection:AngularFirestoreCollection;

  Total=0;
  constructor(private db:AngularFirestore,public authService:AuthService) {
    
   }

  addToShoppingCart(plate){
    console.log("entre al service shopping")
    console.log(this.authService.getId());
    this.CarritoCollection=this.db.collection('usuarios').doc(this.authService.getId()).collection('shoppingCart');
    this.CarritoCollection.add(plate);
    
      //Se le agrega una collection carrito a el usuario del getId current del fire auth, y ahi es donde vas a meter la compra actual
  }
  calcularPrecio(price:number){
    this.Total=this.Total+price;
    console.log("el total es:",this.Total);
  }
  getTotal(){
    
    return this.Total;
  }
  getCarrito(){
    this.CarritoCollection=this.db.collection('usuarios').doc(this.authService.getId()).collection('shoppingCart');
    var carrito=this.CarritoCollection.snapshotChanges();
    return carrito;
  }
} 