import { Component, OnInit } from '@angular/core';

import { takeUntil } from 'rxjs/operators';
import { timer, Subject } from 'rxjs';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
    private _unSubcribeAll: Subject<any> = new Subject();

    constructor() {}

    ngOnInit() {
        // Example 1: timer emits 1 value then completes
        const source = timer(1000);
        source.subscribe(val => console.log('val: ', val));

        // Example 2: timer emits after 1 second, then every 3 seconds
        const sourceOne = timer(1000, 3000);
        sourceOne.pipe(takeUntil(this._unSubcribeAll)).subscribe(val => console.log('val 111: ', val));
    }

    ngOnDestroy() {
        this._unSubcribeAll.next();
        this._unSubcribeAll.complete();
    }
}
