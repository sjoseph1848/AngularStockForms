import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StockSymbol } from '../models/StockSymbol';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.scss']
})
export class StockFormComponent implements OnInit {
  originalSymbol: StockSymbol = {
    stockSymbol: 'AAPL'
  }
  validSymbol: boolean = false;

  stockSymbol: StockSymbol = { ...this.originalSymbol };

  constructor() { }

  ngOnInit() {
  }

  onAddStockForm(form: NgForm) {
    if (form.valid) {
      this.validSymbol = true;
    } else {
      this.validSymbol = false;
    }
    console.log('in on Submit: ', form.valid);
    console.log('in on Submit: ', form.value.theSymbol);

  }

}
