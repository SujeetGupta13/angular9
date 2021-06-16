import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss']
})
export class OrderViewComponent implements OnInit {

  paramsQuery1 = '';
  paramsQuery2 = '';
  constructor(private activatedRoutes : ActivatedRoute) {
    this.activatedRoutes.params.subscribe( data => {
      this.paramsQuery1 = data.id;
      this.paramsQuery2 = data.id2;
    });
   }

  ngOnInit(): void {
  }

}
