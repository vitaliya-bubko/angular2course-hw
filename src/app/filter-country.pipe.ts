import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCountry'
})
export class FilterCountryPipe implements PipeTransform {

  transform(input: Resort[], searchTerm: string): any {
    if(searchTerm)
      return input.filter(resort =>`${resort.country}`.includes(searchTerm));
      else return input;
  }

}
