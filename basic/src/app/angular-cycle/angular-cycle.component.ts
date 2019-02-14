import { Component, OnInit } from '@angular/core';

// https://www.intertech.com/Blog/angular-component-lifecycle/
@Component({
    selector: 'app-angular-cycle',
    templateUrl: './angular-cycle.component.html',
    styleUrls: ['./angular-cycle.component.scss'],
})
export class AngularCycleComponent implements OnInit {
    public numShow = 0;

    constructor() {}

    add() {
        this.numShow++;
    }

    ngOnInit() {
        console.log('ngOnInit');
    }

    ngOnChanges() {
        console.log('ngOnChanges');
    }

    ngDoCheck() {
        console.log('ngDoCheck');
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit');
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked');
    }

    ngOnDestroy() {
        console.log('ngOnDestory');
    }
}
