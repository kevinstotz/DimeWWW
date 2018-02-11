import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodypart4Component } from './bodypart4.component';

describe('Bodypart4Component', () => {
  let component: Bodypart4Component;
  let fixture: ComponentFixture<Bodypart4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bodypart4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bodypart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
