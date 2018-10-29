import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/firestore.service';
import { Usuario } from 'src/app/models/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/menu.service';

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
  
  constructor(private firestoreService: FirestoreService, private router: Router) {
    this.confirmar = false;
    this.firestoreService.getUsers().subscribe(usuarios => {
      this.usuarios = usuarios;
      console.log(this.usuarios);
    });
   }

 

 autentificar(){
   for(var i=0; i<this.usuarios.length; i++){
     if(this.usuarios[i].email == this.users.email && this.usuarios[i].password == this.users.password){
       
       this.users = {} as Usuario;
       this.confirmar = true;
       this.gotoDetail(this.usuarios[i].id);
     }
   }
   //if(this.confirmar==false){
     //this.alerts();
   //}
 }
 //alerts(){
  //alert("email y contrasena no coinciden");
//}

gotoDetail(id){
 this.router.navigate([`/shopping/menu/Sushi`]);
}

 ngOnInit() {
 }
 
}
