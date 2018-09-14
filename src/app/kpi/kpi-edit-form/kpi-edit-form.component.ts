import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { KpiService } from "../kpi.service";
import { Kpi } from "../kpi.model";

@Component({
    selector: 'app-kpi-edit-form',
    templateUrl: './kpi-edit-form.component.html',
    styleUrls: ['./kpi-edit-form.component.scss']
})
export class KpiEditFormComponent implements OnInit {

    kpi: Kpi;

    editForm = new FormGroup({
        itemTitle: new FormControl(),
        itemValue: new FormControl(),
        itemValueOption: new FormControl()
    });

    valueOptions = ['%', 'мин.', 'чел.'];

    constructor(private formBuilder: FormBuilder,
                private kpiService: KpiService) {
        this.getSelectedKpi();
        this.createForm();
    }

    getSelectedKpi(): void {
        this.kpiService.getSelected()
            .subscribe((kpi: Kpi) => {
            this.kpi = kpi;
            });
    }

    createForm() {
        //Form group
        this.editForm = this.formBuilder.group({
            itemTitle: '',
            itemValue: '',
            itemValueOption: ['%']
        });
        //Change listener
        this.editForm.controls['itemValue'].valueChanges.subscribe(() => {
                console.log('this.editForm.value', this.editForm.value.itemValue);
                console.log('this.editForm.get(itemValue).value', this.editForm.get('itemValue').value);
                if(this.editForm.value.itemValue && this.editForm.get('itemValue').value && this.editForm.value.itemValue != this.editForm.get('itemValue').value) {
                    this.kpiService.calculateUpdates(this.kpi, this.editForm.get('itemValue').value);
                }
            }
        );
    }

    ngOnInit() {
    }

}
