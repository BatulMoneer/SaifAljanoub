import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {


  constructor() { }

  team = [
    {
      image: "../../../../../assets/images/default.png",
      name: "سامر سامر",
      position: "مدير مشاريع"
    },
    {
      image: "../../../../../assets/images/default.png",
      name: "سامر سامر",
      position: "مدير مشاريع"
    },
    {
      image: "../../../../../assets/images/team2.png",
      name: "سامر سامر",
      position: "مدير مشاريع"
    },
    {
      image: "../../../../../assets/images/default.png",
      name: "سامر سامر",
      position: "مدير مشاريع"
    },
    {
      image: "../../../../../assets/images/team1.png",
      name: "سامر سامر",
      position: "مدير مشاريع"
    },
    {
      image: "../../../../../assets/images/default.png",
      name: "سامر سامر",
      position: "مدير مشاريع"
    },
    {
      image: "../../../../../assets/images/team2.png",
      name: "سامر سامر",
      position: "مدير مشاريع"
    },

  ];

  servicesPerPage = 5;
  currentPage = 0;
  paginatedServices = [];
  pages = [];

  ngOnInit(): void {
    this.updatePagination();
  }

  updatePagination(): void {
    this.pages = Array(Math.ceil(this.team.length / this.servicesPerPage)).fill(0);
    this.paginatedServices = this.team.slice(this.currentPage * this.servicesPerPage, (this.currentPage + 1) * this.servicesPerPage);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePagination();
  }

}
