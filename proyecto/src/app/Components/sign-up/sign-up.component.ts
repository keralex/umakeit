import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/firestore.service';
import { AuthService} from 'src/app/auth-service.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';


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
 /* if(this.users.name != null && this.users.email != null && this.users.password != null && this.users.password == this.users.passwordc) {
   this.firestoreService.addUsers(this.users);
   this.users = {} as Usuario;
    this.gotoDetail();
  }
 this.alerts();*/
 if(this.users.name != null && this.users.email != null && this.users.password != null && this.users.password == this.users.passwordc){
  this.AuthService.register(this.users.email,this.users.password);
  this.users = {} as Usuario;
  this.gotoDetail();
 }
 

 
}
gotoDetail(){
  this.router.navigate([`/shopping/menu/Sushi`]);
 }


}