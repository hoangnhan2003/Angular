import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCraeteComponent } from './customer-craete.component';

describe('CustomerCraeteComponent', () => {
  let component: CustomerCraeteComponent;
  let fixture: ComponentFixture<CustomerCraeteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCraeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCraeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
