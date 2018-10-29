import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SushisearchComponent } from './sushisearch.component';

describe('SushisearchComponent', () => {
  let component: SushisearchComponent;
  let fixture: ComponentFixture<SushisearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SushisearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SushisearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
