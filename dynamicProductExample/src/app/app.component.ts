import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicProductExample';
  products: any = [
    {name:'Lenova Laptop', price:60000,Quantity:1},
    {name:'Dell Laptop',price: 65000,Quantity:1},
    {name:'Macbook pro Laptop',price: 120000,Quantity:1},
    {name:'Sony Laptop',price: 70000,Quantity:1}
  ];
}
