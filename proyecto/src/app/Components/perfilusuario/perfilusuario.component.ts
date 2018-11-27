import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth-service.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.component.html',
  styleUrls: ['./perfilusuario.component.css']
})
export class PerfilusuarioComponent implements OnInit {
  usuario;

  constructor(public db:AngularFirestore , public authService:AuthService) {
     this.db.collection('usuarios').doc(this.authService.getId()).ref.get().then(doc=> {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log(doc.data().name);
        this.usuario=doc.data();
      }
    }

    ).catch(err => {
      console.log('Error getting document', err);
    });
    console.log(usuario);
   }

  ngOnInit() {
    
  }

}
