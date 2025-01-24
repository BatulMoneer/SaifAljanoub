import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { stringify } from 'querystring';
import { admin } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {


  constructor(
    private impApiService: ImpApiService,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService,
        private router:Router,
  ) { }

  team = [];

  servicesPerPage = 5;
  currentPage = 0;
  paginatedServices = [];
  pages = [];

  ngOnInit(): void {
    this.spinner.show()
    this.impApiService.get(admin.viewEmployee).subscribe({
      next: (data: any) => {
        console.log('Full API Response:', data);

        if (Array.isArray(data[0])) {
          this.team = data[0];
          console.log(data[0])
    this.updatePagination();

          console.log('Extracted Team:', this.team);
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
    this.pages = Array(Math.ceil(this.team.length / this.servicesPerPage)).fill(0);
    this.paginatedServices = this.team.slice(this.currentPage * this.servicesPerPage, (this.currentPage + 1) * this.servicesPerPage);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePagination();
  }

  delete_member(id: number): void {
    this.spinner.show();
    this.impApiService.delete(`${admin.deleteEmployee}${id}`).subscribe(data => {
      this.spinner.hide();
      this.ngOnInit()
    })
  }

  update_member(id: number): void {
    localStorage.setItem('current_member', id.toString());
    this.router.navigate(['/apps/aboutus/edit']);
  }

}
