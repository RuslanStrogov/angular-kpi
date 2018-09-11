import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiEditFormComponent } from './kpi-edit-form.component';

describe('KpiEditFormComponent', () => {
  let component: KpiEditFormComponent;
  let fixture: ComponentFixture<KpiEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
