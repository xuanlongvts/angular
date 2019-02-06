import { Component, OnInit } from '@angular/core';

import { timer, interval, fromEvent, Subject, merge, empty } from 'rxjs';
import { switchMap, mapTo, takeUntil, scan, takeWhile, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-switch-map',
    templateUrl: './switch-map.component.html',
    styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent implements OnInit {
    private _unSubcribeAll: Subject<any> = new Subject();

    constructor() {}

    ngOnInit() {
        // //  Example 1: Restart interval every 5 seconds
        // const source = timer(0, 5000); // emit immediately, then every 5s
        // const exam = source.pipe(switchMap(() => interval(1000)));
        // exam.pipe(takeUntil(this._unSubcribeAll)).subscribe(val => console.log('val 000: ', val));
        // // // ======================================================================

        // Example 2: Reset on every click
        const sourceOne = fromEvent(document.getElementById('btnClick'), 'click');
        const examOne = sourceOne.pipe(switchMap(() => interval(3000).pipe(mapTo('Hello, I made it!'))));
        examOne.pipe(takeUntil(this._unSubcribeAll)).subscribe(val => console.log('val 111: ', val));

        // // ======================================================================
        // // // Example 3: Using a resultSelector function
        // const sourceTwo = timer(0, 5000); // emit immediately, then every 5s
        // const examTwo = sourceTwo.pipe(
        //     switchMap(
        //         () => interval(2000),
        //         (outerValue, innerValue, outerIndex, innerIndex) => ({
        //             outerValue,
        //             innerValue,
        //             outerIndex,
        //             innerIndex,
        //         }),
        //     ),
        // );
        // examTwo.pipe(takeUntil(this._unSubcribeAll)).subscribe(val => console.log('val 222: ', val));

        // // ======================================================================
        // // Example 4: Countdown timer with switchMap
        const countdownSeconds = 10;
        const setHTML = id => val => (document.getElementById(id).innerHTML = val);
        const pauseButton = document.getElementById('pause');
        const resumeButton = document.getElementById('resume');
        const interval$ = interval(1000).pipe(mapTo(-1));

        const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));
        const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo(true));

        setHTML('remaining')(countdownSeconds); // init set value
        const timer$ = merge(pause$, resume$)
            .pipe(
                startWith(true),
                switchMap(val => {
                    return val ? interval$ : empty();
                }),
                scan((acc, curr) => (curr ? curr + acc : acc), countdownSeconds),
                takeWhile(v => v >= 0),
            )
            .pipe(takeUntil(this._unSubcribeAll))
            .subscribe(setHTML('remaining'));
    }

    ngOnDestroy() {
        this._unSubcribeAll.next();
        this._unSubcribeAll.complete();
    }
}
