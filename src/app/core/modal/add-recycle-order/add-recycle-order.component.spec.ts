import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecycleOrderComponent } from './add-recycle-order.component';

describe('AddRecycleOrderComponent', () => {
  let component: AddRecycleOrderComponent;
  let fixture: ComponentFixture<AddRecycleOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecycleOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecycleOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
