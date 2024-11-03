import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements AfterViewInit {
  @ViewChildren('about') abouts!: QueryList<ElementRef>;

  constructor() { }

  aboutus = "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل";
  dates = "2024 م1446 هـ";
  name = "سالم سالم سالم";

  teamMembers = [
    { name: 'أحمد السعدي', position: 'رئيس الشركة', imageUrl: '../../../assets/images/team1.png' },
    { name: 'سامر اسماعيل', position: 'مدير العمليات', imageUrl: '../../../assets/images/team2.png' },
    { name: 'سارة الامير', position: 'مدير الموارد البشرية', imageUrl: '../../../assets/images/default.png' },
    { name: 'خالد تاجا', position: 'نائب الرئيس', imageUrl: '../../../assets/images/default.png' },
    { name: 'محمد الاحمد', position: 'المدير المالي', imageUrl: '../../../assets/images/team2.png' },
    { name: 'ليلى سليم', position: 'مدير التسويق', imageUrl: '../../../assets/images/team1.png' },
    { name: 'علي احمد', position: 'المساعد الإداري', imageUrl: '../../../assets/images/default.png' },
    { name: 'فاطمة رزق', position: 'مدير تكنولوجيا المعلومات', imageUrl: '../../../assets/images/team2.png' },
    { name: 'ماجد الطويل', position: 'رئيس الموارد البشرية', imageUrl: '../../../assets/images/team1.png' },
  ];
  ngAfterViewInit(): void {
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
  }


}
