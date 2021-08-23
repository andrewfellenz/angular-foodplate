import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  version: string = "1.0.0";
  versionNum: number = 0;
  icon: string = "assets/images/icons/icons-29.png";
  logoAlt: string = "Foodplate Logo";
  needsUpdate: boolean = true;


  moreInfo() {
    alert("For more info see choosemyplate.gov.");
  }

  constructor() { }

  ngOnInit(): void {
    this.versionConvertNumber();
  }

  versionConvertNumber() {
    let num: string = '';
    for (let i = 0; i < this.version.length; i++){
      num += this.version.charAt(i) !== '.' ? this.version.charAt(i) : '';
    }
    let versionNum: string = num;
    console.log(versionNum);
  }

}
