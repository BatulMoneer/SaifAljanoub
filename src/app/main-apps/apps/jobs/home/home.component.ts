import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { admin } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private impApiService: ImpApiService,
            private spinner: NgxSpinnerService,
            private toastr: ToastrService,
            private router:Router,
  ) { }

  jobs = [];

  servicesPerPage = 5;
  currentPage = 0;
  paginatedServices = [];
  pages = [];

  ngOnInit(): void {
     this.spinner.show()
        this.impApiService.get(admin.viewJob).subscribe({
          next: (data: any) => {

            if (Array.isArray(data[0])) {
              this.jobs = data[0];
              console.log(data[0])
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
    this.pages = Array(Math.ceil(this.jobs.length / this.servicesPerPage)).fill(0);
    this.paginatedServices = this.jobs.slice(this.currentPage * this.servicesPerPage, (this.currentPage + 1) * this.servicesPerPage);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePagination();
  }

  delete_job(id: number): void {
    this.spinner.show();
    console.log(id)
    this.impApiService.delete(`${admin.deleteJob}${id}`).subscribe(data => {
      this.spinner.hide();
      this.ngOnInit()
    })
  }

  update_job(id: number): void {
    localStorage.setItem('current_job', id.toString());
    this.router.navigate(['/apps/jobs/edit']);
  }
}
