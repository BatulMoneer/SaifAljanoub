import { visitor } from 'src/app/constant/Routes';
import { ImpApiService } from './../../services/api.service';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChildren('project') projects!: QueryList<ElementRef>;
  @ViewChild('projectsContent', { static: false }) projectsContent!: ElementRef;

  projects_list = [
      ];

  itemWidth: number = 0;

  constructor(
    private spinner: NgxSpinnerService,
    private impApiService: ImpApiService) { }
  ngOnInit(): void {
    this.spinner.show()
    this.impApiService.get(visitor.projects).subscribe((data: any) => {
      if (data && Array.isArray(data[0])) {
        this.projects_list = data[0];
        console.log(data[0])
        this.spinner.hide()
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

    this.projects.forEach((project) => {
      observer.observe(project.nativeElement);
    });

  }

  @HostListener('window:resize', [])
  updateItemWidth() {
    this.itemWidth = this.projectsContent.nativeElement.offsetWidth + 20;
  }


  scrollLeft() {
    const carousel = this.projectsContent.nativeElement;

    carousel.scrollBy({ left: -this.itemWidth, behavior: 'smooth' });
  }

  scrollRight() {
    const carousel = this.projectsContent.nativeElement;

    carousel.scrollBy({ left: this.itemWidth, behavior: 'smooth' });
  }

}
