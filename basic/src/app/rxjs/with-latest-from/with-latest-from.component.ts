import { Component, OnInit } from '@angular/core';

import { withLatestFrom, map, takeUntil } from 'rxjs/operators';
import { interval, Subject } from 'rxjs';

@Component({
    selector: 'app-with-latest-from',
    templateUrl: './with-latest-from.component.html',
    styleUrls: ['./with-latest-from.component.scss'],
})
export class WithLatestFromComponent implements OnInit {
    private _unSubcribeAll: Subject<any> = new Subject();

    constructor() {}

    ngOnInit() {
        // Latest value from quicker second source
        // const sourceFirst = interval(3000);
        // const sourceSecond = interval(1000);
        // const exam = sourceFirst.pipe(
        //     withLatestFrom(sourceSecond),
        //     map(([first, second]) => {
        //         return `First source (3s): ${first}, Second source (1s): ${second}`;
        //     }),
        // );
        // exam.pipe(takeUntil(this._unSubcribeAll)).subscribe(val => console.log('val: ', val));

        // Slower second source
        const sourceOne = interval(3000);
        const sourceTwo = interval(1000);
        const examRes = sourceTwo.pipe(
            withLatestFrom(sourceOne),
            map(([first, second]) => {
                return `Source (1s): ${first}, Lastest from (3s): ${second}`;
            }),
        );
        examRes.pipe(takeUntil(this._unSubcribeAll)).subscribe(val => console.log('val: ', val));
    }

    ngOnDestroy() {
        this._unSubcribeAll.next();
        this._unSubcribeAll.complete();
    }
}
