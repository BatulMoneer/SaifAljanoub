
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
  ) { }

  info = {
    year: 2023,
    hijriYear: 1445,
    name: "سيف الجنوب",
    founder: "سامر سامر",
    description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق   "
  }

  formData: FormGroup;
  submitted = false;
  years: number[] = [];
  hijriYears: number[] = [];
  selectedYear: string | null = null;
  selectedHijriYear: string | null = null;
  hyear = parseInt(new Intl.DateTimeFormat('ar-TN-u-ca-islamic', { year: 'numeric' }).format(Date.now()));


  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      founder: ['', [Validators.required, Validators.maxLength(30)]],
      year: ['', Validators.required],
      hijriYear: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(200)]],
    });
    this.formData.patchValue({
      name: this.info.name,
      founder: this.info.founder,
      description: this.info.description,
      year: this.info.year,
      hijriYear: this.info.hijriYear
    });

    this.selectedYear = this.info.year.toString();
    this.selectedHijriYear = this.info.hijriYear.toString();

    const currentYear = new Date().getFullYear();
    for (let i = 0; i <= 20; i++) {
      this.years.push(currentYear - i);
    }

    for (let i = 0; i <= 20; i++) {
      this.hijriYears.push(this.hyear - i);
    }
  }

  add() {
    this.submitted = true;
  }

  selectYear(year: string) {
    this.selectedYear = year;
    this.formData.controls['year'].setValue(year);
    const dropdownToggle: HTMLInputElement | null = document.querySelector('#dropdown-toggle');
    if (dropdownToggle) {
      dropdownToggle.checked = false;
    }
  }

  selectHijriYear(year: string) {
    this.selectedHijriYear = year;
    this.formData.controls['hijriYear'].setValue(year);
    const hijriDropdownToggle: HTMLInputElement | null = document.querySelector('#hijri-dropdown-toggle');
    if (hijriDropdownToggle) {
      hijriDropdownToggle.checked = false;
    }
  }

}
