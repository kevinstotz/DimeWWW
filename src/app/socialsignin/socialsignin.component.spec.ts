import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsigninComponent } from './socialsignin.component';

describe('SocialsigninComponent', () => {
  let component: SocialsigninComponent;
  let fixture: ComponentFixture<SocialsigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialsigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
