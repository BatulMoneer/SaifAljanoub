import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { admin } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(
     private impApiService: ImpApiService,
            private spinner: NgxSpinnerService,
            private toastr: ToastrService,
            private router:Router,
  ) { }

  news = [];

  servicesPerPage = 5;
  currentPage = 0;
  paginatedServices = [];
  pages = [];

  ngOnInit(): void {
    this.spinner.show()
            this.impApiService.get(admin.viewNews).subscribe({
              next: (data: any) => {

                if (Array.isArray(data[0])) {
                  this.news = data[0];
            this.updatePagination();
                  this.spinner.hide();
                } else {
                  console.error('Unexpected response structure:', data);
                  this.toastr.error('خطأ غير متوقع');
                  this.spinner.hide();
                }
              },
              error: (error) => {
                console.error('API Error:', error);
                this.toastr.error('حدث خطأ أثناء جلب البيانات');
                this.spinner.hide();
              },
            });
  }

  updatePagination(): void {
    this.pages = Array(Math.ceil(this.news.length / this.servicesPerPage)).fill(0);
    this.paginatedServices = this.news.slice(this.currentPage * this.servicesPerPage, (this.currentPage + 1) * this.servicesPerPage);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePagination();
  }
  delete_news(id: number): void {
    this.spinner.show();
    console.log(id)
    this.impApiService.delete(`${admin.deleteNews}${id}`).subscribe(data => {
      this.spinner.hide();
      this.ngOnInit()
    })
  }

  update_news(id: number): void {
    localStorage.setItem('current_news', id.toString());
    this.router.navigate(['/apps/homepage/edit']);
  }

}
