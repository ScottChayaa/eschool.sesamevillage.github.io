(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d85f311","chunk-74c42831"],{"05bf":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var a=i("8b1c"),n=i("e48f"),o=i("4fc0");function c(t,e){return function(i,c){var r={type:a["a"].CONDITIONAL_VALIDATION,target:i.constructor,propertyName:c,constraints:[t],validationOptions:e};Object(o["b"])().addValidationMetadata(new n["a"](r))}}},"0dd9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var a=n(i("d887"));function n(t){return t&&t.__esModule?t:{default:t}}function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function c(t,e){var i,n;(0,a.default)(t),"object"===o(e)?(i=e.min||0,n=e.max):(i=arguments[1]||0,n=arguments[2]);var c=t.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g)||[],r=t.length-c.length;return r>=i&&("undefined"===typeof n||r<=n)}t.exports=e.default,t.exports.default=e.default},"60b9":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i("9ab4"),n=i("1b40"),o=i("0d59"),c=i("93f3"),r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("adminToken"),e.admin_identity=window.localStorage.getItem("admin_identity"),e}return Object(a["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/admin/login"},e.prototype.checkToken=function(t){t!==c["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t,e;return Object(a["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,o["c"].getGrade(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(a["a"])(this,void 0,void 0,(function(){var e,i;return Object(a["d"])(this,(function(a){switch(a.label){case 0:return e={grade:t,token:this.token},[4,o["c"].getLevel(e)];case 1:return i=a.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getUnit=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t,e;return Object(a["d"])(this,(function(i){for(t={},e=1;e<=25;e++)t[e]={unit:"Unit-"+e};return("/admin/quiz/question/add"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)&&("/admin/quiz/question/edit"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)&&("/admin/homework/question/add"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)&&("/admin/homework/question/edit"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)?(t[26]={unit:"Midterm Exam"},t[27]={unit:"Final Exam"},[2,t]):[2,t]}))}))},e.prototype.getAllCity=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t,e;return Object(a["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,o["c"].getAllCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getRegion=function(t){return Object(a["a"])(this,void 0,void 0,(function(){var e,i;return Object(a["d"])(this,(function(a){switch(a.label){case 0:return e={cid:t,token:this.token},[4,o["c"].getRegion(e)];case 1:return i=a.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchoolCity=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t,e;return Object(a["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,o["c"].getSchoolCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getCity=function(t){return Object(a["a"])(this,void 0,void 0,(function(){var e,i;return Object(a["d"])(this,(function(a){switch(a.label){case 0:return e={sid:t,token:this.token},[4,o["c"].getCity(e)];case 1:return i=a.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchool=function(t){return Object(a["a"])(this,void 0,void 0,(function(){var e,i;return Object(a["d"])(this,(function(a){switch(a.label){case 0:return e={cid:t,token:this.token},[4,o["c"].getSchool(e)];case 1:return i=a.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getClass=function(t,e,i){return Object(a["a"])(this,void 0,void 0,(function(){var n,c;return Object(a["d"])(this,(function(a){switch(a.label){case 0:return n={type:t,sid:e,clid:i,token:this.token},[4,o["f"].getClass(n)];case 1:return c=a.sent(),this.checkToken(c.ERR_CODE),[2,c.list]}}))}))},e.prototype.getTeacher=function(t,e,i){return Object(a["a"])(this,void 0,void 0,(function(){var n,c;return Object(a["d"])(this,(function(a){switch(a.label){case 0:return n={type:t,clid:e,tid:i,token:this.token},[4,o["f"].getClassTeacher(n)];case 1:return c=a.sent(),this.checkToken(c.ERR_CODE),[2,c.list]}}))}))},e}(n["d"]),s=r.instance},"62b9":function(t,e,i){"use strict";i.r(e),i.d(e,"AccountForm",(function(){return b}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("SideNav",{attrs:{currentPage:"account"}}),i("div",{staticClass:"main"},[i("h1",[t._v("帳號管理")]),"1"===t.identity?i("div",{staticClass:"btn-area"},[i("router-link",{staticClass:"btn",attrs:{to:"/admin/account"}},[i("i",{staticClass:"fa fa-chevron-left"}),t._v(" 返回 ")])],1):t._e(),i("form",{attrs:{action:""}},[i("div",{staticClass:"input-box"},[t._m(0),i("input",{directives:[{name:"model",rawName:"v-model",value:t.accForm.acc,expression:"accForm.acc"}],staticClass:"input-sty",attrs:{type:"text",name:"acc",id:"acc",placeholder:"(請填寫帳號,如:AA000(必填))"},domProps:{value:t.accForm.acc},on:{input:function(e){e.target.composing||t.$set(t.accForm,"acc",e.target.value)}}}),""!==t.errorMsgMap["acc"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["acc"]))]):t._e()]),i("br"),i("div",{staticClass:"input-box"},[t._m(1),i("input",{directives:[{name:"model",rawName:"v-model",value:t.accForm.pwd,expression:"accForm.pwd"}],staticClass:"input-sty",attrs:{type:"password",name:"pwd",id:"pwd",autocomplete:"off",placeholder:"(請填寫英文、數字密碼)"},domProps:{value:t.accForm.pwd},on:{input:function(e){e.target.composing||t.$set(t.accForm,"pwd",e.target.value)}}}),""!==t.errorMsgMap["pwd"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["pwd"]))]):t._e()]),i("br"),i("div",{staticClass:"input-box"},[t._m(2),i("input",{directives:[{name:"model",rawName:"v-model",value:t.accForm.name,expression:"accForm.name"}],staticClass:"input-sty",attrs:{type:"text",name:"name",id:"name",placeholder:"(必填)"},domProps:{value:t.accForm.name},on:{input:function(e){e.target.composing||t.$set(t.accForm,"name",e.target.value)}}}),""!==t.errorMsgMap["name"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["name"]))]):t._e()]),i("div",{staticClass:"input-box input-box-w"},[i("label",{attrs:{for:"note"}},[t._v("備註")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.accForm.note,expression:"accForm.note"}],staticClass:"input-sty",attrs:{type:"text",name:"note",id:"note"},domProps:{value:t.accForm.note},on:{input:function(e){e.target.composing||t.$set(t.accForm,"note",e.target.value)}}}),""!==t.errorMsgMap["note"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["note"]))]):t._e()]),"1"===t.identity?i("div",{staticClass:"input-box"},[t._m(3),i("div",{staticClass:"check-list"},[i("label",{attrs:{for:"identity_1"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.accForm.identity,expression:"accForm.identity"}],attrs:{type:"radio",name:"identity",id:"identity_1",value:"1"},domProps:{checked:t._q(t.accForm.identity,"1")},on:{change:function(e){return t.$set(t.accForm,"identity","1")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("總部")])]),i("label",{attrs:{for:"identity_2"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.accForm.identity,expression:"accForm.identity"}],staticClass:"radio-box",attrs:{type:"radio",name:"identity",id:"identity_2",value:"2"},domProps:{checked:t._q(t.accForm.identity,"2")},on:{change:[function(e){return t.$set(t.accForm,"identity","2")},t.getSchool]}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("直營")])]),i("label",{attrs:{for:"identity_3"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.accForm.identity,expression:"accForm.identity"}],staticClass:"radio-box",attrs:{type:"radio",name:"identity",id:"identity_3",value:"3"},domProps:{checked:t._q(t.accForm.identity,"3")},on:{change:[function(e){return t.$set(t.accForm,"identity","3")},t.getSchool]}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("加盟")])])]),""!==t.errorMsgMap["identity"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["identity"]))]):t._e()]):t._e(),"1"!==t.identity||"2"!==t.accForm.identity&&"3"!==t.accForm.identity?t._e():i("div",{staticClass:"input-box input-box-w"},[t._m(4),i("select",{directives:[{name:"model",rawName:"v-model",value:t.accForm.cid,expression:"accForm.cid"}],staticClass:"select-sty h-mr10 w200",attrs:{name:"cid",id:"cid"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.accForm,"cid",e.target.multiple?i:i[0])},t.getSchool]}},[i("option",{attrs:{value:""}},[t._v("請選擇縣市")]),t._l(t.cityList,(function(e,a){return i("option",{key:a,domProps:{value:e.cid}},[t._v(t._s(e.city))])}))],2),i("select",{directives:[{name:"model",rawName:"v-model",value:t.accForm.sid,expression:"accForm.sid"}],staticClass:"select-sty h-mr10 w250",attrs:{name:"sid",id:"sid"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.accForm,"sid",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("請選擇分校（依分校代碼排序）")]),t._l(t.schoolList,(function(e,a){return i("option",{key:a,domProps:{value:e.sid}},[t._v(t._s(e.name))])}))],2),""!==t.errorMsgMap["sid"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["sid"]))]):t._e()]),"1"===t.identity?i("div",{staticClass:"input-box input-box-w"},[t._m(5),i("div",{staticClass:"check-list"},[i("label",{attrs:{for:"active_1"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.accForm.active,expression:"accForm.active"}],attrs:{type:"radio",name:"active",id:"active_1",value:"1"},domProps:{checked:t._q(t.accForm.active,"1")},on:{change:function(e){return t.$set(t.accForm,"active","1")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("啟用")])]),i("label",{attrs:{for:"active_2"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.accForm.active,expression:"accForm.active"}],staticClass:"radio-box",attrs:{type:"radio",name:"active",id:"active_2",value:"2"},domProps:{checked:t._q(t.accForm.active,"2")},on:{change:function(e){return t.$set(t.accForm,"active","2")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("停用")])])]),""!==t.errorMsgMap["active"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["identity"]))]):t._e()]):t._e(),i("div",{staticClass:"btn-area"},["1"===t.identity?i("router-link",{staticClass:"btn btn-cancel",attrs:{to:"/admin/account"}},[i("i",{staticClass:"fa fa-chevron-left"}),t._v(" 取消")]):t._e(),i("div",{staticClass:"btn btn-submit"},[i("i",{staticClass:"fa fa-check"}),t._v(" 確認送出 "),i("input",{staticClass:"btn",attrs:{type:"button",disabled:t.doubleClick},on:{click:function(e){return e.preventDefault(),t.validateAndSubmit()}}})])],1)])]),i("Lightbox",{attrs:{message:t.errorMsg,openLB:t.openLB},on:{closeLightbox:t.closeLB}})],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"acc"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("帳號")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"pwd"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("密碼")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"name"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("姓名")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"identity"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("身份")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"city"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("所屬分校")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"active"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("狀態")])}],o=i("9ab4"),c=i("1b40"),r=i("87d7"),s=i("f2fa"),d=i("c00b"),u=i("05bf"),l=i("43e4"),m=i("4f4c"),p=i("3617"),v=i("93f3"),h=i("0d59"),f=i("60b9"),b=function(){function t(){this.acc="",this.pwd="",this.oriPwd="",this.name="",this.note="",this.identity="",this.cid="",this.sid="",this.active="",this.aaid="",this.token=window.localStorage.getItem("adminToken")}return Object(o["b"])([Object(r["a"])(),Object(s["a"])({message:"必填"}),Object(d["a"])(50,{message:"最多輸入50字"})],t.prototype,"acc",void 0),Object(o["b"])([Object(r["a"])(),Object(s["a"])({message:"必填"})],t.prototype,"pwd",void 0),Object(o["b"])([Object(r["a"])(),Object(s["a"])({message:"必填"}),Object(d["a"])(50,{message:"最多輸入50字"})],t.prototype,"name",void 0),Object(o["b"])([Object(r["a"])(),Object(d["a"])(100,{message:"最多輸入100字"})],t.prototype,"note",void 0),Object(o["b"])([Object(r["a"])(),Object(s["a"])({message:"必填"})],t.prototype,"identity",void 0),Object(o["b"])([Object(u["a"])((function(t){return"2"===t.identity||"3"===t.identity})),Object(r["a"])(),Object(s["a"])({message:"必填"})],t.prototype,"sid",void 0),Object(o["b"])([Object(r["a"])(),Object(s["a"])({message:"必填"})],t.prototype,"active",void 0),t}(),y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.accForm=new b,e.cityList={},e.schoolList={},e.oriPwd="",e.errorMsg="",e.openLB=!1,e.token=window.localStorage.getItem("adminToken"),e.identity=window.localStorage.getItem("admin_identity"),e.errorMsgMap={acc:"",pwd:"",name:"",note:"",identity:"",sid:"",active:""},e}return Object(o["c"])(e,t),e.prototype.created=function(){return Object(o["a"])(this,void 0,void 0,(function(){var t,e,i,a,n;return Object(o["d"])(this,(function(o){switch(o.label){case 0:return t={aaid:this.$route.query.aaid,token:this.token},[4,h["a"].get(t)];case 1:return e=o.sent(),this.assignDataToForm(e),i=this,[4,f["a"].getSchoolCity()];case 2:return i.cityList=o.sent(),a=this.accForm.cid,n=this.accForm.identity,this.getIdentitySchool(a,n),[2]}}))}))},e.prototype.assignDataToForm=function(t){f["a"].checkToken(t.ERR_CODE);var e=t.info;this.accForm.aaid=e.aaid,this.accForm.acc=e.acc,this.accForm.pwd="********",this.accForm.oriPwd=e.pwd,this.accForm.name=e.name,this.accForm.note=e.note,this.accForm.identity=e.identity,this.accForm.note=e.note,this.accForm.cid=e.cid,this.accForm.sid=e.sid,this.accForm.active=e.active},e.prototype.getSchool=function(){return Object(o["a"])(this,void 0,void 0,(function(){var t,e;return Object(o["d"])(this,(function(i){return this.accForm.sid="",t=this.accForm.cid,e=this.accForm.identity,""!==t&&this.getIdentitySchool(t,e),[2]}))}))},e.prototype.getIdentitySchool=function(t,e){return Object(o["a"])(this,void 0,void 0,(function(){var i,a;return Object(o["d"])(this,(function(n){switch(n.label){case 0:return i={cid:t,category:e,token:this.token},[4,h["a"].getIdentitySchool(i)];case 1:return a=n.sent(),f["a"].checkToken(a.ERR_CODE),this.schoolList=a.list,[2]}}))}))},e.prototype.validateAndSubmit=function(){var t=this;Object(l["a"])(this.accForm,{skipMissingProperties:!0}).then((function(e){return Object(o["a"])(t,void 0,void 0,(function(){var t,i,a=this;return Object(o["d"])(this,(function(n){switch(n.label){case 0:return 0!==e.length?(this.errorMsgMap={acc:"",pwd:"",name:"",note:"",identity:"",sid:"",active:""},e.forEach((function(t,e){var i=t.constraints;Object.keys(i).forEach((function(e){a.errorMsgMap[t.property]=i[e]}))})),[2]):this.doubleClick?[3,2]:(this.doubleClick=!0,t=JSON.parse(JSON.stringify(this.accForm)),i=this,[4,h["a"].edit(t)]);case 1:i.errNo=n.sent(),f["a"].checkToken(this.errNo),this.openLB=!0,this.doubleClick=!1,this.errorMsg=v["b"][this.errNo],n.label=2;case 2:return[2]}}))}))}))},e.prototype.closeLB=function(){this.openLB=!1,this.errNo===v["a"].Success&&this.$router.go(0)},e=Object(o["b"])([Object(c["a"])({components:{SideNav:m["e"],Lightbox:p["i"]}})],e),e}(c["d"]),_=y,g=(i("8cf3"),i("2877")),k=Object(g["a"])(_,a,n,!1,null,null,null);e["default"]=k.exports},"8cf3":function(t,e,i){},c00b:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i("472e"),n=i("0dd9"),o=i.n(n),c="maxLength";function r(t,e){return"string"===typeof t&&o()(t,{min:0,max:e})}function s(t,e){return Object(a["a"])({name:c,constraints:[t],validator:{validate:function(t,e){return r(t,e.constraints[0])},defaultMessage:Object(a["b"])((function(t){return t+"$property must be shorter than or equal to $constraint1 characters"}),e)}},e)}}}]);
//# sourceMappingURL=chunk-4d85f311.fb1d40d0.js.map