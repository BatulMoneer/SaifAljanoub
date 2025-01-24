import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { admin } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-partner',
  templateUrl: './add-partner.component.html',
  styleUrls: ['./add-partner.component.scss']
})
export class AddPartnerComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
        private impApiService: ImpApiService,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService
  ) { }

  formData: FormGroup;
  submitted = false

  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      partner_name: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      partner_image: ['', [
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
        formData.append('partner_name', this.formData.get('partner_name')?.value);
        formData.append('partner_image', this.formData.get('partner_image')?.value);

        if (this.selectedImage) {
          formData.append('partner_image', this.selectedImage);
        }

        this.spinner.show();

        this.impApiService.post(admin.addPartner, formData).subscribe({
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

  handleImageInput(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      this.formData.patchValue({
        partner_image: file
      });
      this.updateImagePreview(file);
      console.log('Image file selected:', file);
    }
  }


}
