import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
  ) { }

  formData: FormGroup;
  submitted = false
  employees: string[] = ["Batul", "Aldanh", "Alex", "Murad", "Sarah"];
  selectedEmp: string | null = null;

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      employees: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
    });
  }

  add() {
    this.submitted = true;
  }


  selectEmp(emp: string) {
    this.selectedEmp = emp;
    this.formData.controls['employees'].setValue(emp);
    const dropdownToggle: HTMLInputElement | null = document.querySelector('#name-dropdown-toggle');
    if (dropdownToggle) {
      dropdownToggle.checked = false;
    }
  }


}
