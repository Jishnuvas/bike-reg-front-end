import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingActionComponent } from './landing-action.component';

describe('LandingActionComponent', () => {
  let component: LandingActionComponent;
  let fixture: ComponentFixture<LandingActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
