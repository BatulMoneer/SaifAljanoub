import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { visitor } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements AfterViewInit, OnInit {
  @ViewChildren('job') jobs!: QueryList<ElementRef>;
  @ViewChild('jobsContent', { static: false }) jobsContent!: ElementRef;

  constructor(private impApiService: ImpApiService) { }

  // Initialize variables
  jobs_list: any[] = [];
  jobs_length: number = 0;
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
    if (qualification !== 'all') {
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

  ngOnInit(): void {
    this.impApiService.get(visitor.jobs).subscribe((data: any) => {
      if (data && Array.isArray(data[0])) {
        this.jobs_list = data[0];
        this.jobs_length = this.jobs_list.length;
      }
    });
  }

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
