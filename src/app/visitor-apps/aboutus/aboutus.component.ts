import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { visitor } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements AfterViewInit {
  @ViewChildren('about') abouts!: QueryList<ElementRef>;

  constructor(private impApiService : ImpApiService) { }

  aboutus = "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل";
  dates = "2024 م 1446  هـ";
  name = "سالم سالم سالم";

  teamMembers = [
    { employee_name: 'أحمد السعدي', employee_position: 'رئيس الشركة', employee_pic: '../../../assets/images/team1.png' },
    { employee_name: 'سامر اسماعيل', employee_position: 'مدير العمليات', employee_pic: '../../../assets/images/team2.png' },
    { employee_name: 'سارة الامير', employee_position: 'مدير الموارد البشرية', employee_pic: '../../../assets/images/default.png' },
    { employee_name: 'خالد تاجا', employee_position: 'نائب الرئيس', employee_pic: '../../../assets/images/default.png' },
    { employee_name: 'محمد الاحمد', employee_position: 'المدير المالي', employee_pic: '../../../assets/images/team2.png' },
    { employee_name: 'ليلى سليم', employee_position: 'مدير التسويق', employee_pic: '../../../assets/images/team1.png' },
    { employee_name: 'علي احمد', employee_position: 'المساعد الإداري', employee_pic: '../../../assets/images/default.png' },
    { employee_name: 'فاطمة رزق', employee_position: 'مدير تكنولوجيا المعلومات', employee_pic: '../../../assets/images/team2.png' },
    { employee_name: 'ماجد الطويل', employee_position: 'رئيس الموارد البشرية', employee_pic: '../../../assets/images/team1.png' },
  ];
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
      console.log(data);
    });
  }


}
