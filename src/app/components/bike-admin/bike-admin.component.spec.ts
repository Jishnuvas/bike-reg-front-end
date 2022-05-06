import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeAdminComponent } from './bike-admin.component';

describe('BikeAdminComponent', () => {
  let component: BikeAdminComponent;
  let fixture: ComponentFixture<BikeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
