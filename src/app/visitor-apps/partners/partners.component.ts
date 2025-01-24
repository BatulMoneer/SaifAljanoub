import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { visitor } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements AfterViewInit {
  @ViewChildren('partner') partners!: QueryList<ElementRef>;
  constructor(
    private spinner: NgxSpinnerService,
    private impApiService: ImpApiService) { }

  ngOnInit(): void {
    this.spinner.show()
    this.impApiService.get(visitor.partners).subscribe((data: any) => {
      if (data && Array.isArray(data[0])) {
        this.partners_list = data[0];
        console.log(data[0])
        this.spinner.hide()
      }
    });

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
  ];

}
