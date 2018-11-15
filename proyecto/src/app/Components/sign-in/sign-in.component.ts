import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/firestore.service';
import { Usuario } from 'src/app/models/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/menu.service';
import { AuthService } from 'src/app/auth-service.service';
import { fcall } from 'q';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  usuarios = [];
  users = {} as Usuario;
  useractv;
  admin;
  
  constructor(private auth:AuthService, private router: Router, private firestoreservice:FirestoreService) {
    this.useractv=this.auth;
    this.usuarios=firestoreservice.au;
   }

 autentificar(){

  for(var i=0;i<this.usuarios.length;i++){
    if(this.usuarios[i].email==this.users.email){
      this.admin=this.usuarios[i].admin;
      this.useractv.login(this.users.email,this.users.password).then( () => {
        this.gotoDetail(this.admin);
      }
    )
    .catch( err => {
      console.log( "Error:" , err.message );
      this.alerts();
    })
    }
  }

}

 
 alerts(){
  alert("email y contrasena no coinciden");
}

gotoDetail(admin: boolean){
  if(admin==true){
    this.router.navigate(['/Admin']);
  }else if(admin==false){
    this.router.navigate(['/home']);
  }
 
}

 ngOnInit() {
 }
 
}