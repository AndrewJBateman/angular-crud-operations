# :zap: Angular Firebase CRUD

* Angular app to store fast-food orders in a Firebase database. They are then retrieved and shown in a table on-screen
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-crud-operations?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-crud-operations?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-crud-operations?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-crud-operations?style=plastic)

## :books: General info

* Firebase backend stores customer name and number and what they ordered.

## :camera: Screenshots

* ![Example screenshot](./img/checkout.png)

## :signal_strength: Technologies

* [Angular v13](https://angular.io/) javascript framework
* [Angular Material Icons](https://material.io/resources/icons/?style=baseline)
* [Materialize v1](https://materializecss.com/) front-end framework based on Material Design
* [firebase v9](https://firebase.google.com/)

## :floppy_disk: Setup

* Install dependencies using `npm i`
* Add firebase credentials to `environment.ts` files
* Make sure [Firestore Database rules](https://firebase.google.com/docs/firestore/security/get-started) will allow user access
* Run `ng serve` to get a server at `http://localhost:4200/`
* If required, run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## :computer: Code Examples

* onSubmit function to get order data from form to createOrder function

```typescript
onSubmit() {
    this.ordersService.form.value.order = this.order;
    let data = this.ordersService.form.value;
    console.log('data: ', data); // {CustomerName: Edward, orderNumber: 3, order: ["burger", "fries"]}

    this.ordersService.createOrder(data).then((res) => {
      console.log("fast food order created");
    });
  }
```

## :cool: Features

* working Firebase backend Database storage of customer orders

## :clipboard: Status & To-Do List

* Status: Working
* To-Do:  Improve: add quantity of items, clear form after use

## :clap: Inspiration

* [Dayana Jabif of Angular Templates: Angular CRUD with Firebase](https://angular-templates.io/tutorials/about/angular-crud-with-firebase)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
