import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodypart6Component } from './bodypart6.component';

describe('Bodypart6Component', () => {
  let component: Bodypart6Component;
  let fixture: ComponentFixture<Bodypart6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bodypart6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bodypart6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
