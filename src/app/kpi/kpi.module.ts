import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpiListComponent } from './kpi-list/kpi-list.component';
import { KpiItemComponent } from './kpi-item/kpi-item.component';
import { KpiEditFormComponent } from './kpi-edit-form/kpi-edit-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [KpiListComponent, KpiItemComponent, KpiEditFormComponent]
})
export class KpiModule { }
