import { Injectable } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  constructor(private firestore: AngularFirestore) {}

  form = new UntypedFormGroup({
    customerName: new UntypedFormControl(""),
    orderNumber: new UntypedFormControl(""),
    order: new UntypedFormControl(""),
    completed: new UntypedFormControl(false),
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
