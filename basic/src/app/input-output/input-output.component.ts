import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-input-output',
    templateUrl: './input-output.component.html',
    styleUrls: ['./input-output.component.scss'],
})
export class InputOutputComponent implements OnInit {
    public initCounter: number = 10;
    public parentNumber: number = this.initCounter;

    handleChange(num: any) {
        typeof num === 'object' && (num = num.target.value);
        this.parentNumber = num;
    }
    ngOnInit() {}
}
