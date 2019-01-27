import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Hello';

    public initCounter: number = 10;
    public parentNumber: number = this.initCounter;

    handleChange(num: any) {
        typeof num === 'object' && (num = num.target.value);
        this.parentNumber = num;
    }
}
