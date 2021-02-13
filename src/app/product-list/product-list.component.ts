import { Component, OnInit } from "@angular/core";

import { products } from "../products";
import { AflService } from "../afl.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})

// https://angular.io/guide/router
export class ProductListComponent implements OnInit {
  products = products;
  // token = this.aflService.getToken();

  constructor(private aflService: AflService) {}

  share() {
    window.alert("The product has been shared!");
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }

  ngOnInit() {}
}
