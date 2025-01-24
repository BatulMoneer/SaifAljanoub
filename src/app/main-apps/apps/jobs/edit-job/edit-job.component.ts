import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { admin } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private impApiService: ImpApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  job = {
    job_position: '',
    job_qualification: '',
    job_salary: '',
    job_description: '',
    job_link: '',
    job_experience: ''
  };

  formData: FormGroup;
  submitted = false;

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

    this.spinner.show();

    this.impApiService.get(admin.viewJob).subscribe({
      next: (data: any) => {
        console.log('Full API Response:', data);

        const currentJobId = localStorage.getItem('current_job');
        if (Array.isArray(data[0]) && currentJobId) {
          const job = data[0].find((j: any) => j.job_id.toString() === currentJobId);
          if (job) {
            this.job = {
              job_position: job.job_position,
              job_qualification: job.job_qualification,
              job_salary: job.job_salary,
              job_description: job.job_description,
              job_link: job.job_link,
              job_experience: job.job_experience
            };

            this.formData.patchValue(this.job);

            this.selectedExperienceYear = this.job.job_experience;
            this.selectedQualification = this.job.job_qualification;

            this.spinner.hide();
          } else {
            console.error('Job not found');
            this.toastr.error('لم يتم العثور على الوظيفة');
            this.spinner.hide();
          }
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
      }
    });
  }

  add() {
    this.submitted = true;

    if (this.formData.invalid) {
      this.toastr.error('الرجاء التأكد من ملء جميع الحقول بشكل صحيح');
      return;
    }

    this.spinner.show();

    const currentJobId = localStorage.getItem('current_job');
    if (currentJobId) {
      this.impApiService.post(`${admin.updateJob}${currentJobId}`, this.formData.value).subscribe({
        next: () => {
          this.toastr.success('تم التحديث بنجاح');

          this.spinner.hide();
        },
        error: (error) => {
          console.error('Update API Error:', error);
          this.toastr.error('حدث خطأ أثناء تحديث الوظيفة');
          this.spinner.hide();
        }
      });
    } else {
      this.toastr.error('لا يوجد وظيفة حالية للتحديث');
      this.spinner.hide();
    }
  }

  selectQualification(qualification: string) {
    this.selectedQualification = qualification;
    this.formData.controls['job_qualification'].setValue(qualification);
    const dropdownToggle: HTMLInputElement | null = document.querySelector('#dropdown-toggle');
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
