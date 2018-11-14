import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifymenuComponent } from './modifymenu.component';

describe('ModifymenuComponent', () => {
  let component: ModifymenuComponent;
  let fixture: ComponentFixture<ModifymenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifymenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifymenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
