import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-kpi-item',
    templateUrl: './kpi-item.component.html',
    styleUrls: ['./kpi-item.component.scss']
})
export class KpiItemComponent implements OnInit {

    @Input() public item;

    constructor() {}

    ngOnInit() {
    }

}
