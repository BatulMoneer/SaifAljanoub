import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements AfterViewInit {
  @ViewChildren('partner') partners!: QueryList<ElementRef>;
  constructor() { }

  ngOnInit(): void {


  }
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

    this.partners.forEach((partner) => {
      observer.observe(partner.nativeElement);
    });
  }


  partners_list = [
    {
      image: "../../../../../assets/images/partner.png",
      name: "شركة نحو الرؤية"
    },
    {
      image: "../../../../../assets/images/partner.png",
      name: "شركة نحو الرؤية"
    },
    {
      image: "../../../../../assets/images/partner.png",
      name: "شركة نحو الرؤية"
    },
    {
      image: "../../../../../assets/images/partner.png",
      name: "شركة نحو الرؤية"
    },
    {
      image: "../../../../../assets/images/partner.png",
      name: "شركة نحو الرؤية"
    },
    {
      image: "../../../../../assets/images/partner.png",
      name: "شركة نحو الرؤية"
    },
    {
      image: "../../../../../assets/images/partner.png",
      name: "شركة نحو الرؤية"
    },
    {
      image: "../../../../../assets/images/partner.png",
      name: "شركة نحو الرؤية"
    },
    {
      image: "../../../../../assets/images/partner.png",
      name: "شركة نحو الرؤية"
    },
    {
      image: "../../../../../assets/images/partner.png",
      name: "شركة نحو الرؤية"
    }
  ];

}
