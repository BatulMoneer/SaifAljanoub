import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentSection: string = 'one';
  form: FormGroup;
  about = "أكتب نبذة الشركة..."
  comapny_goal = "أكتب أهداف الشركة..."
  company_vision = "أكتب رؤية الشركة..."

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      sectionOne: ['', [Validators.maxLength(50)]],
      sectionTwo: ['', [Validators.maxLength(200)]],
      sectionThree: ['', [Validators.maxLength(200)]],
    });
  }

  showSection(section: string) {
    this.currentSection = section;
  }

  ngOnInit(): void { }

  get sectionOneLimitExceeded(): boolean {
    return this.form.get('sectionOne')?.hasError('maxlength') ?? false;
  }

  get sectionTwoLimitExceeded(): boolean {
    return this.form.get('sectionTwo')?.hasError('maxlength') ?? false;
  }

  get sectionThreeLimitExceeded(): boolean {
    return this.form.get('sectionThree')?.hasError('maxlength') ?? false;
  }

  onSubmit() {
    if (this.form.valid) {
      // Handle form submission
      console.log(this.form.value);
    }
  }
}
