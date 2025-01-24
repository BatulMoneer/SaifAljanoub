import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { admin } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private impApiService: ImpApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  project = {
    projects_name: '',
    projects_description: '',
    projects_image: ''
  };

  formData: FormGroup;
  submitted = false;
  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      projects_name: ['', [Validators.required, Validators.maxLength(30)]],
      projects_description: ['', [Validators.required, Validators.maxLength(150)]],
      projects_image: ['', Validators.required]
    });

    this.spinner.show();

    this.impApiService.get(admin.viewProject).subscribe({
      next: (data: any) => {
        console.log('Full API Response:', data);

        const currentProjectId = localStorage.getItem('current_project');
        if (Array.isArray(data[0]) && currentProjectId) {
          const project = data[0].find((p: any) => p.project_id.toString() === currentProjectId);
          if (project) {
            this.project = {
              projects_name: project.projects_name,
              projects_description: project.projects_description,
              projects_image: project.projects_image
            };

            this.formData.patchValue(this.project);
            this.imagePreview = project.projects_image;
            this.spinner.hide();
          } else {
            console.error('Project not found');
            this.toastr.error('لم يتم العثور على المشروع');
            this.spinner.hide();
          }
        } else {
          console.error('Unexpected response structure:', data);
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

    const currentProjectId = localStorage.getItem('current_project');
    if (currentProjectId) {
      const formData = new FormData();
      formData.append('projects_name', this.formData.get('projects_name')?.value);
      formData.append('projects_description', this.formData.get('projects_description')?.value);
      if (this.selectedImage) {
        formData.append('projects_image', this.selectedImage);
      }

      this.impApiService.post(`${admin.updateProject}${currentProjectId}`, formData).subscribe({
        next: () => {
          this.toastr.success('تم التحديث بنجاح');
          this.spinner.hide();
        },
        error: (error) => {
          console.error('Update API Error:', error);
          this.toastr.error('حدث خطأ أثناء تحديث المشروع');
          this.spinner.hide();
        }
      });
    } else {
      this.toastr.error('لا يوجد مشروع حالي للتحديث');
      this.spinner.hide();
    }
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
    }
  }


  handleImageInput(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      this.updateImagePreview(file);
      this.formData.patchValue({
        projects_image: file
      });
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
