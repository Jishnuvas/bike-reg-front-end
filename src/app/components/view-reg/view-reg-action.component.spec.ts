import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegActionComponent } from './view-reg-action.component';

describe('ViewRegActionComponent', () => {
  let component: ViewRegActionComponent;
  let fixture: ComponentFixture<ViewRegActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRegActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRegActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
