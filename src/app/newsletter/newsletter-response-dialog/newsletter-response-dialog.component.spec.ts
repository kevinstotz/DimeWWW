import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterResponseDialogComponent } from './newsletter-response-dialog.component';

describe('NewsletterResponseDialogComponent', () => {
  let component: NewsletterResponseDialogComponent;
  let fixture: ComponentFixture<NewsletterResponseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterResponseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterResponseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
