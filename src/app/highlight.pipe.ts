import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor( private sanitizer: DomSanitizer) {}
  transform(value: string, city: string): any {
    //return 'City Name: '+ city;
    // if(city == 'NY'){
    //   return 'The Big Apple';
    // }
    // else{
    //   return 'The Garden city';
    // }
    if(city == 'Gaya'){
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#ffffcc">' + city + '</div>');
    }
    else{
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:lightgreen">' + city + '</div>');
    }
  }

}
