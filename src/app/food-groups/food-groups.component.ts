import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FoodGroupsService } from "../services/food-groups.service";
@Component({
  selector: "fp-food-groups",
  templateUrl: "food-groups.component.html",
  styleUrls: ["food-groups.component.scss"],
})
export class FoodGroupsComponent implements OnInit {
  foodGroups;
  iconStyles = {
    cursor: "pointer",
    display: "inline",
  };
  constructor(
    private foodGroupsSvce: FoodGroupsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log(`from the FoodGroupsComponent: 
${foodGroupsSvce}`);
  }
  ngOnInit() {
    this.foodGroups = this.foodGroupsSvce.getFoodGroups();
  }
  showGroup(group) {
    console.log(group.name);
    this.router.navigate([group.name], { relativeTo: this.route });
  }
}
