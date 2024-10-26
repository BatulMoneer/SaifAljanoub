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

  service = {
    image: "../../../../../assets/images/work.jpg",
    title: "مقاولات الطرق",
    description: "في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق في سيف الجنوب  في سيف الجنوب نقدم أفضل خدمات مقاولات الطرق   "
  }

  formData: FormGroup;
  submitted = false

  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      phone: ['', [
        Validators.required,
        Validators.pattern(/^(05\d{8}|9665\d{8})$/)
      ]],
      Whatsapp: ['', [
        Validators.required,
        Validators.pattern(/^(05\d{8}|9665\d{8})$/)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
    });
    this.formData.patchValue({
      title: this.service.title,
      description: this.service.description,
      image: this.service.image
    });
    this.imagePreview = this.service.image;

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
