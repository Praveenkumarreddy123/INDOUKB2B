import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTender'
})
export class MultiFilterTender implements PipeTransform {
    transform(items: Array<any>, filter: {[key: string]: any }): Array<any> {
        return  items.filter(item => {
            const notMatchingField = Object.keys(filter).find(key => item[key] !== filter[key]);
            console.log(!notMatchingField);
            return !notMatchingField;
        });
    }
}
