import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { admin } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss']
})
export class EditServiceComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private impApiService: ImpApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  service = {
    services_name: '',
    services_description: '',
    services_image: ''
  };

  formData: FormGroup;
  submitted = false;
  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      services_name: ['', [Validators.required, Validators.maxLength(30)]],
      services_description: ['', [Validators.required, Validators.maxLength(150)]],
      services_image: ['', Validators.required]
    });

    this.spinner.show();

    this.impApiService.get(admin.viewService).subscribe({
      next: (data: any) => {
        const currentServiceId = localStorage.getItem('current_service');
        if (Array.isArray(data[0]) && currentServiceId) {

          const service = data[0].find((s: any) => s.service_id.toString() === currentServiceId);
          if (service) {
            this.service = {
              services_name: service.services_name,
              services_description: service.services_description,
              services_image: service.services_image
            };

            this.formData.patchValue(this.service);
            this.imagePreview = this.service.services_image;
            this.spinner.hide();
          } else {
            this.toastr.error('لم يتم العثور على الخدمة');
            this.spinner.hide();
          }
        } else {
          this.toastr.error('خطأ غير متوقع');
          this.spinner.hide();
        }
      },
      error: (error) => {
        console.error('API Error:', error);
        this.toastr.error('حدث خطأ أثناء جلب البيانات');
        this.spinner.hide();
      }
    });
  }

  add() {
    this.submitted = true;

    if (this.formData.invalid) {
      this.toastr.error('الرجاء التأكد من ملء جميع الحقول بشكل صحيح');
      return;
    }

    this.spinner.show();

    const currentServiceId = localStorage.getItem('current_service');
    if (currentServiceId) {
      const formData = new FormData();
      formData.append('services_name', this.formData.value.services_name);
      formData.append('services_description', this.formData.value.services_description);
      if (this.selectedImage) {
        formData.append('services_image', this.selectedImage);
      }
      else {
        formData.append('services_image', this.formData.value.services_image);
      }


      this.impApiService.post(`${admin.updateService}${currentServiceId}`, formData).subscribe({
        next: () => {
          this.toastr.success('تم التحديث بنجاح');
          this.spinner.hide();
        },
        error: (error) => {
          console.error('Update API Error:', error);
          this.toastr.error('حدث خطأ أثناء تحديث الخدمة');
          this.spinner.hide();
        }
      });
    } else {
      this.toastr.error('لا يوجد خدمة حالية للتحديث');
      this.spinner.hide();
    }
  }

  handleImageInput(event: any) {
    const file: File = event.target.files[0];
    if (file) {
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
      this.formData.patchValue({ services_image: file });
      this.updateImagePreview(file);
    }
  }
}
