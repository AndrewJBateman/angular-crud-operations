import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { OrdersService } from "../shared/orders.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
})
export class OrdersComponent implements OnInit {
  constructor(public ordersService: OrdersService) {}

  ngOnInit() {}

  items = [
    "burger",
    "fries",
    "sausage",
    "egg",
    "pickle",
    "haggis",
    "coleslaw",
    "curry",
    "mash",
    "rice",
    "coke",
    "juice",
  ];

  order = [];

  addItem = (item: string) => this.order.push(item);

  removeItem = (item: string) => {
    let index = this.order.indexOf(item);
    if (index > -1) this.order.splice(index, 1);
  };

  onSubmit(): void {
    this.ordersService.form.value.order = this.order;
    let data = this.ordersService.form.value;
    console.log("data: ", data); // {CustomerName: Wes, orderNumber: 4, order: ["burger", "eggs"]}

    this.ordersService.createOrder(data).then((res) => {
      console.log("fast food order created");
    });
  }
}
