import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodypart3Component } from './bodypart3.component';

describe('Bodypart3Component', () => {
  let component: Bodypart3Component;
  let fixture: ComponentFixture<Bodypart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bodypart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bodypart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
