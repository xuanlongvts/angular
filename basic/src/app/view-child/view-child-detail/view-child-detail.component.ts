import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-view-child-detail',
    templateUrl: './view-child-detail.component.html',
    styleUrls: ['./view-child-detail.component.scss'],
})
export class ViewChildDetailComponent implements OnInit {
    public value: number = 0;

    constructor() {}

    ngOnInit() {}
}
