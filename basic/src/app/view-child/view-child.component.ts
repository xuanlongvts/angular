import { Component, OnInit, ViewChild } from '@angular/core';

import { ViewChildDetailComponent } from './view-child-detail/view-child-detail.component';
@Component({
    selector: 'app-view-child',
    templateUrl: './view-child.component.html',
    styleUrls: ['./view-child.component.scss'],
})
export class ViewChildComponent implements OnInit {
    constructor() {}
    @ViewChild(ViewChildDetailComponent)
    myChild: ViewChildComponent;

    handleAddChildSena1(isAdd: boolean) {
        if (isAdd) {
            this.myChild.value++;
        } else {
            this.myChild.value--;
        }
    }

    handleAddChild() {
        this.myChild.value++;
    }

    ngOnInit() {}
}
