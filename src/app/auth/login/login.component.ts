import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  submit = "تسجيل الدخول";
  link = "home";
  formData = null
  submitted = false
  showOtpInput = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(12)
      ]]
    });
  }


  login() {
    this.submitted = true
    if (this.formData.invalid) {
      return null;
    }
    this.showOtpInput = true;


  }

  otpCheck() {
    this.router.navigate(['/apps/homepage/home']);
  }


}
