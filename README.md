# :zap: Angular Firebase CRUD

* Angular 10 app to store fast-food orders in a Firebase database. They are then retrieved and shown in a table on-screen

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :books: General info

* Firebase backend stores customer name and number and what they ordered.

## :camera: Screenshots

* ![Example screenshot](./img/checkout.png)

## :signal_strength: Technologies

* [Angular v10](https://angular.io/) javascript framework
* [Angular Material v10](https://material.angular.io/) component library
* [Angular Material Icons](https://material.io/resources/icons/?style=baseline)
* [Materialize v1](https://materializecss.com/) front-end framework based on Material Design

## :floppy_disk: Setup

* Install dependencies using `npm i`
* Run `ng serve` to get a server at `http://localhost:4200/`
* If required, run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## :computer: Code Examples

* onSubmit function to get order data from form to createOrder function

```typescript
onSubmit() {
    this.ordersService.form.value.order = this.order;
    let data = this.ordersService.form.value;
    console.log('data: ', data); // {CustomerName: Wes, orderNumber: 4, order: ["burger", "eggs"]}

    this.ordersService.createOrder(data).then((res) => {
      console.log("fast food order created");
    });
  }
```

## :cool: Features

* working backend Database storage of customer orders

## :clipboard: Status & To-Do List

* Status: working
* To-Do:  Improve: add quantity of items, change database to postgres or other

## :clap: Inspiration

* [Codesourse: Server-side rendering (SSR) in Angular](https://codesource.io/server-side-rendering-in-angular/)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
