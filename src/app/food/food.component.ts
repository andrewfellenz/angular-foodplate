import { Component, OnInit } from "@angular/core";
import { Food } from "../models/food";
import { FoodService } from "../services/food.service";

@Component({
  selector: "fp-food",
  templateUrl: "./food.component.html",
  styleUrls: ["./food.component.scss"],
})
export class FoodComponent implements OnInit {
  isLoading: boolean = true;
  errorMessage: string;
  foodList: Food[];
  foodGroups: Set<string> = new Set();
  foodListByGroup: Food[];

  displayFoods(group): void {
    if (group === "allFoods") {
      this.foodListByGroup = this.foodList;
    } else if (group !== "allFoods") {
      this.foodListByGroup = this.foodList.filter((foods) => {
        return foods.group === group;
      });
    }
  }

  getFood(): void {
    this.foodService.getAllFoods<Food[]>().subscribe(
      (food) => {
        this.foodList = food;
        this.getFoodGroups(this.foodList);
      },
      (error) => {
        this.handleError(error.message);
      },
      () => (this.isLoading = false)
    );
  }

  showNutrients(food): void {
    console.log(food.nutrients);
  }

  getFoodGroups(food): void {
    food.forEach((food) => {
      const group = food.group;
      this.foodGroups.add(group);
    });
    console.log(this.foodGroups);
  }

  handleError(error: string): void {
    console.log(error);
  }

  constructor(private foodService: FoodService) {
    this.getFood();
  }

  ngOnInit(): void {
    /*     console.log(this.foodService.getFoodProgress());
    this.foodService.loadFood().subscribe((data) => console.log(data)); */
  }
}
