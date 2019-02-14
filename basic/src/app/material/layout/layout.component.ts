import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
    options = {
        direction: 'row',
        mainAxis: 'space-around',
        crossAxis: 'center',
    };

    DIRECTIONS = ['row', 'row-reverse', 'column', 'column-reverse'];
    layoutGrap: any = {
        direction: 'row',
    };

    flexRowFillGrap: any = {
        direction: 'row',
    };

    flexRowFillWrap: any = {
        direction: 'row',
    };

    ALIGN_OPTIONS = ['auto', 'start', 'center', 'baseline', 'end', 'stretch'];
    alignTo = 'center';

    layoutWithDirection: any = {
        direction: 'ltr',
    };

    toggleDirectionLayoutWithDirection() {
        this.layoutWithDirection.direction = this.layoutWithDirection.direction === 'ltr' ? 'rtl' : 'ltr';
    }

    toggleAlignment() {
        const j = this.ALIGN_OPTIONS.indexOf(this.alignTo);
        this.alignTo = this.ALIGN_OPTIONS[(j + 1) % this.ALIGN_OPTIONS.length];
    }

    layoutAlign() {
        return `${this.options.mainAxis} ${this.options.crossAxis}`;
    }

    toggleDirection() {
        const next = (this.DIRECTIONS.indexOf(this.layoutGrap.direction) + 1) % this.DIRECTIONS.length;
        this.layoutGrap.direction = this.DIRECTIONS[next];
    }

    toggleDirectionFlexRowFill() {
        const next = (this.DIRECTIONS.indexOf(this.flexRowFillGrap.direction) + 1) % this.DIRECTIONS.length;
        this.flexRowFillGrap.direction = this.DIRECTIONS[next];
    }

    toggleDirectionflexRowFillWrap() {
        const next = (this.DIRECTIONS.indexOf(this.flexRowFillWrap.direction) + 1) % this.DIRECTIONS.length;
        this.flexRowFillWrap.direction = this.DIRECTIONS[next];
    }

    constructor() {}

    ngOnInit() {}
}
