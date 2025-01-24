import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { visitor } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements AfterViewInit {
  @ViewChildren('section') sections!: QueryList<ElementRef>;
  @ViewChild('widgetsContent', { static: false }) widgetsContent!: ElementRef;

  constructor(private impApiService: ImpApiService,) { }

  news = [ ];

  itemWidth: number = 0;

  about_comany_short = "";
  company_vision = "";
  comapny_goal = "";

  ngOnInit(): void {
    this.impApiService.get(visitor.news).subscribe((data: any) => {
      if (data && Array.isArray(data[0])) {
        this.news = data[0];
        console.log(data[0])
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

    this.sections.forEach((section) => {
      observer.observe(section.nativeElement);
    });


    this.impApiService.get(visitor.home).subscribe(data => {
      this.company_vision = data.data.company_vision,
      this.comapny_goal = data.data.comapny_goal,
      this.about_comany_short = data.data.about_comany_short
    });
  }


  @HostListener('window:resize', [])
  updateItemWidth() {
    this.itemWidth = this.widgetsContent.nativeElement.offsetWidth + 10;
  }


  scrollLeft() {
    const carousel = this.widgetsContent.nativeElement;

    carousel.scrollBy({ left: -this.itemWidth, behavior: 'smooth' });
  }

  scrollRight() {
    const carousel = this.widgetsContent.nativeElement;

    carousel.scrollBy({ left: this.itemWidth, behavior: 'smooth' });
  }
}
