import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';
import { takeWhile, filter } from 'rxjs/operators';

@Component({
    selector: 'app-take-while',
    templateUrl: './take-while.component.html',
    styleUrls: ['./take-while.component.scss'],
})
export class TakeWhileComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        // Example 1: Take values under limit
        const source = of(1, 2, 3, 4, 5, 6);
        const exam = source.pipe(takeWhile(val => val <= 4));
        exam.subscribe(val => console.log('val 111: ', val));

        console.log('=========================================');
        // Example 2: Difference between takeWhile() and filter()
        const sourceOne = of(3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3);
        sourceOne.pipe(takeWhile(it => it === 3)).subscribe(val => console.log('val 222: ', val)); // three times 3

        // ket qua khac
        // sourceOne.pipe(takeWhile(it => it === 3));
        // sourceOne.subscribe(val => console.log('val 222: ', val));

        console.log('=========================================');
        sourceOne.pipe(filter(it => it === 3)).subscribe(val => console.log('val 333:', val)); // output: [3, 3, 3, 3, 3, 3, 3], seven times
    }
}
