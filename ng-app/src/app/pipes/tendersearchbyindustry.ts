import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTender'
})
export class FilterTender implements PipeTransform {
    transform(value: any, args?: any, args_1?: any): any {

        if (!value) { return null; }

        if (!args) { return value; }

        args = args.toLowerCase();

        return value.filter(function(item: any) {
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    }
}
