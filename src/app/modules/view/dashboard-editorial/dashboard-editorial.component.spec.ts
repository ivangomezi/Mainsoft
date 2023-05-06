import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEditorialComponent } from './dashboard-editorial.component';

describe('DashboardEditorialComponent', () => {
  let component: DashboardEditorialComponent;
  let fixture: ComponentFixture<DashboardEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEditorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
