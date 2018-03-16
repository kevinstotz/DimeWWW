import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimeindextableComponent } from './dimeindextable.component';

describe('DimeindextableComponent', () => {
  let component: DimeindextableComponent;
  let fixture: ComponentFixture<DimeindextableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimeindextableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimeindextableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
