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

  formData: FormGroup;
  submitted = false;
  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private impApiService: ImpApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.fetchEmployeeData();
  }

  initializeForm(): void {
    this.formData = this.formBuilder.group({
      employee_name: ['', [Validators.required, Validators.maxLength(30)]],
      employee_position: ['', [Validators.required, Validators.maxLength(30)]],
      admin_email: ['', [Validators.required, Validators.email]],
      admin_password: ['', [Validators.minLength(8), Validators.maxLength(12)]],
      employee_pic: ['']
    });
  }

  fetchEmployeeData(): void {
    this.spinner.show();
    const currentId = localStorage.getItem('user_id');

    this.impApiService.get(`${admin.showAccount}${currentId}`).subscribe({
      next: (data: any) => {
        if (data) {
          this.formData.patchValue({
            employee_name: data.data.employee_name,
            employee_position: data.data.employee_position,
            admin_email: data.data.admin_email,
          });
          this.imagePreview = data.data.employee_pic;
        }
        this.spinner.hide();
      },
      error: () => {
        this.toastr.error('حدث خطأ أثناء جلب البيانات');
        this.spinner.hide();
      }
    });
  }

  add(): void {
    this.submitted = true;

    if (this.formData.invalid) {
      this.toastr.error('الرجاء التأكد من ملء جميع الحقول بشكل صحيح');
      return;
    }

    this.spinner.show();
    const currentId = localStorage.getItem('user_id');

    if (currentId) {
      const formData = new FormData();
      this.appendFormData(formData);
      if (this.formData.value.admin_password){
      this.impApiService.post(`${admin.updateAccountWithPass}${currentId}`, formData).subscribe({
        next: () => {
          this.toastr.success('تم التحديث بنجاح');
        },
        error: () => {
          this.toastr.error('حدث خطأ أثناء تحديث الحساب');
        },
        complete: () => this.spinner.hide()
      });
      }
      else{

      this.impApiService.post(`${admin.updateAccountWithoutPass}${currentId}`, formData).subscribe({
        next: () => {
          this.toastr.success('تم التحديث بنجاح');
        },
        error: () => {
          this.toastr.error('حدث خطأ أثناء تحديث الحساب');
        },
        complete: () => this.spinner.hide()
      });
      }
    } else {
      this.toastr.error('لا يوجد حساب حالي للتحديث');
      this.spinner.hide();
    }
  }

  appendFormData(formData: FormData): void {
    formData.append('employee_name', this.formData.value.employee_name);
    formData.append('employee_position', this.formData.value.employee_position);
    formData.append('admin_email', this.formData.value.admin_email);

    if (this.formData.value.admin_password) {
      formData.append('admin_password', this.formData.value.admin_password);
    }

    if (this.selectedImage) {
      formData.append('employee_pic', this.selectedImage);
    }
  }

  handleImageInput(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      this.formData.patchValue({ employee_pic: file });
      this.updateImagePreview(file);
    }
  }

  updateImagePreview(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imagePreview = e.target?.result;
    };
    reader.readAsDataURL(file);
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer?.files) {
      const file = event.dataTransfer.files[0];
      this.selectedImage = file;
      this.formData.patchValue({ employee_pic: file });
      this.updateImagePreview(file);
    }
  }
}
