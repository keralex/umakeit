import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationRegistroComponent } from './navigation-registro.component';

describe('NavigationRegistroComponent', () => {
  let component: NavigationRegistroComponent;
  let fixture: ComponentFixture<NavigationRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
