import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { TodaysGoalService } from "../services/todays-goal.service";

@Component({
  selector: "fp-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  version: string = "1.0.0";
  versionNum: number = 0;
  icon: string = "assets/images/icons/icons-29.png";
  logoAlt: string = "Foodplate Logo";
  needsUpdate: boolean = true;
  subscription: Subscription;
  goal: any;

  moreInfo() {
    alert("For more info see choosemyplate.gov.");
  }

  constructor(private todaysGoalService: TodaysGoalService) {
    this.subscription = this.todaysGoalService.getGoal().subscribe((goal) => {
      this.goal = goal;
    });
  }

  ngOnInit(): void {
    this.versionConvertNumber();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  versionConvertNumber() {
    let num: string = "";
    for (let i = 0; i < this.version.length; i++) {
      num += this.version.charAt(i) !== "." ? this.version.charAt(i) : "";
    }
    let versionNum: string = num;
    console.log(versionNum);
  }
}
