import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";

import { OrdersService } from "../shared/orders.service";
import { Order } from './../models/order.model';

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.scss"],
})
export class OrderListComponent implements OnInit {
  orders;
  orders$: Observable<Order>;

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  trackByFntn(index: number, item: any): number {
    return item.orderId;
  }

  getAllOrders = () =>
    // this.ordersService.getOrders().subscribe((res) => (this.orders = res));
    this.orders$ = this.ordersService.getOrders();

  markCompleted = (data) => this.ordersService.updateOrder(data);

  deleteOrder = (data) => this.ordersService.deleteOrder(data);
}
