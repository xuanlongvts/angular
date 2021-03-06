import { Component, OnInit } from '@angular/core';

import { mapTo, takeUntil, merge as mergeOne } from 'rxjs/operators';
import { interval, merge, Subject } from 'rxjs';

@Component({
    selector: 'app-merge',
    templateUrl: './merge.component.html',
    styleUrls: ['./merge.component.scss'],
})
export class MergeComponent implements OnInit {
    private _unSubcribeAll: Subject<any> = new Subject();

    constructor() {}

    ngOnInit() {
        // Example 1: merging multiple observables, static method
        // const first = interval(2500);
        // const second = interval(1500);
        // const third = interval(2000);
        // const fourth = interval(1000);

        // const exam = merge(
        //     first.pipe(mapTo('Mot ne!')),
        //     second.pipe(mapTo('Hai ne')),
        //     third.pipe(mapTo('Ba ne')),
        //     fourth.pipe(mapTo('Bon')),
        // );
        // exam.pipe(takeUntil(this._unSubcribeAll)).subscribe(val => console.log('val 111: ', val));

        // Example 2: merge 2 observables, instance method
        const five = interval(5000);
        const six = interval(1000);
        const examOne = five.pipe(mergeOne(six));
        examOne.pipe(takeUntil(this._unSubcribeAll)).subscribe(val => console.log('val 222: ', val));
    }

    ngOnDestroy() {
        this._unSubcribeAll.next();
        this._unSubcribeAll.complete();
    }
}
