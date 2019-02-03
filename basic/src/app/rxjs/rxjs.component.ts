import { Component, OnInit } from '@angular/core';
import { take, map, combineAll } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        const source = interval(3000).pipe(take(2));
        const example = source.pipe();

        // console.log('source: ', source);
    }
}
