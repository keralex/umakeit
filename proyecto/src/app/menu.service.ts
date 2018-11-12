import { Injectable } from '@angular/core';
import {sushi} from './models/Sushi';
import {Postre} from './models/Postre';
import {Entrante} from './models/Entrante';
import {Bandeja} from './models/Bandeja';
import { map, throwIfEmpty, switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

import {Observable, Subject, BehaviorSubject, observable, iif} from 'rxjs';


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
  sushiTypes$:Observable<any[]>;
  sushiTypesFilter$:BehaviorSubject<string|null>;

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

        //sushiTypes
        this.sushiTypesFilter$=new BehaviorSubject(null);
        this.sushiTypes$ =
          this.sushiTypesFilter$
          .pipe(
          switchMap(sushiType => 
            db.collection('Sushi', ref => {
              let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
              if (sushiType) { query = query.where('sushiType', '==', sushiType) };
              return query;
            }).valueChanges()
          )
        );

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
      console.log("entre al else");
        
      console.log("sali de la conversion");
      this.sushiTypesFilter$.next(type);
      return this.sushiTypes$;
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
