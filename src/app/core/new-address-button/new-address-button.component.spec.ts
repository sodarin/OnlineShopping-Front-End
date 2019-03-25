import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAddressButtonComponent } from './new-address-button.component';

describe('NewAddressButtonComponent', () => {
  let component: NewAddressButtonComponent;
  let fixture: ComponentFixture<NewAddressButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAddressButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAddressButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
