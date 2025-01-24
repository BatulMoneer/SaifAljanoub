import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ImpApiService } from 'src/app/services/api.service';
import { admin } from 'src/app/constant/Routes';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private impApiService: ImpApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  formData: FormGroup;
  submitted = false;

  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      news_name: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      news_description: ['', [
        Validators.required,
        Validators.maxLength(150),
      ]],
      news_image: ['', [
        Validators.required,
      ]],
    });
  }

  add() {
    this.submitted = true;

    if (this.formData.invalid) {
      this.toastr.error('يرجى التأكد من ملء جميع الحقول بشكل صحيح.', 'خطأ في الإدخال');
      return;
    }

    const formData = new FormData();
    formData.append('news_name', this.formData.get('news_name')?.value);
    formData.append('news_description', this.formData.get('news_description')?.value);

    if (this.selectedImage) {
      formData.append('news_image', this.selectedImage);
    }

    this.spinner.show();

    this.impApiService.post(admin.addNews, formData).subscribe({
      next: (data) => {
        console.log(data);
        this.spinner.hide();
        this.toastr.success('تم الإضافة بنجاح');

        this.formData.reset();
        this.submitted = false;
        this.selectedImage = null;
        this.imagePreview = null;
      },
      error: (err) => {
        console.error(err);
        this.spinner.hide();
        this.toastr.error('حدث خطأ أثناء إضافة الأخبار. يرجى المحاولة لاحقاً.', 'خطأ');
      }
    });
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
      this.formData.patchValue({ news_image: file });
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
        news_image: file
      });
      this.updateImagePreview(file);
      console.log('Image file selected:', file);
    }
  }
}
