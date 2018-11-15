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
        
        

        // ****Busqueda por key */
        // sushi
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

 //metodos
  editSushi(id,nameaux,priceaux:number,typeaux,descriptionaux){
    var plate={
      name:nameaux,
      price:priceaux,
      type:typeaux,
      description:descriptionaux
    }

      this.sushisDoc=this.db.doc(`Sushi/${id}`);
      this.sushisDoc.update(plate);
      console.log("id modificado es");
      console.log(id);
  }
  editPlate(id,type,nameaux,priceaux:number,descriptionaux){
    var plate={
      name:nameaux,
      price:priceaux,
      description:descriptionaux
    }
    if(type==="Postres"){
      this.postresDoc=this.db.doc(`Postres/${id}`);
      this.postresDoc.update(plate);
      console.log("id modificado es");
      console.log(id);
        }
    if(type==="Bandejas"){
      this.bandejasDoc=this.db.doc(`Bandejas/${id}`);
      this.bandejasDoc.update(plate);
      console.log("id modificado es");
      console.log(id);
      }
    if(type==="Entrantes"){
        this.entrantesDoc=this.db.doc(`Entrantes/${id}`);
        this.entrantesDoc.update(plate);
        console.log("id modificado es");
        console.log(id);
     }
    

  }
 deletePlate(id,type){
  if(type==="Postres"){
    this.postresDoc=this.db.doc(`Postres/${id}`);
    this.postresDoc.delete();
  }
  if(type==="Bandejas"){
    this.bandejasDoc=this.db.doc(`Bandejas/${id}`);
    this.bandejasDoc.delete();
    }
  if(type==="Entrantes"){
      this.entrantesDoc=this.db.doc(`Entrantes/${id}`);
      this.entrantesDoc.delete();
  }
  if(type==="Sushi"){
    this.sushisDoc=this.db.doc(`Sushi/${id}`);
    this.sushisDoc.delete();
  }
  
 }
  addSushi(nameaux,priceaux:number,typeaux,descriptionaux,keyaux){
    var plate={
      name:nameaux,
      price:priceaux,
      type:typeaux,
      description:descriptionaux,
      available:true,
      key:keyaux
    }
    var setPlate=this.db.collection('Sushi').add(plate).then(ref=>{
      console.log('Added document with ID: ', ref.id);
    });
    
  }

  addPlate(nameaux,priceaux,descriptionaux,keyaux,typeplate){
    var plate={
      name:nameaux,
      price:priceaux,
      description:descriptionaux,
      available:true,
      key:keyaux
    };
    var setPlate=this.db.collection(typeplate).add(plate).then(ref=>{
      console.log('Added document with ID: ', ref.id);
    });
  }
  getByType(type:string):any{
    var platos;
    if(type==="Postres"){
      console.log(type);
      platos=this.postres;
    }
    if(type==="Bandejas"){
      console.log(type);
      platos= this.bandejas;
    }
    if(type==="Entrantes"){
      console.log(type);
      platos=this.entrantes;
    }
    if(type==="Sushi" || type==null){
      console.log(type);
      platos=this.sushis;
    }
    if(type!="Sushi" && type!="Postres" && type!="Bandejas" && type!="Entrantes" && type!="null"){
     
      console.log("entre al else");
        
      this.sushiTypesFilter$.next(type);
      platos= this.sushiTypes$;
    }
    return platos;  
    
    

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
