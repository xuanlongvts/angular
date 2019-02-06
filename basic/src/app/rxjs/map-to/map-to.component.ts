import { Component, OnInit } from '@angular/core';

import { interval, fromEvent, Subject } from 'rxjs';
import { mapTo, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-map-to',
    templateUrl: './map-to.component.html',
    styleUrls: ['./map-to.component.scss'],
})
export class MapToComponent implements OnInit {
    private _unSubcribeAll: Subject<any> = new Subject();

    constructor() {}

    ngOnInit() {
        // Example 1: Map every emission to string
        const source = interval(1000);

        const exam = source.pipe(mapTo('Hello world')).pipe(takeUntil(this._unSubcribeAll));
        exam.subscribe(val => console.log('val: ', val));

        // Example 2: Mapping clicks to string
        const source1 = fromEvent(document.getElementById('mapToClick'), 'click');
        const exam1 = source1.pipe(mapTo('Goodbye world!'));
        exam1.subscribe(val => console.log('val: ', val));
    }

    ngOnDestroy() {
        this._unSubcribeAll.next();
        this._unSubcribeAll.complete();
    }
}
