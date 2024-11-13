import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss']
})
export class EditMemberComponent implements OnInit {



  constructor(
    private formBuilder: FormBuilder,
  ) { }

  employee = {
    employee_pic: "../../../../../assets/images/default.png",
    employee_name: "سامر سامر",
    employee_position: "مدير مشاريع"
  };

  formData: FormGroup;
  submitted = false

  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      employee_name: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      employee_position: ['', [
        Validators.required,
        Validators.maxLength(30),
      ]],
      employee_pic: ['', []],
    });
    this.formData.patchValue({
      employee_name: this.employee.employee_name,
      employee_position: this.employee.employee_position,
      employee_pic: this.employee.employee_pic
    });
    this.imagePreview = this.employee.employee_pic;

  }

  add() {
    this.submitted = true;
  }


  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const dropZone = event.target as HTMLElement;
    dropZone.classList.add('dragging');
  }

  onDragLeave(event: DragEvent): void {
    const dropZone = event.target as HTMLElement;
    dropZone.classList.remove('dragging');
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const dropZone = event.target as HTMLElement;
    dropZone.classList.remove('dragging');

    if (event.dataTransfer?.files) {
      const file = event.dataTransfer.files[0];
      this.selectedImage = file;
      this.formData.patchValue({ employee_pic: file });
    }
  }

  handleImageInput(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      this.formData.patchValue({
        employee_pic: file
      });
      this.updateImagePreview(file);
      console.log('Image file selected:', file);
    }
  }

  updateImagePreview(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imagePreview = e.target?.result;
    };
    reader.readAsDataURL(file);
  }


}
