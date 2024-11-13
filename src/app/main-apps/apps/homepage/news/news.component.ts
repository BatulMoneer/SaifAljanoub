import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  news = [
    {
      news_image: "../../../../../assets/images/new.jpg",
      news_name: "مشروع شارع النور",
      news_description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق   "
    }, {
      news_image: "../../../../../assets/images/new.jpg",
      news_name: "مشروع شارع النور",
      news_description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق   "
    }, {
      news_image: "../../../../../assets/images/new.jpg",
      news_name: "مشروع شارع النور",
      news_description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق   "
    }, {
      news_image: "../../../../../assets/images/new.jpg",
      news_name: "مشروع شارع النور",
      news_description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق   "
    }, {
      news_image: "../../../../../assets/images/new.jpg",
      news_name: "مشروع شارع النور",
      news_description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق   "
    }, {
      news_image: "../../../../../assets/images/new.jpg",
      news_name: "مشروع شارع النور",
      news_description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق   "
    }, {
      news_image: "../../../../../assets/images/new.jpg",
      news_name: "مشروع شارع النور",
      news_description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق   "
    }, {
      news_image: "../../../../../assets/images/new.jpg",
      news_name: "مشروع شارع النور",
      news_description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق   "
    }, {
      news_image: "../../../../../assets/images/new.jpg",
      news_name: "مشروع شارع النور",
      news_description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق   "
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
    this.pages = Array(Math.ceil(this.news.length / this.servicesPerPage)).fill(0);
    this.paginatedServices = this.news.slice(this.currentPage * this.servicesPerPage, (this.currentPage + 1) * this.servicesPerPage);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePagination();
  }

}
