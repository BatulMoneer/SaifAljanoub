import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
  ) { }

  formData: FormGroup;
  submitted = false

  qualifications = ["ثانوية عامة", "دبلوم", "بكالوريوس", "ماجستير", "دكتوراه"];
  experienceYears = ["لا يوجد", "٠-٤", "٤ - ٦", "٦-١٠", "اكثر من ١٠ "];
  selectedQualification: string | null = null;
  selectedExperienceYear: string | null = null;

  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      position: ['', [Validators.required, Validators.maxLength(30)]],
      jobRequirements: ['', [Validators.required, Validators.maxLength(200)]],
      experienceYear: ['', Validators.required],
      salary: ['', Validators.required],
      applicationLink: ['', Validators.required],
      qualification: ['', Validators.required],
    });
  }

  add() {
    this.submitted = true;
  }

  selectQualification(qualification: string) {
    this.selectedQualification = qualification;
    this.formData.controls['qualification'].setValue(qualification);
    const dropdownToggle: HTMLInputElement | null = document.querySelector('#qualification-dropdown-toggle');
    if (dropdownToggle) {
      dropdownToggle.checked = false;
    }
  }

  selectExperienceYear(experienceYear: string) {
    this.selectedExperienceYear = experienceYear;
    this.formData.controls['experienceYear'].setValue(experienceYear);
    const dropdownToggle: HTMLInputElement | null = document.querySelector('#experienceYear-dropdown-toggle');
    if (dropdownToggle) {
      dropdownToggle.checked = false;
    }
  }




}
