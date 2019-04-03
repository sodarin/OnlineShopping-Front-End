import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassegeComponent } from './passege.component';

describe('PassegeComponent', () => {
  let component: PassegeComponent;
  let fixture: ComponentFixture<PassegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
