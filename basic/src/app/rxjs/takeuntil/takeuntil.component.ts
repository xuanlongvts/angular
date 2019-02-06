import { Component, OnInit } from '@angular/core';

import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-takeuntil',
    templateUrl: './takeuntil.component.html',
    styleUrls: ['./takeuntil.component.scss'],
})
export class TakeuntilComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        const source = interval(1000);
        const timer$ = timer(5000);

        const exam = source.pipe(takeUntil(timer$));
        exam.subscribe(val => console.log('val: ', val));
    }
}
