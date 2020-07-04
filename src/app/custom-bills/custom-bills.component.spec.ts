import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBillsComponent } from './custom-bills.component';

describe('CustomBillsComponent', () => {
  let component: CustomBillsComponent;
  let fixture: ComponentFixture<CustomBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
