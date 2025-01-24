import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { visitor, admin } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements AfterViewInit {
  @ViewChildren('about') abouts!: QueryList<ElementRef>;

  constructor(private impApiService : ImpApiService) { }

  about_us = "";
  dates = "2024 م 1446  هـ";
  name = "سالم سالم سالم";

  teamMembers: Array<{ employee_name: string, employee_position: string, employee_pic: string }> = [];

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

    this.abouts.forEach((about) => {
      observer.observe(about.nativeElement);
    });

    this.impApiService.get(visitor.employees).subscribe(data => {
      this.teamMembers = data[0]
      console.log(this.teamMembers);
    });
    this.impApiService.get(visitor.aboutus).subscribe(data => {
      console.log(data);
      this.about_us = data.about_us
    });
  }

}
