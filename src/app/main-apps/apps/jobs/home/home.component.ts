import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  jobs = [
    {
      job_position: "مهندس",
      job_qualification: "بكالوريوس",
      job_salary: " ٦٠٠٠ ريال ",
      job_description: "دراية بالمعايير المحلية والدولية المتعلقة بالسلامة والبيئة في تصميم الطرق. \n فهم متطلبات الجودة والاختبارات اللازمة لضمان سلامة الطرق. \nالقدرة على تطبيق معايير الاستدامة والتقنيات الحديثة لتحسين كفاءة المشاريع.",
      job_link: "https/forms.com/jobs/Enginner",
      job_experience: "٠ - ٤ سنوات "
    },
    {
      job_position: "مهندس",
      job_qualification: "بكالوريوس",
      job_salary: " ٦٠٠٠ ريال ",
      job_description: "دراية بالمعايير المحلية والدولية المتعلقة بالسلامة والبيئة في تصميم الطرق. \n فهم متطلبات الجودة والاختبارات اللازمة لضمان سلامة الطرق. \nالقدرة على تطبيق معايير الاستدامة والتقنيات الحديثة لتحسين كفاءة المشاريع.",
      job_link: "https/forms.com/jobs/Enginner",
      job_experience: "٠ - ٤ سنوات "
    }, {
      job_position: "مهندس",
      job_qualification: "بكالوريوس",
      job_salary: " ٦٠٠٠ ريال ",
      job_description: "دراية بالمعايير المحلية والدولية المتعلقة بالسلامة والبيئة في تصميم الطرق. \n فهم متطلبات الجودة والاختبارات اللازمة لضمان سلامة الطرق. \nالقدرة على تطبيق معايير الاستدامة والتقنيات الحديثة لتحسين كفاءة المشاريع.",
      job_link: "https/forms.com/jobs/Enginner",
      job_experience: "٠ - ٤ سنوات "
    }, {
      job_position: "مهندس",
      job_qualification: "بكالوريوس",
      job_salary: " ٦٠٠٠ ريال ",
      job_description: "دراية بالمعايير المحلية والدولية المتعلقة بالسلامة والبيئة في تصميم الطرق. \n فهم متطلبات الجودة والاختبارات اللازمة لضمان سلامة الطرق. \nالقدرة على تطبيق معايير الاستدامة والتقنيات الحديثة لتحسين كفاءة المشاريع.",
      job_link: "https/forms.com/jobs/Enginner",
      job_experience: "٠ - ٤ سنوات "
    }, {
      job_position: "مهندس",
      job_qualification: "بكالوريوس",
      job_salary: " ٦٠٠٠ ريال ",
      job_description: "دراية بالمعايير المحلية والدولية المتعلقة بالسلامة والبيئة في تصميم الطرق. \n فهم متطلبات الجودة والاختبارات اللازمة لضمان سلامة الطرق. \nالقدرة على تطبيق معايير الاستدامة والتقنيات الحديثة لتحسين كفاءة المشاريع.",
      job_link: "https/forms.com/jobs/Enginner",
      job_experience: "٠ - ٤ سنوات "
    }, {
      job_position: "مهندس",
      job_qualification: "بكالوريوس",
      job_salary: " ٦٠٠٠ ريال ",
      job_description: "دراية بالمعايير المحلية والدولية المتعلقة بالسلامة والبيئة في تصميم الطرق. \n فهم متطلبات الجودة والاختبارات اللازمة لضمان سلامة الطرق. \nالقدرة على تطبيق معايير الاستدامة والتقنيات الحديثة لتحسين كفاءة المشاريع.",
      job_link: "https/forms.com/jobs/Enginner",
      job_experience: "٠ - ٤ سنوات "
    }, {
      job_position: "مهندس",
      job_qualification: "بكالوريوس",
      job_salary: " ٦٠٠٠ ريال ",
      job_description: "دراية بالمعايير المحلية والدولية المتعلقة بالسلامة والبيئة في تصميم الطرق. \n فهم متطلبات الجودة والاختبارات اللازمة لضمان سلامة الطرق. \nالقدرة على تطبيق معايير الاستدامة والتقنيات الحديثة لتحسين كفاءة المشاريع.",
      job_link: "https/forms.com/jobs/Enginner",
      job_experience: "٠ - ٤ سنوات "
    }, {
      job_position: "مهندس",
      job_qualification: "بكالوريوس",
      job_salary: " ٦٠٠٠ ريال ",
      job_description: "دراية بالمعايير المحلية والدولية المتعلقة بالسلامة والبيئة في تصميم الطرق. \n فهم متطلبات الجودة والاختبارات اللازمة لضمان سلامة الطرق. \nالقدرة على تطبيق معايير الاستدامة والتقنيات الحديثة لتحسين كفاءة المشاريع.",
      job_link: "https/forms.com/jobs/Enginner",
      job_experience: "٠ - ٤ سنوات "
    },

  ];

  servicesPerPage = 5;
  currentPage = 0;
  paginatedServices = [];
  pages = [];

  ngOnInit(): void {
    this.updatePagination();
  }

  updatePagination(): void {
    this.pages = Array(Math.ceil(this.jobs.length / this.servicesPerPage)).fill(0);
    this.paginatedServices = this.jobs.slice(this.currentPage * this.servicesPerPage, (this.currentPage + 1) * this.servicesPerPage);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePagination();
  }
}
