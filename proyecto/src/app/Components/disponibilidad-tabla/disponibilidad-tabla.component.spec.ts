import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilidadTablaComponent } from './disponibilidad-tabla.component';

describe('DisponibilidadTablaComponent', () => {
  let component: DisponibilidadTablaComponent;
  let fixture: ComponentFixture<DisponibilidadTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisponibilidadTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisponibilidadTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
