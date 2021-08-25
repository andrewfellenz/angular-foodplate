import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  isActive: boolean = true;

  ngOnInit(): void {
  }

}
