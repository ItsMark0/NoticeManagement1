import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeTypeComponent } from './notice-type.component';

describe('NoticeTypeComponent', () => {
  let component: NoticeTypeComponent;
  let fixture: ComponentFixture<NoticeTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticeTypeComponent]
    });
    fixture = TestBed.createComponent(NoticeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
