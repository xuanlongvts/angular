import { Component, OnInit } from '@angular/core';

import { of, interval, fromEvent } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
    selector: 'app-take',
    templateUrl: './take.component.html',
    styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        // Example 1: Take 1 value from source
        const source = of(1, 2, 3, 4, 5);
        const exam = source.pipe(take(1));
        exam.subscribe(val => console.log('val 111: ', val));

        console.log('====================================');
        // Example 2: Take the first 5 values from source
        const interval$ = interval(1000);
        const examOne = interval$.pipe(take(5));
        examOne.subscribe(val => console.log('val 222: ', val));

        // Example 3: Taking first click location
        const oneClickEvent = fromEvent(document, 'click').pipe(
            take(1), // take(3) taking three times
            tap((v: any) => {
                console.log('v: ', v);
                document.getElementById('locationDisplay').innerHTML = `Your first click was on location ${v.screenX}:${v.screenY}`;
            }),
        );
        oneClickEvent.subscribe();
    }
}
