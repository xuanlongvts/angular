import { Component, OnInit } from '@angular/core';

import { throwError, from, fromEvent, timer, of } from 'rxjs';
import { catchError, mergeMap, tap, switchMap, concatMap, exhaustMap } from 'rxjs/operators';

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
        exam.subscribe(val => console.log('val 111: ', val));

        console.log('========================================');
        // Example 2: Catching rejected promise
        const myBadPromise = () => new Promise((resolve, reject) => reject('Rejected!'));
        const sourceOne = timer(1000);
        const examone = sourceOne.pipe(mergeMap(_ => from(myBadPromise()).pipe(catchError(err => of(`Bad promise ${err}`)))));
        examone.subscribe(val => console.log('val 222: ', val));

        // Example 3: Catching errors comparison when using switchMap/mergeMap/concatMap/exhaustMap
        const fakeRequest$ = of().pipe(
            tap(_ => console.log('Fake request')),
            throwError,
        );
        const iWillContinueListening$ = fromEvent(document.getElementById('continued'), 'click').pipe(
            switchMap(_ => fakeRequest$.pipe(catchError(_ => of('Keep on click')))),
        );
        iWillContinueListening$.subscribe(console.log);

        const iWillStopListening$ = fromEvent(document.getElementById('stopped'), 'click').pipe(
            switchMap(_ => fakeRequest$),
            catchError(_ => of('No more request!')),
        );
        iWillStopListening$.subscribe(console.log);
    }
}
