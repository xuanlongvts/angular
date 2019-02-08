import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pipes',
    templateUrl: './pipes.component.html',
    styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
    birthday = new Date(1990, 7, 17);
    person = { name: 'Long', age: '30' };
    address = Promise.resolve('100, Le Quang Dinh');

    constructor() {}

    ngOnInit() {}
}
