(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6eb59a06"],{"0dd9":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var i=r(o("d887"));function r(t){return t&&t.__esModule?t:{default:t}}function n(t){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function a(t,e){var o,r;(0,i.default)(t),"object"===n(e)?(o=e.min||0,r=e.max):(o=arguments[1]||0,r=arguments[2]);var a=t.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g)||[],s=t.length-a.length;return s>=o&&("undefined"===typeof r||s<=r)}t.exports=e.default,t.exports.default=e.default},"2b89":function(t,e,o){t.exports=o.p+"img/login_dec02.5b60ecea.png"},"57d9":function(t,e,o){t.exports=o.p+"img/login_dec03.95b126e1.png"},8472:function(t,e,o){t.exports=o.p+"img/login_dec01.0843a6cb.png"},8791:function(t,e,o){"use strict";o.r(e),o.d(e,"LoginForm",(function(){return m}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"login-page"},[o("div",{staticClass:"login-box"},[o("div",{staticClass:"box"}),o("form",{attrs:{method:"post",name:"login",id:"login"}},[t._m(0),t._m(1),o("div",{staticClass:"l-login"},[o("div",{staticClass:"logo"}),o("h1",[t._v("芝蔴街e學園 老師登入平台")]),o("div",{staticClass:"input-box"},[o("i",{staticClass:"fa fa-user"}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.account,expression:"loginForm.account"}],staticClass:"input-sty required",attrs:{type:"text",name:"account",id:"account",placeholder:"Username",autocomplete:"off"},domProps:{value:t.loginForm.account},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"account",e.target.value)}}})]),o("div",{staticClass:"input-box"},[o("i",{staticClass:"fa fa-lock"}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.password,expression:"loginForm.password"}],staticClass:"input-sty required",attrs:{type:"password",name:"password",id:"password",placeholder:"Password",autocomplete:"off"},domProps:{value:t.loginForm.password},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"password",e.target.value)}}})]),o("div",{staticClass:"l-login-error-mesg",attrs:{id:"err_msg"}},[o("i",{directives:[{name:"show",rawName:"v-show",value:""!==t.errorMsg.form,expression:"errorMsg.form !== ''"}],staticClass:"fa fa-exclamation-circle"}),t._v(t._s(t.errorMsg.form))]),o("div",{staticClass:"l-login-btn-box"},[o("a",{staticClass:"btn login-submit-btn",attrs:{disabled:t.doubleClick},on:{click:function(e){return e.preventDefault(),t.validateAndSubmit()}}},[t._v("登入")])]),o("router-link",{staticClass:"h-link h-mb16",attrs:{to:"/teacher/login/forgetPwd"}},[t._v("忘記密碼?")]),o("div",{staticClass:"l-login-footer"},[t._v(" ©2021 芝蔴街e學園 ")]),t._m(2)],1)])])])])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login_dec02"},[i("img",{attrs:{src:o("2b89")}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login_dec03"},[i("img",{attrs:{src:o("57d9")}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dec login_dec01"},[i("img",{attrs:{src:o("8472")}})])}],n=o("9ab4"),a=o("1b40"),s=o("87d7"),c=o("f2fa"),l=o("c00b"),u=o("43e4"),d=o("93f3"),f=o("0d59"),m=function(){function t(){this.account="",this.password="",this.verification=""}return Object(n["b"])([Object(s["a"])(),Object(c["a"])(),Object(l["a"])(50)],t.prototype,"account",void 0),Object(n["b"])([Object(s["a"])(),Object(c["a"])(),Object(l["a"])(50)],t.prototype,"password",void 0),Object(n["b"])([Object(s["a"])(),Object(c["a"])()],t.prototype,"verification",void 0),t}(),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.loginForm=new m,e.verificationCode={uid:"",imgSrc:""},e.errorMsg={form:"",response:""},e.error="",e}return Object(n["c"])(e,t),e.prototype.created=function(){this.refreshVerificationCode()},e.prototype.refreshVerificationCode=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e,o,i;return Object(n["d"])(this,(function(r){switch(r.label){case 0:return this.doubleClick?[3,2]:(this.doubleClick=!0,t=Math.floor(Date.now()/1e3).toString(),e=Math.floor(1e3*Math.random()).toString(),this.verificationCode.uid=t+e,o={uniqueID:this.verificationCode.uid},i=this.verificationCode,[4,f["a"].refreshCodeImg(o)]);case 1:i.imgSrc=r.sent(),this.doubleClick=!1,r.label=2;case 2:return[2]}}))}))},e.prototype.validateAndSubmit=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t=this;return Object(n["d"])(this,(function(e){return Object(u["a"])(this.loginForm,{skipMissingProperties:!0}).then((function(e){return Object(n["a"])(t,void 0,void 0,(function(){var t,o,i,r,a=this;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return 0!==e.length?(t={account:"帳號",password:"密碼",verification:"驗證碼"},this.errorMsg.form="請填入",e.forEach((function(e,o){a.errorMsg.form+=0===o?t[e.property]:" / "+t[e.property]})),[2]):(this.errorMsg.form="",this.doubleClick?[3,2]:(this.doubleClick=!0,{code:this.loginForm.verification,uniqueID:this.verificationCode.uid},o={acc:this.loginForm.account,pwd:this.loginForm.password},[4,f["a"].teUserLogin(o)]));case 1:i=n.sent(),i.ERR_CODE===d["a"].Success?(r=i.info,window.localStorage.setItem("teacherToken",i.auth),window.localStorage.setItem("teacher_tid",r.tid),window.localStorage.setItem("teacher_authority",r.authority),window.localStorage.setItem("teacher_name",r.name),this.doubleClick=!1,this.$router.push("/teacher/teacher")):(this.errorMsg.form=d["b"][i.ERR_CODE],this.refreshVerificationCode(),this.doubleClick=!1),n.label=2;case 2:return[2]}}))}))})),[2]}))}))},e=Object(n["b"])([a["a"]],e),e}(a["d"]),b=p,h=(o("a65d"),o("2877")),g=Object(h["a"])(b,i,r,!1,null,null,null);e["default"]=g.exports},c00b:function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var i=o("472e"),r=o("0dd9"),n=o.n(r),a="maxLength";function s(t,e){return"string"===typeof t&&n()(t,{min:0,max:e})}function c(t,e){return Object(i["a"])({name:a,constraints:[t],validator:{validate:function(t,e){return s(t,e.constraints[0])},defaultMessage:Object(i["b"])((function(t){return t+"$property must be shorter than or equal to $constraint1 characters"}),e)}},e)}}}]);
//# sourceMappingURL=chunk-6eb59a06.37194792.js.map