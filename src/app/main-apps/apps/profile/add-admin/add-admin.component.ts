import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { admin } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {
  formData: FormGroup;
  submitted = false;
  employees: { id: string; name: string }[] = [];
  selectedEmp: { id: string; name: string } | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private impApiService: ImpApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      employees: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.spinner.show();
    this.impApiService.get(admin.viewEmployee).subscribe({
      next: (data: any) => {
        this.spinner.hide();
        console.log(data);

        if (Array.isArray(data) && Array.isArray(data[0])) {

          this.employees = data[0].map((employee: any) => ({
            id: employee.employee_id,
            name: employee.employee_name,
          }));
        } else {
          console.error('Unexpected response structure:', data);
          this.toastr.error('خطأ غير متوقع');
        }
      },
      error: (error) => {
        console.error('API Error:', error);
        this.toastr.error('حدث خطأ أثناء جلب البيانات');
        this.spinner.hide();
      },
    });
  }

  add(): void {
    this.submitted = true;

    if (this.formData.invalid || !this.selectedEmp) {
      this.toastr.error('يرجى التأكد من ملء جميع الحقول بشكل صحيح.', 'خطأ في الإدخال');
      return;
    }

    const payload = {
      email: this.formData.value.email,
      employee_id: this.selectedEmp.id,
    };

    this.spinner.show();
    console.log(this.selectedEmp.id)
    this.impApiService.post(admin.addAdmin, payload).subscribe({
      next: (data) => {
        console.log('Admin added successfully:', data);
        this.spinner.hide();
        this.formData.reset();
        this.submitted = false;
        this.toastr.success('تم إضافة المسؤول بنجاح');
      },
      error: (err) => {
        console.error('Error adding admin:', err);
        this.spinner.hide();
        this.toastr.error('حدث خطأ أثناء إضافة المسؤول. يرجى المحاولة لاحقاً.', 'خطأ');
      },
    });
  }

  selectEmp(emp: { id: string; name: string }): void {
    this.selectedEmp = emp;
    this.formData.controls['employees'].setValue(emp.id);
    const dropdownToggle: HTMLInputElement | null = document.querySelector('#name-dropdown-toggle');
    if (dropdownToggle) {
      dropdownToggle.checked = false;
    }
  }

}
