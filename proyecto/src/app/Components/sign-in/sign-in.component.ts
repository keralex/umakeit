import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/firestore.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  usuarios = [];
  users = {} as Usuario;
  usering;
  confirmar;
  
  constructor(private firestoreService: FirestoreService,) {
    this.confirmar = false;
    this.firestoreService.getUsers().subscribe(usuarios => {
      this.usuarios = usuarios;
      console.log(this.usuarios);
    });
   }

 

 autentificar(){
   for(var i=0; i<this.usuarios.length; i++){
     if(this.usuarios[i].email == this.users.email && this.usuarios[i].password == this.users.password){
       this.usuarios[i]==this.usering;
       this.users = {} as Usuario;
       this.confirmar = true;
     }
   }
   if(this.confirmar==false){
     this.alerts();
   }
 }
 alerts(){
  alert("email y contrasena no coinciden");
}

 ngOnInit() {
 }
 
}
