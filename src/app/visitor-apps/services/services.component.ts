import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements AfterViewInit {
  @ViewChildren('service') services!: QueryList<ElementRef>;
  @ViewChild('servicesContent', { static: false }) servicesContent!: ElementRef;

  services_list = [
    { title: "مقاولات الطرق", description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق", image: "../../../assets/images/work.jpg" },
    { title: "تحسين الطرق", description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق", image: "../../../assets/images/work.jpg" },
    { title: "بناء الطرق", description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق", image: "../../../assets/images/work.jpg" },
    { title: "مقاولات الطرق", description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق", image: "../../../assets/images/work.jpg" },
    { title: "بناء الطرق", description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق", image: "../../../assets/images/work.jpg" },
    { title: "مقاولات الطرق", description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق", image: "../../../assets/images/work.jpg" },
    { title: "بناء الطرق", description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق", image: "../../../assets/images/work.jpg" },
    { title: "مقاولات الطرق", description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق", image: "../../../assets/images/work.jpg" },
    { title: "مقاولات الطرق", description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق", image: "../../../assets/images/work.jpg" },
  ];

  itemWidth: number = 0;

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

    this.services.forEach((service) => {
      observer.observe(service.nativeElement);
    });
  }

  @HostListener('window:resize', [])
  updateItemWidth() {
    this.itemWidth = this.servicesContent.nativeElement.offsetWidth + 20;
  }


  scrollLeft() {
    const carousel = this.servicesContent.nativeElement;

    carousel.scrollBy({ left: -this.itemWidth, behavior: 'smooth' });
  }

  scrollRight() {
    const carousel = this.servicesContent.nativeElement;

    carousel.scrollBy({ left: this.itemWidth, behavior: 'smooth' });
  }

}
