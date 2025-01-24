import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { admin } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

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
    private impApiService: ImpApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {


    this.formData = this.formBuilder.group({
      admin_email: ['', [
        Validators.required,
        Validators.email
      ]],
      admin_password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)
      ]]
    });
  }


  login() {
    this.submitted = true
    if (this.formData.invalid) {
      return null;
    }
    this.spinner.show()
    this.impApiService.post(admin.login, this.formData.value).subscribe(data => {
      if(JSON.stringify(data.message)=="\"تم تسجيل الدخول... للتأكيد تم ارسال رمز على البريد الإلكتروني  \""){

        this.showOtpInput = true;
      this.spinner.hide()
      }
      else{
        this.toastr.error('يوجد خطأ في البريد الإلكتروني أو في كلمة المرور');
        this.spinner.hide()
      }
    })




  }

  @ViewChild("ngOtpInput") ngOtpInput: any;
  otpCheck() {

    const payload = {
      admin_email: this.formData.get('admin_email')?.value,
      otp_entered: this.ngOtpInput.currentVal
    };
    console.log('Spinner show called');
this.spinner.show();

this.impApiService.post(admin.verify, payload).subscribe({
  next: (data) => {
    this.spinner.hide();
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('user_id', data.admin_id)
    this.router.navigate(['/apps/homepage/home']);
  },
  error: (error) => {
    if (error?.error?.message === 'الرمز غير صحيح ... او انتهت المدة الصالحة له ') {
      console.log('ssss');
      this.toastr.error('الرمز غير صحيح ... او انتهت المدة الصالحة له ');
    } else {
      console.error('Unexpected error:', error);
      this.toastr.error('خطأ غير متوقع يرجى إعادة المحاولة');
    }
    this.spinner.hide();
  },
});

  }


}
