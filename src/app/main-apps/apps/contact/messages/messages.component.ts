import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { admin } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],

})
export class MessagesComponent implements OnInit {

  constructor(
    private impApiService: ImpApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    paginator: MatPaginatorIntl) {
    paginator.getRangeLabel = (page: number, pageSize: number, length: number) => {
      const startIndex = page * pageSize + 1;
      const endIndex = Math.min(startIndex + pageSize - 1, length);
      return `${startIndex} – ${endIndex} من ${length}`;
    };
  }
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['visitor_email', 'message_type', 'message_content', 'delete'];
  dataSource = new MatTableDataSource<any>([]);
  totalData = 0;
  applyFilterInput = '';
  selectedMessageType: string | null = null;
  messageTypes: string[] = ['شكوى', 'استفسار', 'لاشيئ'];


  messages = [];

  ngOnInit(): void {
     this.spinner.show()
            this.impApiService.get(admin.showMessages).subscribe({
              next: (data: any) => {

                if (Array.isArray(data[0])) {
                  this.messages = data[0];
                  console.log(data[0])
                  this.totalData = this.messages.length;
                  this.dataSource = new MatTableDataSource<any>(this.messages);
                  this.updateTableData(0, 4);
                  this.dataSource.sort = this.sort;
                  this.spinner.hide();
                } else {
                  console.error('Unexpected response structure:', data);
                  this.toastr.error('خطأ غير متوقع');
                  this.spinner.hide();
                }
              },
              error: (error) => {
                console.error('API Error:', error);
                this.toastr.error('حدث خطأ أثناء جلب البيانات');
                this.spinner.hide();
              },
            });


  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  updateTableData(pageIndex: number, pageSize: number) {
    const startIndex = pageIndex * pageSize;
    const paginatedData = this.messages.slice(startIndex, startIndex + pageSize);
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

  deleteMessage(id: number) {
    this.spinner.show();
    console.log(id)
    this.impApiService.delete(`${admin.deleteMessages}${id}`).subscribe(data => {
      this.spinner.hide();
      this.ngOnInit()
    })
  }
}
