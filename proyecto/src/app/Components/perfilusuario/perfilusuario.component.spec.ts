import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilusuarioComponent } from './perfilusuario.component';

describe('PerfilusuarioComponent', () => {
  let component: PerfilusuarioComponent;
  let fixture: ComponentFixture<PerfilusuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilusuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
