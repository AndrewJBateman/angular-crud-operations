import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  constructor(private firestore: AngularFirestore) {}

  form = new FormGroup({
    customerName: new FormControl(""),
    orderNumber: new FormControl(""),
    order: new FormControl(""),
    completed: new FormControl(false),
  });

  createOrder(data: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("orders")
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }

  updateOrder(data: any): void {
    this.firestore
      .collection("orders")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  getOrders(): Observable<any> {
    return this.firestore.collection("orders").snapshotChanges();
  }

  deleteOrder(data: any): any {
    return this.firestore
      .collection("orders")
      .doc(data.payload.doc.id)
      .delete();
  }
}
