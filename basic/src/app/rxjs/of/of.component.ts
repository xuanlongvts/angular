import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';

@Component({
    selector: 'app-of',
    templateUrl: './of.component.html',
    styleUrls: ['./of.component.scss'],
})
export class OfComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        // Example 1: Emitting a sequence of numbers
        const source = of(1, 2, 3, 4, 5);
        source.subscribe(val => console.log('val: ', val));

        console.log('======================');
        // Example 2: Emitting an object, array, and function
        const sourceOne = of({ name: 'Long' }, [5, 6, 7, 8], () => console.log('Hello world'));
        sourceOne.subscribe(val => console.log('val: ', val));
    }
}
