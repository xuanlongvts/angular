import { Component, OnInit } from '@angular/core';

import { startWith, scan, takeUntil } from 'rxjs/operators';
import { of, interval, Subject } from 'rxjs';

@Component({
    selector: 'app-start-with',
    templateUrl: './start-with.component.html',
    styleUrls: ['./start-with.component.scss'],
})
export class StartWithComponent implements OnInit {
    private _unSubcribeAll: Subject<any> = new Subject();

    constructor() {}

    ngOnInit() {
        // Example 1: startWith on number sequence
        const source = of(1, 2, 3, 4, 5);
        const exam = source.pipe(startWith(0));
        exam.subscribe(val => console.log('val 111: ', val));

        console.log('========================');
        // Example 2: startWith for initial scan value
        const sourceOne = of('World!', 'Goodbye', 'World!');
        const examOne = sourceOne.pipe(
            startWith('Hello'),
            scan((acc, curr) => `${acc} ${curr}`),
        );
        examOne.subscribe(val => console.log('val 222: ', val));

        console.log('=========================');
        // Example 3: startWith multiple values
        const sourceTwo = interval(1000);
        const examTwo = sourceTwo.pipe(startWith(-3, -2, -1));
        examTwo.pipe(takeUntil(this._unSubcribeAll)).subscribe(val => console.log('val 333: ', val));
    }

    ngOnDestroy() {
        this._unSubcribeAll.next();
        this._unSubcribeAll.complete();
    }
}
