import { Component, OnInit } from "@angular/core";

import { AflService } from "../afl.service";

@Component({
  selector: "app-afl-token",
  templateUrl: "./afl-token.component.html",
  styleUrls: ["./afl-token.component.css"]
})
export class AflTokenComponent implements OnInit {
  token = this.aflService.getToken();
  constructor(private aflService: AflService) {}

  ngOnInit() {}
}
