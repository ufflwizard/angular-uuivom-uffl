import { Component, OnInit } from "@angular/core";

import { AflService } from "../afl.service";

@Component({
  selector: "app-afl-club",
  templateUrl: "./afl-club.component.html",
  styleUrls: ["./afl-club.component.css"]
})
export class AflClubComponent implements OnInit {
  clubs = this.aflService.getClubs();
  constructor(private aflService: AflService) {}

  ngOnInit() {}
}
