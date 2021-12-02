(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33caa369","chunk-74c42831"],{"60b9":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var r=i("9ab4"),o=i("1b40"),a=i("0d59"),n=i("93f3"),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("adminToken"),e.admin_identity=window.localStorage.getItem("admin_identity"),e}return Object(r["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/admin/login"},e.prototype.checkToken=function(t){t!==n["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,a["c"].getGrade(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(r["a"])(this,void 0,void 0,(function(){var e,i;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return e={grade:t,token:this.token},[4,a["c"].getLevel(e)];case 1:return i=r.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getUnit=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(i){for(t={},e=1;e<=25;e++)t[e]={unit:"Unit-"+e};return("/admin/quiz/question/add"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)&&("/admin/quiz/question/edit"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)?(t[26]={unit:"Midterm Exam"},t[27]={unit:"Final Exam"},[2,t]):[2,t]}))}))},e.prototype.getAllCity=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,a["c"].getAllCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getRegion=function(t){return Object(r["a"])(this,void 0,void 0,(function(){var e,i;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return e={cid:t,token:this.token},[4,a["c"].getRegion(e)];case 1:return i=r.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchoolCity=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,a["c"].getSchoolCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getCity=function(t){return Object(r["a"])(this,void 0,void 0,(function(){var e,i;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return e={sid:t,token:this.token},[4,a["c"].getCity(e)];case 1:return i=r.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchool=function(t){return Object(r["a"])(this,void 0,void 0,(function(){var e,i;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return e={cid:t,token:this.token},[4,a["c"].getSchool(e)];case 1:return i=r.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getClass=function(t,e,i){return Object(r["a"])(this,void 0,void 0,(function(){var o,n;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return o={type:t,sid:e,clid:i,token:this.token},[4,a["f"].getClass(o)];case 1:return n=r.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getTeacher=function(t,e,i){return Object(r["a"])(this,void 0,void 0,(function(){var o,n;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return o={type:t,clid:e,tid:i,token:this.token},[4,a["f"].getClassTeacher(o)];case 1:return n=r.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e}(o["d"]),c=s.instance},"6b6c":function(t,e,i){"use strict";i.r(e),i.d(e,"TextbookForm",(function(){return f}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("SideNav",{attrs:{currentPage:"textbook"}}),i("div",{staticClass:"main"},[i("h1",[t._v("教材資料")]),i("div",{staticClass:"btn-area"},[i("router-link",{staticClass:"btn",attrs:{to:"/admin/textbook"}},[i("i",{staticClass:"fa fa-chevron-left"}),t._v(" 返回 ")])],1),i("form",{attrs:{action:"",method:"post",name:"textbookForm",id:"textbookForm"}},[i("div",{staticClass:"input-box"},[t._m(0),i("select",{directives:[{name:"model",rawName:"v-model",value:t.textbookForm.grade,expression:"textbookForm.grade"}],staticClass:"select-sty w200",attrs:{name:"grade"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.textbookForm,"grade",e.target.multiple?i:i[0])},t.getLevel]}},[i("option",{attrs:{value:""}},[t._v("請選擇級數")]),t._l(t.gradeList,(function(e,r){return i("option",{key:r,domProps:{value:e.grade}},[t._v(t._s(e.grade))])}))],2),""!==t.errorMsgMap["grade"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["grade"]))]):t._e()]),i("div",{staticClass:"input-box"},[t._m(1),i("select",{directives:[{name:"model",rawName:"v-model",value:t.textbookForm.category,expression:"textbookForm.category"}],staticClass:"select-sty w200",attrs:{name:"category"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.textbookForm,"category",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:"1"}},[t._v("全部")]),i("option",{attrs:{value:"2"}},[t._v("直營")]),i("option",{attrs:{value:"3"}},[t._v("加盟")])]),""!==t.errorMsgMap["category"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["category"]))]):t._e()]),i("div",{staticClass:"input-box input-box-w"},[t._m(2),i("select",{directives:[{name:"model",rawName:"v-model",value:t.textbookForm.level,expression:"textbookForm.level"}],staticClass:"select-sty w200",attrs:{name:"level"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.textbookForm,"level",e.target.multiple?i:i[0])},t.getUnit]}},[i("option",{attrs:{value:""}},[t._v("請選擇Level")]),t._l(t.levelList,(function(e,r){return i("option",{key:r,domProps:{value:e.level}},[t._v(t._s(e.level))])}))],2),""!==t.errorMsgMap["level"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["level"]))]):t._e()]),i("div",{staticClass:"input-box input-box-w"},[t._m(3),i("select",{directives:[{name:"model",rawName:"v-model",value:t.textbookForm.unit,expression:"textbookForm.unit"}],staticClass:"select-sty w200",attrs:{name:"unit"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.textbookForm,"unit",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("請選擇單元")]),t._l(t.unitList,(function(e,r){return i("option",{key:r,domProps:{value:e.unit}},[t._v(t._s(e.unit))])}))],2),""!==t.errorMsgMap["unit"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["unit"]))]):t._e()]),i("div",{staticClass:"input-box input-box-w"},[t._m(4),i("div",{staticClass:"note"},[t._v("建議尺寸 300x400，格式限jpg、png、jpeg，檔案大小限2M內")]),i("div",{staticClass:"upload-img"},[i("div",{staticClass:"textbook-box upload-box-sty",on:{click:function(e){return t.$refs.file.click()}}},[i("input",{ref:"file",staticClass:"upload-pic required",attrs:{type:"file",name:"pic",id:"pic",accept:"image/*"},on:{change:function(e){return t.changePic(e)}}}),i("div",{staticClass:"upload-click-area",attrs:{id:"previews"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:""!=t.textbookForm.pic,expression:"textbookForm.pic != ''"}],attrs:{src:t.textbookForm.pic,alt:""}})])])]),""!==t.errorMsgMap["pic"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["pic"]))]):t._e()]),i("div",{staticClass:"input-box input-box-w"},[t._m(5),i("div",{staticClass:"note"},[t._v("上傳單個檔案，格式限pdf，檔案大小限5M內")]),i("div",{staticClass:"upload-form-file"},[i("div",{staticClass:"form-file"},[i("input",{attrs:{type:"file",name:"pdf",id:"pdf",accept:".pdf"},on:{change:t.changePdf}}),i("i",{staticClass:"fa fa-cloud-upload"}),t._v(" 上傳pdf檔 ")]),i("span",{staticClass:"file-name",attrs:{id:"fileNameBox"}},[t._v(t._s(t.textbookForm.pdf))])]),""!==t.errorMsgMap["pdf"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["pdf"]))]):t._e()]),i("div",{staticClass:"input-box"},[t._m(6),i("div",{staticClass:"check-list"},[i("label",{attrs:{for:"active_1"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.textbookForm.active,expression:"textbookForm.active"}],staticClass:"required",attrs:{type:"radio",name:"active",id:"active_1",title:"至少選擇一個",value:"1"},domProps:{checked:t._q(t.textbookForm.active,"1")},on:{change:function(e){return t.$set(t.textbookForm,"active","1")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("啟用")])]),i("label",{attrs:{for:"active_2"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.textbookForm.active,expression:"textbookForm.active"}],staticClass:"radio-box required",attrs:{type:"radio",name:"active",id:"active_2",title:"至少選擇一個",value:"2"},domProps:{checked:t._q(t.textbookForm.active,"2")},on:{change:function(e){return t.$set(t.textbookForm,"active","2")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("停用")])]),""!==t.errorMsgMap["active"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["active"]))]):t._e()])]),i("div",{staticClass:"btn-area"},[i("router-link",{staticClass:"btn btn-cancel",attrs:{to:"/admin/textbook"}},[i("i",{staticClass:"fa fa-chevron-left"}),t._v(" 取消")]),i("div",{staticClass:"btn btn-submit"},[i("i",{staticClass:"fa fa-check"}),t._v(" 確認送出 "),i("input",{staticClass:"btn",attrs:{type:"button",disabled:t.doubleClick},on:{click:function(e){return e.preventDefault(),t.validateAndSubmit()}}})])],1)])]),i("Lightbox",{attrs:{message:t.errorMsg,openLB:t.openLB},on:{closeLightbox:t.closeLB}})],1)},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"grade"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("級數")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"category"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("使用分校")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"level"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("Level")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"unit"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("單元")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"pic"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("上傳教材封面圖")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"pdf"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("檔案上傳")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"active"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("狀態")])}],a=i("9ab4"),n=i("1b40"),s=i("87d7"),c=i("f2fa"),l=i("43e4"),u=i("4f4c"),d=i("3617"),v=i("93f3"),p=i("0d59"),b=i("60b9"),f=function(){function t(){this.grade="",this.category=1,this.level="",this.unit="",this.pic="",this.pdf="",this.active=1}return Object(a["b"])([Object(s["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"grade",void 0),Object(a["b"])([Object(s["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"category",void 0),Object(a["b"])([Object(s["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"level",void 0),Object(a["b"])([Object(s["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"unit",void 0),Object(a["b"])([Object(s["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"pic",void 0),Object(a["b"])([Object(s["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"pdf",void 0),Object(a["b"])([Object(s["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"active",void 0),t}(),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.textbookForm=new f,e.token=window.localStorage.getItem("adminToken"),e.gradeList={},e.levelList={},e.unitList={},e.errorMsg="",e.openLB=!1,e.errorMsgMap={grade:"",category:"",level:"",unit:"",pic:"",pdf:"",active:""},e}return Object(a["c"])(e,t),e.prototype.created=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t;return Object(a["d"])(this,(function(e){switch(e.label){case 0:return t=this,[4,b["a"].getGrade()];case 1:return t.gradeList=e.sent(),[2]}}))}))},e.prototype.getLevel=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t,e;return Object(a["d"])(this,(function(i){switch(i.label){case 0:return this.textbookForm.level="",this.textbookForm.unit="",t=this.textbookForm.grade,e=this,[4,b["a"].getLevel(t)];case 1:return e.levelList=i.sent(),this.unitList={},[2]}}))}))},e.prototype.getUnit=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t;return Object(a["d"])(this,(function(e){for(this.textbookForm.unit="",t=1;t<=25;t++)this.unitList[t]={unit:"Unit-"+t};return this.unitList[26]={unit:"Midterm Exam"},this.unitList[27]={unit:"Final Exam"},[2]}))}))},e.prototype.changePic=function(t){var e=this,i=t.target.files[0];if(i){var r=i.name.substring(i.name.lastIndexOf(".")+1);if("jpg"!==r&&"png"!==r&&"jpeg"!==r)return this.errorMsg="上傳檔案只能是 jpg、png、jpeg 格式！",void(this.openLB=!0);var o=i.size/1024/1024<2;if(!o)return this.errorMsg="上傳檔案不能超過 2MB！",void(this.openLB=!0);var a=new FileReader;a.onload=function(t){e.textbookForm.pic=t.target.result},a.readAsDataURL(i)}},e.prototype.changePdf=function(t){var e=this,i=t.target.files[0];if(i){var r=i.name.substring(i.name.lastIndexOf(".")+1);if("pdf"!==r)return this.errorMsg="上傳檔案只能是 pdf 格式！",void(this.openLB=!0);var o=i.size/1024/1024<5;if(!o)return this.errorMsg="上傳檔案不能超過 5MB！",void(this.openLB=!0);var a=new FileReader;a.onload=function(t){e.textbookForm.pdf=i.name},a.readAsDataURL(i)}},e.prototype.validateAndSubmit=function(){var t=this;Object(l["a"])(this.textbookForm,{skipMissingProperties:!0}).then((function(e){return Object(a["a"])(t,void 0,void 0,(function(){var t,i,r,o=this;return Object(a["d"])(this,(function(a){switch(a.label){case 0:return 0!==e.length?(this.errorMsgMap={grade:"",category:"",level:"",unit:"",pic:"",pdf:"",active:""},e.forEach((function(t,e){var i=t.constraints;Object.keys(i).forEach((function(e){o.errorMsgMap[t.property]=i[e]}))})),[2]):this.doubleClick?[3,2]:(this.doubleClick=!0,t=document.getElementById("textbookForm"),i=new FormData(t),i.append("token",this.token),r=this,[4,p["k"].add(i)]);case 1:r.errNo=a.sent(),b["a"].checkToken(this.errNo),this.openLB=!0,this.doubleClick=!1,this.errorMsg=v["b"][this.errNo],a.label=2;case 2:return[2]}}))}))}))},e.prototype.closeLB=function(){this.openLB=!1,this.errNo===v["a"].Success&&this.$router.push("/admin/textbook")},e=Object(a["b"])([Object(n["a"])({components:{SideNav:u["e"],Lightbox:d["i"]}})],e),e}(n["d"]),m=h,g=(i("8cf3"),i("2877")),k=Object(g["a"])(m,r,o,!1,null,null,null);e["default"]=k.exports},"8cf3":function(t,e,i){}}]);
//# sourceMappingURL=chunk-33caa369.aa065d42.js.map