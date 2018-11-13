import { Injectable } from '@angular/core';
import {sushi} from './models/Sushi';
import {Postre} from './models/Postre';
import {Entrante} from './models/Entrante';
import {Bandeja} from './models/Bandeja';
import { map, throwIfEmpty, switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

import {Observable, Subject, BehaviorSubject, observable, iif} from 'rxjs';
import { Key } from 'protractor';


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
  //obtener por id
  SushiName$:Observable<any[]>;
  PostreName$:Observable<any[]>;
  EntrantesName$:Observable<any[]>;
  BandejasName$:Observable<any[]>;

  SushiNameFilter$:BehaviorSubject<string|null>;
  PostreNameFilter$:BehaviorSubject<string|null>;
  EntrantesNameFilter$:BehaviorSubject<string|null>;
  BandejasNameFilter$:BehaviorSubject<string|null>;


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
        
        

        //****Busqueda por key */
        //sushi
        this.SushiNameFilter$=new BehaviorSubject(null);
        this.SushiName$ =
          this.SushiNameFilter$
          .pipe(
          switchMap(Key=> 
            db.collection('Sushi', ref => {
              let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
              if (Key) { query = query.where('key'.trim(), '==', Key) };
              return query;
            }).valueChanges()
          )
        );

        //postres
        this.PostreNameFilter$=new BehaviorSubject(null);
        this.PostreName$ =
          this.PostreNameFilter$
          .pipe(
          switchMap(name=> 
            db.collection('Postres', ref => {
              let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
              if (name) { query = query.where('key'.trim(), '==',name) };
              return query;
            }).valueChanges()
          )
        );
        //Entrantes
        this.EntrantesNameFilter$=new BehaviorSubject(null);
        this.EntrantesName$ =
          this.EntrantesNameFilter$
          .pipe(
          switchMap(name => 
            db.collection('Entrantes', ref => {
              let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
              if (name) { query = query.where('key'.trim(), '==', name) };
              return query;
            }).valueChanges()
          )
        );
        //Bandejas
        this.BandejasNameFilter$=new BehaviorSubject(null);
        this.BandejasName$ =
          this.BandejasNameFilter$
          .pipe(
          switchMap(name => 
            db.collection('Bandejas', ref => {
              let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
              if (name) { query = query.where('key'.trim(), '==', name) };
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
    else if(type=="Sushi" || type==null){
      return this.sushis;
    }
    else{
      console.log("entre al else");
        
      console.log("sali de la conversion");
      this.sushiTypesFilter$.next(type);
      return this.sushiTypes$;
    }
    
    

  }
  getByName(name,type){
    console.log(type);
    if(type==="Postres"){
      this.PostreNameFilter$.next(name);
      return this.PostreName$;
    }
    else if(type==="Bandejas"){
      this.BandejasNameFilter$.next(name);
      return this.BandejasName$;
    }
    else if(type==="Entrantes"){
      this.EntrantesNameFilter$.next(name);
      return this.EntrantesName$;
    }
    else{
      
      console.log("entre al else de key");
      this.SushiNameFilter$.next(name);
      console.log(name);
      console.log(this.SushiName$);
      return this.SushiName$;
      
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
  



 

 


    }
