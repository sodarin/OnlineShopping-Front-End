import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecycleTableComponent } from './recycle-table.component';

describe('RecycleTableComponent', () => {
  let component: RecycleTableComponent;
  let fixture: ComponentFixture<RecycleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecycleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecycleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
