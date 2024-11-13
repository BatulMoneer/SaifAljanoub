import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements AfterViewInit {
  @ViewChildren('job') jobs!: QueryList<ElementRef>;
  @ViewChild('jobsContent', { static: false }) jobsContent!: ElementRef;


  jobs_list = [
    {
      job_position: "مهندس",
      job_qualification: "بكالوريوس",
      job_salary: "٦٠٠٠ ",
      job_description: "دراية بالمعايير المحلية والدولية المتعلقة بالسلامة والبيئة في تصميم الطرق.\nفهم متطلبات الجودة والاختبارات اللازمة لضمان سلامة الطرق.\nالقدرة على تطبيق معايير الاستدامة والتقنيات الحديثة لتحسين كفاءة المشاريع.",
      job_link: "https://www.youtube.com/watch?v=xO7QKi-SukQ&t=2126s",
      job_experience: "٠-٤"
    },
    {
      job_position: "مدير مشروع",
      job_qualification: "ماجستير",
      job_salary: "٨٠٠٠ ",
      job_description: "خبرة في إدارة المشاريع وتحقيق الأهداف ضمن الوقت والميزانية المحددة.\nالقدرة على قيادة فرق العمل والتواصل بفعالية مع أصحاب المصلحة.",
      job_link: "https://www.example.com/project-manager",
      job_experience: "٤-٦"
    },
    {
      job_position: "فني صيانة",
      job_qualification: "دبلوم",
      job_salary: "٤٥٠٠ ",
      job_description: "القيام بأعمال الصيانة الدورية والتأكد من كفاءة المعدات والأجهزة.\nالتعامل مع الأعطال وإصلاحها بسرعة وفعالية.",
      job_link: "https://www.example.com/maintenance-technician",
      job_experience: "٠-٤"
    },
    {
      job_position: "محلل بيانات",
      job_qualification: "بكالوريوس",
      job_salary: "٧٠٠٠ ",
      job_description: "تحليل البيانات وتقديم التقارير اللازمة لاتخاذ القرارات.\nالتعامل مع البيانات الضخمة واستخلاص الاستنتاجات منها.",
      job_link: "https://www.example.com/data-analyst",
      job_experience: "٦-١٠"
    },
    {
      job_position: "مدرس لغة عربية",
      job_qualification: "دكتوراه",
      job_salary: "٩٠٠٠ ",
      job_description: "تدريس اللغة العربية وتطوير المناهج التعليمية.\nالقدرة على التواصل مع الطلاب بفعالية وتعزيز مهاراتهم اللغوية.",
      job_link: "https://www.example.com/arabic-teacher",
      job_experience: "أكثر من ١٠"
    },
    {
      job_position: "مساعد إداري",
      job_qualification: "ثانوية عامة",
      job_salary: "٣٥٠٠ ",
      job_description: "تنفيذ المهام الإدارية ومساعدة فريق الإدارة في تنظيم العمل.\nالتواصل مع العملاء وإعداد التقارير اللازمة.",
      job_link: "https://www.example.com/admin-assistant",
      job_experience: "لا يوجد"
    }
  ];

  jobs_length = this.jobs_list.length
  itemWidth: number = 0;
  selectedQualification: string = '';
  selectedExperience: string = '';
  qualifications = ["ثانوية عامة", "دبلوم", "بكالوريوس", "ماجستير", "دكتوراه"];
  experienceYears = ["لا يوجد", "٠-٤", "٤-٦", "٦-١٠", "أكثر من ١٠"];

  get filteredJobs() {
    return this.jobs_list.filter(job => {
      const matchesQualification = this.selectedQualification ? job.job_qualification === this.selectedQualification : true;
      const matchesExperience = this.selectedExperience ? job.job_experience === this.selectedExperience : true;
      return matchesQualification && matchesExperience;
    });

  }
  selectQualification(qualification: string) {

    if (qualification != 'all') {
      this.selectedQualification = qualification;
      const dropdownToggle: HTMLInputElement | null = document.querySelector('#qualification2-dropdown-toggle');
      if (dropdownToggle) {
        dropdownToggle.checked = false;
      }
    }

  }
  selectExperienceYear(experienceYear: string) {
    this.selectedExperience = experienceYear;
    const dropdownToggle: HTMLInputElement | null = document.querySelector('#experienceYear2-dropdown-toggle');
    if (dropdownToggle) {
      dropdownToggle.checked = false;
    }
  }

  constructor() { }
  ngAfterViewInit(): void {
    window.onload = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    this.updateItemWidth();
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

    this.jobs.forEach((job) => {
      observer.observe(job.nativeElement);
    });
  }

  @HostListener('window:resize', [])
  updateItemWidth() {
    this.itemWidth = this.jobsContent.nativeElement.offsetWidth + 20;
  }


  scrollLeft() {
    const carousel = this.jobsContent.nativeElement;

    carousel.scrollBy({ left: -this.itemWidth, behavior: 'smooth' });
  }

  scrollRight() {
    const carousel = this.jobsContent.nativeElement;

    carousel.scrollBy({ left: this.itemWidth, behavior: 'smooth' });
  }

}
