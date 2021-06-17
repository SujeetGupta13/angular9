import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup; //step #3 give same form group name as in the template
  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = formBuilder.group( //Building the from using formbuilder
    {
    emailAddr: new FormControl(), //in the formbuilder we are craeting a grp of frm elements
    quantity: new FormControl(), //these shud be excatly same as ur form 
    terms: new FormControl()    //we can also have it dynamically, we will learn in next  tuto
    })
   }

   postData(){
     console.log(this.checkoutForm);
     console.log(this.checkoutForm.value);
     console.log(this.checkoutForm.value.emailAddr);
   }
  ngOnInit(): void {
  }

}
