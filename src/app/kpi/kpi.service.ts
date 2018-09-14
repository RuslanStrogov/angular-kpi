import { Observable, of, Subject, timer } from 'rxjs';
import { Injectable } from '@angular/core';
import { Kpi } from './Kpi.model';
import { kpis } from './mock-kpis';

@Injectable({
    providedIn: 'root'
})
export class KpiService {

    constructor() {}

    private selectedKpi = new Subject<Kpi>();

    getKpis(): Observable<Kpi[]> {
        return of(kpis);
    }

    getSelected(): Observable<Kpi> {
        return this.selectedKpi.asObservable();
    }

    setKpi(kpi: Kpi) {
        this.selectedKpi.next(<Kpi>kpi);
    }

    calculateUpdates(kpi: Kpi, newValue: number) {
        let oldValue = kpi.value;
        timer(1000).subscribe(x =>{
            console.log('upfate', oldValue - 100 / oldValue * newValue);
        });
    }

}
