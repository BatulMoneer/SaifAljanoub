import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  service = {
    image: "../../../../../assets/images/work.jpg",
    title: "مقاولات الطرق",
    description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق   "
  }

  formData: FormGroup;
  submitted = false

  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      company_phoneNo: ['', [
        Validators.required,
        Validators.pattern(/^(05\d{8}|9665\d{8})$/)
      ]],
      company_whatsapp: ['', [
        Validators.required,
        Validators.pattern(/^(05\d{8}|9665\d{8})$/)
      ]],
      company_email: ['', [
        Validators.required,
        Validators.email
      ]],
    });
    this.formData.patchValue({
      title: this.service.title,
      description: this.service.description,
      image: this.service.image
    });
    this.imagePreview = this.service.image;

  }

  add() {
    this.submitted = true;
  }



}
