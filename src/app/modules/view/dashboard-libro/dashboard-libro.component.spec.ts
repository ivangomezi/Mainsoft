import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLibroComponent } from './dashboard-libro.component';

describe('DashboardLibroComponent', () => {
  let component: DashboardLibroComponent;
  let fixture: ComponentFixture<DashboardLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardLibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
