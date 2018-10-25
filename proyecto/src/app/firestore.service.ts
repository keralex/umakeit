import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  
  usuariosCollection: AngularFirestoreCollection;
  usuarios: Observable <Usuario[]>;
  usuariosDoc;

  constructor(public db: AngularFirestore) {
    this.usuariosCollection = this.db.collection('usuarios');
    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => { 
      const data = a.payload.doc.data() as Usuario; 
      data.id = a.payload.doc.id;
      return data;
   });
 }));
}

  getUsers(){
    return this.usuarios;
  }

  addUsers(usuario: Usuario){
    this.usuariosCollection.add(usuario);
  }

  getbyid(id){
    let aux: any;
    for(let i=0; i<this.usuariosCollection.get.length;i++){
      if(this.usuariosCollection[i].id===id.toString()){
        aux=this.usuariosCollection[i]
      }
    }
    return aux;
  }
}