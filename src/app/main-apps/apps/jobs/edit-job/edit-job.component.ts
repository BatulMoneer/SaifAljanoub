import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
  ) { }

  job =
    {
      job_position: "مهندس",
      job_qualification: "بكالوريوس",
      job_salary: " ٦٠٠٠ ريال ",
      job_description: "دراية بالمعايير المحلية والدولية المتعلقة بالسلامة والبيئة في تصميم الطرق. \n فهم متطلبات الجودة والاختبارات اللازمة لضمان سلامة الطرق. \nالقدرة على تطبيق معايير الاستدامة والتقنيات الحديثة لتحسين كفاءة المشاريع.",
      job_link: "https/forms.com/jobs/Enginner",
      job_experience: "٠ - ٤ سنوات "
    };

  formData: FormGroup;
  submitted = false

  qualifications = ["ثانوية عامة", "دبلوم", "بكالوريوس", "ماجستير", "دكتوراه"];
  experienceYears = ["لا يوجد", "٠-٤", "٤-٦", "٦-١٠", "أكثر من ١٠"];
  selectedQualification: string | null = null;
  selectedExperienceYear: string | null = null;

  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      job_position: ['', [Validators.required, Validators.maxLength(30)]],
      job_description: ['', [Validators.required, Validators.maxLength(200)]],
      job_experience: ['', Validators.required],
      job_salary: ['', Validators.required],
      job_link: ['', Validators.required],
      job_qualification: ['', Validators.required],
    });
    this.formData.patchValue({
      job_position: this.job.job_position,
      job_description: this.job.job_description,
      job_experience: this.job.job_experience,
      job_salary: this.job.job_salary,
      job_link: this.job.job_link,
      job_qualification: this.job.job_qualification

    });
    this.selectedExperienceYear = this.job.job_experience.toString();
    this.selectedQualification = this.job.job_qualification.toString();

  }

  add() {
    this.submitted = true;
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
