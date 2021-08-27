import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { User } from "src/app/models/User";
import { Requirement } from "./models/requirements";
import { RequirementsService } from "./services/requirements.service";
import { UserService } from "./services/user.service";

@Component({
  selector: "fp-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = "foodPlate-cli";

  //user: User;
  currentUser: User;

  private requirements: Array<Requirement>;

  constructor(
    private userService: UserService,
    private titleService: Title,
    private reqsService: RequirementsService
  ) {}

  ngOnInit() {
    this.titleService.setTitle("Welcome to FoodPlate");
    this.userService.getUser();
    this.userService.currentUser.subscribe;
    (user) => (this.currentUser = user);
    this.reqsService.getRequirements().subscribe((requirements) => {
      this.requirements = requirements;
      console.log(this.requirements[1].ageGroup);
      console.table(this.requirements);
    });
  }
}
