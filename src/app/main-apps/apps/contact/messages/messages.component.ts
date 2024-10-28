import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],

})
export class MessagesComponent implements OnInit {

  constructor(paginator: MatPaginatorIntl) {
    paginator.getRangeLabel = (page: number, pageSize: number, length: number) => {
      const startIndex = page * pageSize + 1;
      const endIndex = Math.min(startIndex + pageSize - 1, length);
      return `${startIndex} – ${endIndex} من ${length}`;
    };
  }
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['email', 'message_type', 'message_content', 'delete'];
  dataSource = new MatTableDataSource<any>([]);
  totalData = 0;
  applyFilterInput = '';
  selectedMessageType: string | null = null;
  messageTypes: string[] = ['شكوى', 'استفسار', 'لاشيئ'];


  messages = [
    { message_content: 'محتوى الشكوى محتوى الشكوى محتوى الشكوى محتوى الشكوى محتوى الشكوى محتوى الشكوى محتوى الشكوى', message_type: 'شكوى', email: 'visitor1@gmail.com ' },
    { message_content: 'محتوى الاستفسار محتوى الاستفسار محتوى الاستفسار محتوى الاستفسار محتوى الاستفسار ', message_type: 'استفسار', email: 'visitor2@gmail.com ' },
    { message_content: 'محتوى الشكوى محتوى الشكوى محتوى الشكوى محتوى الشكوى', message_type: 'شكوى', email: 'visitor3@gmail.com ' },
    { message_content: 'محتوى الاستفسار محتوى الاستفسار محتوى الاستفسار محتوى الاستفسار محتوى الاستفسار ', message_type: 'استفسار', email: 'visitor4@gmail.com ' },
    { message_content: 'محتوى الاستفسار محتوى الاستفسار محتوى الاستفسار محتوى الاستفسار محتوى الاستفسار ', message_type: 'استفسار', email: 'visitor5@gmail.com ' },
    { message_content: 'محتوى الشكوى محتوى الشكوى محتوى الشكوى محتوى الشكوى محتوى الشكوى محتوى الشكوى محتوى الشكوى', message_type: 'شكوى', email: 'visitor6@gmail.com ' },
    { message_content: 'محتوى الشكوى محتوى الشكوى محتوى الشكوى محتوى الشكوى', message_type: 'شكوى', email: 'visitor7@gmail.com ' },
    { message_content: 'محتوى الشكوى محتوى الشكوى محتوى الشكوى محتوى الشكوى محتوى الشكوى محتوى الشكوى محتوى الشكوى', message_type: 'شكوى', email: 'visitor8@gmail.com ' },
    { message_content: 'محتوى الاستفسار محتوى الاستفسار محتوى الاستفسار محتوى الاستفسار محتوى الاستفسار ', message_type: 'استفسار', email: 'visitor8@gmail.com ' },

  ];

  ngOnInit(): void {
    this.totalData = this.messages.length;
    this.dataSource = new MatTableDataSource<any>(this.messages);
    this.updateTableData(0, 4);
    this.dataSource.sort = this.sort;
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

  deleteMessage(message: any) {
    const index = this.messages.indexOf(message);
    if (index > -1) {
      this.messages.splice(index, 1);
      this.totalData = this.messages.length;
      this.updateTableData(this.paginator.pageIndex, this.paginator.pageSize);
    }
  }
}
