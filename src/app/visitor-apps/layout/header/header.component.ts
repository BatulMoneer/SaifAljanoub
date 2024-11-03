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
    { content: "الرئيسية", link: "/home" },
    { content: "من نحن", link: "/aboutus" },
    { content: "الخدمات", link: "/services" },
    { content: "المشاريع", link: "/projects" },
    { content: "التواصل", link: "/contact" },
    { content: "التوظيف", link: "/jobs" },
    { content: "الشراكات", link: "/partners" },
  ];

  ngOnInit(): void {
  }

  closeMenu(): void {
    const menuToggleCheckbox = document.getElementById('menu-toggle') as HTMLInputElement;
    if (menuToggleCheckbox) {
      menuToggleCheckbox.checked = false;
    }
  }


}
