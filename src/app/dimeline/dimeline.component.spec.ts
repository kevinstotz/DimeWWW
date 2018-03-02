import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimelineComponent } from './dimeline.component';

describe('DimelineComponent', () => {
  let component: DimelineComponent;
  let fixture: ComponentFixture<DimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
