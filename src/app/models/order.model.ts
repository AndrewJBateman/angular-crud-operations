export class Order {
  completed: boolean = false;
  customerName: string = '';
  order: Food[] = [];
  orderNumber: number = 0;
}

export class Food {
  name: string = '';
}
