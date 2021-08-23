import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from 'src/app/models/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'fp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'foodPlate-cli';

  user: User;

  constructor(private userService: UserService, 
    private titleService: Title) {

  }

  ngOnInit() {
    this.titleService.setTitle('Welcome to FoodPlate');
    this.user = this.userService.getUser();
  }
}
