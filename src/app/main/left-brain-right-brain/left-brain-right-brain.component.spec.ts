import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBrainRightBrainComponent } from './left-brain-right-brain.component';

describe('LeftBrainRightBrainComponent', () => {
  let component: LeftBrainRightBrainComponent;
  let fixture: ComponentFixture<LeftBrainRightBrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftBrainRightBrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBrainRightBrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
