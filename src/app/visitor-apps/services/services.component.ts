import { visitor } from 'src/app/constant/Routes';
import { ImpApiService } from './../../services/api.service';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements AfterViewInit {
  @ViewChildren('service') services!: QueryList<ElementRef>;
  @ViewChild('servicesContent', { static: false }) servicesContent!: ElementRef;

  services_list = [];

  itemWidth: number = 0;

  constructor(
    private spinner: NgxSpinnerService,
    private impApiService: ImpApiService) { }
  ngOnInit(): void {
    this.spinner.show()
    this.impApiService.get(visitor.services).subscribe((data: any) => {
      if (data && Array.isArray(data[0])) {
        this.services_list = data[0];
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
