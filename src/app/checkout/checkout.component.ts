import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup; //step #3 give same form group name as in the template
  constructor(private formBuilder: FormBuilder) {
    /*
    this.checkoutForm = formBuilder.group( //Building the from using formbuilder
    {
    emailAddr: new FormControl(), //in the formbuilder we are craeting a grp of frm elements
    quantity: new FormControl(), //these shud be excatly same as ur form 
    terms: new FormControl()    //we can also have it dynamically, we will learn in next  tuto
    })
    */

    this.checkoutForm = formBuilder.group( //Building the from using formbuilder
      {
      emailAddr: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(10)]], 
      quantity: ['', Validators.required],  
      terms:  ['', Validators.requiredTrue]
      })

   }

   postData(){
     console.log(this.checkoutForm);
     console.log(this.checkoutForm.value);// this will give All formControl of forms
     console.log(this.checkoutForm.value.emailAddr); //this will give emailAddr formControl of forms
   }
  ngOnInit(): void {
    /*
    this.checkoutForm.setValue({ //using this method set all the form field
      emailAddr: 'test@test.com',
      quantity: 10,
      terms: true
    })
    */
    this.checkoutForm.patchValue({ //using this method set we can omit few form field
      emailAddr: 'test@test.com'     
    })
  }

}
