import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarNavegationComponent } from './nav-bar-navegation.component';

describe('NavBarNavegationComponent', () => {
  let component: NavBarNavegationComponent;
  let fixture: ComponentFixture<NavBarNavegationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarNavegationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarNavegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
