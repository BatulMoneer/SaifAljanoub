import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  currentSection: string = 'one';
  showSection(section: string) {
    this.currentSection = section;
  }
  ngOnInit(): void {
  }

}
