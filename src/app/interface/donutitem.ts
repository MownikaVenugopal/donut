export interface Donuts {
    count:   number;
    results: DonutResults[];
}

export interface DonutResults {
    id:   number;
    ref:  string;
    name: string;
}
