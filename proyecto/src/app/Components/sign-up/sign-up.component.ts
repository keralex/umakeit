import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/firestore.service';
import { AuthService  } from 'src/app/auth-service.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { defineBase } from '@angular/core/src/render3';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

 usuarios = [];
 users = {} as Usuario;
 listo = false;


  constructor(private firestoreService: FirestoreService, public router:Router, private AuthService: AuthService) { 
    this.users.admin = false;
    this.firestoreService.getUsers().subscribe(usuarios => {
      this.usuarios = usuarios;
      console.log(this.usuarios);
    });
  }

  ngOnInit() {
    
  }
  
alerts(){
  if(this.users.name == null || this.users.email == null || this.users.password == null){
    alert("Complete todos los campos");
  }  else if(this.users.name != null && this.users.email != null && this.users.password != null && this.users.password == this.users.passwordc){
    alert("Registro completado satisfactoriamente");
  }else if(this.users.password !== this.users.passwordc){
    alert("Las contrasenas no coinciden");
  }
}
addUser(){
  console.log(this.users)
 if(this.users.password == this.users.passwordc){
  this.AuthService.register(this.users.email,this.users.password)
  .then( data => {
    let userID = data.user.uid;
    let user = {
      name: this.users.name,
      email: this.users.email,
      password:this.users.password,
      admin: false,
      cart:[],
      PreOrders:[]
    }
    

    this.firestoreService.addUser( user , userID )
    .then( () => {
        this.users = {} as Usuario;
      
        this.gotoDetail() 
      }
    )
    .catch( err => {
      console.log( "No se pudo crear el usuario en la bd. Error:" , err.message )
    })
  })
  .catch( err => {
    console.log(err.message);
    alert("Error");
  })
 }else{
   this.alerts();
 }
 
}



gotoDetail(){
  this.router.navigate([`/home`]);
 }


}