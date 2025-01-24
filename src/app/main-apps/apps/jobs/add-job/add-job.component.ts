import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { admin } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    private impApiService: ImpApiService,
            private spinner: NgxSpinnerService,
            private toastr: ToastrService
  ) { }

  formData: FormGroup;
  submitted = false

  qualifications = ["ثانوية عامة", "دبلوم", "بكالوريوس", "ماجستير", "دكتوراه"];
  experienceYears = ["لا يوجد", "٠-٤", "٤-٦", "٦-١٠", "أكثر من ١٠"];
  selectedQualification: string | null = null;
  selectedExperienceYear: string | null = null;


  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      job_position: ['', [Validators.required, Validators.maxLength(30)]],
      job_description: ['', [Validators.required, Validators.maxLength(200)]],
      job_experience: ['', Validators.required],
      job_salary: ['', Validators.required],
      job_link: ['', Validators.required],
      job_qualification: ['', Validators.required],
    });
  }

  add() {
    this.submitted = true;

    if (this.formData.invalid) {
      this.toastr.error('يرجى التأكد من ملء جميع الحقول بشكل صحيح.', 'خطأ في الإدخال');
      return;
    }

    this.spinner.show();

    this.impApiService.post(admin.addJob, this.formData.value).subscribe({
      next: (data) => {
        console.log(data);
        this.toastr.success('تم الإضافة بنجاح');

        this.spinner.hide();
        this.formData.reset();
        this.submitted = false;
        this.selectedQualification = null;
        this.selectedExperienceYear = null;
      },
      error: (err) => {
        console.error(err);
        this.spinner.hide();
        this.toastr.error('حدث خطأ أثناء إضافة الوظيفة. يرجى المحاولة لاحقاً.', 'خطأ');
      }
    });
  }


  selectQualification(qualification: string) {
    this.selectedQualification = qualification;
    this.formData.controls['job_qualification'].setValue(qualification);
    const dropdownToggle: HTMLInputElement | null = document.querySelector('#qualification-dropdown-toggle');
    if (dropdownToggle) {
      dropdownToggle.checked = false;
    }
  }

  selectExperienceYear(experienceYear: string) {
    this.selectedExperienceYear = experienceYear;
    this.formData.controls['job_experience'].setValue(experienceYear);
    const dropdownToggle: HTMLInputElement | null = document.querySelector('#experienceYear-dropdown-toggle');
    if (dropdownToggle) {
      dropdownToggle.checked = false;
    }
  }




}
