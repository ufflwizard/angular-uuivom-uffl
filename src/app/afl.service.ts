import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AflService {
  items = [];
  token = "";

  constructor(private http: HttpClient) {}

  getClubs() {
    return this.http.get("/assets/data/afl/clubs.json");
  }

  getToken() {
    this.http
      .post<any>("https://api.afl.com.au/cfs/afl/WMCTok", {})
      .subscribe(data => {
        this.token = data.token;
      });
    return this.token;
  }

  getCompetitions() {
    // https://angular.io/guide/http
    // https://angular.io/api/common/AsyncPipe
    // https://web.dev/cross-origin-resource-sharing/
    let url: string;
    let options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Referer: "https://www.afl.com.au/fixture"
      })
    };

    //const urlBase: string = "https://aflapi.afl.com.au/afl/v2";
    //const relativePath: string = "competitions?page=0&pageSize=150&sort=desc";
    // let url: string = `${urlBase}/${relativePath}`;
    // url = "https://aflapi.afl.com.au/afl/v2/competitions";
    url = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(url, options);
  }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    // https://angular.io/guide/http
    // https://angular.io/api/common/AsyncPipe
    return this.http.get("/assets/shipping.json");
  }
}
