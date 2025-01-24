import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { admin } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss']
})
export class EditMemberComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private impApiService: ImpApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  employee = {
    employee_name: '',
    employee_position: '',
    employee_pic: ''
  };

  formData: FormGroup;
  submitted = false;
  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      employee_name: ['', [Validators.required, Validators.maxLength(30)]],
      employee_position: ['', [Validators.required, Validators.maxLength(30)]],
      employee_pic: ['', []]
    });

    this.spinner.show();

    this.impApiService.get(admin.viewEmployee).subscribe({
      next: (data: any) => {
        const currentMemberId = localStorage.getItem('current_member');

        if (Array.isArray(data[0]) && currentMemberId) {
          const employee = data[0].find((emp: any) => emp.employee_id.toString() === currentMemberId);
          if (employee) {
            this.employee = {
              employee_name: employee.employee_name,
              employee_position: employee.employee_position,
              employee_pic: employee.employee_pic || "../../../../../assets/images/default.png"
            };
            this.formData.patchValue(this.employee);
            this.imagePreview = this.employee.employee_pic;
            this.spinner.hide();
          } else {
            this.toastr.error('لم يتم العثور على الموظف');
            this.spinner.hide();
          }
        } else {
          this.toastr.error('خطأ غير متوقع');
          this.spinner.hide();
        }
      },
      error: (error) => {
        console.error('API Error:', error);
        this.toastr.error('حدث خطأ أثناء جلب بيانات الموظف');
        this.spinner.hide();
      }
    });
  }

  add(): void {
    this.submitted = true;

    if (this.formData.invalid) {
      this.toastr.error('يرجى ملء جميع الحقول بشكل صحيح');
      return;
    }

    this.spinner.show();

    const currentMemberId = localStorage.getItem('current_member');

    if (currentMemberId) {
      const formData = new FormData();
      formData.append('employee_name', this.formData.value.employee_name);
      formData.append('employee_position', this.formData.value.employee_position);
      if (this.selectedImage) {
        formData.append('employee_pic', this.selectedImage);
      }

      this.impApiService.post(`${admin.updateEmployee}${currentMemberId}`, formData).subscribe({
        next: () => {
          this.toastr.success('تم التحديث بنجاح');
          this.spinner.hide();
        },
        error: (error) => {
          console.error('Error updating employee:', error);
          this.toastr.error('حدث خطأ أثناء تحديث بيانات الموظف');
          this.spinner.hide();
        }
      });
    } else {
      this.toastr.error('لا يوجد موظف حالي للتحديث');
      this.spinner.hide();
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
    event.stopPropagation();
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer?.files) {
      const file = event.dataTransfer.files[0];
      this.selectedImage = file;
      this.formData.patchValue({ employee_pic: file });
      this.updateImagePreview(file);
    }
  }
}
