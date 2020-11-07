import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricecalcComponent } from './pricecalc.component';

describe('PricecalcComponent', () => {
  let component: PricecalcComponent;
  let fixture: ComponentFixture<PricecalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricecalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricecalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
