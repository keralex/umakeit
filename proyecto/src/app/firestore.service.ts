import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { map } from 'rxjs/operators';
import { AuthService } from './auth-service.service';



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  
  usuariosCollection: AngularFirestoreCollection;
  usuarios: Observable <Usuario[]>;
  au=[];

  constructor(public db: AngularFirestore, private AuthService:AuthService) {
    
    this.getu().subscribe(data =>{
      data.forEach(element =>{
        this.au.push(element.payload.doc.data());
      })
    })
    this.usuariosCollection = this.db.collection('usuarios');
    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(map(actions => {
        return actions.map(a => { 
        const data = a.payload.doc.data() as Usuario; 
        data.id= a.payload.doc.id;
        return data;
        });
      }));

}


  getu(){
    return this.db.collection('usuarios').snapshotChanges();
  }

  getUsers(){
    return this.usuarios;
  }

  addUser(usuario: any , id: any){
    return this.db.collection('/usuarios').doc(id).set(
      {...usuario},
      {merge:true }
    );
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