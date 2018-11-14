import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/firestore.service';
import { Usuario } from 'src/app/models/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/menu.service';
import { AuthService } from 'src/app/auth-service.service';

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
  usuarioid;
  useractv;
  
  constructor(private auth:AuthService, private router: Router) {
    this.useractv=this.auth;
   }

 

 autentificar(){
  this.useractv.login(this.users.email,this.users.password) .then( () => {
    this.gotoDetail();
  }
)
.catch( err => {
  console.log( "Error:" , err.message );
  this.alerts();
})
 }
 alerts(){
  alert("email y contrasena no coinciden");
}

gotoDetail(){
 this.router.navigate([`/home`]);
}

 ngOnInit() {
 }
 
}