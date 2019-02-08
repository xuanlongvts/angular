import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { data } from './share-service-data';
import { ShareService } from './share-service';

@Component({
    selector: 'app-service-http',
    templateUrl: './service-http.component.html',
    styleUrls: ['./service-http.component.scss'],
})
export class ServiceHttpComponent implements OnInit {
    public show: boolean;
    public showAsync: boolean;
    public response: Observable<data[]>;
    public data: Array<data> = [];

    constructor(public service: ShareService) {
        this.onAsync();
        this.onSubscribe();
    }

    ngOnInit() {}

    onAsync() {
        this.show = false;
        this.showAsync = true;
        this.response = this.service.getData();
    }

    onSubscribe() {
        this.service.getData().subscribe(res => {
            this.data = res;
            this.show = true;
            this.showAsync = false;
        });
    }
}
