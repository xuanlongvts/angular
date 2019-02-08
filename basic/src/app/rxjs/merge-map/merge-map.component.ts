import { Component, OnInit } from '@angular/core';

import { of, interval, Subject } from 'rxjs';
import { mergeMap, take, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-merge-map',
    templateUrl: './merge-map.component.html',
    styleUrls: ['./merge-map.component.scss'],
})
export class MergeMapComponent implements OnInit {
    private _unSubcribeAll: Subject<any> = new Subject();

    constructor() {}

    ngOnInit() {
        // Example 1: mergeMap with observable
        const source = of('Hello');
        const exam = source.pipe(mergeMap(val => of(`${val} world`)));
        exam.subscribe(val => console.log('val 111: ', val));

        // Example 2: mergeMap with promise
        const myPromise = val => new Promise(resolve => resolve(`${val} world from promise`));
        const exam1 = source.pipe(mergeMap(val => myPromise(val)));
        exam1.subscribe(val => console.log('val 222: ', val));

        // Example 3: mergeMap with resultSelector
        const exam2 = source.pipe(
            mergeMap(
                val => myPromise(val),
                (valueFromSource, valueFromPromise) => {
                    return `Source ${valueFromSource}, Promise: ${valueFromPromise}`;
                },
            ),
        );
        exam2.subscribe(val => console.log('val 333: ', val));

        // Example 4: mergeMap with concurrent value
        const sourceOne = interval(1000);
        const exam3 = sourceOne.pipe(
            mergeMap(val => interval(5000).pipe(take(2)), (oVal, iVal, oIndex, iIndex) => [oIndex, oVal, iIndex, iVal], 2),
        );
        exam3.pipe(takeUntil(this._unSubcribeAll)).subscribe(val => console.log('val 444: ', val));
    }

    ngOnDestroy() {
        this._unSubcribeAll.next();
        this._unSubcribeAll.complete();
    }
}
