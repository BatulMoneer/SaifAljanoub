
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
    about_comany: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق   "
  }

  formData: FormGroup;
  submitted = false;


  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      about_comany: ['', [Validators.required, Validators.maxLength(200)]],
    });
    this.formData.patchValue({
      about_comany: this.info.about_comany,
    });


  }

  add() {
    this.submitted = true;
  }

}
