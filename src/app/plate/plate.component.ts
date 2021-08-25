import { Component, Input, OnInit } from "@angular/core";
import { User } from "../models/User";
@Component({
  selector: "fp-plate",
  templateUrl: "./plate.component.html",
  styleUrls: ["./plate.component.scss"],
})
export class PlateComponent implements OnInit {
  @Input() user: User;

  plateImgPath: string = "assets/images/plateImages/";
  fruitEmpty: string = `${this.plateImgPath}fruit-empty.png`;
  grainDairyEmpty: string = `${this.plateImgPath}graindairy-empty.png`;
  proteinEmpty: string = `${this.plateImgPath}protein-empty.png`;
  vegEmpty: string = `${this.plateImgPath}veg-empty.png`;
  fruitFull: string = `${this.plateImgPath}fruit-full.png`;
  grainDairyFull: string = `${this.plateImgPath}graindairy-full.png`;
  proteinFull: string = `${this.plateImgPath}protein-full.jpg`;
  vegFull: string = `${this.plateImgPath}veg-full.jpg`;

  constructor() {}

  ngOnInit(): void {}
}
