import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlateComponent } from './outlate.component';

describe('OutlateComponent', () => {
  let component: OutlateComponent;
  let fixture: ComponentFixture<OutlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
