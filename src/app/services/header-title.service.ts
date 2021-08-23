import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderTitleService {

  getTitle(): string {
    return 'Welcome to Angular Seed';
  }

  constructor() { }
}
