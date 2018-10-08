import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaComidaComponent } from './vista-comida.component';

describe('VistaComidaComponent', () => {
  let component: VistaComidaComponent;
  let fixture: ComponentFixture<VistaComidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaComidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
