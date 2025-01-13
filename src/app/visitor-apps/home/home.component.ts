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

  news = [
    { title: "مشروع شارع السلام", description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق", image: "../../../assets/images/new.jpg" },
    { title: "طريق باب النور", description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق", image: "../../../assets/images/new.jpg" },
    { title: "شارع الجامعة", description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق", image: "../../../assets/images/new.jpg" },
    { title: "مشروع الخط السريع", description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق", image: "../../../assets/images/new.jpg" },
    { title: "مشروع طريق الدهب", description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق", image: "../../../assets/images/new.jpg" },
  ];

  itemWidth: number = 0;

  brief = "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف ";
  vision = "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل ";
  goals = "سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات ";

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

    this.impApiService.get(visitor.news).subscribe(data => {
      console.log(data);
    });

    this.impApiService.get(visitor.home).subscribe(data => {
      console.log(data);
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
