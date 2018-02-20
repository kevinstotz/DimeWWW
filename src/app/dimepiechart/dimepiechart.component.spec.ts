import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimepiechartComponent } from './dimepiechart.component';

describe('DimepiechartComponent', () => {
  let component: DimepiechartComponent;
  let fixture: ComponentFixture<DimepiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimepiechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimepiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
