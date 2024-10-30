import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
  ) { }

  employee = {
    image: "../../../../../assets/images/default.png",
    name: "سامر سامر",
    position: "مدير مشاريع",
    email: "emp@gmail.com"
  };

  formData: FormGroup;
  submitted = false

  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      position: ['', [
        Validators.required,
        Validators.maxLength(30),
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      image: ['', []],
      password: ['', [
        Validators.minLength(10),
        Validators.maxLength(12)
      ]]
    });
    this.formData.patchValue({
      name: this.employee.name,
      position: this.employee.position,
      image: this.employee.image,
      email: this.employee.email

    });
    this.imagePreview = this.employee.image;

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
      this.formData.patchValue({ image: file });
    }
  }

  handleImageInput(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      this.formData.patchValue({
        image: file
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
