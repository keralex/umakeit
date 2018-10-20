import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCategoriasComponent } from './menu-categorias.component';

describe('MenuCategoriasComponent', () => {
  let component: MenuCategoriasComponent;
  let fixture: ComponentFixture<MenuCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
