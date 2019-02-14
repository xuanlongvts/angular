import { Injectable } from '@angular/core';

import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class HttpService {
    makeRequest(value: string, delayDuration: number) {
        // simulate http request
        return of(`Complete: ${value}`).pipe(delay(delayDuration));
    }
}
