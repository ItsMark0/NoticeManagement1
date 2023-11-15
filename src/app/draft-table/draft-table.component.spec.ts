import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftTableComponent } from './draft-table.component';

describe('DraftTableComponent', () => {
  let component: DraftTableComponent;
  let fixture: ComponentFixture<DraftTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DraftTableComponent]
    });
    fixture = TestBed.createComponent(DraftTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
