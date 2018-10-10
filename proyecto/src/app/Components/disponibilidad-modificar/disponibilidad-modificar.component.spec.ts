import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilidadModificarComponent } from './disponibilidad-modificar.component';

describe('DisponibilidadModificarComponent', () => {
  let component: DisponibilidadModificarComponent;
  let fixture: ComponentFixture<DisponibilidadModificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisponibilidadModificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisponibilidadModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
