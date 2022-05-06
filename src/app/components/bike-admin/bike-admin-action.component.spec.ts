import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeAdminActionComponent } from './bike-admin-action.component';

describe('BikeAdminActionComponent', () => {
  let component: BikeAdminActionComponent;
  let fixture: ComponentFixture<BikeAdminActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeAdminActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeAdminActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
