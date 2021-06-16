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

  showNgIfMsg=true;
  showNgIfElseMsg=false;
  showNgIfThenElseMsg=true;
  switchValue='Four';
  users=[
    { userId: 10, firstName: 'Sujeet'},
    { userId: 20, firstName: 'Rakesh'},
    { userId: 30, firstName: 'Virendra'},
    { userId: 40, firstName: 'Ravi'},
    { userId: 50, firstName: 'Archana'}];

  colorName= 'green';
  className='two'
  subTitle='Its fun to learn Interpolation';
  epNum=17;
  user = {
    userId:201,
    userName:'abc',
    status:'active'
  };
  colorVal = 'red';
  clsName='c1';
  placeHolderVal='Enter your name';
  hrefVal = 'http://google.com';
  updatedLink = 'http://oracle.com';

  showAlert(id){
    // when I put id as arguemnet in this.showAlert. It was giving error. so installed npm install -g tslint and "noImplicitAny": false in the tsconfig.json 
    alert("Hello from ARC tutorial:"+id)
  }

  consoleLog(){
    console.log('From the input focus event');
  };
  firstname='';
  readFirstName(){
    console.log(this.firstname)
  }
  readMe(){
    console.log('button clicked')
  }

  user2 = {
    userId: 20,
    firstName: 'Arc',
    lastName: 'Tutorial',
    DOB: '06/15/2021',
    salary: 20000.56
  };
  user3 = {
    firstName: 'Sujeet Gupta',
    city: 'Bangalore',
    cityCode: 'BNG'
  };
  users3 = [{
    firstName: 'Sujeet Gupta',
    city: 'Bangalore',
    cityCode: 'BNG'
  },{
    firstName: 'Rakesh Gupta',
    city: 'Gaya',
    cityCode: 'BNG'
  },
  {
    firstName: 'Virendra Gupta',
    city: 'Patna',
    cityCode: 'BNG'
  }];
}
