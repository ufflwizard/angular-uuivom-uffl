import { Component, OnInit } from "@angular/core";

import { AflService } from "../afl.service";

@Component({
  selector: "app-afl-competition",
  templateUrl: "./afl-competition.component.html",
  styleUrls: ["./afl-competition.component.css"]
})
export class AflCompetitionComponent implements OnInit {
  competitions = this.aflService.getCompetitions();
  constructor(private aflService: AflService) {}

  ngOnInit() {}
}
