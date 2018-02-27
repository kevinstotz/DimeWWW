import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodypart5Component } from './bodypart5.component';

describe('Bodypart5Component', () => {
  let component: Bodypart5Component;
  let fixture: ComponentFixture<Bodypart5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bodypart5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bodypart5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
