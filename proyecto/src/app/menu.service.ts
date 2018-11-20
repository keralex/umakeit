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
  sushisCollection:AngularFirestoreCollection<sushi>;
  sushisDoc:AngularFirestoreDocument<sushi>;
  //postres
  postresCollection:AngularFirestoreCollection<Postre>;
  postresDoc:AngularFirestoreDocument<Postre>;
  //bandejas
  bandejasCollection:AngularFirestoreCollection<Bandeja>;
  bandejasDoc:AngularFirestoreDocument<Bandeja>;
  //entrantes
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
         
        //postres
      
        //entrantes
   

        //bandejas
  

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
      platos=this.getPostres();
    }
    if(type==="Bandejas"){
      console.log(type);
      platos= this.getBandejas();
    }
    if(type==="Entrantes"){
      console.log(type);
      platos=this.getEntrantes();
    }
    if(type==="Sushi" || type==null){
      console.log(type);
      platos=this.getSushis();
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
    this.sushisCollection=this.db.collection('Sushi');
     var sushis=this.sushisCollection.valueChanges();
    return sushis;
  }
  getPostres(){
    this.postresCollection=this.db.collection('Postres');
     var postres=this.postresCollection.valueChanges();
    return postres;
  }
  getBandejas(){
    this.bandejasCollection=this.db.collection('Bandejas');
    var bandejas=this.bandejasCollection.valueChanges();
    return bandejas;
  }
  getEntrantes(){
    this.entrantesCollection=this.db.collection('Entrantes');
    var entrantes=this.entrantesCollection.valueChanges();
    return entrantes;
  }
  



 

 


    }
