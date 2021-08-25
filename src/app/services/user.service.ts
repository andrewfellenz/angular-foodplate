import { Injectable, Optional } from '@angular/core';

// separate angular services from services we made
import { User } from 'src/app/models/User';
import { UserStatusService } from './user-status.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private user: User = new User(1, 'Kevin', 'M', '51+', 'M51+', {}, {fruitMet: 
    false, vegMet: false, proteinMet: false, grainMet: false}, false, 
    'kevin@kevinruse.com')

  getUser(): User {
    return this.user;
  }

  constructor(@Optional() private userStatus: UserStatusService) { 
    this.userStatus.getRegisterStatus(this.user);
    this.userStatus.getUserStatus(this.user);
  }
}
