import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuario: Observable<firebase.User>;

  constructor( private firebaseAuth:AngularFireAuth, private router:Router) { 
    this.usuario= firebaseAuth.authState;
  }


  login(email:string, contraseña:string){
      return this.firebaseAuth.auth.signInWithEmailAndPassword(email,contraseña);
  }

  register(email: string, contraseña:string){
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email,contraseña);
  }

  
  logout(){
    this.router.navigate(['/login']);
    return this.firebaseAuth.auth.signOut();
  }

  getuser(){
    return this.usuario;
  }

  getU(){
    var user = this.firebaseAuth.auth.currentUser;



    if(user!=null){
      console.log(user.uid);
      return user.email;
    }
  }
  getId(){
    var user = this.firebaseAuth.auth.currentUser;
    if(user!=null){
      return user.uid;
    }
  }

  
}