import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodypart2Component } from './bodypart2.component';

describe('Bodypart2Component', () => {
  let component: Bodypart2Component;
  let fixture: ComponentFixture<Bodypart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bodypart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bodypart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
