import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { KpiListComponent } from './kpi-list/kpi-list.component';
import { KpiItemComponent } from './kpi-item/kpi-item.component';
import { KpiEditFormComponent } from './kpi-edit-form/kpi-edit-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    KpiListComponent,
    KpiItemComponent,
    KpiEditFormComponent
  ],
  exports: [
    KpiListComponent,
    KpiEditFormComponent
  ]
})
export class KpiModule { }
