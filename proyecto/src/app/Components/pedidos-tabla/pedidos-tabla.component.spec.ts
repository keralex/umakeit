import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosTablaComponent } from './pedidos-tabla.component';

describe('PedidosTablaComponent', () => {
  let component: PedidosTablaComponent;
  let fixture: ComponentFixture<PedidosTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
