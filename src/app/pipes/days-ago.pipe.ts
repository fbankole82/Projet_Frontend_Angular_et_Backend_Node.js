// import { Pipe, PipeTransform } from '@angular/core';
//  import * as distanceInWordsToNow from 'date-fns';
//   import * as frLocale from 'date-fns/locale/fr';

// @Pipe({
//   name: 'daysAgo'
// })
// export class DaysAgoPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown { //06-01-2017 | daysAgo
//     return distanceInWordsToNow(new Date(value), {locale: frLocale});
//   }

// }

import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

@Pipe({
  name: 'daysAgo'
})
export class DaysAgoPipe implements PipeTransform {

  transform(value: any, _args?: any) : any { 
    return formatDistanceToNow(new Date(value), { locale: fr, addSuffix: true });
  }

}
