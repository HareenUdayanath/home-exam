import { Pipe, PipeTransform } from '@angular/core';
import { Constant } from '../../models/constant';

@Pipe({
  name: 'dateToString'
})
export class DateToStringPipe implements PipeTransform {

  transform(value: string): unknown {
    const tempArr = value.split('/');
    return `${tempArr[0]} ${Constant.MONTHS_STRINGS[Number(tempArr[1]) - 1]} ${tempArr[2]}`;
  }

}
