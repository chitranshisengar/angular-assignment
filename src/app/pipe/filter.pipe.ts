import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], value: string) {
    return value ? list.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1) : list;
  }
}
