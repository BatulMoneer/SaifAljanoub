"use strict";(self.webpackChunkSaifAljanoub=self.webpackChunkSaifAljanoub||[]).push([[511],{2511:(dt,m,d)=>{d.r(m),d.d(m,{JobsModule:()=>ct});var p=d(9808),a=d(6609),s=d(7987),t=d(4893),_=d(5830),g=d(72),f=d(2290);function x(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"div",8)(1,"h4"),t._uU(2),t.qZA(),t.TgZ(3,"p")(4,"span",9),t._uU(5,"\u0627\u0644\u0645\u0624\u0647\u0644 \u0627\u0644\u0639\u0644\u0645\u064a: "),t.qZA(),t._uU(6),t.qZA(),t.TgZ(7,"p")(8,"span",9),t._uU(9,"\u0633\u0646\u0648\u0627\u062a \u0627\u0644\u062e\u0628\u0631\u0629: "),t.qZA(),t._uU(10),t.qZA(),t.TgZ(11,"p")(12,"span",9),t._uU(13,"\u0627\u0644\u0631\u0627\u062a\u0628: "),t.qZA(),t._uU(14),t.qZA(),t.TgZ(15,"p"),t._uU(16,"..."),t.qZA(),t.TgZ(17,"div",10)(18,"a",11),t.NdJ("click",function(){t.CHM(n);const u=t.oxw().$implicit;return t.oxw().delete_job(u.job_id)}),t._UZ(19,"i",12),t.TgZ(20,"span"),t._uU(21,"\u062d\u0630\u0641"),t.qZA()(),t.TgZ(22,"a",11),t.NdJ("click",function(){t.CHM(n);const u=t.oxw().$implicit;return t.oxw().update_job(u.job_id)}),t._UZ(23,"i",13),t.TgZ(24,"span"),t._uU(25,"\u062a\u0639\u062f\u064a\u0644"),t.qZA()()()()}if(2&o){const n=t.oxw().$implicit;t.xp6(2),t.Oqu(n.job_position),t.xp6(4),t.hij("",n.job_qualification," "),t.xp6(4),t.Oqu(n.job_experience),t.xp6(4),t.Oqu(n.job_salary)}}function b(o,i){if(1&o&&(t.ynx(0),t.YNc(1,x,26,4,"div",7),t.BQk()),2&o){const n=i.index;t.xp6(1),t.Q6J("ngIf",n<5)}}function C(o,i){1&o&&(t.TgZ(0,"div",14)(1,"a",15),t._UZ(2,"i",16),t.qZA(),t.TgZ(3,"span"),t._uU(4,"\u0625\u0636\u0627\u0641\u0629"),t.qZA()())}function h(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"span",17),t.NdJ("click",function(){const c=t.CHM(n).index;return t.oxw().goToPage(c)}),t.qZA()}if(2&o){const n=i.index,e=t.oxw();t.ekj("active",n===e.currentPage)}}let P=(()=>{class o{constructor(n,e,u,c){this.impApiService=n,this.spinner=e,this.toastr=u,this.router=c,this.jobs=[],this.servicesPerPage=5,this.currentPage=0,this.paginatedServices=[],this.pages=[]}ngOnInit(){this.spinner.show(),this.impApiService.get(s.S.viewJob).subscribe({next:n=>{Array.isArray(n[0])?(this.jobs=n[0],console.log(n[0]),this.updatePagination(),this.spinner.hide()):(console.error("Unexpected response structure:",n),this.toastr.error("\u062e\u0637\u0623 \u063a\u064a\u0631 \u0645\u062a\u0648\u0642\u0639"),this.spinner.hide())},error:n=>{console.error("API Error:",n),this.toastr.error("\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u062c\u0644\u0628 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a"),this.spinner.hide()}})}updatePagination(){this.pages=Array(Math.ceil(this.jobs.length/this.servicesPerPage)).fill(0),this.paginatedServices=this.jobs.slice(this.currentPage*this.servicesPerPage,(this.currentPage+1)*this.servicesPerPage)}goToPage(n){this.currentPage=n,this.updatePagination()}delete_job(n){this.spinner.show(),console.log(n),this.impApiService.delete(`${s.S.deleteJob}${n}`).subscribe(e=>{this.spinner.hide(),this.ngOnInit()})}update_job(n){localStorage.setItem("current_job",n.toString()),this.router.navigate(["/apps/jobs/edit"])}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(_.y),t.Y36(g.t2),t.Y36(f._W),t.Y36(a.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],decls:11,vars:4,consts:[[1,"all"],[1,"top"],[1,"middle"],[4,"ngFor","ngForOf"],["class"," add-card",4,"ngIf"],[1,"pagination"],["class","dot",3,"active","click",4,"ngFor","ngForOf"],["class","card",4,"ngIf"],[1,"card"],[2,"color","var(--light-grey)","font-weight","bold"],[1,"icons"],[1,"icon",3,"click"],[1,"fas","fa-trash-alt","trash"],[1,"fas","fa-edit","edit"],[1,"add-card"],["routerLink","/apps/jobs/add",1,"icon"],[1,"fas","fa-plus","plus"],[1,"dot",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3,"\u0627\u0644\u0648\u0638\u0627\u0626\u0641"),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.qZA()(),t.TgZ(6,"div",2),t.YNc(7,b,2,1,"ng-container",3),t.YNc(8,C,5,0,"div",4),t.qZA(),t.TgZ(9,"div",5),t.YNc(10,h,1,2,"span",6),t.qZA()()),2&n&&(t.xp6(5),t.hij("",e.jobs.length," \u0648\u0638\u064a\u0641\u0629"),t.xp6(2),t.Q6J("ngForOf",e.paginatedServices),t.xp6(1),t.Q6J("ngIf",e.paginatedServices.length<6),t.xp6(2),t.Q6J("ngForOf",e.pages))},directives:[p.sg,p.O5,a.yS],styles:[".all[_ngcontent-%COMP%]{margin-right:375px;background-color:var(--dark-grey);color:#fff;height:100vh;overflow:hidden}.top[_ngcontent-%COMP%]{padding:30px 40px 10px 0;display:flex;flex-direction:row;align-items:center;gap:10px}.top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:60px;margin:0}.top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px}.middle[_ngcontent-%COMP%]{padding:0 40px;display:flex;flex-wrap:wrap;gap:10px}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:var(--grey);color:#fff;flex:0 0 calc(33.33% - 10px);box-sizing:border-box;display:flex}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{padding-top:10px;display:flex;justify-content:center}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:90%;height:150px;border-radius:12px;object-fit:cover}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{padding-top:10px;font-size:16px;padding-right:10px;font-weight:700;padding-bottom:10px;border-bottom:1px solid var(--light-grey)}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:lighter;padding:0 10px 5px}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;padding:0 10px 10px;gap:5px}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:flex;align-items:center;text-decoration:none;color:var(--background-color);border-radius:5px;font-size:16PX;transition:background-color .3s,transform .3s}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding-left:5px}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .trash[_ngcontent-%COMP%]{color:#ca7676}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]{color:#fff}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}.middle[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover{color:var(--light-grey);transform:scale(1.02)}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:end;padding:10px}.pagination[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{height:10px;width:10px;margin:0 5px;background-color:var(--light-grey);border-radius:50%;display:inline-block;cursor:pointer;transition:background-color .3s}.pagination[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%]{background-color:#fff}.add-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0 0 calc(33.33% - 10px);box-sizing:border-box}.add-card[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%]{font-size:100px;font-weight:lighter;color:#fff}.add-card[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%]:hover{color:var(--prime)}"]}),o})();var r=d(2382);function O(o,i){1&o&&(t.TgZ(0,"p",28),t._uU(1," \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628! "),t.qZA())}function M(o,i){1&o&&(t.TgZ(0,"p",28),t._uU(1," \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0637\u0648\u064a\u0644 \u062c\u062f\u0627! "),t.qZA())}function A(o,i){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,O,2,0,"p",27),t.YNc(2,M,2,0,"p",27),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.submitted&&n.formData.controls.job_position.errors.required),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.formData.controls.job_position.errors.maxlength)}}function Z(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"li")(1,"label")(2,"input",29),t.NdJ("click",function(){const c=t.CHM(n).$implicit;return t.oxw().selectQualification(c)}),t.qZA(),t._uU(3),t.qZA()()}if(2&o){const n=i.$implicit;t.xp6(2),t.s9C("value",n),t.xp6(1),t.hij(" ",n," ")}}function v(o,i){1&o&&(t.TgZ(0,"p",28),t._uU(1," \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628! "),t.qZA())}function q(o,i){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,v,2,0,"p",27),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.submitted&&n.formData.controls.job_qualification.errors.required)}}function T(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"li")(1,"label")(2,"input",30),t.NdJ("click",function(){const c=t.CHM(n).$implicit;return t.oxw().selectExperienceYear(c)}),t.qZA(),t._uU(3),t.qZA()()}if(2&o){const n=i.$implicit;t.xp6(2),t.s9C("value",n),t.xp6(1),t.hij(" ",n," ")}}function y(o,i){1&o&&(t.TgZ(0,"p",28),t._uU(1," \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628! "),t.qZA())}function w(o,i){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,y,2,0,"p",27),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.submitted&&n.formData.controls.job_experience.errors.required)}}function j(o,i){1&o&&(t.TgZ(0,"p",28),t._uU(1," \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628! "),t.qZA())}function J(o,i){1&o&&(t.TgZ(0,"p",28),t._uU(1," \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0637\u0648\u064a\u0644 \u062c\u062f\u0627! "),t.qZA())}function k(o,i){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,j,2,0,"p",27),t.YNc(2,J,2,0,"p",27),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.submitted&&n.formData.controls.job_salary.errors.required),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.formData.controls.job_salary.errors.maxlength)}}function U(o,i){1&o&&(t.TgZ(0,"p",28),t._uU(1," \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628!"),t.qZA())}function Y(o,i){1&o&&(t.TgZ(0,"p",28),t._uU(1," \u0627\u0644\u0648\u0635\u0641 \u0637\u0648\u064a\u0644 \u062c\u062f\u0627!"),t.qZA())}function I(o,i){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,U,2,0,"p",27),t.YNc(2,Y,2,0,"p",27),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.formData.controls.job_description.errors.required),t.xp6(1),t.Q6J("ngIf",n.formData.controls.job_description.errors.maxlength)}}function D(o,i){1&o&&(t.TgZ(0,"p",28),t._uU(1," \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628! "),t.qZA())}function N(o,i){1&o&&(t.TgZ(0,"p",28),t._uU(1," \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0637\u0648\u064a\u0644 \u062c\u062f\u0627! "),t.qZA())}function E(o,i){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,D,2,0,"p",27),t.YNc(2,N,2,0,"p",27),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.submitted&&n.formData.controls.job_link.errors.required),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.formData.controls.job_link.errors.maxlength)}}function F(o,i){1&o&&(t.TgZ(0,"p",28),t._uU(1," \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628! "),t.qZA())}function S(o,i){1&o&&(t.TgZ(0,"p",28),t._uU(1," \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0637\u0648\u064a\u0644 \u062c\u062f\u0627! "),t.qZA())}function z(o,i){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,F,2,0,"p",27),t.YNc(2,S,2,0,"p",27),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.submitted&&n.formData.controls.job_position.errors.required),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.formData.controls.job_position.errors.maxlength)}}function H(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"li")(1,"label")(2,"input",29),t.NdJ("click",function(){const c=t.CHM(n).$implicit;return t.oxw().selectQualification(c)}),t.qZA(),t._uU(3),t.qZA()()}if(2&o){const n=i.$implicit;t.xp6(2),t.s9C("value",n),t.xp6(1),t.hij(" ",n," ")}}function $(o,i){1&o&&(t.TgZ(0,"p",28),t._uU(1," \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628! "),t.qZA())}function B(o,i){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,$,2,0,"p",27),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.submitted&&n.formData.controls.job_qualification.errors.required)}}function L(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"li")(1,"label")(2,"input",30),t.NdJ("click",function(){const c=t.CHM(n).$implicit;return t.oxw().selectExperienceYear(c)}),t.qZA(),t._uU(3),t.qZA()()}if(2&o){const n=i.$implicit;t.xp6(2),t.s9C("value",n),t.xp6(1),t.hij(" ",n," ")}}function R(o,i){1&o&&(t.TgZ(0,"p",28),t._uU(1," \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628! "),t.qZA())}function X(o,i){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,R,2,0,"p",27),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.submitted&&n.formData.controls.job_experience.errors.required)}}function V(o,i){1&o&&(t.TgZ(0,"p",28),t._uU(1," \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628! "),t.qZA())}function G(o,i){1&o&&(t.TgZ(0,"p",28),t._uU(1," \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0637\u0648\u064a\u0644 \u062c\u062f\u0627! "),t.qZA())}function W(o,i){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,V,2,0,"p",27),t.YNc(2,G,2,0,"p",27),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.submitted&&n.formData.controls.job_salary.errors.required),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.formData.controls.job_salary.errors.maxlength)}}function K(o,i){1&o&&(t.TgZ(0,"p",28),t._uU(1," \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628!"),t.qZA())}function tt(o,i){1&o&&(t.TgZ(0,"p",28),t._uU(1," \u0627\u0644\u0648\u0635\u0641 \u0637\u0648\u064a\u0644 \u062c\u062f\u0627!"),t.qZA())}function nt(o,i){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,K,2,0,"p",27),t.YNc(2,tt,2,0,"p",27),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.formData.controls.job_description.errors.required),t.xp6(1),t.Q6J("ngIf",n.formData.controls.job_description.errors.maxlength)}}function ot(o,i){1&o&&(t.TgZ(0,"p",28),t._uU(1," \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628! "),t.qZA())}function et(o,i){1&o&&(t.TgZ(0,"p",28),t._uU(1," \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0637\u0648\u064a\u0644 \u062c\u062f\u0627! "),t.qZA())}function it(o,i){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,ot,2,0,"p",27),t.YNc(2,et,2,0,"p",27),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.submitted&&n.formData.controls.job_link.errors.required),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.formData.controls.job_link.errors.maxlength)}}const rt=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:P},{path:"edit",component:(()=>{class o{constructor(n,e,u,c){this.formBuilder=n,this.impApiService=e,this.spinner=u,this.toastr=c,this.job={job_position:"",job_qualification:"",job_salary:"",job_description:"",job_link:"",job_experience:""},this.submitted=!1,this.qualifications=["\u062b\u0627\u0646\u0648\u064a\u0629 \u0639\u0627\u0645\u0629","\u062f\u0628\u0644\u0648\u0645","\u0628\u0643\u0627\u0644\u0648\u0631\u064a\u0648\u0633","\u0645\u0627\u062c\u0633\u062a\u064a\u0631","\u062f\u0643\u062a\u0648\u0631\u0627\u0647"],this.experienceYears=["\u0644\u0627 \u064a\u0648\u062c\u062f","\u0660-\u0664","\u0664-\u0666","\u0666-\u0661\u0660","\u0623\u0643\u062b\u0631 \u0645\u0646 \u0661\u0660"],this.selectedQualification=null,this.selectedExperienceYear=null}ngOnInit(){this.formData=this.formBuilder.group({job_position:["",[r.kI.required,r.kI.maxLength(30)]],job_description:["",[r.kI.required,r.kI.maxLength(200)]],job_experience:["",r.kI.required],job_salary:["",r.kI.required],job_link:["",r.kI.required],job_qualification:["",r.kI.required]}),this.spinner.show(),this.impApiService.get(s.S.viewJob).subscribe({next:n=>{console.log("Full API Response:",n);const e=localStorage.getItem("current_job");if(Array.isArray(n[0])&&e){const u=n[0].find(c=>c.job_id.toString()===e);u?(this.job={job_position:u.job_position,job_qualification:u.job_qualification,job_salary:u.job_salary,job_description:u.job_description,job_link:u.job_link,job_experience:u.job_experience},this.formData.patchValue(this.job),this.selectedExperienceYear=this.job.job_experience,this.selectedQualification=this.job.job_qualification,this.spinner.hide()):(console.error("Job not found"),this.toastr.error("\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0648\u0638\u064a\u0641\u0629"),this.spinner.hide())}else console.error("Unexpected response structure:",n),this.toastr.error("\u062e\u0637\u0623 \u063a\u064a\u0631 \u0645\u062a\u0648\u0642\u0639"),this.spinner.hide()},error:n=>{console.error("API Error:",n),this.toastr.error("\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u062c\u0644\u0628 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a"),this.spinner.hide()}})}add(){if(this.submitted=!0,this.formData.invalid)return void this.toastr.error("\u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u062a\u0623\u0643\u062f \u0645\u0646 \u0645\u0644\u0621 \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0644 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d");this.spinner.show();const n=localStorage.getItem("current_job");n?this.impApiService.post(`${s.S.updateJob}${n}`,this.formData.value).subscribe({next:()=>{this.toastr.success("\u062a\u0645 \u0627\u0644\u062a\u062d\u062f\u064a\u062b \u0628\u0646\u062c\u0627\u062d"),this.spinner.hide()},error:e=>{console.error("Update API Error:",e),this.toastr.error("\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0648\u0638\u064a\u0641\u0629"),this.spinner.hide()}}):(this.toastr.error("\u0644\u0627 \u064a\u0648\u062c\u062f \u0648\u0638\u064a\u0641\u0629 \u062d\u0627\u0644\u064a\u0629 \u0644\u0644\u062a\u062d\u062f\u064a\u062b"),this.spinner.hide())}selectQualification(n){this.selectedQualification=n,this.formData.controls.job_qualification.setValue(n);const e=document.querySelector("#dropdown-toggle");e&&(e.checked=!1)}selectExperienceYear(n){this.selectedExperienceYear=n,this.formData.controls.job_experience.setValue(n);const e=document.querySelector("#experienceYear-dropdown-toggle");e&&(e.checked=!1)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.qu),t.Y36(_.y),t.Y36(g.t2),t.Y36(f._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-job"]],decls:73,vars:11,consts:[[1,"all"],[1,"top"],[1,"right"],[1,"left"],["routerLink","/apps/jobs/home",1,"icon"],[1,"fas","fa-chevron-left"],[1,"middle"],[3,"formGroup","ngSubmit"],[1,"middle-top"],[1,"card"],[1,"text"],[2,"color","#CA7676"],["type","text","formControlName","job_position","placeholder","\u0627\u0643\u062a\u0628 \u0627\u0633\u0645 \u0627\u0644\u062e\u062f\u0645\u0629","required",""],[4,"ngIf"],[1,"dropdown"],["type","checkbox","id","dropdown-toggle"],["for","dropdown-toggle",1,"dropdown__face"],[1,"fas","fa-chevron-left","dropdown__arrow"],[1,"dropdown__items"],[4,"ngFor","ngForOf"],["type","checkbox","id","experienceYear-dropdown-toggle"],["for","experienceYear-dropdown-toggle",1,"dropdown__face"],["type","text","formControlName","job_salary","placeholder","\u0627\u0643\u062a\u0628 \u0627\u0627\u0644\u0631\u0627\u062a\u0628 \u0627\u0644\u0645\u0639\u0631\u0648\u0636","required",""],["type","text","formControlName","job_description","placeholder","\u0627\u0643\u062a\u0628 \u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0648\u0638\u064a\u0641\u0629 \u0628\u0634\u0643\u0644 \u0628\u0633\u064a\u0637","required","",1,"jobRequirements"],["type","text","formControlName","job_link","placeholder","\u0627\u062f\u062e\u0644 \u0631\u0627\u0628\u0637 \u0627\u0644\u062a\u0642\u062f\u064a\u0645 \u0644\u0644\u0648\u0638\u064a\u0641\u0629","required",""],[1,"butt"],["type","submit"],["class","invalid",4,"ngIf"],[1,"invalid"],["type","radio","formControlName","job_qualification",3,"value","click"],["type","radio","formControlName","job_experience",3,"value","click"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),t._uU(4,"\u0627\u0644\u0648\u0638\u0627\u0626\u0641"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u062a\u0639\u062f\u064a\u0644 \u0648\u0638\u064a\u0641\u0629"),t.qZA()(),t.TgZ(7,"div",3)(8,"a",4)(9,"span"),t._uU(10,"\u0639\u0648\u062f\u0629"),t.qZA(),t._UZ(11,"i",5),t.qZA()()(),t.TgZ(12,"div",6)(13,"form",7),t.NdJ("ngSubmit",function(){return e.add()}),t.TgZ(14,"div",8)(15,"div",9)(16,"p",10),t._uU(17,"\u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064a\u0641\u064a:"),t.TgZ(18,"span",11),t._uU(19,"*"),t.qZA()(),t._UZ(20,"input",12),t.YNc(21,A,3,2,"div",13),t.qZA(),t.TgZ(22,"div",9)(23,"p",10),t._uU(24,"\u0627\u0644\u0645\u0624\u0647\u0644 \u0627\u0644\u0639\u0644\u0645\u064a:"),t.TgZ(25,"span",11),t._uU(26,"*"),t.qZA()(),t.TgZ(27,"div",14),t._UZ(28,"input",15),t.TgZ(29,"label",16)(30,"span"),t._uU(31),t.qZA(),t._UZ(32,"i",17),t.qZA(),t.TgZ(33,"ul",18),t.YNc(34,Z,4,2,"li",19),t.qZA()(),t.YNc(35,q,2,1,"div",13),t.qZA(),t.TgZ(36,"div",9)(37,"p",10),t._uU(38,"\u0633\u0646\u0648\u0627\u062a \u0627\u0644\u062e\u0628\u0631\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629:"),t.TgZ(39,"span",11),t._uU(40,"*"),t.qZA()(),t.TgZ(41,"div",14),t._UZ(42,"input",20),t.TgZ(43,"label",21)(44,"span"),t._uU(45),t.qZA(),t._UZ(46,"i",17),t.qZA(),t.TgZ(47,"ul",18),t.YNc(48,T,4,2,"li",19),t.qZA()(),t.YNc(49,w,2,1,"div",13),t.qZA(),t.TgZ(50,"div",9)(51,"p",10),t._uU(52,"\u0627\u0644\u0631\u0627\u062a\u0628:"),t.TgZ(53,"span",11),t._uU(54,"*"),t.qZA()(),t._UZ(55,"input",22),t.YNc(56,k,3,2,"div",13),t.qZA()(),t.TgZ(57,"p",10),t._uU(58,"\u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0648\u0638\u064a\u0641\u0629:"),t.TgZ(59,"span",11),t._uU(60,"*"),t.qZA(),t._uU(61," (\u0644\u0627 \u064a\u062a\u0639\u062f\u0649 \u0662\u0660\u0660 \u062d\u0631\u0641)"),t.qZA(),t._UZ(62,"textarea",23),t.YNc(63,I,3,2,"div",13),t.TgZ(64,"p",10),t._uU(65,"\u0631\u0627\u0628\u0637 \u0627\u0644\u062a\u0642\u062f\u064a\u0645:"),t.TgZ(66,"span",11),t._uU(67,"*"),t.qZA()(),t._UZ(68,"input",24),t.YNc(69,E,3,2,"div",13),t.TgZ(70,"div",25)(71,"button",26),t._uU(72,"\u0625\u0636\u0627\u0641\u0629"),t.qZA()()()()()),2&n&&(t.xp6(13),t.Q6J("formGroup",e.formData),t.xp6(8),t.Q6J("ngIf",e.submitted&&e.formData.controls.job_position.errors),t.xp6(10),t.Oqu(e.selectedQualification||"\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0624\u0647\u0644"),t.xp6(3),t.Q6J("ngForOf",e.qualifications),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.formData.controls.job_qualification.errors),t.xp6(10),t.Oqu(e.selectedExperienceYear||"\u0627\u062e\u062a\u0631 \u0627\u0644\u0633\u0646\u0648\u0627\u062a"),t.xp6(3),t.Q6J("ngForOf",e.experienceYears),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.formData.controls.job_experience.errors),t.xp6(7),t.Q6J("ngIf",e.submitted&&e.formData.controls.job_salary.errors),t.xp6(7),t.Q6J("ngIf",e.submitted&&e.formData.controls.job_description.errors),t.xp6(6),t.Q6J("ngIf",e.submitted&&e.formData.controls.job_link.errors))},directives:[a.yS,r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.Q7,p.O5,p.sg,r._],styles:['.all[_ngcontent-%COMP%]{margin-right:375px;background-color:var(--dark-grey);color:#fff;height:100vh;overflow:hidden}.top[_ngcontent-%COMP%]{padding:30px 40px 10px 0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:10px}.top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:10px}.top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:60px;margin:0}.top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;margin:0}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{display:flex;align-items:start;justify-content:center;flex-direction:row-reverse}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{text-decoration:none;color:var(--background-color);font-size:16PX;transition:background-color .3s,transform .3s}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding:0 10px 0 40px}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .trash[_ngcontent-%COMP%]{color:#ca7676}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]{color:#fff}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px}.middle[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0 40px}.middle[_ngcontent-%COMP%]   .middle-top[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px}.middle[_ngcontent-%COMP%]   .middle-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:var(--dark-grey);color:#fff;border:none;flex:0 0 calc(50% - 10px);box-sizing:border-box;display:flex}.middle[_ngcontent-%COMP%]   .middle-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:300px}.middle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:400px}.middle[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding:10px;width:400px;height:150px}.middle[_ngcontent-%COMP%]   .jobRequirements[_ngcontent-%COMP%]{width:700px;height:140px}.middle[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:10px 0 5px}.middle[_ngcontent-%COMP%]   .invalid[_ngcontent-%COMP%]{color:#ca7676;font-size:12px}.middle[_ngcontent-%COMP%]   .butt[_ngcontent-%COMP%]{display:flex;justify-content:center;padding-top:10px}.middle[_ngcontent-%COMP%]   .butt[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:150px}.drop-zone[_ngcontent-%COMP%]{border-radius:10px;width:175px;color:var(--light-grey);position:relative;padding:20px;text-align:center;cursor:pointer;background-color:#fff;transition:background-color .3s}.drop-zone[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:5px;border-radius:10px;border:2px dashed var(--light-grey);pointer-events:none}.drop-zone.dragging[_ngcontent-%COMP%]{background-color:var(--light-grey)}.middle[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{position:relative;width:150px;height:44px}.dropdown__face[_ngcontent-%COMP%], .dropdown__items[_ngcontent-%COMP%]{background-color:#fff;color:var(--light-grey);padding:10px;border-radius:12px}.dropdown__face[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;cursor:pointer}.dropdown__arrow[_ngcontent-%COMP%]{color:var(--light-grey);width:10px;height:10px;transform:rotate(-90deg);transition:transform .4s cubic-bezier(.1,.88,.1,.8)}.dropdown__items[_ngcontent-%COMP%]{margin:0;position:absolute;width:100%;list-style:none;visibility:hidden;z-index:-1;opacity:0;transition:all .4s cubic-bezier(.93,.88,.1,.8);display:flex;flex-direction:column;gap:5px;max-height:150px;overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--grey) transparent}.dropdown__items[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;border-radius:100px}.dropdown__items[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--grey);border-radius:10px}.dropdown__items[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.dropdown__items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:5px;background-color:#f8f8f8;border-radius:15px;transition:background-color .3s}.dropdown__items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#fff;background-color:var(--grey)}input[type=checkbox][_ngcontent-%COMP%]{display:none}input[type=checkbox][_ngcontent-%COMP%]:checked ~ .dropdown__items[_ngcontent-%COMP%]{top:calc(100% + 5px);visibility:visible;opacity:1;z-index:1}input[type=checkbox][_ngcontent-%COMP%]:checked ~ .dropdown__face[_ngcontent-%COMP%]   .dropdown__arrow[_ngcontent-%COMP%]{transform:rotate(270deg)}input[type=radio][_ngcontent-%COMP%]{display:none}']}),o})()},{path:"add",component:(()=>{class o{constructor(n,e,u,c){this.formBuilder=n,this.impApiService=e,this.spinner=u,this.toastr=c,this.submitted=!1,this.qualifications=["\u062b\u0627\u0646\u0648\u064a\u0629 \u0639\u0627\u0645\u0629","\u062f\u0628\u0644\u0648\u0645","\u0628\u0643\u0627\u0644\u0648\u0631\u064a\u0648\u0633","\u0645\u0627\u062c\u0633\u062a\u064a\u0631","\u062f\u0643\u062a\u0648\u0631\u0627\u0647"],this.experienceYears=["\u0644\u0627 \u064a\u0648\u062c\u062f","\u0660-\u0664","\u0664-\u0666","\u0666-\u0661\u0660","\u0623\u0643\u062b\u0631 \u0645\u0646 \u0661\u0660"],this.selectedQualification=null,this.selectedExperienceYear=null}ngOnInit(){this.formData=this.formBuilder.group({job_position:["",[r.kI.required,r.kI.maxLength(30)]],job_description:["",[r.kI.required,r.kI.maxLength(200)]],job_experience:["",r.kI.required],job_salary:["",r.kI.required],job_link:["",r.kI.required],job_qualification:["",r.kI.required]})}add(){this.submitted=!0,this.formData.invalid?this.toastr.error("\u064a\u0631\u062c\u0649 \u0627\u0644\u062a\u0623\u0643\u062f \u0645\u0646 \u0645\u0644\u0621 \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0644 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d.","\u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0625\u062f\u062e\u0627\u0644"):(this.spinner.show(),this.impApiService.post(s.S.addJob,this.formData.value).subscribe({next:n=>{console.log(n),this.toastr.success("\u062a\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0628\u0646\u062c\u0627\u062d"),this.spinner.hide(),this.formData.reset(),this.submitted=!1,this.selectedQualification=null,this.selectedExperienceYear=null},error:n=>{console.error(n),this.spinner.hide(),this.toastr.error("\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0648\u0638\u064a\u0641\u0629. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0644\u0627\u062d\u0642\u0627\u064b.","\u062e\u0637\u0623")}}))}selectQualification(n){this.selectedQualification=n,this.formData.controls.job_qualification.setValue(n);const e=document.querySelector("#qualification-dropdown-toggle");e&&(e.checked=!1)}selectExperienceYear(n){this.selectedExperienceYear=n,this.formData.controls.job_experience.setValue(n);const e=document.querySelector("#experienceYear-dropdown-toggle");e&&(e.checked=!1)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.qu),t.Y36(_.y),t.Y36(g.t2),t.Y36(f._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-job"]],decls:73,vars:11,consts:[[1,"all"],[1,"top"],[1,"right"],[1,"left"],["routerLink","/apps/jobs/home",1,"icon"],[1,"fas","fa-chevron-left"],[1,"middle"],[3,"formGroup","ngSubmit"],[1,"middle-top"],[1,"card"],[1,"text"],[2,"color","#CA7676"],["type","text","formControlName","job_position","placeholder","\u0627\u0643\u062a\u0628 \u0627\u0633\u0645 \u0627\u0644\u062e\u062f\u0645\u0629","required",""],[4,"ngIf"],[1,"dropdown"],["type","checkbox","id","qualification-dropdown-toggle"],["for","qualification-dropdown-toggle",1,"dropdown__face"],[1,"fas","fa-chevron-left","dropdown__arrow"],[1,"dropdown__items"],[4,"ngFor","ngForOf"],["type","checkbox","id","experienceYear-dropdown-toggle"],["for","experienceYear-dropdown-toggle",1,"dropdown__face"],["type","text","formControlName","job_salary","placeholder","\u0627\u0643\u062a\u0628 \u0627\u0627\u0644\u0631\u0627\u062a\u0628 \u0627\u0644\u0645\u0639\u0631\u0648\u0636","required",""],["type","text","formControlName","job_description","placeholder","\u0627\u0643\u062a\u0628 \u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0648\u0638\u064a\u0641\u0629 \u0628\u0634\u0643\u0644 \u0628\u0633\u064a\u0637","required","",1,"jobRequirements"],["type","text","formControlName","job_link","placeholder","\u0627\u062f\u062e\u0644 \u0631\u0627\u0628\u0637 \u0627\u0644\u062a\u0642\u062f\u064a\u0645 \u0644\u0644\u0648\u0638\u064a\u0641\u0629","required",""],[1,"butt"],["type","submit"],["class","invalid",4,"ngIf"],[1,"invalid"],["type","radio","formControlName","job_qualification",3,"value","click"],["type","radio","formControlName","job_experience",3,"value","click"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),t._uU(4,"\u0627\u0644\u0648\u0638\u0627\u0626\u0641"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0625\u0636\u0627\u0641\u0629 \u0648\u0638\u064a\u0641\u0629"),t.qZA()(),t.TgZ(7,"div",3)(8,"a",4)(9,"span"),t._uU(10,"\u0639\u0648\u062f\u0629"),t.qZA(),t._UZ(11,"i",5),t.qZA()()(),t.TgZ(12,"div",6)(13,"form",7),t.NdJ("ngSubmit",function(){return e.add()}),t.TgZ(14,"div",8)(15,"div",9)(16,"p",10),t._uU(17,"\u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064a\u0641\u064a:"),t.TgZ(18,"span",11),t._uU(19,"*"),t.qZA()(),t._UZ(20,"input",12),t.YNc(21,z,3,2,"div",13),t.qZA(),t.TgZ(22,"div",9)(23,"p",10),t._uU(24,"\u0627\u0644\u0645\u0624\u0647\u0644 \u0627\u0644\u0639\u0644\u0645\u064a:"),t.TgZ(25,"span",11),t._uU(26,"*"),t.qZA()(),t.TgZ(27,"div",14),t._UZ(28,"input",15),t.TgZ(29,"label",16)(30,"span"),t._uU(31),t.qZA(),t._UZ(32,"i",17),t.qZA(),t.TgZ(33,"ul",18),t.YNc(34,H,4,2,"li",19),t.qZA()(),t.YNc(35,B,2,1,"div",13),t.qZA(),t.TgZ(36,"div",9)(37,"p",10),t._uU(38,"\u0633\u0646\u0648\u0627\u062a \u0627\u0644\u062e\u0628\u0631\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629:"),t.TgZ(39,"span",11),t._uU(40,"*"),t.qZA()(),t.TgZ(41,"div",14),t._UZ(42,"input",20),t.TgZ(43,"label",21)(44,"span"),t._uU(45),t.qZA(),t._UZ(46,"i",17),t.qZA(),t.TgZ(47,"ul",18),t.YNc(48,L,4,2,"li",19),t.qZA()(),t.YNc(49,X,2,1,"div",13),t.qZA(),t.TgZ(50,"div",9)(51,"p",10),t._uU(52,"\u0627\u0644\u0631\u0627\u062a\u0628:"),t.TgZ(53,"span",11),t._uU(54,"*"),t.qZA()(),t._UZ(55,"input",22),t.YNc(56,W,3,2,"div",13),t.qZA()(),t.TgZ(57,"p",10),t._uU(58,"\u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0648\u0638\u064a\u0641\u0629:"),t.TgZ(59,"span",11),t._uU(60,"*"),t.qZA(),t._uU(61," (\u0644\u0627 \u064a\u062a\u0639\u062f\u0649 \u0662\u0660\u0660 \u062d\u0631\u0641)"),t.qZA(),t._UZ(62,"textarea",23),t.YNc(63,nt,3,2,"div",13),t.TgZ(64,"p",10),t._uU(65,"\u0631\u0627\u0628\u0637 \u0627\u0644\u062a\u0642\u062f\u064a\u0645:"),t.TgZ(66,"span",11),t._uU(67,"*"),t.qZA()(),t._UZ(68,"input",24),t.YNc(69,it,3,2,"div",13),t.TgZ(70,"div",25)(71,"button",26),t._uU(72,"\u0625\u0636\u0627\u0641\u0629"),t.qZA()()()()()),2&n&&(t.xp6(13),t.Q6J("formGroup",e.formData),t.xp6(8),t.Q6J("ngIf",e.submitted&&e.formData.controls.job_position.errors),t.xp6(10),t.Oqu(e.selectedQualification||"\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0624\u0647\u0644"),t.xp6(3),t.Q6J("ngForOf",e.qualifications),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.formData.controls.job_qualification.errors),t.xp6(10),t.Oqu(e.selectedExperienceYear||"\u0627\u062e\u062a\u0631 \u0627\u0644\u0633\u0646\u0648\u0627\u062a"),t.xp6(3),t.Q6J("ngForOf",e.experienceYears),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.formData.controls.job_experience.errors),t.xp6(7),t.Q6J("ngIf",e.submitted&&e.formData.controls.job_salary.errors),t.xp6(7),t.Q6J("ngIf",e.submitted&&e.formData.controls.job_description.errors),t.xp6(6),t.Q6J("ngIf",e.submitted&&e.formData.controls.job_link.errors))},directives:[a.yS,r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.Q7,p.O5,p.sg,r._],styles:['.all[_ngcontent-%COMP%]{margin-right:375px;background-color:var(--dark-grey);color:#fff;height:100vh;overflow:hidden}.top[_ngcontent-%COMP%]{padding:30px 40px 10px 0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:10px}.top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:10px}.top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:60px;margin:0}.top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;margin:0}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{display:flex;align-items:start;justify-content:center;flex-direction:row-reverse}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{text-decoration:none;color:var(--background-color);font-size:16PX;transition:background-color .3s,transform .3s}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding:0 10px 0 40px}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .trash[_ngcontent-%COMP%]{color:#ca7676}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]{color:#fff}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px}.middle[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0 40px}.middle[_ngcontent-%COMP%]   .middle-top[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px}.middle[_ngcontent-%COMP%]   .middle-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:var(--dark-grey);color:#fff;border:none;flex:0 0 calc(50% - 10px);box-sizing:border-box;display:flex}.middle[_ngcontent-%COMP%]   .middle-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:300px}.middle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:400px}.middle[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding:10px;width:400px;height:150px}.middle[_ngcontent-%COMP%]   .jobRequirements[_ngcontent-%COMP%]{width:700px;height:140px}.middle[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:10px 0 5px}.middle[_ngcontent-%COMP%]   .invalid[_ngcontent-%COMP%]{color:#ca7676;font-size:12px}.middle[_ngcontent-%COMP%]   .butt[_ngcontent-%COMP%]{display:flex;justify-content:center;padding-top:10px}.middle[_ngcontent-%COMP%]   .butt[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:150px}.drop-zone[_ngcontent-%COMP%]{border-radius:10px;width:175px;color:var(--light-grey);position:relative;padding:20px;text-align:center;cursor:pointer;background-color:#fff;transition:background-color .3s}.drop-zone[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:5px;border-radius:10px;border:2px dashed var(--light-grey);pointer-events:none}.drop-zone.dragging[_ngcontent-%COMP%]{background-color:var(--light-grey)}.middle[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{position:relative;width:150px;height:44px}.dropdown__face[_ngcontent-%COMP%], .dropdown__items[_ngcontent-%COMP%]{background-color:#fff;color:var(--light-grey);padding:10px;border-radius:12px}.dropdown__face[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;cursor:pointer}.dropdown__arrow[_ngcontent-%COMP%]{color:var(--light-grey);width:10px;height:10px;transform:rotate(-90deg);transition:transform .4s cubic-bezier(.1,.88,.1,.8)}.dropdown__items[_ngcontent-%COMP%]{margin:0;position:absolute;width:100%;list-style:none;visibility:hidden;z-index:-1;opacity:0;transition:all .4s cubic-bezier(.93,.88,.1,.8);display:flex;flex-direction:column;gap:5px;max-height:150px;overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--grey) transparent}.dropdown__items[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;border-radius:100px}.dropdown__items[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--grey);border-radius:10px}.dropdown__items[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.dropdown__items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:5px;background-color:#f8f8f8;border-radius:15px;transition:background-color .3s}.dropdown__items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#fff;background-color:var(--grey)}input[type=checkbox][_ngcontent-%COMP%]{display:none}input[type=checkbox][_ngcontent-%COMP%]:checked ~ .dropdown__items[_ngcontent-%COMP%]{top:calc(100% + 5px);visibility:visible;opacity:1;z-index:1}input[type=checkbox][_ngcontent-%COMP%]:checked ~ .dropdown__face[_ngcontent-%COMP%]   .dropdown__arrow[_ngcontent-%COMP%]{transform:rotate(270deg)}input[type=radio][_ngcontent-%COMP%]{display:none}']}),o})()}];let ut=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[a.Bz.forChild(rt)],a.Bz]}),o})(),ct=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.ez,ut,r.u5,r.UX]]}),o})()}}]);