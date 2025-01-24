"use strict";(self.webpackChunkSaifAljanoub=self.webpackChunkSaifAljanoub||[]).push([[641],{4641:(B,f,p)=>{p.r(f),p.d(f,{ProjectsModule:()=>H});var s=p(9808),d=p(6609),u=p(2382),g=p(7987),t=p(4893),l=p(5830),_=p(72),m=p(2290);function h(n,i){1&n&&(t.TgZ(0,"p",21),t._uU(1," \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628! "),t.qZA())}function P(n,i){1&n&&(t.TgZ(0,"p",21),t._uU(1," \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0637\u0648\u064a\u0644 \u062c\u062f\u0627! "),t.qZA())}function C(n,i){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,h,2,0,"p",20),t.YNc(2,P,2,0,"p",20),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.submitted&&e.formData.controls.projects_name.errors.required),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.formData.controls.projects_name.errors.maxlength)}}function x(n,i){1&n&&(t.TgZ(0,"p",21),t._uU(1," \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628!"),t.qZA())}function v(n,i){1&n&&(t.TgZ(0,"p",21),t._uU(1," \u0627\u0644\u0648\u0635\u0641 \u0637\u0648\u064a\u0644 \u062c\u062f\u0627!"),t.qZA())}function O(n,i){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,x,2,0,"p",20),t.YNc(2,v,2,0,"p",20),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.formData.controls.projects_description.errors.required),t.xp6(1),t.Q6J("ngIf",e.formData.controls.projects_description.errors.maxlength)}}function M(n,i){if(1&n&&t._UZ(0,"img",22),2&n){const e=t.oxw();t.Q6J("src",e.imagePreview,t.LSH)}}function j(n,i){1&n&&(t.TgZ(0,"p"),t._uU(1,"\u0627\u0633\u062d\u0628 \u0627\u0644\u0635\u0648\u0631\u0629 \u0647\u0646\u0627 \u0623\u0648 \u0627\u062e\u062a\u0631 \u0645\u0644\u0641"),t.qZA())}function Z(n,i){1&n&&(t.TgZ(0,"p",21),t._uU(1,"\u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628!"),t.qZA())}function A(n,i){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,Z,2,0,"p",20),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.formData.controls.projects_image.errors.required)}}let T=(()=>{class n{constructor(e,o,c,r){this.formBuilder=e,this.impApiService=o,this.spinner=c,this.toastr=r,this.project={projects_name:"",projects_description:"",projects_image:""},this.submitted=!1,this.selectedImage=null,this.imagePreview=null}ngOnInit(){this.formData=this.formBuilder.group({projects_name:["",[u.kI.required,u.kI.maxLength(30)]],projects_description:["",[u.kI.required,u.kI.maxLength(150)]],projects_image:["",u.kI.required]}),this.spinner.show(),this.impApiService.get(g.S.viewProject).subscribe({next:e=>{console.log("Full API Response:",e);const o=localStorage.getItem("current_project");if(Array.isArray(e[0])&&o){const c=e[0].find(r=>r.project_id.toString()===o);c?(this.project={projects_name:c.projects_name,projects_description:c.projects_description,projects_image:c.projects_image},this.formData.patchValue(this.project),this.imagePreview=c.projects_image,this.spinner.hide()):(console.error("Project not found"),this.toastr.error("\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u0634\u0631\u0648\u0639"),this.spinner.hide())}else console.error("Unexpected response structure:",e),this.toastr.error("\u062e\u0637\u0623 \u063a\u064a\u0631 \u0645\u062a\u0648\u0642\u0639"),this.spinner.hide()},error:e=>{console.error("API Error:",e),this.toastr.error("\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u062c\u0644\u0628 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a"),this.spinner.hide()}})}add(){var e,o;if(this.submitted=!0,this.formData.invalid)return void this.toastr.error("\u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u062a\u0623\u0643\u062f \u0645\u0646 \u0645\u0644\u0621 \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0644 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d");this.spinner.show();const c=localStorage.getItem("current_project");if(c){const r=new FormData;r.append("projects_name",null===(e=this.formData.get("projects_name"))||void 0===e?void 0:e.value),r.append("projects_description",null===(o=this.formData.get("projects_description"))||void 0===o?void 0:o.value),this.selectedImage&&r.append("projects_image",this.selectedImage),this.impApiService.post(`${g.S.updateProject}${c}`,r).subscribe({next:()=>{this.toastr.success("\u062a\u0645 \u0627\u0644\u062a\u062d\u062f\u064a\u062b \u0628\u0646\u062c\u0627\u062d"),this.spinner.hide()},error:a=>{console.error("Update API Error:",a),this.toastr.error("\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0645\u0634\u0631\u0648\u0639"),this.spinner.hide()}})}else this.toastr.error("\u0644\u0627 \u064a\u0648\u062c\u062f \u0645\u0634\u0631\u0648\u0639 \u062d\u0627\u0644\u064a \u0644\u0644\u062a\u062d\u062f\u064a\u062b"),this.spinner.hide()}onDragOver(e){e.preventDefault(),e.stopPropagation(),e.target.classList.add("dragging")}onDragLeave(e){e.target.classList.remove("dragging")}onDrop(e){var o;if(e.preventDefault(),e.stopPropagation(),e.target.classList.remove("dragging"),null===(o=e.dataTransfer)||void 0===o?void 0:o.files){const r=e.dataTransfer.files[0];this.selectedImage=r,this.formData.patchValue({services_image:r})}}handleImageInput(e){const o=e.target.files[0];o&&(this.selectedImage=o,this.updateImagePreview(o),this.formData.patchValue({projects_image:o}))}updateImagePreview(e){const o=new FileReader;o.onload=c=>{var r;this.imagePreview=null===(r=c.target)||void 0===r?void 0:r.result},o.readAsDataURL(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.qu),t.Y36(l.y),t.Y36(_.t2),t.Y36(m._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-project"]],decls:43,vars:6,consts:[[1,"all"],[1,"top"],[1,"right"],[1,"left"],["routerLink","/apps/projects/home",1,"icon"],[1,"fas","fa-chevron-left"],[1,"middle"],[3,"formGroup","ngSubmit"],[1,"text"],[2,"color","#CA7676"],["type","text","formControlName","projects_name","placeholder","\u0627\u0643\u062a\u0628 \u0627\u0633\u0645 \u0627\u0644\u062e\u062f\u0645\u0629","required",""],[4,"ngIf"],["type","text","formControlName","projects_description","placeholder","\u0627\u0643\u062a\u0628 \u0648\u0635\u0641 \u0628\u0633\u064a\u0637 \u0639\u0646 \u0627\u0644\u062e\u062f\u0645\u0629","required",""],[1,"drop-zone",3,"dragover","dragleave","drop"],["alt","Service Image","style","width: 130px; height: 100px; object-fit: cover; padding-bottom: 10px;",3,"src",4,"ngIf"],["type","button",3,"click"],["type","file","accept","image/*","hidden","",3,"change"],["fileInput",""],[1,"butt"],["type","submit"],["class","invalid",4,"ngIf"],[1,"invalid"],["alt","Service Image",2,"width","130px","height","100px","object-fit","cover","padding-bottom","10px",3,"src"]],template:function(e,o){if(1&e){const c=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),t._uU(4,"\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u062a\u0639\u062f\u064a\u0644 \u0645\u0634\u0631\u0648\u0639"),t.qZA()(),t.TgZ(7,"div",3)(8,"a",4)(9,"span"),t._uU(10,"\u0639\u0648\u062f\u0629"),t.qZA(),t._UZ(11,"i",5),t.qZA()()(),t.TgZ(12,"div",6)(13,"form",7),t.NdJ("ngSubmit",function(){return o.add()}),t.TgZ(14,"p",8),t._uU(15,"\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639:"),t.TgZ(16,"span",9),t._uU(17,"*"),t.qZA()(),t._UZ(18,"input",10),t.YNc(19,C,3,2,"div",11),t.TgZ(20,"p",8),t._uU(21,"\u0648\u0635\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639:"),t.TgZ(22,"span",9),t._uU(23,"*"),t.qZA(),t._uU(24," (\u0644\u0627 \u064a\u062a\u0639\u062f\u0649 \u0661\u0665\u0660 \u062d\u0631\u0641)"),t.qZA(),t._UZ(25,"textarea",12),t.YNc(26,O,3,2,"div",11),t.TgZ(27,"p",8),t._uU(28,"\u0635\u0648\u0631\u0629 \u0644\u0644\u0645\u0634\u0631\u0648\u0639: "),t.TgZ(29,"span",9),t._uU(30,"*"),t.qZA(),t._uU(31," (\u064a\u0641\u0636\u0644 \u0623\u0646 \u062a\u0643\u0648\u0646 \u0635\u0648\u0631\u0629 \u0623\u0641\u0642\u064a\u0629) "),t.qZA(),t.TgZ(32,"div",13),t.NdJ("dragover",function(a){return o.onDragOver(a)})("dragleave",function(a){return o.onDragLeave(a)})("drop",function(a){return o.onDrop(a)}),t.YNc(33,M,1,1,"img",14),t.YNc(34,j,2,0,"p",11),t.TgZ(35,"button",15),t.NdJ("click",function(){return t.CHM(c),t.MAs(38).click()}),t._uU(36,"\u0627\u062e\u062a\u0631 \u0645\u0644\u0641"),t.qZA()(),t.TgZ(37,"input",16,17),t.NdJ("change",function(a){return o.handleImageInput(a)}),t.qZA(),t.YNc(39,A,2,1,"div",11),t.TgZ(40,"div",18)(41,"button",19),t._uU(42,"\u062d\u0641\u0638"),t.qZA()()()()()}2&e&&(t.xp6(13),t.Q6J("formGroup",o.formData),t.xp6(6),t.Q6J("ngIf",o.submitted&&o.formData.controls.projects_name.errors),t.xp6(7),t.Q6J("ngIf",o.submitted&&o.formData.controls.projects_description.errors),t.xp6(7),t.Q6J("ngIf",o.imagePreview),t.xp6(1),t.Q6J("ngIf",!o.imagePreview),t.xp6(5),t.Q6J("ngIf",o.submitted&&o.formData.controls.projects_image.errors))},directives:[d.yS,u._Y,u.JL,u.sg,u.Fj,u.JJ,u.u,u.Q7,s.O5],styles:['.all[_ngcontent-%COMP%]{margin-right:375px;background-color:var(--dark-grey);color:#fff;height:100vh;overflow:hidden}.top[_ngcontent-%COMP%]{padding:30px 40px 10px 0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:10px}.top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:10px}.top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:60px;margin:0}.top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;margin:0}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{display:flex;align-items:start;justify-content:center;flex-direction:row-reverse}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{text-decoration:none;color:var(--background-color);font-size:16PX;transition:background-color .3s,transform .3s}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding:0 10px 0 40px}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .trash[_ngcontent-%COMP%]{color:#ca7676}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]{color:#fff}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px}.middle[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-right:40px}.middle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:400px}.middle[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding:10px;width:400px;height:150px}.middle[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:10px 0 5px}.middle[_ngcontent-%COMP%]   .invalid[_ngcontent-%COMP%]{color:#ca7676;font-size:12px}.middle[_ngcontent-%COMP%]   .butt[_ngcontent-%COMP%]{display:flex;justify-content:center;padding-top:10px}.middle[_ngcontent-%COMP%]   .butt[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:150px}.drop-zone[_ngcontent-%COMP%]{border-radius:10px;width:175px;color:var(--light-grey);position:relative;padding:20px;text-align:center;cursor:pointer;background-color:#fff;transition:background-color .3s}.drop-zone[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:5px;border-radius:10px;border:2px dashed var(--light-grey);pointer-events:none}.drop-zone.dragging[_ngcontent-%COMP%]{background-color:var(--light-grey)}img[_ngcontent-%COMP%]{width:100px;height:auto}']}),n})();function b(n,i){1&n&&(t.TgZ(0,"p",21),t._uU(1," \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628! "),t.qZA())}function I(n,i){1&n&&(t.TgZ(0,"p",21),t._uU(1," \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0637\u0648\u064a\u0644 \u062c\u062f\u0627! "),t.qZA())}function y(n,i){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,b,2,0,"p",20),t.YNc(2,I,2,0,"p",20),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.submitted&&e.formData.controls.projects_name.errors.required),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.formData.controls.projects_name.errors.maxlength)}}function w(n,i){1&n&&(t.TgZ(0,"p",21),t._uU(1," \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628!"),t.qZA())}function D(n,i){1&n&&(t.TgZ(0,"p",21),t._uU(1," \u0627\u0644\u0648\u0635\u0641 \u0637\u0648\u064a\u0644 \u062c\u062f\u0627!"),t.qZA())}function q(n,i){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,w,2,0,"p",20),t.YNc(2,D,2,0,"p",20),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.formData.controls.projects_description.errors.required),t.xp6(1),t.Q6J("ngIf",e.formData.controls.projects_description.errors.maxlength)}}function U(n,i){if(1&n&&t._UZ(0,"img",22),2&n){const e=t.oxw();t.Q6J("src",e.imagePreview,t.LSH)}}function k(n,i){1&n&&(t.TgZ(0,"p"),t._uU(1,"\u0627\u0633\u062d\u0628 \u0627\u0644\u0635\u0648\u0631\u0629 \u0647\u0646\u0627 \u0623\u0648 \u0627\u062e\u062a\u0631 \u0645\u0644\u0641"),t.qZA())}function J(n,i){1&n&&(t.TgZ(0,"p",21),t._uU(1,"\u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628!"),t.qZA())}function S(n,i){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,J,2,0,"p",20),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.formData.controls.projects_image.errors.required)}}let N=(()=>{class n{constructor(e,o,c,r){this.formBuilder=e,this.impApiService=o,this.spinner=c,this.toastr=r,this.submitted=!1,this.selectedImage=null,this.imagePreview=null}ngOnInit(){this.formData=this.formBuilder.group({projects_name:["",[u.kI.required,u.kI.maxLength(30)]],projects_description:["",[u.kI.required,u.kI.maxLength(150)]],projects_image:["",[u.kI.required]]})}add(){var e,o;if(this.submitted=!0,this.formData.invalid)return void this.toastr.error("\u064a\u0631\u062c\u0649 \u0627\u0644\u062a\u0623\u0643\u062f \u0645\u0646 \u0645\u0644\u0621 \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0644 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d.","\u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0625\u062f\u062e\u0627\u0644");const c=new FormData;c.append("projects_name",null===(e=this.formData.get("projects_name"))||void 0===e?void 0:e.value),c.append("projects_description",null===(o=this.formData.get("projects_description"))||void 0===o?void 0:o.value),this.selectedImage&&c.append("projects_image",this.selectedImage),this.spinner.show(),this.impApiService.post(g.S.addProject,c).subscribe({next:r=>{console.log(r),this.spinner.hide(),this.formData.reset(),this.toastr.success("\u062a\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0628\u0646\u062c\u0627\u062d"),this.submitted=!1,this.selectedImage=null,this.imagePreview=null},error:r=>{console.error(r),this.spinner.hide(),this.toastr.error("\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0644\u0627\u062d\u0642\u0627\u064b.","\u062e\u0637\u0623")}})}onDragOver(e){e.preventDefault(),e.stopPropagation(),e.target.classList.add("dragging")}onDragLeave(e){e.target.classList.remove("dragging")}onDrop(e){var o;if(e.preventDefault(),e.stopPropagation(),e.target.classList.remove("dragging"),null===(o=e.dataTransfer)||void 0===o?void 0:o.files){const r=e.dataTransfer.files[0];this.selectedImage=r,this.formData.patchValue({projects_image:r}),this.updateImagePreview(r)}}updateImagePreview(e){const o=new FileReader;o.onload=c=>{var r;this.imagePreview=null===(r=c.target)||void 0===r?void 0:r.result},o.readAsDataURL(e)}handleImageInput(e){const o=e.target.files[0];o&&(this.selectedImage=o,this.formData.patchValue({projects_image:o}),this.updateImagePreview(o),console.log("Image file selected:",o))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.qu),t.Y36(l.y),t.Y36(_.t2),t.Y36(m._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-project"]],decls:43,vars:6,consts:[[1,"all"],[1,"top"],[1,"right"],[1,"left"],["routerLink","/apps/projects/home",1,"icon"],[1,"fas","fa-chevron-left"],[1,"middle"],[3,"formGroup","ngSubmit"],[1,"text"],[2,"color","#CA7676"],["type","text","formControlName","projects_name","placeholder","\u0627\u0643\u062a\u0628 \u0627\u0633\u0645 \u0627\u0644\u062e\u062f\u0645\u0629","required",""],[4,"ngIf"],["type","text","formControlName","projects_description","placeholder","\u0627\u0643\u062a\u0628 \u0648\u0635\u0641 \u0628\u0633\u064a\u0637 \u0639\u0646 \u0627\u0644\u062e\u062f\u0645\u0629","required",""],[1,"drop-zone",3,"dragover","dragleave","drop"],["alt","Service Image","style","width: 130px; height: 100px; object-fit: cover; padding-bottom: 10px;",3,"src",4,"ngIf"],["type","button",3,"click"],["type","file","accept","image/*","hidden","",3,"change"],["fileInput",""],[1,"butt"],["type","submit"],["class","invalid",4,"ngIf"],[1,"invalid"],["alt","Service Image",2,"width","130px","height","100px","object-fit","cover","padding-bottom","10px",3,"src"]],template:function(e,o){if(1&e){const c=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),t._uU(4,"\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639"),t.qZA()(),t.TgZ(7,"div",3)(8,"a",4)(9,"span"),t._uU(10,"\u0639\u0648\u062f\u0629"),t.qZA(),t._UZ(11,"i",5),t.qZA()()(),t.TgZ(12,"div",6)(13,"form",7),t.NdJ("ngSubmit",function(){return o.add()}),t.TgZ(14,"p",8),t._uU(15,"\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639:"),t.TgZ(16,"span",9),t._uU(17,"*"),t.qZA()(),t._UZ(18,"input",10),t.YNc(19,y,3,2,"div",11),t.TgZ(20,"p",8),t._uU(21,"\u0648\u0635\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639:"),t.TgZ(22,"span",9),t._uU(23,"*"),t.qZA(),t._uU(24," (\u0644\u0627 \u064a\u062a\u0639\u062f\u0649 \u0661\u0665\u0660 \u062d\u0631\u0641)"),t.qZA(),t._UZ(25,"textarea",12),t.YNc(26,q,3,2,"div",11),t.TgZ(27,"p",8),t._uU(28,"\u0635\u0648\u0631\u0629 \u0644\u0644\u0645\u0634\u0631\u0648\u0639: "),t.TgZ(29,"span",9),t._uU(30,"*"),t.qZA(),t._uU(31," (\u064a\u0641\u0636\u0644 \u0623\u0646 \u062a\u0643\u0648\u0646 \u0635\u0648\u0631\u0629 \u0623\u0641\u0642\u064a\u0629) "),t.qZA(),t.TgZ(32,"div",13),t.NdJ("dragover",function(a){return o.onDragOver(a)})("dragleave",function(a){return o.onDragLeave(a)})("drop",function(a){return o.onDrop(a)}),t.YNc(33,U,1,1,"img",14),t.YNc(34,k,2,0,"p",11),t.TgZ(35,"button",15),t.NdJ("click",function(){return t.CHM(c),t.MAs(38).click()}),t._uU(36,"\u0627\u062e\u062a\u0631 \u0645\u0644\u0641"),t.qZA()(),t.TgZ(37,"input",16,17),t.NdJ("change",function(a){return o.handleImageInput(a)}),t.qZA(),t.YNc(39,S,2,1,"div",11),t.TgZ(40,"div",18)(41,"button",19),t._uU(42,"\u0625\u0636\u0627\u0641\u0629"),t.qZA()()()()()}2&e&&(t.xp6(13),t.Q6J("formGroup",o.formData),t.xp6(6),t.Q6J("ngIf",o.submitted&&o.formData.controls.projects_name.errors),t.xp6(7),t.Q6J("ngIf",o.submitted&&o.formData.controls.projects_description.errors),t.xp6(7),t.Q6J("ngIf",o.imagePreview),t.xp6(1),t.Q6J("ngIf",!o.selectedImage&&!o.imagePreview),t.xp6(5),t.Q6J("ngIf",o.submitted&&o.formData.controls.projects_image.errors))},directives:[d.yS,u._Y,u.JL,u.sg,u.Fj,u.JJ,u.u,u.Q7,s.O5],styles:['.all[_ngcontent-%COMP%]{margin-right:375px;background-color:var(--dark-grey);color:#fff;height:100vh;overflow:hidden}.top[_ngcontent-%COMP%]{padding:30px 40px 10px 0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:10px}.top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:10px}.top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:60px;margin:0}.top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;margin:0}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{display:flex;align-items:start;justify-content:center;flex-direction:row-reverse}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{text-decoration:none;color:var(--background-color);font-size:16PX;transition:background-color .3s,transform .3s}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding:0 10px 0 40px}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .trash[_ngcontent-%COMP%]{color:#ca7676}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]{color:#fff}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px}.middle[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-right:40px}.middle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:400px}.middle[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding:10px;width:400px;height:150px}.middle[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:10px 0 5px}.middle[_ngcontent-%COMP%]   .invalid[_ngcontent-%COMP%]{color:#ca7676;font-size:12px}.middle[_ngcontent-%COMP%]   .butt[_ngcontent-%COMP%]{display:flex;justify-content:center;padding-top:10px}.middle[_ngcontent-%COMP%]   .butt[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:150px}.drop-zone[_ngcontent-%COMP%]{border-radius:10px;width:175px;color:var(--light-grey);position:relative;padding:20px;text-align:center;cursor:pointer;background-color:#fff;transition:background-color .3s}.drop-zone[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:5px;border-radius:10px;border:2px dashed var(--light-grey);pointer-events:none}.drop-zone.dragging[_ngcontent-%COMP%]{background-color:var(--light-grey)}']}),n})();function Y(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",8)(1,"div",9),t._UZ(2,"img",10),t.qZA(),t.TgZ(3,"h4"),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.ALo(7,"slice"),t.qZA(),t.TgZ(8,"div",11)(9,"a",12),t.NdJ("click",function(){t.CHM(e);const c=t.oxw().$implicit;return t.oxw().delete_project(c.project_id)}),t._UZ(10,"i",13),t.TgZ(11,"span"),t._uU(12,"\u062d\u0630\u0641"),t.qZA()(),t.TgZ(13,"a",12),t.NdJ("click",function(){t.CHM(e);const c=t.oxw().$implicit;return t.oxw().update_project(c.project_id)}),t._UZ(14,"i",14),t.TgZ(15,"span"),t._uU(16,"\u062a\u0639\u062f\u064a\u0644"),t.qZA()()()()}if(2&n){const e=t.oxw().$implicit;t.xp6(2),t.Q6J("src",e.projects_image,t.LSH),t.xp6(2),t.Oqu(e.projects_name),t.xp6(2),t.hij("",t.Dn7(7,3,e.projects_description,0,50),"...")}}function F(n,i){if(1&n&&(t.ynx(0),t.YNc(1,Y,17,7,"div",7),t.BQk()),2&n){const e=i.index;t.xp6(1),t.Q6J("ngIf",e<5)}}function E(n,i){1&n&&(t.TgZ(0,"div",15)(1,"a",16),t._UZ(2,"i",17),t.qZA(),t.TgZ(3,"span"),t._uU(4,"\u0625\u0636\u0627\u0641\u0629"),t.qZA()())}function Q(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"span",18),t.NdJ("click",function(){const r=t.CHM(e).index;return t.oxw().goToPage(r)}),t.qZA()}if(2&n){const e=i.index,o=t.oxw();t.ekj("active",e===o.currentPage)}}const z=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:(()=>{class n{constructor(e,o,c,r){this.impApiService=e,this.spinner=o,this.toastr=c,this.router=r,this.projects=[],this.servicesPerPage=5,this.currentPage=0,this.paginatedServices=[],this.pages=[]}ngOnInit(){this.spinner.show(),this.impApiService.get(g.S.viewProject).subscribe({next:e=>{Array.isArray(e[0])?(this.projects=e[0],console.log(e[0]),this.updatePagination(),this.spinner.hide()):(console.error("Unexpected response structure:",e),this.toastr.error("\u062e\u0637\u0623 \u063a\u064a\u0631 \u0645\u062a\u0648\u0642\u0639"),this.spinner.hide())},error:e=>{console.error("API Error:",e),this.toastr.error("\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u062c\u0644\u0628 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a"),this.spinner.hide()}})}updatePagination(){this.pages=Array(Math.ceil(this.projects.length/this.servicesPerPage)).fill(0),this.paginatedServices=this.projects.slice(this.currentPage*this.servicesPerPage,(this.currentPage+1)*this.servicesPerPage)}goToPage(e){this.currentPage=e,this.updatePagination()}delete_project(e){this.spinner.show(),console.log(e),this.impApiService.delete(`${g.S.deleteProject}${e}`).subscribe(o=>{this.spinner.hide(),this.ngOnInit()})}update_project(e){localStorage.setItem("current_project",e.toString()),this.router.navigate(["/apps/projects/edit"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.y),t.Y36(_.t2),t.Y36(m._W),t.Y36(d.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:11,vars:4,consts:[[1,"all"],[1,"top"],[1,"middle"],[4,"ngFor","ngForOf"],["class"," add-card",4,"ngIf"],[1,"pagination"],["class","dot",3,"active","click",4,"ngFor","ngForOf"],["class","card",4,"ngIf"],[1,"card"],[1,"image"],["alt","",3,"src"],[1,"icons"],[1,"icon",3,"click"],[1,"fas","fa-trash-alt","trash"],[1,"fas","fa-edit","edit"],[1,"add-card"],["routerLink","/apps/projects/add",1,"icon"],[1,"fas","fa-plus","plus"],[1,"dot",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3,"\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639"),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.qZA()(),t.TgZ(6,"div",2),t.YNc(7,F,2,1,"ng-container",3),t.YNc(8,E,5,0,"div",4),t.qZA(),t.TgZ(9,"div",5),t.YNc(10,Q,1,2,"span",6),t.qZA()()),2&e&&(t.xp6(5),t.hij("",o.projects.length," \u0645\u0634\u0627\u0631\u064a\u0639"),t.xp6(2),t.Q6J("ngForOf",o.paginatedServices),t.xp6(1),t.Q6J("ngIf",o.paginatedServices.length<6),t.xp6(2),t.Q6J("ngForOf",o.pages))},directives:[s.sg,s.O5,d.yS],pipes:[s.OU],styles:[".all[_ngcontent-%COMP%]{margin-right:375px;background-color:var(--dark-grey);color:#fff;height:100vh;overflow:hidden}.top[_ngcontent-%COMP%]{padding:30px 40px 10px 0;display:flex;flex-direction:row;align-items:center;gap:10px}.top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:60px;margin:0}.top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px}.middle[_ngcontent-%COMP%]{padding:0 40px;display:flex;flex-wrap:wrap;gap:10px}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:var(--grey);color:#fff;flex:0 0 calc(33.33% - 10px);box-sizing:border-box;display:flex}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{padding-top:10px;display:flex;justify-content:center}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:90%;height:150px;border-radius:12px;object-fit:cover}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{padding-top:10px;font-size:16px;padding-right:10px}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:lighter;padding:0 10px 5px}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;padding:0 10px 10px;gap:5px}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:flex;align-items:center;text-decoration:none;color:var(--background-color);border-radius:5px;font-size:16PX;transition:background-color .3s,transform .3s}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding-left:5px}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .trash[_ngcontent-%COMP%]{color:#ca7676}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]{color:#fff}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover{color:var(--light-grey);transform:scale(1.02)}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:end;padding:10px}.pagination[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{height:10px;width:10px;margin:0 5px;background-color:var(--light-grey);border-radius:50%;display:inline-block;cursor:pointer;transition:background-color .3s}.pagination[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%]{background-color:#fff}.add-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0 0 calc(33.33% - 10px);box-sizing:border-box}.add-card[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%]{font-size:100px;font-weight:lighter;color:#fff}.add-card[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%]:hover{color:var(--prime)}"]}),n})()},{path:"edit",component:T},{path:"add",component:N}];let L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.Bz.forChild(z)],d.Bz]}),n})(),H=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.ez,L,u.u5,u.UX]]}),n})()}}]);