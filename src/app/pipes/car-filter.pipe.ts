import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/cardetail';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(value: CarDetail[], filterText:string): CarDetail[] {
    filterText=filterText ? filterText.toLocaleLowerCase():null;

    return filterText?value.filter((cd:CarDetail)=>
    cd.carName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
