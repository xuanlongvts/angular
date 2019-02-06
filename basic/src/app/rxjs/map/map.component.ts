import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        // Example 1: Add 10 to each number
        const source = from([1, 2, 3, 4, 5]);
        const exam = source.pipe(map(val => val + 10));
        exam.subscribe(val => console.log('val: ', val));

        console.log('===================');
        // Example 2: Map to single property
        const sourceOne = from([{ name: 'Joe', age: 30 }, { name: 'Frank', age: 20 }, { name: 'Ryan', age: 50 }]);
        const examOne = sourceOne.pipe(map(({ name }) => name));
        examOne.subscribe(val => console.log('name: ', val));
    }
}
