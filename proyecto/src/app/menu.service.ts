import { Injectable } from '@angular/core';
import {sushi} from './models/Sushi';
import {Postre} from './models/Postre';
import {Entrante} from './models/Entrante';
import {Bandeja} from './models/Bandeja';
import { map, throwIfEmpty } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

import {Observable, iif, observable} from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  //sushis
  sushis: Observable<sushi[]>;
  sushisCollection:AngularFirestoreCollection<sushi>;
  sushisDoc:AngularFirestoreDocument<sushi>;
  //postres
  postres: Observable<Postre[]>;
  postresCollection:AngularFirestoreCollection<Postre>;
  postresDoc:AngularFirestoreDocument<Postre>;
  //bandejas
  bandejas: Observable<Bandeja[]>;
  bandejasCollection:AngularFirestoreCollection<Bandeja>;
  bandejasDoc:AngularFirestoreDocument<Bandeja>;
  //entrantes
  entrantes: Observable<Entrante[]>;
  entrantesCollection:AngularFirestoreCollection<Entrante>;
  entrantesDoc:AngularFirestoreDocument<Entrante>;
  //tipos de sushi
  sushisTypes;
  sushisTypesCollection:AngularFirestoreCollection<sushi>;
  sushisTypesDoc:AngularFirestoreDocument<sushi>;
  constructor( public db:AngularFirestore) {

          //sushi
          this.sushisCollection=this.db.collection('Sushi');
          this.sushis=this.sushisCollection.snapshotChanges().pipe(map(actions => {
            return actions.map(a => { 
            const data = a.payload.doc.data() as sushi; 
            data.id = a.payload.doc.id;
            return data;
        });
      }));
        //postres
        this.postresCollection=this.db.collection('Postres');
        this.postres=this.postresCollection.snapshotChanges().pipe(map(actions => {
          return actions.map(a => { 
          const data = a.payload.doc.data() as Postre; 
          data.id = a.payload.doc.id;
          return data;
      });
        }));
        //entrantes
        this.entrantesCollection=this.db.collection('Entrantes');
        this.entrantes=this.entrantesCollection.snapshotChanges().pipe(map(actions => {
          return actions.map(a => { 
          const data = a.payload.doc.data() as Entrante; 
          data.id = a.payload.doc.id;
          return data;
        });
        }));

        //bandejas
        this.bandejasCollection=this.db.collection('Bandejas');
        this.bandejas=this.bandejasCollection.snapshotChanges().pipe(map(actions => {
          return actions.map(a => { 
          const data = a.payload.doc.data() as Bandeja; 
          data.id = a.payload.doc.id;
          return data;
        });
        }));

  }

  
  getByType(type:string):any{
    console.log(type);
    if(type==="Postres"){
      return this.postres;
    }
    else if(type==="Bandejas"){
      return this.bandejas;
    }
    else if(type==="Entrantes"){
      return this.entrantes;
    }
    else if(type=="Sushi"){
      return this.sushis;
    }
    else{
      this.sushisTypesCollection=this.db.collection('Sushi',ref =>{
        return ref.where('sushiType','==',type)
      });
      this.sushisTypes=this.sushisTypesCollection.snapshotChanges().pipe(map(actions =>{
        return actions.map(a=>{
          const data=a.payload.doc.data() as sushi;
          data.id=a.payload.doc.id;
        });
      }));
      console.log(this.sushisTypes);
    }
    
    

  }
   getSushis(){
    return this.sushis;
  }
  getPostres(){
    return this.postres;
  }
  getBandejas(){
    return this.bandejas;
  }
  getEntrantes(){
    return this.entrantes;
  }
  getById(id,Type){

  }
 



 

 


    }
