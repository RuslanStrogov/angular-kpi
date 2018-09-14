import {Component, Input, OnInit} from '@angular/core';
import {KpiService} from "../kpi.service";
import {Kpi} from "../kpi.model";

@Component({
    selector: 'app-kpi-list',
    templateUrl: './kpi-list.component.html',
    styleUrls: ['./kpi-list.component.scss']
})
export class KpiListComponent implements OnInit {

    @Input() public itemsLimit;

    kpis: Kpi[];

    constructor(private kpiService: KpiService) {}

    onItemSelect(event, kpi: Kpi) {
        if (this.canKpiSelect(kpi)) {
            //Deselect all kpis then set selected
            this.kpis.forEach((kpiItem: Kpi) => {
                if (kpi.id === kpiItem.id)
                    kpiItem.selected = true;
                else
                    kpiItem.selected = false;
            });
            //Set
            this.kpiService.setKpi(kpi);
        }
    }

    canKpiSelect(kpi: Kpi) {
        return kpi.title && kpi.value ? true : false;
    }

    getKpis(): void {
        this.kpiService.getKpis()
            .subscribe((kpis: Kpi[]) => this.kpis = kpis);
    }

    ngOnInit() {
        this.getKpis();
    }

}
