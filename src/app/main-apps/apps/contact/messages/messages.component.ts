import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'avatar'];
  dataSource = new MatTableDataSource<any>([]);
  totalData = 0;  // Total data count
  pageSizes = [3, 5, 7]; // Page size options
  applyFilterInput = ''; // Filter input binding

  @ViewChild(MatSort) sort!: MatSort; // For sorting
  @ViewChild(MatPaginator) paginator!: MatPaginator; // For pagination

  private sampleData = [
    { id: 1, first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com', avatar: 'https://example.com/avatars/john_doe.jpg' },
    { id: 2, first_name: 'Jane', last_name: 'Smith', email: 'jane.smith@example.com', avatar: 'https://example.com/avatars/jane_smith.jpg' },
    { id: 3, first_name: 'Alice', last_name: 'Johnson', email: 'alice.johnson@example.com', avatar: 'https://example.com/avatars/alice_johnson.jpg' },
    { id: 4, first_name: 'Bob', last_name: 'Brown', email: 'bob.brown@example.com', avatar: 'https://example.com/avatars/bob_brown.jpg' },
    { id: 5, first_name: 'Charlie', last_name: 'Davis', email: 'charlie.davis@example.com', avatar: 'https://example.com/avatars/charlie_davis.jpg' },
    { id: 6, first_name: 'David', last_name: 'Wilson', email: 'david.wilson@example.com', avatar: 'https://example.com/avatars/david_wilson.jpg' },
    { id: 7, first_name: 'Eva', last_name: 'Taylor', email: 'eva.taylor@example.com', avatar: 'https://example.com/avatars/eva_taylor.jpg' }
  ];

  ngOnInit(): void {
    // Set initial data on component load
    this.dataSource.data = this.sampleData; // Set full sample data
    this.totalData = this.sampleData.length; // Set total data count

    // Assign paginator and sort after setting data
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // Initial table data for the first page
    this.updateTableData(0, this.paginator.pageSize); // Change to 0 for zero-based index
  }

  // Function to fetch and update table data based on page number and page size
  updateTableData(pageIndex: number, pageSize: number) {
    // Paginate the sample data
    const startIndex = pageIndex * pageSize;
    const paginatedData = this.sampleData.slice(startIndex, startIndex + pageSize);

    // Set the data source
    this.dataSource.data = paginatedData;
  }

  // Function to apply filter based on user input
  applyFilter() {
    const filterValue = this.applyFilterInput.trim().toLowerCase(); // Clean input
    this.dataSource.filter = filterValue; // Set filter value for the data source

    // Reset to the first page after filtering
    this.paginator.pageIndex = 0; // Reset to first page
    this.updateTableData(this.paginator.pageIndex, this.paginator.pageSize); // Update displayed data
  }

  // Function to handle page change event
  changePage(event: any) {
    this.updateTableData(event.pageIndex, event.pageSize); // Update data based on new page index and size
  }
}
