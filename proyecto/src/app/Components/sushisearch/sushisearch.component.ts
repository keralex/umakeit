import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 import { MenuService } from 'src/app/menu.service';

@Component({
  selector: 'app-sushisearch',
  templateUrl: './sushisearch.component.html',
  styleUrls: ['./sushisearch.component.css']
})
export class SushisearchComponent implements OnInit {

  constructor(public menuService:MenuService) { }
  
  ngOnInit() {
    
  }

}
