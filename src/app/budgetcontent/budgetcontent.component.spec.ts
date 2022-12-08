import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetcontentComponent } from './budgetcontent.component';

describe('BudgetcontentComponent', () => {
  let component: BudgetcontentComponent;
  let fixture: ComponentFixture<BudgetcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
