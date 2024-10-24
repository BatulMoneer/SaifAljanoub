import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  currentSection: string = 'one';

  sectionOneText: string = '';
  sectionTwoText: string = '';
  sectionThreeText: string = '';

  sectionOneLimitExceeded: boolean = false;
  sectionTwoLimitExceeded: boolean = false;
  sectionThreeLimitExceeded: boolean = false;

  showSection(section: string) {
    this.currentSection = section;
  }

  checkCharacterLimit(text: string, sectionFlag: string) {
    if (text.length > 150) {
      console.log("lll")
      this[sectionFlag] = true;
    } else {
      this[sectionFlag] = false;
    }
  }

  ngOnInit(): void {
  }

}
