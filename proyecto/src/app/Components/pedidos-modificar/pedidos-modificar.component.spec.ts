import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosModificarComponent } from './pedidos-modificar.component';

describe('PedidosModificarComponent', () => {
  let component: PedidosModificarComponent;
  let fixture: ComponentFixture<PedidosModificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosModificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
