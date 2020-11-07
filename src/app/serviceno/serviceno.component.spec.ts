import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicenoComponent } from './serviceno.component';

describe('ServicenoComponent', () => {
  let component: ServicenoComponent;
  let fixture: ComponentFixture<ServicenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
