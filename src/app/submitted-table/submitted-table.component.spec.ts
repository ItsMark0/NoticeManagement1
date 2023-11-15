import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedTableComponent } from './submitted-table.component';

describe('SubmittedTableComponent', () => {
  let component: SubmittedTableComponent;
  let fixture: ComponentFixture<SubmittedTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmittedTableComponent]
    });
    fixture = TestBed.createComponent(SubmittedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
