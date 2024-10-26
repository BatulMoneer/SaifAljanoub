import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() { }

  partners = [
    {
      image: "../../../../../assets/images/partner.png",
      name: "شركة نحو الرؤية"
    },
    {
      image: "../../../../../assets/images/partner.png",
      name: "شركة نحو الرؤية"
    },
    {
      image: "../../../../../assets/images/partner.png",
      name: "شركة نحو الرؤية"
    },
    {
      image: "../../../../../assets/images/partner.png",
      name: "شركة نحو الرؤية"
    },
    {
      image: "../../../../../assets/images/partner.png",
      name: "شركة نحو الرؤية"
    },
    {
      image: "../../../../../assets/images/partner.png",
      name: "شركة نحو الرؤية"
    },
    {
      image: "../../../../../assets/images/partner.png",
      name: "شركة نحو الرؤية"
    },
    {
      image: "../../../../../assets/images/partner.png",
      name: "شركة نحو الرؤية"
    },
    {
      image: "../../../../../assets/images/partner.png",
      name: "شركة نحو الرؤية"
    }
  ];

  servicesPerPage = 5;
  currentPage = 0;
  paginatedServices = [];
  pages = [];

  ngOnInit(): void {
    this.updatePagination();
  }

  updatePagination(): void {
    this.pages = Array(Math.ceil(this.partners.length / this.servicesPerPage)).fill(0);
    this.paginatedServices = this.partners.slice(this.currentPage * this.servicesPerPage, (this.currentPage + 1) * this.servicesPerPage);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePagination();
  }


}
