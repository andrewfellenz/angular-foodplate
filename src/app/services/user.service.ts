import { Injectable, Optional } from "@angular/core";
import { BehaviorSubject } from "rxjs";

// separate angular services from services we made
import { User } from "src/app/models/User";
import { UserStatusService } from "./user-status.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private user: User = new User(
    1,
    "",
    "",
    "",
    "",
    {},
    { fruitMet: false, vegMet: false, proteinMet: false, grainMet: false },
    false,
    ""
  );

  currentUser = new BehaviorSubject<User>(this.user);

  getUser(): User {
    if (localStorage.getItem("currentUser")) {
      const user = JSON.parse(localStorage.getItem("currentUser"));
      this.currentUser = new BehaviorSubject(user);
      return user;
    } else {
      return this.user;
    }
  }

  updateUser(user: User) {
    user.id = 1;
    user.registered = true;
    user.reqsStatus = {
      fruitMet: false,
      vegMet: false,
      proteinMet: false,
      grainMet: false,
    };
    this.currentUser.next(user);
  }

  static storeUserLocal(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  constructor(@Optional() private userStatus: UserStatusService) {
    // this line not present in kevin's example
    //    this.userStatus.getRegisterStatus(this.user);
    this.userStatus.getUserStatus(this.user);
  }
}
