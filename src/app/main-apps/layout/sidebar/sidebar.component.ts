import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  adminImage = "../../../../assets/images/user.png"
  adminName = "سامر سامر"
  constructor() { }

  ngOnInit(): void {
  }

}
