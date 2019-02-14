import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { tap, mapTo, share } from 'rxjs/operators';

@Component({
    selector: 'app-share',
    templateUrl: './share.component.html',
    styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        const source = timer(1000);
        const exam = source.pipe(
            tap(() => console.log('***SIDE EFFECT***')),
            mapTo('**Result**'),
        );
        const subscribeOne = exam.subscribe(val => console.log('val 1: ', val));
        const subscribeTwo = exam.subscribe(val => console.log('val 2: ', val));

        setTimeout(() => console.log('=========================='), 1000);

        const shareExam = exam.pipe(share());
        const subscribeThree = shareExam.subscribe(val => console.log('val 3: ', val));
        const subscribeFour = shareExam.subscribe(val => console.log('val 4: ', val));
    }
}
