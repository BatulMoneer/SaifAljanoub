import { ImpApiService } from './../../services/api.service';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { visitor } from 'src/app/constant/Routes';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit, OnInit {
  @ViewChildren('contact') contacts!: QueryList<ElementRef>;
  contactForm!: FormGroup;
  submitted = false

  company_whatsapp;
  company_email;
  company_phoneNo;

  constructor(
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private impApiService: ImpApiService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      visitor_email: ['', [Validators.required, Validators.email]],
      message_type: ['', Validators.required],
      message_content: ['', [Validators.required, Validators.maxLength(100)]]
    });

    this.spinner.show()

    this.impApiService.get(visitor.contact).subscribe((data: any) => {
      this.company_email = data.data.company_email
      this.company_phoneNo = data.data.company_phoneNo
      this.company_whatsapp = data.data.company_whatsapp
      this.spinner.hide()

      })
  }

  onSubmit() {
    this.submitted = true
    if (this.contactForm.valid) {
      const payload = {
        visitor_email: this.contactForm.get('visitor_email')?.value,
        message_type: this.contactForm.get('message_type')?.value,
        message_content: this.contactForm.get('message_content')?.value,
      };

      this.impApiService.post(visitor.send_message, payload).subscribe(
        (data) => {
          console.log('Message sent successfully:', data);
        },
        (error) => {
          console.error('Error sending message:', error);
        }
      );
      console.log(this.contactForm.value);
      this.submitted = false;
      this.contactForm.reset();
    }
  }

  ngAfterViewInit(): void {
    window.onload = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          } else {
            entry.target.classList.remove('reveal-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    this.contacts.forEach((contact) => {
      observer.observe(contact.nativeElement);
    });
  }

  get email() {
    return this.contactForm.get('visitor_email');
  }

  get message() {
    return this.contactForm.get('message_content');
  }
}
