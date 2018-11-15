import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth-service.service';
import { FirestoreService } from 'src/app/firestore.service';

@Component({
  selector: 'app-nav-bar-admin',
  templateUrl: './nav-bar-admin.component.html',
  styleUrls: ['./nav-bar-admin.component.css']
})
export class NavBarAdminComponent implements OnInit {
  usuarioiout;
  uss=[];
  name:string;

  constructor(private fireout: AuthService, private firestoreservice:FirestoreService) { 
    this.usuarioiout=fireout.getU();
    this.uss=firestoreservice.au;
    this.name=this.getname();
  }

   
  getname(){
    for(var i=0;i<this.uss.length;i++){
      if(this.uss[i].email==this.usuarioiout){
        return this.uss[i].name;
      }
    }
  }



  ngOnInit() {
  }

}
