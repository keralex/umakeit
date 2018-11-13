import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vista-comida',
  templateUrl: './vista-comida.component.html',
  styleUrls: ['./vista-comida.component.css']
})
export class VistaComidaComponent implements OnInit {

  constructor(public menuService:MenuService , public router:Router,  private route:ActivatedRoute) { }
  plates;

  ngOnInit() {
      let name=this.route.snapshot.paramMap.get('key');
      console.log("entre al ts de comida")
      console.log(name);
      
      let type=this.route.snapshot.paramMap.get('type');
      this.plates=this.menuService.getByName(name,type).subscribe(platos=>{
        console.log(name);
        this.plates=platos;
        
        console.log(this.plates)
      });
  }

  addToCart(){
  }


}
