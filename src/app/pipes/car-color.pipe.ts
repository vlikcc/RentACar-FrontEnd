import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/cardetail';

@Pipe({
  name: 'carColor'
})
export class CarColorPipe implements PipeTransform {

  transform(value: CarDetail[], filterText:string): CarDetail[] {
    filterText=filterText ? filterText.toLocaleLowerCase():null;

    return filterText?value.filter((cd:CarDetail)=>
    cd.colorName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
