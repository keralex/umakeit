import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import {  ReplaySubject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import {sushi} from '../../models/Sushi';


@Component({
  selector: 'app-vista-comida',
  templateUrl: './vista-comida.component.html',
  styleUrls: ['./vista-comida.component.css']
})
export class VistaComidaComponent implements OnInit {  

  starAt=new Subject();
  endAt=new Subject();
  startobs=this.starAt.asObservable();
  endobs=this.endAt.asObservable();
  type;
  searchterm:string;
  currentRoute = new Subject();
  plate;
  
  constructor(public menuService:MenuService , public router:Router,  private route:ActivatedRoute) { 
    let id=this.route.snapshot.paramMap.get('id');

    console.log(id);
    
    let type=this.route.snapshot.paramMap.get('type');
    var getDoc=this.menuService.getById(id,type).ref.get().then(doc=> {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
        this.plate=doc.data();
      }
    }

    ).catch(err => {
      console.log('Error getting document', err);
    });
  }


  ngOnInit() {
    

    }

  addToCart(){
  }


}
