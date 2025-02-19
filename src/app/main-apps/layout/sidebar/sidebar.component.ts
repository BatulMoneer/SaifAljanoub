import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { admin } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  adminImage = "../../../../assets/images/user.png"
  adminName = "مدير النظام"
  constructor(
      private impApiService: ImpApiService,
      private spinner: NgxSpinnerService,
      private toastr: ToastrService
    ) {}

  ngOnInit(): void {
    this.spinner.show();
        const currentId = localStorage.getItem('user_id');

        this.impApiService.get(`${admin.showAccount}${currentId}`).subscribe({
          next: (data: any) => {
            if (data) {
              this.adminName = data.data.employee_name;
              this.adminImage = data.data.employee_pic;
            }
            this.spinner.hide();
          },
          error: () => {
            this.toastr.error('حدث خطأ أثناء جلب البيانات');
            this.spinner.hide();
          }
        });
    console.log(this.adminName)

  }

}
