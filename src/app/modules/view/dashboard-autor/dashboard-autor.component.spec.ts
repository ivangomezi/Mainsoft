import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAutorComponent } from './dashboard-autor.component';

describe('DashboardAutorComponent', () => {
  let component: DashboardAutorComponent;
  let fixture: ComponentFixture<DashboardAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
