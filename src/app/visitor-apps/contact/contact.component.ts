import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit, OnInit {
  @ViewChildren('contact') contacts!: QueryList<ElementRef>;
  contactForm!: FormGroup;
  submitted = false


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      messageType: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  onSubmit() {
    this.submitted = true
    if (this.contactForm.valid) {
      alert('Form submitted successfully!');
      console.log(this.contactForm.value);
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
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }
}
