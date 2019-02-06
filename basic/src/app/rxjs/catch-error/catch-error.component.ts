import { Component, OnInit } from '@angular/core';

import { throwError, from, timer, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

@Component({
    selector: 'app-catch-error',
    templateUrl: './catch-error.component.html',
    styleUrls: ['./catch-error.component.scss'],
})
export class CatchErrorComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        // Example 1: Catching error from observable
        const source = throwError('This is an error!');
        const exam = source.pipe(catchError(val => of(`I caught: ${val}`)));
        exam.subscribe(val => console.log('val: ', val));

        // Example 2: Catching rejected promise
    }
}
