import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth-service.service';
import { FirestoreService } from 'src/app/firestore.service';

@Component({
  selector: 'app-nav-bar-navegation',
  templateUrl: './nav-bar-navegation.component.html',
  styleUrls: ['./nav-bar-navegation.component.css']
})
export class NavBarNavegationComponent implements OnInit {

usuarioiout;
uss=[];
name:string;

  constructor(private Fireout: AuthService, private firestoreservice:FirestoreService) {
    this.usuarioiout=Fireout.getU();
    this.uss=firestoreservice.au;
    this.name=this.getname();
   }
   
   getname(){
     for(var i=0;i<this.uss.length;i++){
       if(this.uss[i].id==this.usuarioiout){
         return this.uss[i].name;
       }
     }
   }


  ngOnInit() {
  }

}
