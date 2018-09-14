import { Kpi } from './kpi.model';

export const kpis: Kpi[] = [
    {
        id: 1,
        title: "Посетители (Все)",
        value: 65022,
        valueOption: "чел.",
        updatesVector: "up",
        updatesValue: "+7.00%"
    },
    {
        id: 2,
        title: "Длительность",
        value: 53,
        valueOption: "мин.",
        updatesVector: "down",
        updatesValue: "-19.00%"
    },
    {
        id: 3,
        title: "Доля лояльных",
        value: 65,
        valueOption: "%",
        updatesVector: "up",
        updatesValue: "+7.00%"
    },
    {
        id: 4,
        title: "Доля новых",
        value: 35,
        valueOption: "%",
        updatesVector: "down",
        updatesValue: "-10.00%"
    },
    {
        id: 5,
        title: "Доля вовлеченных",
        value: 65,
        valueOption: "%",
        updatesVector: "right",
        updatesValue: "-2.00%"
    },
    {
        title: "Shopping index"
    }
];
