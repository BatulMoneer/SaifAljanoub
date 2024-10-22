import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  themeText: string = 'مضيء';;
  toggleTheme(event: any): void {
    if (event.target.checked) {
      this.renderer.addClass(document.body, 'dark-theme');
      this.themeText = 'معتم';
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      this.themeText = 'مضيء';
    }
  }


  header_list = [
    { content: "الرئيسية", link: "" },
    { content: "من نحن", link: "" },
    { content: "الخدمات", link: "" },
    { content: "المشاريع", link: "" },
    { content: "التواصل", link: "" },
    { content: "التوظيف", link: "" },
    { content: "الشراكات", link: "" },
  ];

  ngOnInit(): void {
  }

}
