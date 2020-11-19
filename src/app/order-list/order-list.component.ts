import { Component, OnInit } from "@angular/core";

import { OrdersService } from "../shared/orders.service";

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.scss"],
})
export class OrderListComponent implements OnInit {
  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.getAllOrders();
  }

  orders;

  getAllOrders = () =>
    this.ordersService.getOrders().subscribe((res) => (this.orders = res));

  markCompleted = (data) => this.ordersService.updateOrder(data);

  deleteOrder = (data) => this.ordersService.deleteOrder(data);
}
