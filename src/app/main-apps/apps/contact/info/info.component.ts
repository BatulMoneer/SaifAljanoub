import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { admin } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private impApiService: ImpApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }


  formData: FormGroup;
  submitted = false;
  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      company_phoneNo: ['', [
        Validators.required,
        Validators.pattern(/^(05\d{8}|9665\d{8})$/)
      ]],
      company_whatsapp: ['', [
        Validators.required,
        Validators.pattern(/^(05\d{8}|9665\d{8})$/)
      ]],
      company_email: ['', [
        Validators.required,
        Validators.email
      ]]
    });

    this.fetchInfo();
  }

  fetchInfo() {
    this.spinner.show();
    this.impApiService.get(admin.viewContact).subscribe({
      next: (data: any) => {
        this.spinner.hide();
        this.formData.patchValue({
          company_phoneNo: data.data.company_phoneNo,
          company_whatsapp: data.data.company_whatsapp,
          company_email: data.data.company_email
        });


      },
      error: (err) => {
        this.spinner.hide();
        console.error(err);
        this.toastr.error('حدث خطأ أثناء جلب المعلومات. يرجى المحاولة لاحقاً.', 'خطأ');
      }
    });
  }

  add() {
    this.submitted = true;

    if (this.formData.invalid) {
      this.toastr.error('يرجى التأكد من ملء جميع الحقول بشكل صحيح.', 'خطأ في الإدخال');
      return;
    }

    const formData = new FormData();
    formData.append('company_phoneNo', this.formData.get('company_phoneNo')?.value);
    formData.append('company_whatsapp', this.formData.get('company_whatsapp')?.value);
    formData.append('company_email', this.formData.get('company_email')?.value);
    formData.append('location_text', 'ffff');

    this.spinner.show();

    this.impApiService.post(admin.updateContact, formData).subscribe({
      next: (data) => {
        this.spinner.hide();
        this.toastr.success('تم تحديث المعلومات بنجاح.', 'نجاح');
        this.submitted = false;
      },
      error: (err) => {
        this.spinner.hide();
        console.error(err);
        this.toastr.error('حدث خطأ أثناء تحديث المعلومات. يرجى المحاولة لاحقاً.', 'خطأ');
      }
    });
  }
}
