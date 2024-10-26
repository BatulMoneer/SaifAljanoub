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
      position: "مهندس",
      qualification: "بكالوريوس",
      salary: " ٦٠٠٠ ريال ",
      jobRequirements: "دراية بالمعايير المحلية والدولية المتعلقة بالسلامة والبيئة في تصميم الطرق. \n فهم متطلبات الجودة والاختبارات اللازمة لضمان سلامة الطرق. \nالقدرة على تطبيق معايير الاستدامة والتقنيات الحديثة لتحسين كفاءة المشاريع.",
      applicationLink: "https/forms.com/jobs/Enginner",
      experienceYear: "٠ - ٤ سنوات "
    };

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
    this.formData.patchValue({
      position: this.job.position,
      jobRequirements: this.job.jobRequirements,
      experienceYear: this.job.experienceYear,
      salary: this.job.salary,
      applicationLink: this.job.applicationLink,
      qualification: this.job.qualification

    });
    this.selectedExperienceYear = this.job.experienceYear.toString();
    this.selectedQualification = this.job.qualification.toString();

  }

  add() {
    this.submitted = true;
  }

  selectQualification(qualification: string) {
    this.selectedQualification = qualification;
    this.formData.controls['qualification'].setValue(qualification);
    const dropdownToggle: HTMLInputElement | null = document.querySelector('#dropdown-toggle');
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

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const dropZone = event.target as HTMLElement;
    dropZone.classList.add('dragging');
  }

  onDragLeave(event: DragEvent): void {
    const dropZone = event.target as HTMLElement;
    dropZone.classList.remove('dragging');
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const dropZone = event.target as HTMLElement;
    dropZone.classList.remove('dragging');

    if (event.dataTransfer?.files) {
      const file = event.dataTransfer.files[0];
      this.selectedImage = file;
      this.formData.patchValue({ image: file });
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

  handleImageInput(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      this.formData.patchValue({
        image: file
      });
      this.updateImagePreview(file);
      console.log('Image file selected:', file);
    }
  }

}
