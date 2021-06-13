import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1>{{title}}</h1>', this will also work, if we want to load ay html file
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oneCoversion';
  @Input() data:string;
  @Output() params:string;

  showMsg=true;
  colorName= 'green';

  readMe(){
    console.log('button clicked')
  }
}
