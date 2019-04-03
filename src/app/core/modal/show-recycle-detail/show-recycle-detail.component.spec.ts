import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRecycleDetailComponent } from './show-recycle-detail.component';

describe('ShowRecycleDetailComponent', () => {
  let component: ShowRecycleDetailComponent;
  let fixture: ComponentFixture<ShowRecycleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRecycleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRecycleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
