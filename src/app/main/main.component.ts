import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/assets/code-snippets/User";
import { UserService } from "../services/user.service";

@Component({
  selector: "fp-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  currentUser: User;

  constructor(public router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.currentUser.subscribe((user) => (this.currentUser = user));
  }
}
