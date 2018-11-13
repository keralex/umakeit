import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAnterioresUsuarioComponent } from './pedidos-anteriores-usuario.component';

describe('PedidosAnterioresUsuarioComponent', () => {
  let component: PedidosAnterioresUsuarioComponent;
  let fixture: ComponentFixture<PedidosAnterioresUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosAnterioresUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosAnterioresUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
