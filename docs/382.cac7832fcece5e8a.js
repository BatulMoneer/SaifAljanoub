"use strict";(self.webpackChunkSaifAljanoub=self.webpackChunkSaifAljanoub||[]).push([[382],{2382:(wn,vt,c)=>{c.d(vt,{Fj:()=>E,qu:()=>On,NI:()=>T,oH:()=>oe,u:()=>le,cw:()=>D,sg:()=>R,u5:()=>bn,nD:()=>ce,a5:()=>f,JJ:()=>He,JL:()=>je,F:()=>I,On:()=>ne,c5:()=>he,_:()=>re,UX:()=>yt,Q7:()=>H,kI:()=>kt,_Y:()=>rt});var i=c(4893),pe=c(9808),Vt=c(2076),Ct=c(8306),At=c(4742),Mt=c(8421),Dt=c(3269),bt=c(5403),Et=c(3268),Ot=c(1810),wt=c(4004);let ge=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.Qsj),i.Y36(i.SBq))},n.\u0275dir=i.lG2({type:n}),n})(),m=(()=>{class n extends ge{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=i.n5z(n)))(r||n)}}(),n.\u0275dir=i.lG2({type:n,features:[i.qOj]}),n})();const h=new i.OlP("NgValueAccessor"),St={provide:h,useExisting:(0,i.Gpc)(()=>E),multi:!0},xt=new i.OlP("CompositionEventMode");let E=(()=>{class n extends ge{constructor(e,r,o){super(e,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Gt(){const n=(0,pe.q)()?(0,pe.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",null==e?"":e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(xt,8))},n.\u0275dir=i.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&i.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[i._Bn([St]),i.qOj]}),n})();function p(n){return null==n||0===n.length}function _e(n){return null!=n&&"number"==typeof n.length}const l=new i.OlP("NgValidators"),g=new i.OlP("NgAsyncValidators"),Bt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class kt{static min(t){return function ye(n){return t=>{if(p(t.value)||p(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}(t)}static max(t){return function ve(n){return t=>{if(p(t.value)||p(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}(t)}static required(t){return Ve(t)}static requiredTrue(t){return function Ce(n){return!0===n.value?null:{required:!0}}(t)}static email(t){return function Ae(n){return p(n.value)||Bt.test(n.value)?null:{email:!0}}(t)}static minLength(t){return function Me(n){return t=>p(t.value)||!_e(t.value)?null:t.value.length<n?{minlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static maxLength(t){return De(t)}static pattern(t){return be(t)}static nullValidator(t){return null}static compose(t){return Se(t)}static composeAsync(t){return Ge(t)}}function Ve(n){return p(n.value)?{required:!0}:null}function De(n){return t=>_e(t.value)&&t.value.length>n?{maxlength:{requiredLength:n,actualLength:t.value.length}}:null}function be(n){if(!n)return O;let t,e;return"string"==typeof n?(e="","^"!==n.charAt(0)&&(e+="^"),e+=n,"$"!==n.charAt(n.length-1)&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),r=>{if(p(r.value))return null;const o=r.value;return t.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function O(n){return null}function Ee(n){return null!=n}function Oe(n){const t=(0,i.QGY)(n)?(0,Vt.D)(n):n;return(0,i.CqO)(t),t}function Fe(n){let t={};return n.forEach(e=>{t=null!=e?Object.assign(Object.assign({},t),e):t}),0===Object.keys(t).length?null:t}function we(n,t){return t.map(e=>e(n))}function Ne(n){return n.map(t=>function Pt(n){return!n.validate}(t)?t:e=>t.validate(e))}function Se(n){if(!n)return null;const t=n.filter(Ee);return 0==t.length?null:function(e){return Fe(we(e,t))}}function U(n){return null!=n?Se(Ne(n)):null}function Ge(n){if(!n)return null;const t=n.filter(Ee);return 0==t.length?null:function(e){return function Ft(...n){const t=(0,Dt.jO)(n),{args:e,keys:r}=(0,At.D)(n),o=new Ct.y(s=>{const{length:a}=e;if(!a)return void s.complete();const d=new Array(a);let y=a,V=a;for(let j=0;j<a;j++){let fe=!1;(0,Mt.Xf)(e[j]).subscribe((0,bt.x)(s,Fn=>{fe||(fe=!0,V--),d[j]=Fn},()=>y--,void 0,()=>{(!y||!fe)&&(V||s.next(r?(0,Ot.n)(r,d):d),s.complete())}))}});return t?o.pipe((0,Et.Z)(t)):o}(we(e,t).map(Oe)).pipe((0,wt.U)(Fe))}}function L(n){return null!=n?Ge(Ne(n)):null}function xe(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Be(n){return n._rawValidators}function ke(n){return n._rawAsyncValidators}function q(n){return n?Array.isArray(n)?n:[n]:[]}function F(n,t){return Array.isArray(n)?n.includes(t):n===t}function Pe(n,t){const e=q(t);return q(n).forEach(o=>{F(e,o)||e.push(o)}),e}function Te(n,t){return q(t).filter(e=>!F(n,e))}class Ie{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=U(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=L(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class f extends Ie{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class u extends Ie{get formDirective(){return null}get path(){return null}}class Re{constructor(t){this._cd=t}is(t){var e,r,o;return"submitted"===t?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(o=null===(r=this._cd)||void 0===r?void 0:r.control)||void 0===o?void 0:o[t])}}let He=(()=>{class n extends Re{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(f,2))},n.\u0275dir=i.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&i.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[i.qOj]}),n})(),je=(()=>{class n extends Re{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(u,10))},n.\u0275dir=i.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&i.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))("ng-submitted",r.is("submitted"))},features:[i.qOj]}),n})();function N(n,t){return[...t.path,n]}function C(n,t){W(n,t),t.valueAccessor.writeValue(n.value),function qt(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Le(n,t)})}(n,t),function $t(n,t){const e=(r,o)=>{t.valueAccessor.writeValue(r),o&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function Yt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Le(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Lt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function S(n,t,e=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),x(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function G(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function W(n,t){const e=Be(n);null!==t.validator?n.setValidators(xe(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=ke(n);null!==t.asyncValidator?n.setAsyncValidators(xe(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const o=()=>n.updateValueAndValidity();G(t._rawValidators,o),G(t._rawAsyncValidators,o)}function x(n,t){let e=!1;if(null!==n){if(null!==t.validator){const o=Be(n);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==t.validator);s.length!==o.length&&(e=!0,n.setValidators(s))}}if(null!==t.asyncValidator){const o=ke(n);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==t.asyncValidator);s.length!==o.length&&(e=!0,n.setAsyncValidators(s))}}}const r=()=>{};return G(t._rawValidators,r),G(t._rawAsyncValidators,r),e}function Le(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function qe(n,t){W(n,t)}function z(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}function $e(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function J(n,t){if(!t)return null;let e,r,o;return Array.isArray(t),t.forEach(s=>{s.constructor===E?e=s:function Jt(n){return Object.getPrototypeOf(n.constructor)===m}(s)?r=s:o=s}),o||r||e||null}function Q(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const A="VALID",B="INVALID",v="PENDING",M="DISABLED";function X(n){return(k(n)?n.validators:n)||null}function We(n){return Array.isArray(n)?U(n):n||null}function K(n,t){return(k(t)?t.asyncValidators:n)||null}function ze(n){return Array.isArray(n)?L(n):n||null}function k(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}const ee=n=>n instanceof T,P=n=>n instanceof D,Je=n=>n instanceof Ke;function Qe(n){return ee(n)?n.value:n.getRawValue()}function Ze(n,t){const e=P(n),r=n.controls;if(!(e?Object.keys(r):r).length)throw new i.vHH(1e3,"");if(!r[t])throw new i.vHH(1001,"")}function Xe(n,t){P(n),n._forEachChild((r,o)=>{if(void 0===t[o])throw new i.vHH(1002,"")})}class te{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=We(this._rawValidators),this._composedAsyncValidatorFn=ze(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===A}get invalid(){return this.status===B}get pending(){return this.status==v}get disabled(){return this.status===M}get enabled(){return this.status!==M}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=We(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=ze(t)}addValidators(t){this.setValidators(Pe(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Pe(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Te(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Te(t,this._rawAsyncValidators))}hasValidator(t){return F(this._rawValidators,t)}hasAsyncValidator(t){return F(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=v,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=M,this.errors=null,this._forEachChild(r=>{r.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=A,this._forEachChild(r=>{r.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===A||this.status===v)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M:A}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator=!0;const e=Oe(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function Qt(n,t,e){if(null==t||(Array.isArray(t)||(t=t.split(e)),Array.isArray(t)&&0===t.length))return null;let r=n;return t.forEach(o=>{r=P(r)?r.controls.hasOwnProperty(o)?r.controls[o]:null:Je(r)&&r.at(o)||null}),r}(this,t,".")}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new i.vpe,this.statusChanges=new i.vpe}_calculateStatus(){return this._allControlsDisabled()?M:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(B)?B:A}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){k(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class T extends te{constructor(t=null,e,r){super(X(e),K(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),k(e)&&e.initialValueIsDefault&&(this.defaultValue=this._isBoxedValue(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Q(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Q(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class D extends te{constructor(t,e,r){super(X(e),K(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){Xe(this,t),Object.keys(t).forEach(r=>{Ze(this,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,o)=>{r.reset(t[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=Qe(e),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const r=this.controls[e];if(this.contains(e)&&t(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,r)=>((e.enabled||this.disabled)&&(t[r]=e.value),t))}_reduceChildren(t,e){let r=t;return this._forEachChild((o,s)=>{r=e(r,o,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}}class Ke extends te{constructor(t,e,r){super(X(e),K(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,r={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){Xe(this,t),t.forEach((r,o)=>{Ze(this,o),this.at(o).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,o)=>{this.at(o)&&this.at(o).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,o)=>{r.reset(t[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>Qe(t))}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const Zt={provide:u,useExisting:(0,i.Gpc)(()=>I)},b=(()=>Promise.resolve(null))();let I=(()=>{class n extends u{constructor(e,r){super(),this.submitted=!1,this._directives=new Set,this.ngSubmit=new i.vpe,this.form=new D({},U(e),L(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){b.then(()=>{const r=this._findContainer(e.path);e.control=r.registerControl(e.name,e.control),C(e.control,e),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){b.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){b.then(()=>{const r=this._findContainer(e.path),o=new D({});qe(o,e),r.registerControl(e.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){b.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){b.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,$e(this.form,this._directives),this.ngSubmit.emit(e),!1}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(l,10),i.Y36(g,10))},n.\u0275dir=i.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,r){1&e&&i.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[i._Bn([Zt]),i.qOj]}),n})();const Kt={provide:f,useExisting:(0,i.Gpc)(()=>ne)},nt=(()=>Promise.resolve(null))();let ne=(()=>{class n extends f{constructor(e,r,o,s,a){super(),this._changeDetectorRef=a,this.control=new T,this._registered=!1,this.update=new i.vpe,this._parent=e,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=J(0,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),z(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){C(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){nt.then(()=>{var r;this.control.setValue(e,{emitViewToModelChange:!1}),null===(r=this._changeDetectorRef)||void 0===r||r.markForCheck()})}_updateDisabled(e){const r=e.isDisabled.currentValue,o=""===r||r&&"false"!==r;nt.then(()=>{var s;o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),null===(s=this._changeDetectorRef)||void 0===s||s.markForCheck()})}_getPath(e){return this._parent?N(e,this._parent):[e]}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(u,9),i.Y36(l,10),i.Y36(g,10),i.Y36(h,10),i.Y36(i.sBO,8))},n.\u0275dir=i.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[i._Bn([Kt]),i.qOj,i.TTD]}),n})(),rt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=i.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})();const tn={provide:h,useExisting:(0,i.Gpc)(()=>re),multi:!0};let ot=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({}),n})(),nn=(()=>{class n{constructor(){this._accessors=[]}add(e,r){this._accessors.push([e,r])}remove(e){for(let r=this._accessors.length-1;r>=0;--r)if(this._accessors[r][1]===e)return void this._accessors.splice(r,1)}select(e){this._accessors.forEach(r=>{this._isSameGroup(r,e)&&r[1]!==e&&r[1].fireUncheck(e.value)})}_isSameGroup(e,r){return!!e[0].control&&e[0]._parent===r._control._parent&&e[1].name===r.name}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac,providedIn:ot}),n})(),re=(()=>{class n extends m{constructor(e,r,o,s){super(e,r),this._registry=o,this._injector=s,this.onChange=()=>{}}ngOnInit(){this._control=this._injector.get(f),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(e){this._state=e===this.value,this.setProperty("checked",this._state)}registerOnChange(e){this._fn=e,this.onChange=()=>{e(this.value),this._registry.select(this)}}fireUncheck(e){this.writeValue(e)}_checkName(){!this.name&&this.formControlName&&(this.name=this.formControlName)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(nn),i.Y36(i.zs3))},n.\u0275dir=i.lG2({type:n,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(e,r){1&e&&i.NdJ("change",function(){return r.onChange()})("blur",function(){return r.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[i._Bn([tn]),i.qOj]}),n})();const ie=new i.OlP("NgModelWithFormControlWarning"),on={provide:f,useExisting:(0,i.Gpc)(()=>oe)};let oe=(()=>{class n extends f{constructor(e,r,o,s){super(),this._ngModelWarningConfig=s,this.update=new i.vpe,this._ngModelWarningSent=!1,this._setValidators(e),this._setAsyncValidators(r),this.valueAccessor=J(0,o)}set isDisabled(e){}ngOnChanges(e){if(this._isControlChanged(e)){const r=e.form.previousValue;r&&S(r,this,!1),C(this.form,this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this.form.updateValueAndValidity({emitEvent:!1})}z(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&S(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(i.Y36(l,10),i.Y36(g,10),i.Y36(h,10),i.Y36(ie,8))},n.\u0275dir=i.lG2({type:n,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[i._Bn([on]),i.qOj,i.TTD]}),n})();const sn={provide:u,useExisting:(0,i.Gpc)(()=>R)};let R=(()=>{class n extends u{constructor(e,r){super(),this.validators=e,this.asyncValidators=r,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new i.vpe,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(x(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const r=this.form.get(e.path);return C(r,e),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){S(e.control||null,e,!1),Q(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,r){this.form.get(e.path).setValue(r)}onSubmit(e){return this.submitted=!0,$e(this.form,this.directives),this.ngSubmit.emit(e),!1}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const r=e.control,o=this.form.get(e.path);r!==o&&(S(r||null,e),ee(o)&&(C(o,e),e.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const r=this.form.get(e.path);qe(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const r=this.form.get(e.path);r&&function Wt(n,t){return x(n,t)}(r,e)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){W(this.form,this),this._oldForm&&x(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(l,10),i.Y36(g,10))},n.\u0275dir=i.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,r){1&e&&i.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[i._Bn([sn]),i.qOj,i.TTD]}),n})();const un={provide:f,useExisting:(0,i.Gpc)(()=>le)};let le=(()=>{class n extends f{constructor(e,r,o,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.update=new i.vpe,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=J(0,s)}set isDisabled(e){}ngOnChanges(e){this._added||this._setUpControl(),z(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return N(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(i.Y36(u,13),i.Y36(l,10),i.Y36(g,10),i.Y36(h,10),i.Y36(ie,8))},n.\u0275dir=i.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[i._Bn([un]),i.qOj,i.TTD]}),n})();let _=(()=>{class n{constructor(){this._validator=O}ngOnChanges(e){if(this.inputName in e){const r=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):O,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return null!=e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=i.lG2({type:n,features:[i.TTD]}),n})();const vn={provide:l,useExisting:(0,i.Gpc)(()=>H),multi:!0};let H=(()=>{class n extends _{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=e=>function mn(n){return null!=n&&!1!==n&&"false"!=`${n}`}(e),this.createValidator=e=>Ve}enabled(e){return e}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=i.n5z(n)))(r||n)}}(),n.\u0275dir=i.lG2({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(e,r){2&e&&i.uIk("required",r._enabled?"":null)},inputs:{required:"required"},features:[i._Bn([vn]),i.qOj]}),n})();const Mn={provide:l,useExisting:(0,i.Gpc)(()=>ce),multi:!0};let ce=(()=>{class n extends _{constructor(){super(...arguments),this.inputName="maxlength",this.normalizeInput=e=>function dt(n){return"number"==typeof n?n:parseInt(n,10)}(e),this.createValidator=e=>De(e)}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=i.n5z(n)))(r||n)}}(),n.\u0275dir=i.lG2({type:n,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(e,r){2&e&&i.uIk("maxlength",r._enabled?r.maxlength:null)},inputs:{maxlength:"maxlength"},features:[i._Bn([Mn]),i.qOj]}),n})();const Dn={provide:l,useExisting:(0,i.Gpc)(()=>he),multi:!0};let he=(()=>{class n extends _{constructor(){super(...arguments),this.inputName="pattern",this.normalizeInput=e=>e,this.createValidator=e=>be(e)}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=i.n5z(n)))(r||n)}}(),n.\u0275dir=i.lG2({type:n,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(e,r){2&e&&i.uIk("pattern",r._enabled?r.pattern:null)},inputs:{pattern:"pattern"},features:[i._Bn([Dn]),i.qOj]}),n})(),_t=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[ot]]}),n})(),bn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[_t]}),n})(),yt=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:ie,useValue:e.warnOnNgModelWithFormControl}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[_t]}),n})(),On=(()=>{class n{group(e,r=null){const o=this._reduceControls(e);let d,s=null,a=null;return null!=r&&(function En(n){return void 0!==n.asyncValidators||void 0!==n.validators||void 0!==n.updateOn}(r)?(s=null!=r.validators?r.validators:null,a=null!=r.asyncValidators?r.asyncValidators:null,d=null!=r.updateOn?r.updateOn:void 0):(s=null!=r.validator?r.validator:null,a=null!=r.asyncValidator?r.asyncValidator:null)),new D(o,{asyncValidators:a,updateOn:d,validators:s})}control(e,r,o){return new T(e,r,o)}array(e,r,o){const s=e.map(a=>this._createControl(a));return new Ke(s,r,o)}_reduceControls(e){const r={};return Object.keys(e).forEach(o=>{r[o]=this._createControl(e[o])}),r}_createControl(e){return ee(e)||P(e)||Je(e)?e:Array.isArray(e)?this.control(e[0],e.length>1?e[1]:null,e.length>2?e[2]:null):this.control(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac,providedIn:yt}),n})()}}]);