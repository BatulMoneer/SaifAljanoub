"use strict";(self.webpackChunkSaifAljanoub=self.webpackChunkSaifAljanoub||[]).push([[467],{7467:(G,f,s)=>{s.r(f),s.d(f,{ContactModule:()=>L});var _=s(9808),p=s(6609),t=s(4893);let y=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:9,vars:0,consts:[[1,"all"],[1,"top"],[1,"middle"],["routerLink","/apps/contact/info"],["routerLink","/apps/contact/messages"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3,"\u0644\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627"),t.qZA()(),t.TgZ(4,"div",2)(5,"button",3),t._uU(6,"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644"),t.qZA(),t.TgZ(7,"button",4),t._uU(8,"\u0627\u0644\u0631\u0633\u0627\u0626\u0644"),t.qZA()()())},directives:[p.rH],styles:[".all[_ngcontent-%COMP%]{margin-right:375px;background-color:var(--dark-grey);color:#fff;height:100vh;overflow:hidden}.top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding:30px 40px 10px 0;font-size:60px;margin:0}.middle[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px;padding:50px 0 0}.middle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:20px;height:200px;width:80%;color:var(--prime);background-color:#fff}.middle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--prime);color:#fff;transition:all .4s ease-in-out}"]}),n})();var r=s(2382),g=s(7987),h=s(5830),C=s(72),M=s(2290);function v(n,o){1&n&&(t.TgZ(0,"p",24),t._uU(1," \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628! "),t.qZA())}function Z(n,o){1&n&&(t.TgZ(0,"p",24),t._uU(1," \u0627\u0644\u0631\u0642\u0645 \u062e\u0627\u0637\u0626! "),t.qZA())}function b(n,o){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,v,2,0,"p",23),t.YNc(2,Z,2,0,"p",23),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.submitted&&e.formData.controls.company_phoneNo.errors.required),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.formData.controls.company_phoneNo.errors.pattern)}}function A(n,o){1&n&&(t.TgZ(0,"p",24),t._uU(1," \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628! "),t.qZA())}function T(n,o){1&n&&(t.TgZ(0,"p",24),t._uU(1," \u0627\u0644\u0631\u0642\u0645 \u062e\u0627\u0637\u0626! "),t.qZA())}function w(n,o){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,A,2,0,"p",23),t.YNc(2,T,2,0,"p",23),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.submitted&&e.formData.controls.company_whatsapp.errors.required),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.formData.controls.company_whatsapp.errors.pattern)}}function D(n,o){1&n&&(t.TgZ(0,"p",24),t._uU(1," \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628! "),t.qZA())}function I(n,o){1&n&&(t.TgZ(0,"p",24),t._uU(1," \u0627\u0644\u0628\u0631\u064a\u062f \u062e\u0627\u0637\u0626! "),t.qZA())}function U(n,o){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,D,2,0,"p",23),t.YNc(2,I,2,0,"p",23),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.submitted&&e.formData.controls.company_email.errors.required),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.formData.controls.company_email.errors.email)}}let q=(()=>{class n{constructor(e,i,a,u){this.formBuilder=e,this.impApiService=i,this.spinner=a,this.toastr=u,this.submitted=!1,this.selectedImage=null,this.imagePreview=null}ngOnInit(){this.formData=this.formBuilder.group({company_phoneNo:["",[r.kI.required,r.kI.pattern(/^(05\d{8}|9665\d{8})$/)]],company_whatsapp:["",[r.kI.required,r.kI.pattern(/^(05\d{8}|9665\d{8})$/)]],company_email:["",[r.kI.required,r.kI.email]]}),this.fetchInfo()}fetchInfo(){this.spinner.show(),this.impApiService.get(g.S.viewContact).subscribe({next:e=>{this.spinner.hide(),this.formData.patchValue({company_phoneNo:e.data.company_phoneNo,company_whatsapp:e.data.company_whatsapp,company_email:e.data.company_email})},error:e=>{this.spinner.hide(),console.error(e),this.toastr.error("\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u062c\u0644\u0628 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0644\u0627\u062d\u0642\u0627\u064b.","\u062e\u0637\u0623")}})}add(){var e,i,a;if(this.submitted=!0,this.formData.invalid)return void this.toastr.error("\u064a\u0631\u062c\u0649 \u0627\u0644\u062a\u0623\u0643\u062f \u0645\u0646 \u0645\u0644\u0621 \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0644 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d.","\u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0625\u062f\u062e\u0627\u0644");const u=new FormData;u.append("company_phoneNo",null===(e=this.formData.get("company_phoneNo"))||void 0===e?void 0:e.value),u.append("company_whatsapp",null===(i=this.formData.get("company_whatsapp"))||void 0===i?void 0:i.value),u.append("company_email",null===(a=this.formData.get("company_email"))||void 0===a?void 0:a.value),u.append("location_text","ffff"),this.spinner.show(),this.impApiService.post(g.S.updateContact,u).subscribe({next:l=>{this.spinner.hide(),this.toastr.success("\u062a\u0645 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0628\u0646\u062c\u0627\u062d.","\u0646\u062c\u0627\u062d"),this.submitted=!1},error:l=>{this.spinner.hide(),console.error(l),this.toastr.error("\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0644\u0627\u062d\u0642\u0627\u064b.","\u062e\u0637\u0623")}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(h.y),t.Y36(C.t2),t.Y36(M._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-info"]],decls:44,vars:4,consts:[[1,"all"],[1,"top"],[1,"right"],[1,"left"],["routerLink","/apps/contact/home",1,"icon"],[1,"fas","fa-chevron-left"],[1,"middle"],[3,"formGroup","ngSubmit"],[1,"group"],["href","tel:+0583380165",1,"contact-item"],[1,"fas","fa-phone-alt"],[1,"text"],[2,"color","#CA7676"],["type","text","formControlName","company_phoneNo","placeholder","\u0627\u0643\u062a\u0628 \u0631\u0642\u0645 \u0627\u0644\u0627\u062a\u0635\u0627\u0644","required",""],[4,"ngIf"],["href","https://wa.me/0583380165","target","_blank",1,"contact-item"],[1,"fab","fa-whatsapp"],["type","text","formControlName","company_whatsapp","placeholder","\u0627\u0643\u062a\u0628 \u0631\u0642\u0645 \u0627\u0644\u0648\u0627\u062a\u0633\u0627\u0628","required",""],["href","mailto:example@example.com",1,"contact-item"],[1,"fas","fa-envelope"],["type","email","formControlName","company_email","placeholder","\u0627\u0643\u062a\u0628 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a","required",""],[1,"butt"],["type","submit"],["class","invalid",4,"ngIf"],[1,"invalid"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),t._uU(4,"\u0627\u0644\u062a\u0648\u0627\u0635\u0644"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644"),t.qZA()(),t.TgZ(7,"div",3)(8,"a",4)(9,"span"),t._uU(10,"\u0639\u0648\u062f\u0629"),t.qZA(),t._UZ(11,"i",5),t.qZA()()(),t.TgZ(12,"div",6)(13,"form",7),t.NdJ("ngSubmit",function(){return i.add()}),t.TgZ(14,"div",8)(15,"a",9),t._UZ(16,"i",10),t.qZA(),t.TgZ(17,"p",11),t._uU(18,"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641:"),t.TgZ(19,"span",12),t._uU(20,"*"),t.qZA()()(),t._UZ(21,"input",13),t.YNc(22,b,3,2,"div",14),t.TgZ(23,"div",8)(24,"a",15),t._UZ(25,"i",16),t.qZA(),t.TgZ(26,"p",11),t._uU(27,"\u0631\u0642\u0645 \u0627\u0644\u0648\u0627\u062a\u0633 \u0627\u0628 (Whatsapp):"),t.TgZ(28,"span",12),t._uU(29,"*"),t.qZA()()(),t._UZ(30,"input",17),t.YNc(31,w,3,2,"div",14),t.TgZ(32,"div",8)(33,"a",18),t._UZ(34,"i",19),t.qZA(),t.TgZ(35,"p",11),t._uU(36,"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a:"),t.TgZ(37,"span",12),t._uU(38,"*"),t.qZA()()(),t._UZ(39,"input",20),t.YNc(40,U,3,2,"div",14),t.TgZ(41,"div",21)(42,"button",22),t._uU(43,"\u062d\u0641\u0638"),t.qZA()()()()()),2&e&&(t.xp6(13),t.Q6J("formGroup",i.formData),t.xp6(9),t.Q6J("ngIf",i.submitted&&i.formData.controls.company_phoneNo.errors),t.xp6(9),t.Q6J("ngIf",i.submitted&&i.formData.controls.company_whatsapp.errors),t.xp6(9),t.Q6J("ngIf",i.submitted&&i.formData.controls.company_email.errors))},directives:[p.yS,r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.Q7,_.O5],styles:['.all[_ngcontent-%COMP%]{margin-right:375px;background-color:var(--dark-grey);color:#fff;height:100vh;overflow:hidden}.top[_ngcontent-%COMP%]{padding:30px 40px 10px 0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:10px}.top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:10px}.top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:60px;margin:0}.top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;margin:0}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{display:flex;align-items:start;justify-content:center;flex-direction:row-reverse}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{text-decoration:none;color:var(--background-color);font-size:16PX;transition:background-color .3s,transform .3s}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding:0 10px 0 40px}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .trash[_ngcontent-%COMP%]{color:#ca7676}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]{color:#fff}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px}.middle[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-right:40px}.middle[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]{display:flex;flex-direction:row}.middle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:400px;margin-top:10px;margin-bottom:10px}.middle[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:10px 0 5px}.middle[_ngcontent-%COMP%]   .invalid[_ngcontent-%COMP%]{color:#ca7676;font-size:12px}.middle[_ngcontent-%COMP%]   .butt[_ngcontent-%COMP%]{display:flex;justify-content:center;padding-top:75px}.middle[_ngcontent-%COMP%]   .butt[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:150px}.contact-item[_ngcontent-%COMP%]{display:flex;align-items:center;text-decoration:none;color:var(--background-color);border-radius:5px;font-size:30PX;width:45px;transition:background-color .3s,transform .3s}.contact-item[_ngcontent-%COMP%]:hover{color:var(--text-color);transform:scale(1.02)}.contact-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px}.drop-zone[_ngcontent-%COMP%]{border-radius:10px;width:175px;color:var(--light-grey);position:relative;padding:20px;text-align:center;cursor:pointer;background-color:#fff;transition:background-color .3s}.drop-zone[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:5px;border-radius:10px;border:2px dashed var(--light-grey);pointer-events:none}.drop-zone.dragging[_ngcontent-%COMP%]{background-color:var(--light-grey)}img[_ngcontent-%COMP%]{width:100px;height:auto}']}),n})();var d=s(1524),m=s(4847),c=s(4999),N=s(226);function k(n,o){1&n&&(t.TgZ(0,"th",22),t._uU(1," \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0644\u0644\u0645\u064f\u0631\u0633\u0644"),t.qZA())}function S(n,o){if(1&n&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.visitor_email)}}function Y(n,o){1&n&&(t.TgZ(0,"th",22),t._uU(1," \u0646\u0648\u0639 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 "),t.qZA())}function J(n,o){if(1&n&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.message_type)}}function z(n,o){1&n&&(t.TgZ(0,"th",22),t._uU(1," \u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 "),t.qZA())}function F(n,o){if(1&n&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.message_content)}}function Q(n,o){1&n&&(t.TgZ(0,"th",24),t._uU(1," \u062d\u0630\u0641 "),t.qZA())}function j(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"td",25)(1,"i",26),t.NdJ("click",function(){const u=t.CHM(e).$implicit;return t.oxw().deleteMessage(u.message_id)}),t.qZA()()}}function B(n,o){1&n&&t._UZ(0,"tr",27)}function H(n,o){1&n&&t._UZ(0,"tr",28)}const R=function(){return[4]},$=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:y},{path:"info",component:q},{path:"messages",component:(()=>{class n{constructor(e,i,a,u){this.impApiService=e,this.spinner=i,this.toastr=a,this.displayedColumns=["visitor_email","message_type","message_content","delete"],this.dataSource=new c.by([]),this.totalData=0,this.applyFilterInput="",this.selectedMessageType=null,this.messageTypes=["\u0634\u0643\u0648\u0649","\u0627\u0633\u062a\u0641\u0633\u0627\u0631","\u0644\u0627\u0634\u064a\u0626"],this.messages=[],u.getRangeLabel=(l,x,O)=>{const P=l*x+1;return`${P} \u2013 ${Math.min(P+x-1,O)} \u0645\u0646 ${O}`}}ngOnInit(){this.spinner.show(),this.impApiService.get(g.S.showMessages).subscribe({next:e=>{Array.isArray(e[0])?(this.messages=e[0],console.log(e[0]),this.totalData=this.messages.length,this.dataSource=new c.by(this.messages),this.updateTableData(0,4),this.dataSource.sort=this.sort,this.spinner.hide()):(console.error("Unexpected response structure:",e),this.toastr.error("\u062e\u0637\u0623 \u063a\u064a\u0631 \u0645\u062a\u0648\u0642\u0639"),this.spinner.hide())},error:e=>{console.error("API Error:",e),this.toastr.error("\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u062c\u0644\u0628 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a"),this.spinner.hide()}})}ngAfterViewInit(){this.dataSource.sort=this.sort}updateTableData(e,i){const a=e*i,u=this.messages.slice(a,a+i);this.dataSource.data=u}applyFilter(){const e=this.applyFilterInput.trim().toLowerCase();this.dataSource.filter=e,this.paginator.pageIndex=0,this.updateTableData(this.paginator.pageIndex,this.paginator.pageSize)}changePage(e){this.updateTableData(e.pageIndex,e.pageSize)}deleteMessage(e){this.spinner.show(),console.log(e),this.impApiService.delete(`${g.S.deleteMessages}${e}`).subscribe(i=>{this.spinner.hide(),this.ngOnInit()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.y),t.Y36(C.t2),t.Y36(M._W),t.Y36(d.ye))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-messages"]],viewQuery:function(e,i){if(1&e&&(t.Gf(m.YE,5),t.Gf(d.NW,5)),2&e){let a;t.iGM(a=t.CRH())&&(i.sort=a.first),t.iGM(a=t.CRH())&&(i.paginator=a.first)}},decls:34,vars:9,consts:[["dir","rtl",1,"all"],[1,"top"],[1,"right"],[1,"left"],["routerLink","/apps/contact/home",1,"icon"],[1,"fas","fa-chevron-left"],[1,"middle"],[1,"middle-top"],["type","text","placeholder","\u0628\u062d\u062b","aria-label","\u0628\u062d\u062b",3,"ngModel","keyup","ngModelChange"],[1,"middle-bottom"],["mat-table","","matSort","",1,"styled-table",3,"dataSource"],["matColumnDef","visitor_email"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","message_type"],["matColumnDef","message_content"],["matColumnDef","delete"],["mat-header-cell","",4,"matHeaderCellDef"],["class","icon","mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"custom-paginator",3,"length","pageSizeOptions","hidePageSize","page"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-cell","",1,"icon"],[1,"fas","fa-trash","delete-icon",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),t._uU(4,"\u0627\u0644\u0631\u0633\u0627\u0626\u0644"),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA()(),t.TgZ(7,"div",3)(8,"a",4)(9,"span"),t._uU(10,"\u0639\u0648\u062f\u0629"),t.qZA(),t._UZ(11,"i",5),t.qZA()()(),t.TgZ(12,"div",6)(13,"div",7)(14,"p"),t._uU(15,"\u0627\u0644\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0631\u0633\u0627\u0626\u0644"),t.qZA(),t.TgZ(16,"input",8),t.NdJ("keyup",function(){return i.applyFilter()})("ngModelChange",function(u){return i.applyFilterInput=u}),t.qZA()(),t.TgZ(17,"div",9)(18,"table",10),t.ynx(19,11),t.YNc(20,k,2,0,"th",12),t.YNc(21,S,2,1,"td",13),t.BQk(),t.ynx(22,14),t.YNc(23,Y,2,0,"th",12),t.YNc(24,J,2,1,"td",13),t.BQk(),t.ynx(25,15),t.YNc(26,z,2,0,"th",12),t.YNc(27,F,2,1,"td",13),t.BQk(),t.ynx(28,16),t.YNc(29,Q,2,0,"th",17),t.YNc(30,j,2,0,"td",18),t.BQk(),t.YNc(31,B,1,0,"tr",19),t.YNc(32,H,1,0,"tr",20),t.qZA(),t.TgZ(33,"mat-paginator",21),t.NdJ("page",function(u){return i.changePage(u)}),t.qZA()()()()),2&e&&(t.xp6(6),t.hij("",i.messages.length," \u0631\u0633\u0627\u0644\u0629"),t.xp6(10),t.Q6J("ngModel",i.applyFilterInput),t.xp6(2),t.Q6J("dataSource",i.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(1),t.Q6J("length",i.totalData)("pageSizeOptions",t.DdM(8,R))("hidePageSize",!0))},directives:[N.Lv,p.yS,r.Fj,r.JJ,r.On,c.BZ,m.YE,c.w1,c.fO,c.ge,m.nU,c.Dz,c.ev,c.as,c.XQ,c.nj,c.Gk,d.NW],styles:[".all[_ngcontent-%COMP%]{margin-right:375px;background-color:var(--dark-grey);color:#fff;height:100vh;overflow:hidden}.top[_ngcontent-%COMP%]{padding:30px 40px 10px 0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:10px}.top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:10px}.top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:60px;margin:0}.top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;margin:0}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{display:flex;align-items:start;justify-content:center;flex-direction:row-reverse}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{text-decoration:none;color:var(--background-color);font-size:16PX;transition:background-color .3s,transform .3s}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding:0 10px 0 40px}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .trash[_ngcontent-%COMP%]{color:#ca7676}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]{color:#fff}.top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px}.middle[_ngcontent-%COMP%]{margin:30px 40px 40px}.middle[_ngcontent-%COMP%]   .middle-top[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:end;gap:10px;justify-content:center}.middle[_ngcontent-%COMP%]   .middle-bottom[_ngcontent-%COMP%]{padding-top:10px;display:flex;justify-content:center;flex-direction:column;align-items:center}.middle[_ngcontent-%COMP%]   .middle-bottom[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]{overflow:hidden!important;font-family:var(--font);border:none;border-radius:10px;width:100%}.styled-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:var(--prime);color:#fff;padding-right:0;align-self:center;text-align:center}.styled-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid var(--grey);text-align:right;background-color:#fff;color:var(--grey);max-width:350px;height:500;word-wrap:break-word;padding:8px}.mat-paginator[_ngcontent-%COMP%]{font-family:var(--font);background-color:transparent;color:#fff;display:flex;justify-content:space-between;align-items:center;padding:10px 20px}.icon[_ngcontent-%COMP%]{font-size:16PX;transition:background-color .3s,transform .3s}.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding-left:5px}.icon[_ngcontent-%COMP%]   .delete-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-content:center;text-align:center;text-decoration:none;margin-right:10px;color:var(--light-grey)}.icon[_ngcontent-%COMP%]   .delete-icon[_ngcontent-%COMP%]:hover{color:#ca7676;transform:scale(1.2)}"]}),n})()}];let X=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.Bz.forChild($)],p.Bz]}),n})(),L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[_.ez,X,r.u5,r.UX,c.p0,m.JX,d.TU]]}),n})()}}]);