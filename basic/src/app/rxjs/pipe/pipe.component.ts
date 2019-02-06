import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { filter, map, reduce } from 'rxjs/operators';

@Component({
    selector: 'app-pipe',
    templateUrl: './pipe.component.html',
    styleUrls: ['./pipe.component.scss'],
})
export class PipeComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        const arr = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);

        arr.pipe(
            filter(x => x % 2 === 0), // [2, 4, 6, 8]
            map(x => x * 2), // [4, 8, 12, 16]
            reduce((acc, next) => acc + next, 0), // 4 + 8 + 12 + 16
        ).subscribe(result => console.log(result)); // 40
    }
}
