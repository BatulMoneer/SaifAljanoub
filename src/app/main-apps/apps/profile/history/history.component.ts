import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {


  constructor(paginator: MatPaginatorIntl) {
    paginator.getRangeLabel = (page: number, pageSize: number, length: number) => {
      const startIndex = page * pageSize + 1;
      const endIndex = Math.min(startIndex + pageSize - 1, length);
      return `${startIndex} – ${endIndex} من ${length}`;
    };
  }
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['description', 'name', 'date'];
  dataSource = new MatTableDataSource<any>([]);
  totalData = 0;
  applyFilterInput = '';


  updates = [
    { name: 'علي محمد', description: 'إضافة مشروع باسم شارع الأمل', date: '15-10-2024' },
    { name: 'فاطمة علي', description: 'إضافة مدير باسم أحمد عمر', date: '5-11-2024' },
    { name: 'يوسف إبراهيم', description: 'حذف مشروع باسم بناء المستقبل', date: '12-11-2024' },
    { name: 'سارة خالد', description: 'إضافة شراكة باسم شركة الأمل', date: '20-11-2024' },
    { name: 'هالة شريف', description: 'تعديل بيانات خدمة باسم مقاولات الطرق', date: '30-11-2024' },
    { name: 'جميل طارق', description: 'إضافة مشروع باسم جسر النجاح', date: '10-12-2024' },
    { name: 'منى خليل', description: 'تحديث خدمة باسم خدمات صيانة', date: '18-12-2024' },
    { name: 'رامي حسن', description: 'حذف شراكة باسم شركة التميز', date: '25-12-2024' },
  ];

  ngOnInit(): void {
    this.totalData = this.updates.length;
    this.dataSource = new MatTableDataSource<any>(this.updates);
    this.updateTableData(0, 5);
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  updateTableData(pageIndex: number, pageSize: number) {
    const startIndex = pageIndex * pageSize;
    const paginatedData = this.updates.slice(startIndex, startIndex + pageSize);
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
    const index = this.updates.indexOf(message);
    if (index > -1) {
      this.updates.splice(index, 1);
      this.totalData = this.updates.length;
      this.updateTableData(this.paginator.pageIndex, this.paginator.pageSize);
    }
  }

}
