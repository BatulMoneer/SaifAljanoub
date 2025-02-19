import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { admin } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-partner',
  templateUrl: './edit-partner.component.html',
  styleUrls: ['./edit-partner.component.scss']
})
export class EditPartnerComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private impApiService: ImpApiService
  ) { }

  partner = {
    partner_name: '',
    partner_image: ''
  };

  formData: FormGroup;
  submitted = false;
  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      partner_name: ['', [Validators.required, Validators.maxLength(30)]],
      partner_image: ['', Validators.required]
    });

    this.spinner.show();

    this.impApiService.get(admin.viewPartner).subscribe({
      next: (data: any) => {
        const currentPartnerId = localStorage.getItem('current_partner');
        console.log(currentPartnerId);

        if (Array.isArray(data[0]) && currentPartnerId) {
          const partner = data[0].find((p: any) => p.partner_id.toString() === currentPartnerId);
          if (partner) {
            this.partner = {
              partner_name: partner.partner_name,
              partner_image: partner.partner_image
            };
            this.formData.patchValue(this.partner);
            this.imagePreview = this.partner.partner_image;
            this.spinner.hide();
          } else {
            this.toastr.error('لم يتم العثور على الشريك');
            this.spinner.hide();
          }
        } else {
          this.toastr.error('خطأ غير متوقع');
          this.spinner.hide();
        }
      },
      error: (error) => {
        console.error('Error fetching partner data:', error);
        this.toastr.error('حدث خطأ أثناء جلب بيانات الشريك');
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

    const currentPartnerId = localStorage.getItem('current_partner');
    console.log(currentPartnerId);
    if (currentPartnerId) {
      const formData = new FormData();
      formData.append('partner_name', this.formData.value.partner_name);
      if (this.selectedImage) {
        formData.append('partner_image', this.selectedImage);
      }
      else {
        formData.append('partner_image', this.formData.value.partner_image);
      }


      this.impApiService.post(`${admin.updatePartner}${currentPartnerId}`, formData).subscribe({
        next: () => {
          this.toastr.success('تم التحديث بنجاح');
          this.spinner.hide();
        },
        error: (error) => {
          console.error('Error updating partner:', error);
          this.toastr.error('حدث خطأ أثناء تحديث الشريك');
          this.spinner.hide();
        }
      });
    } else {
      this.toastr.error('لا يوجد شريك حالي للتحديث');
      this.spinner.hide();
    }
  }

  handleImageInput(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      this.formData.patchValue({ image: file });
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
      this.formData.patchValue({ image: file });
      this.updateImagePreview(file);
    }
  }
}
