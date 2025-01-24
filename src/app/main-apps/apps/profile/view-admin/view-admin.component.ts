import { NgxSpinnerService } from 'ngx-spinner';
import { ImpApiService } from 'src/app/services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { admin, visitor } from 'src/app/constant/Routes';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.scss']
})
export class ViewAdminComponent implements OnInit {


  constructor(paginator: MatPaginatorIntl,
    private impApiService: ImpApiService,
    private spinner :NgxSpinnerService,
    private toastr : ToastrService
  ) {
    paginator.getRangeLabel = (page: number, pageSize: number, length: number) => {
      const startIndex = page * pageSize + 1;
      const endIndex = Math.min(startIndex + pageSize - 1, length);
      return `${startIndex} – ${endIndex} من ${length}`;
    };
  }
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['admin_email', 'employee_name', 'employee_position', 'delete'];
  dataSource = new MatTableDataSource<any>([]);
  totalData = 0;
  applyFilterInput = '';
  selectedMessageType: string | null = null;


  employees = [ ];

    ngOnInit(): void {
    this.spinner.show();

      this.impApiService.get(admin.showAdmins).subscribe((data: any) => {
        this.spinner.hide();

        if (data && Array.isArray(data[0])) {

          this.employees = data[0]

          this.totalData = this.employees.length;

          this.dataSource = new MatTableDataSource<any>(this.employees);

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

          this.updateTableData(0, this.paginator.pageSize || 7);
        }
      });
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

  deleteMessage(id : number) {
    this.spinner.show();
    this.impApiService.delete(`${admin.deleteAdmin}${id}`).subscribe({
      next: () => {
        this.spinner.hide();
        this.ngOnInit();
      },
      error: (error) => {
        console.error('API Error:', error);
        this.toastr.error('حدث خطأ أثناء حذف البيانات');
        this.spinner.hide();
      }
    });
  }
}
