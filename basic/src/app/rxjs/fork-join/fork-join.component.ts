import { Component, OnInit } from '@angular/core';

import { delay, take, mergeMap, catchError } from 'rxjs/operators';
import { forkJoin, of, interval, throwError } from 'rxjs';

import { HttpService } from '../../services/http.service';

@Component({
    selector: 'app-fork-join',
    templateUrl: './fork-join.component.html',
    styleUrls: ['./fork-join.component.scss'],
    providers: [HttpService],
})
export class ForkJoinComponent implements OnInit {
    public propOne: string;
    public propTwo: string;
    public propThree: string;
    constructor(private _httpService: HttpService) {}

    ngOnInit() {
        // Example 1: Observables completing after different durations
        const myPromise = val => new Promise(resolve => setTimeout(() => resolve(`Promise Resolved: ${val}`), 3000));
        const exam = forkJoin(
            of('Hello'),
            of('World').pipe(delay(1000)),
            interval(1000).pipe(take(1)),
            interval(1000).pipe(take(2)),
            myPromise('Result'),
        );
        exam.subscribe(val => console.log('val 111: ', val));

        // Example 2: Making a variable number of requests
        const source = of([1, 2, 3, 4, 5]);
        const examTwo = source.pipe(mergeMap(q => forkJoin(...q.map(myPromise))));
        examTwo.subscribe(val => console.log('val 222: ', val));

        // Example 3: Handling errors on outside
        const examThree = forkJoin(of('Hello'), of('World').pipe(delay(1000)), throwError('This is an error')).pipe(
            catchError(err => of(err)),
        );
        examThree.subscribe(val => console.log('val 333: ', val));

        // Example 4: Getting successful results when one inner observable errors
        const examFour = forkJoin(
            of('Hello'),
            of('World').pipe(delay(3000)),
            throwError('This will error').pipe(catchError(err => of(err))),
        );
        examFour.subscribe(val => console.log('val 444: ', val));

        // Example 5: forkJoin in Angular
        const examFive = forkJoin(
            this._httpService.makeRequest('Request One', 2000),
            this._httpService.makeRequest('Request Two', 1000),
            this._httpService.makeRequest('Request Three', 5000),
        );
        examFive.subscribe(([res1, res2, res3]) => {
            this.propOne = res1;
            this.propTwo = res2;
            this.propThree = res3;
        });
    }
}
