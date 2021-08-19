import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearTransactionsComponent } from './clear-transactions.component';

describe('ClearTransactionsComponent', () => {
  let component: ClearTransactionsComponent;
  let fixture: ComponentFixture<ClearTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
