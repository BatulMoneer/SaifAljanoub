
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { admin } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
     private impApiService: ImpApiService,
                private spinner: NgxSpinnerService,
                private toastr: ToastrService,
                private router:Router,
  ) { }

  info = {
    about_comany: ''
  }

  formData: FormGroup;
  submitted = false;


  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      about_comany: ['', [Validators.required, Validators.maxLength(200)]],
    });

    this.spinner.show();
    this.impApiService.get(admin.viewAboutus).subscribe({
      next: (data: any) => {
        if (data && data['من نحن']) {
          console.log(data);
          this.formData.patchValue({
            about_comany: data['من نحن'],
          });
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



  add() {
    this.submitted = true;

    if (this.formData.invalid) {
      return;
    }

    const updatedData = {
      about_comany: this.formData.value.about_comany,
    };

    this.spinner.show();
    this.impApiService.post(admin.updateAboutus, updatedData).subscribe({
      next: (response) => {
        this.toastr.success('تم التحديث بنجاح');
        this.spinner.hide();
      },
      error: (error) => {
        console.error('Update Error:', error);
        this.toastr.error('حدث خطأ أثناء تحديث البيانات');
        this.spinner.hide();
      },
    });
  }
  }


