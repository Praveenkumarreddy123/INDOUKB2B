import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeTime'
})
export class RemoveTime implements PipeTransform {
    transform(date: string) {
        return date.split(' ')[0];
    }
}
