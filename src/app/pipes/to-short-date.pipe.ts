
  import { Pipe, PipeTransform } from '@angular/core';

 @Pipe({
  name: 'toShortDate'  // "1231 213123" | toShortDate
  })
 export class ToShortDatePipe implements PipeTransform {

  transform(value: any, _args?: any): any {
   // return null;
        console.log(value);
        if(value.toLowerCase() === 'asap') {
          return 'dès que possible';
        } else if (value.indexOf('-') > -1) {
          let fullDate, rest;
          [fullDate, rest] = value.toLowerCase().split('t'); // '2023-07-28T11:48:28.933Z'


          let year, month, date; 
          [year, month, date] = fullDate.split('-'); // ['2017', '06', '01']

          return `${date}/${month}/${year}`;
        
  }else {
     return '--';
 } 

  }

 }
  

