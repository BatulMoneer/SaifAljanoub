import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { admin } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentSection: string = 'one';
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private impApiService: ImpApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.form = this.fb.group({
      sectionOne: ['', [Validators.maxLength(50)]],
      sectionTwo: ['', [Validators.maxLength(200)]],
      sectionThree: ['', [Validators.maxLength(200)]],
    });
  }

  ngOnInit(): void {
   this.spinner.show();
   this.fetchSectionOne();
  this.fetchSectionTwo();
   this.fetchSectionThree();
  }

  fetchSectionOne() {
    this.impApiService.get(admin.viewOverview).subscribe({
      next: (data: any) => {
        console.log(data)
        this.form.patchValue({ sectionOne: data["نبذه "] || '' });
      },
      error: (error) => {
        console.error('Error fetching about company:', error);
        this.toastr.error('خطأ أثناء جلب نبذة الشركة');
      },
      complete: () => this.spinner.hide(),
    });
  }

  fetchSectionTwo() {
    this.impApiService.get(admin.viewGoal).subscribe({
      next: (data: any) => {
        console.log(data["هدفنا "] )

        this.form.patchValue({ sectionTwo: data["هدفنا "] || '' });
      },
      error: (error) => {
        console.error('Error fetching company goals:', error);
        this.toastr.error('خطأ أثناء جلب أهداف الشركة');
      },
      complete: () => this.spinner.hide(),
    });
  }

  fetchSectionThree() {
    this.impApiService.get(admin.viewVision).subscribe({
      next: (data: any) => {
        console.log(data["رؤيتنا "])
        this.form.patchValue({ sectionThree: data["رؤيتنا "] || '' });
      },
      error: (error) => {
        console.error('Error fetching company vision:', error);
        this.toastr.error('خطأ أثناء جلب رؤية الشركة');
      },
      complete: () => this.spinner.hide(),
    });
  }

  showSection(section: string) {
    this.currentSection = section;
  }

  get sectionOneLimitExceeded(): boolean {
    return this.form.get('sectionOne')?.hasError('maxlength') ?? false;
  }

  get sectionTwoLimitExceeded(): boolean {
    return this.form.get('sectionTwo')?.hasError('maxlength') ?? false;
  }

  get sectionThreeLimitExceeded(): boolean {
    return this.form.get('sectionThree')?.hasError('maxlength') ?? false;
  }
  onSubmit(section: string) {
    if (this.form.valid) {
      console.log('Form is valid:', this.form.value);
      this.spinner.show();
      if (section === 'one') {
        const sectionOneValue = this.form.get('sectionOne')?.value;
        this.postData(admin.updateOverview, { about_comany_short: sectionOneValue }, 'نبذة الشركة');
      } else if (section === 'two') {
        const sectionTwoValue = this.form.get('sectionTwo')?.value;
        this.postData(admin.updateGoal, { comapny_goal: sectionTwoValue }, 'أهداف الشركة');
      } else if (section === 'three') {
        const sectionThreeValue = this.form.get('sectionThree')?.value;
        this.postData(admin.updateVision, { company_vision: sectionThreeValue }, 'رؤية الشركة');
      }
    } else {
      console.error('Form errors:', this.form.errors, this.form.controls);
      this.toastr.error('يرجى التأكد من صحة الإدخالات في الحقول.', 'خطأ في الإدخال');
    }
  }


  private postData(url: string, body: any, sectionName: string) {
    this.impApiService.post(url, body).subscribe({
      next: () => {
        this.toastr.success(`تم تحديث ${sectionName} بنجاح.`, 'نجاح');
      },
      error: (err) => {
        console.error(`Error updating ${sectionName}:`, err);
        this.toastr.error(`حدث خطأ أثناء تحديث ${sectionName}.`, 'خطأ');
      },
      complete: () => this.spinner.hide(),
    });
  }
}
