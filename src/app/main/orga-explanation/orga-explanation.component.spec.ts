import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgaExplanationComponent } from './orga-explanation.component';

describe('OrgaExplanationComponent', () => {
  let component: OrgaExplanationComponent;
  let fixture: ComponentFixture<OrgaExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgaExplanationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgaExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
