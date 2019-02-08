import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { data } from './share-service-data';

@Injectable()
export class ShareService {
    constructor(private http: HttpClient) {}

    public getData(): Observable<data[]> {
        // https://www.reddit.com//r/reactjs.json
        return this.http.get<data[]>('https://jsonplaceholder.typicode.com/posts');
    }
}
