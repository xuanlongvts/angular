import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-input-output',
    templateUrl: './input-output.component.html',
    styleUrls: ['./input-output.component.scss'],
})
export class InputOutputComponent implements OnInit {
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
