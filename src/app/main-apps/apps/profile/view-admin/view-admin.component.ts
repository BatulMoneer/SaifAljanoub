import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.scss']
})
export class ViewAdminComponent implements OnInit {


  constructor(paginator: MatPaginatorIntl) {
    paginator.getRangeLabel = (page: number, pageSize: number, length: number) => {
      const startIndex = page * pageSize + 1;
      const endIndex = Math.min(startIndex + pageSize - 1, length);
      return `${startIndex} – ${endIndex} من ${length}`;
    };
  }
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['email', 'name', 'position', 'delete'];
  dataSource = new MatTableDataSource<any>([]);
  totalData = 0;
  applyFilterInput = '';
  selectedMessageType: string | null = null;
  messageTypes: string[] = ['شكوى', 'استفسار', 'لاشيئ'];


  employees = [
    { name: 'سامر سامر', position: 'مدير مشاريع', email: 'admin1@gmail.com' },
    { name: 'ليلى أحمد', position: 'محاسبة', email: 'accounting@gmail.com' },
    { name: 'عمر الحسن', position: 'مهندس برمجيات', email: 'software.eng@gmail.com' },
    { name: 'نسرين يوسف', position: 'مصممة جرافيك', email: 'designer@gmail.com' },
    { name: 'كريم علي', position: 'مسؤول الموارد البشرية', email: 'hr@gmail.com' },
    { name: 'هند محمود', position: 'مطوّرة ويب', email: 'web.dev@gmail.com' },
    { name: 'فارس سالم', position: 'مدير مبيعات', email: 'sales.manager@gmail.com' },
    { name: 'رانيا عادل', position: 'كاتبة محتوى', email: 'content.writer@gmail.com' },
    { name: 'أحمد جمال', position: 'محلل نظم', email: 'systems.analyst@gmail.com' }
  ];

  ngOnInit(): void {
    this.totalData = this.employees.length;
    this.dataSource = new MatTableDataSource<any>(this.employees);
    this.updateTableData(0, 7);
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  updateTableData(pageIndex: number, pageSize: number) {
    const startIndex = pageIndex * pageSize;
    const paginatedData = this.employees.slice(startIndex, startIndex + pageSize);
    this.dataSource.data = paginatedData;
  }

  applyFilter() {
    const filterValue = this.applyFilterInput.trim().toLowerCase();
    this.dataSource.filter = filterValue;
    this.paginator.pageIndex = 0;
    this.updateTableData(this.paginator.pageIndex, this.paginator.pageSize);
  }

  changePage(event: any) {
    this.updateTableData(event.pageIndex, event.pageSize);
  }

  deleteMessage(message: any) {
    const index = this.employees.indexOf(message);
    if (index > -1) {
      this.employees.splice(index, 1);
      this.totalData = this.employees.length;
      this.updateTableData(this.paginator.pageIndex, this.paginator.pageSize);
    }
  }
}
