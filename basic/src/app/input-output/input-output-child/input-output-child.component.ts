import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-input-output-child',
    templateUrl: './input-output-child.component.html',
    styleUrls: ['./input-output-child.component.scss'],
})
export class InputOutputChildComponent implements OnInit {
    @Input('init') private initNumber: number; // alias from init to initNumber
    @Output() change: EventEmitter<number> = new EventEmitter<number>();

    constructor() {}

    handleIncrement() {
        this.initNumber++;
        this.change.emit(this.initNumber);
    }

    handleDecrement() {
        this.initNumber--;
        this.change.emit(this.initNumber);
    }

    handleKeyup(num: number) {
        this.initNumber = num;
        this.change.emit(num);
    }

    ngOnInit() {}
}
