import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiItemComponent } from './kpi-item.component';

describe('KpiItemComponent', () => {
  let component: KpiItemComponent;
  let fixture: ComponentFixture<KpiItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
