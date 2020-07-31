import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StockSymbol } from '../models/StockSymbol';
import { HttpClient } from '@angular/common/http';

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
  profileStock: any;
  stockSymbol: StockSymbol = { ...this.originalSymbol };
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onAddStockForm(form: NgForm) {
    if (form.valid) {
      const stock = this.getStockProfile(form.value.theSymbol);
      stock.subscribe((data: any) => {
        this.profileStock = data;
        if (this.profileStock) {
          this.validSymbol = true;
        } else {
          this.validSymbol = false;
        }
      });
      console.log('in on Submit: ', form.valid);
      console.log('in on Submit: ', form.value.theSymbol);
    }
  }

  getStockProfile(stSymbol: string) {
    let url = `http://localhost:3000/stocks/${stSymbol}`;
    return this.http.get(url);
  }

}
