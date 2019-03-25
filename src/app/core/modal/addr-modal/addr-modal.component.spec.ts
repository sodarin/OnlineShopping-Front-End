import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrModalComponent } from './addr-modal.component';

describe('AddrModalComponent', () => {
  let component: AddrModalComponent;
  let fixture: ComponentFixture<AddrModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
