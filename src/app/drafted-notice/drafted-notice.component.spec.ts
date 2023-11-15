import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftedNoticeComponent } from './drafted-notice.component';

describe('DraftedNoticeComponent', () => {
  let component: DraftedNoticeComponent;
  let fixture: ComponentFixture<DraftedNoticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DraftedNoticeComponent]
    });
    fixture = TestBed.createComponent(DraftedNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
