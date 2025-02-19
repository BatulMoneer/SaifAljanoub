import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { admin } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss']
})
export class EditNewsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private impApiService: ImpApiService
  ) { }

  news = {
    news_name: '',
    news_description: '',
    news_image: ''
  };

  formData: FormGroup;
  submitted = false;
  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      news_name: ['', [Validators.required, Validators.maxLength(30)]],
      news_description: ['', [Validators.required, Validators.maxLength(150)]],
      news_image: ['', Validators.required]
    });

    this.spinner.show();

    this.impApiService.get(admin.viewNews).subscribe({
      next: (data: any) => {
        const currentNewsId = localStorage.getItem('current_news');
         console.log(currentNewsId)

        if (Array.isArray(data[0]) && currentNewsId) {
          const news = data[0].find((n: any) => n.news_id.toString() === currentNewsId);
          if (news) {
            this.news = {
              news_name: news.news_name,
              news_description: news.news_description,
              news_image: news.news_image
            };
            this.formData.patchValue(this.news);
            this.imagePreview = this.news.news_image;
            this.spinner.hide();
          } else {
            this.toastr.error('لم يتم العثور على الخبر');
            this.spinner.hide();
          }
        } else {
          this.toastr.error('خطأ غير متوقع');
          this.spinner.hide();
        }
      },
      error: (error) => {
        console.error('Error fetching news data:', error);
        this.toastr.error('حدث خطأ أثناء جلب بيانات الأخبار');
        this.spinner.hide();
      }
    });
  }

  add(): void {
    this.submitted = true;

    if (this.formData.invalid) {
      this.toastr.error('يرجى ملء جميع الحقول بشكل صحيح');
      return;
    }

    this.spinner.show();

    const currentNewsId = localStorage.getItem('current_news');
    console.log(currentNewsId)
    if (currentNewsId) {
      const formData = new FormData();
      formData.append('news_name', this.formData.value.news_name);
      formData.append('news_description', this.formData.value.news_description);
      if (this.selectedImage) {
        formData.append('news_image', this.selectedImage);
      }
      else {
        formData.append('news_image', this.formData.value.news_image);
      }


      this.impApiService.post(`${admin.updateNews}${currentNewsId}`, formData).subscribe({
        next: () => {
          this.toastr.success('تم التحديث بنجاح');
          this.spinner.hide();
        },
        error: (error) => {
          console.error('Error updating news:', error);
          this.toastr.error('حدث خطأ أثناء تحديث الخبر');
          this.spinner.hide();
        }
      });
    } else {
      this.toastr.error('لا يوجد خبر حالي للتحديث');
      this.spinner.hide();
    }
  }

  handleImageInput(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
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

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer?.files) {
      const file = event.dataTransfer.files[0];
      this.selectedImage = file;
      this.formData.patchValue({ news_image: file });
      this.updateImagePreview(file);
    }
  }
}
