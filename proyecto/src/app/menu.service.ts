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
  //colecciones por tipo de sushi
  sushiMakiCollection:AngularFirestoreCollection;
  sushiFutomakiCollection:AngularFirestoreCollection;
  sushiSashimiCollection:AngularFirestoreCollection;
  sushiTartarCollection:AngularFirestoreCollection;
  sushiNigiriCollection:AngularFirestoreCollection;
  sushiUramakiCollection:AngularFirestoreCollection;
  sushiTemakiCollection:AngularFirestoreCollection;
  sushiGunkanCollection:AngularFirestoreCollection;
  sushiChirashiCollection:AngularFirestoreCollection;


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
      sushiType:typeaux,
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
    else if(type==="Bandejas"){
      console.log(type);
      platos= this.getBandejas();
    }
    else if(type==="Entrantes"){
      console.log(type);
      platos=this.getEntrantes();
    }
    else if(type==="Sushi" || type==null){
      console.log(type);
      platos = this.getSushis();
    }
    else{
     //eliminar primer
     
     this.sushisCollection= this.db.collection('Sushi');
      //maki
      if(type==='Maki'){
        this.sushiMakiCollection=this.db.collection('maki');
        
      this.sushisCollection.ref.where('sushiType','==',type).get().then(snapshot => {
        snapshot.forEach(doc => {
          if(this.sushiMakiCollection.doc(doc.id).ref.id==doc.id){
            console.log("existe");
          }
          else{
            console.log("no existe");
            this.sushiMakiCollection.add(doc.data());
          }
        

        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });



      platos=this.sushiMakiCollection.snapshotChanges();
    }
    //futomaki

    else if(type==='Futomaki'){
      this.sushiFutomakiCollection=this.db.collection('futomaki');
      this.sushisCollection.ref.where('sushiType','==',type).get().then(snapshot => {
        snapshot.forEach(doc => {
          if(this.sushiFutomakiCollection.doc(doc.id).ref.id==doc.id){
            console.log("existe");
          }
          else{
            console.log("no existe");
            this.sushiFutomakiCollection.add(doc.data());
          }
        

        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });



      platos=this.sushiFutomakiCollection.snapshotChanges();


    }
    //Sashimi
    else if(type==='Sashimi'){
      this.sushiSashimiCollection=this.db.collection('Sashimi');
      this.sushisCollection.ref.where('sushiType','==',type).get().then(snapshot => {
        snapshot.forEach(doc => {
          if(this.sushiSashimiCollection.doc(doc.id).ref.id==doc.id){
            console.log("existe");
            
          }
          else{
            console.log("no existe");
            this.sushiSashimiCollection.add(doc.data());
       
            
          }
          

        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });



      platos=this.sushiSashimiCollection.snapshotChanges();


    }
    //Tartar
    else if(type==='Tartar'){
      this.sushiTartarCollection=this.db.collection('Tartar');
      this.sushisCollection.ref.where('sushiType','==',type).get().then(snapshot => {
        snapshot.forEach(doc => {
          if(this.sushiTartarCollection.doc(doc.id).ref.id==doc.id){
            console.log("existe");
            
          }
          else{
            console.log("no existe");
          this.sushiTartarCollection.add(doc.data());

          }


        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });

      platos=this.sushiTartarCollection.snapshotChanges();

    }
    //nigiri
    else if(type=='Nigiri'){
      this.sushiNigiriCollection=this.db.collection('Nigiri');
      this.sushisCollection.ref.where('sushiType','==',type).get().then(snapshot => {
        snapshot.forEach(doc => {
          if(this.sushiNigiriCollection.doc(doc.id).ref.id==doc.id){
            console.log("existe");
            
          }
          else{
            console.log("no existe");
            this.sushiNigiriCollection.add(doc.data());

          }


        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });

      platos=this.sushiNigiriCollection.snapshotChanges();

    }
    //Uramaki

    else if(type==='Uramaki'){
      this.sushiUramakiCollection=this.db.collection('Uramaki');
      this.sushisCollection.ref.where('sushiType'.toLowerCase(),'==',type.toLowerCase()).get().then(snapshot => {
        snapshot.forEach(doc => {
          if(this.sushiUramakiCollection.doc(doc.id).ref.id==doc.id){
            console.log("existe");
            
          }
          else{
            console.log("no existe");
           this.sushiUramakiCollection.add(doc.data());

          }
 

        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });

      platos=this.sushiUramakiCollection.snapshotChanges();
    }
    //temaki

    else if(type==='Temaki'){
      this.sushiTemakiCollection=this.db.collection('Temaki');
      this.sushisCollection.ref.where('sushiType','==',type).get().then(snapshot => {
        snapshot.forEach(doc => {
          if(this.sushiTemakiCollection.doc(doc.id).ref.id==doc.id){
            console.log("existe");
            
          }
          else{
            console.log("no existe");
           this.sushiTemakiCollection.add(doc.data());

          }
 

        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });

      platos=this.sushiTemakiCollection.snapshotChanges();
    }
    //Gunkan
    else if(type==='Gunkan'){
      this.sushiGunkanCollection=this.db.collection('Gunkan');
      this.sushisCollection.ref.where('sushiType','==',type).get().then(snapshot => {
        snapshot.forEach(doc => {
          if(this.sushiGunkanCollection.doc(doc.id).ref.id==doc.id){
            console.log("existe");
            
          }
          else{
            console.log("no existe");
           this.sushiGunkanCollection.add(doc.data());

          }


        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });

      platos=this.sushiGunkanCollection.snapshotChanges();
    }
    //Chirashi
    else{
      this.sushiChirashiCollection=this.db.collection('Chirashi');
      this.sushisCollection.ref.where('sushiType','==',type).get().then(snapshot => {
        snapshot.forEach(doc => {
          if(this.sushiChirashiCollection.doc(doc.id).ref.id==doc.id){
            console.log("existe");
            
          }
          else{
            console.log("no existe");
      
            this.sushiChirashiCollection.add(doc.data());
          }
    


        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });

      platos=this.sushiChirashiCollection.snapshotChanges();
    }
      }
     
     


    return platos;  
    
    

  }

  getById(id,type){
    console.log(type);
    if(type==="Postres"){
      this.postresCollection=this.db.collection('Postres');
      return this.postresCollection.doc(id);
    }
    else if(type==="Bandejas"){
      this.bandejasCollection=this.db.collection('Bandejas');
      return this.bandejasCollection.doc(id);
    }
    else if(type==="Entrantes"){
      this.entrantesCollection=this.db.collection('Entrantes');
      return this.entrantesCollection.doc(id);
    }
    else{
      this.sushisCollection=this.db.collection('Sushi');
      return this.sushisCollection.doc(id);
    }

  }
  

   getSushis(){
    this.sushisCollection = this.db.collection('Sushi');
      var sushis = this.sushisCollection.snapshotChanges();
    return sushis;
  }
  getPostres(){
    this.postresCollection=this.db.collection('Postres');
      var postres=this.postresCollection.snapshotChanges();
    return postres;
  }
  getBandejas(){
    this.bandejasCollection=this.db.collection('Bandejas');
      var bandejas=this.bandejasCollection.snapshotChanges()
    return bandejas;
  }
  getEntrantes(){
    this.entrantesCollection=this.db.collection('Entrantes');
      var entrantes=this.entrantesCollection.snapshotChanges()
    return entrantes;
  }
  



 

 


    }
