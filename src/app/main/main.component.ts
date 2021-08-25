import { Component, Input, OnInit } from '@angular/core';
import { Router, ɵangular_packages_router_router_l } from '@angular/router';
import { User } from 'src/assets/code-snippets/User';

@Component({
  selector: 'fp-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() user: User;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
