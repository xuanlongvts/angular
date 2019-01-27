import { Component, OnInit } from '@angular/core';
import { TimeService } from '../services/time.service';

@Component({
    selector: 'app-binding',
    templateUrl: './binding.component.html',
    styleUrls: ['./binding.component.scss'],
})
export class BindingComponent implements OnInit {
    bindingVal = 'Xin chao';

    timeValue: string;

    constructor(private time: TimeService) {
        this.timeValue = time.getTime();
    }

    ngOnInit() {}

    handeClick() {
        console.log('handeClick button');
    }

    handleChange1(event: Event) {
        console.log('value 1 change: ', event.target.value);
    }

    handleChange2(val: any) {
        console.log('value 2 change: ', val);
    }
}
