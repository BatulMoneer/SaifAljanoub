import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Console } from 'console';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  formData: FormGroup;
  submitted = false

  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      services_name: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      services_description: ['', [
        Validators.required,
        Validators.maxLength(150),
      ]],
      services_image: ['', [
        Validators.required,
      ]],
    });
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
      this.formData.patchValue({ services_image: file });
      this.updateImagePreview(file);
    }
  }

  updateImagePreview(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imagePreview = e.target?.result;
    };
    reader.readAsDataURL(file);
  }

  handleImageInput(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      this.formData.patchValue({
        services_image: file
      });
      this.updateImagePreview(file);
      console.log('Image file selected:', file);
    }
  }


}
