import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
    selector: 'app-tap',
    templateUrl: './tap.component.html',
    styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        // Example 1: Logging with do
        const source = of(1, 2, 3, 4, 5);
        const exam = source.pipe(
            tap(val => `Before map: ${val}`),
            map(val => val + 10),
            tap(val => `After map ${val}`),
        );
        exam.subscribe(val => console.log('val: ', val));
    }
}
