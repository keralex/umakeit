import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-comida',
  templateUrl: './vista-comida.component.html',
  styleUrls: ['./vista-comida.component.css']
})
export class VistaComidaComponent implements OnInit {

  constructor(public menuService:MenuService , public router:Router,  private route:ActivatedRoute) { }

  ngOnInit() {
      
  }

}
