import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationUsuarioComponent } from './navigation-usuario.component';

describe('NavigationUsuarioComponent', () => {
  let component: NavigationUsuarioComponent;
  let fixture: ComponentFixture<NavigationUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
