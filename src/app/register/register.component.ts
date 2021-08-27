import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../models/User";
import { UserService } from "../services/user.service";

@Component({
  selector: "fp-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  currentUser: User;
  ageGroups = [
    "select your age group",
    "2-3",
    "4-8",
    "9-13",
    "14-18",
    "19-30",
    "31-50",
  ];

  regForm: FormGroup;

  constructor(
    private userService: UserService,
    // reactive form building helper class
    private fb: FormBuilder,
    private router: Router
  ) {
    this.regForm = fb.group(
      {
        firstName: [null, [Validators.required]],
        email: [
          null,
          //using brackets around validators.compose is optional
          [Validators.compose([Validators.required, Validators.email])],
        ],
        gender: [null, [Validators.required]],
        ageGroup: [null, [Validators.required]],
      },
      { updateOn: "submit" }
      // blur is what happens when a field has focus and then focus leaves
      // this also makes validation faster
      // { updateOn: "blur" }
    );
  }

  // this is what the above is doing for each option
  // firstName: FormControl = new Control();

  onSubmit(formValues) {
    /*     const currentUser = this.regForm.value;
    this.currentUser = currentUser;
    console.log(this.regForm.value);
    this.currentUser.id = 1;
    this.currentUser.registered = true;
    this.currentUser.reqsStatus = {
      fruitMet: false,
      vegMet: false,
      proteinMet: false,
      grainMet: false,
    };
    localStorage.setItem("user", JSON.stringify(currentUser)); */
    this.userService.updateUser(formValues);
    UserService.storeUserLocal(formValues);
  }

  ngOnInit(): void {
    this.userService.currentUser.subscribe((user) => (this.currentUser = user));
    this.regForm.valueChanges.subscribe((value) => console.log(value));
  }
}
