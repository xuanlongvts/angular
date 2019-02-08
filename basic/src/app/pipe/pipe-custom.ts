import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'roundNumber',
})
export class RoundNumberPipe implements PipeTransform {
    transform(value: number, isUpper: boolean, addNum: number): number {
        return isUpper ? Math.ceil(value + addNum) : Math.floor(value + addNum);
    }
}
