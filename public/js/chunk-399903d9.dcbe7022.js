(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-399903d9","chunk-74c42831"],{"0dd9":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var i=a(s("d887"));function a(t){return t&&t.__esModule?t:{default:t}}function n(t){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t,e){var s,a;(0,i.default)(t),"object"===n(e)?(s=e.min||0,a=e.max):(s=arguments[1]||0,a=arguments[2]);var r=t.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g)||[],c=t.length-r.length;return c>=s&&("undefined"===typeof a||c<=a)}t.exports=e.default,t.exports.default=e.default},"4aae":function(t,e,s){"use strict";s.r(e),s.d(e,"ClassForm",(function(){return f}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("SideNav",{attrs:{currentPage:"class"}}),s("div",{staticClass:"main"},[s("h1",[t._v("班級資料")]),s("div",{staticClass:"btn-area"},[s("router-link",{staticClass:"btn",attrs:{to:"/admin/class"}},[s("i",{staticClass:"fa fa-chevron-left"}),t._v(" 返回 ")])],1),s("div",{staticClass:"sub-page"},[s("ul",[s("li",{staticClass:"act"},[s("router-link",{attrs:{to:"/admin/class/edit?clid="+t.classForm.clid}},[t._v("班級資料")])],1),s("li",[s("router-link",{attrs:{to:"/admin/class/student?clid="+t.classForm.clid}},[t._v("班級學生")])],1)])]),s("form",{attrs:{action:""}},[s("div",{staticClass:"input-box input-box-w"},[t._m(0),s("select",{directives:[{name:"model",rawName:"v-model",value:t.classForm.cid,expression:"classForm.cid"}],staticClass:"select-sty h-mr10 w250",attrs:{name:"cid",id:"cid"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.classForm,"cid",e.target.multiple?s:s[0])},function(e){return t.getSchool(t.classForm.cid)}]}},[s("option",{attrs:{value:""}},[t._v("請選擇縣市")]),t._l(t.cityList,(function(e,i){return s("option",{key:i,domProps:{value:e.cid}},[t._v(t._s(e.city))])}))],2),s("select",{directives:[{name:"model",rawName:"v-model",value:t.classForm.sid,expression:"classForm.sid"}],staticClass:"select-sty h-mr10 w250",attrs:{name:"sid",id:"sid"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.classForm,"sid",e.target.multiple?s:s[0])},function(e){return t.getTeacher(t.classForm.sid)}]}},[s("option",{attrs:{value:""}},[t._v("請選擇分校")]),t._l(t.schoolList,(function(e,i){return s("option",{key:i,domProps:{value:e.sid}},[t._v(t._s(e.name))])}))],2),""!==t.errorMsgMap["sid"]?s("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["sid"]))]):t._e()]),s("div",{staticClass:"input-box"},[t._m(1),s("input",{directives:[{name:"model",rawName:"v-model",value:t.classForm.name,expression:"classForm.name"}],staticClass:"input-sty",attrs:{type:"text",name:"name",id:"name",placeholder:"(必填)"},domProps:{value:t.classForm.name},on:{input:function(e){e.target.composing||t.$set(t.classForm,"name",e.target.value)}}}),""!==t.errorMsgMap["name"]?s("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["name"]))]):t._e()]),s("div",{staticClass:"input-box input-box-w"},[s("label",{attrs:{for:""}},[t._v("上課老師")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.tid,expression:"tid"}],staticClass:"select-sty h-mr10 w150",attrs:{name:"tid",id:"tid"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.tid=e.target.multiple?s:s[0]}}},[t._v("> "),s("option",{attrs:{value:""}},[t._v("請選擇老師")]),t._l(t.teacherList,(function(e,i){return s("option",{key:i,domProps:{value:e.tid+","+e.name+","+e.phone}},[t._v(t._s(e.name))])}))],2),s("a",{staticClass:"btn",attrs:{disabled:t.doubleClick},on:{click:function(e){return e.preventDefault(),t.addTeacher()}}},[t._v("新增")]),s("ul",{staticClass:"list h-mt10"},[t._m(2),t._l(t.selectTeacherList,(function(e,i){return s("li",{key:i},[s("div",{staticClass:"group-box-83",attrs:{title:"編輯",alt:"編輯"}},[s("div",{staticClass:"box-14"},[t._v(t._s(e.name))]),s("div",{staticClass:"box-20"},[t._v(t._s(e.phone))])]),s("div",{staticClass:"box-15"},[s("a",{attrs:{title:"刪除",alt:"刪除",disabled:t.doubleClick},on:{click:function(e){return e.preventDefault(),t.delTeacher(i)}}},[s("i",{staticClass:"fa fa-times"})])])])}))],2)]),s("div",{staticClass:"input-box input-box-w"},[s("label",{attrs:{for:"tit"}},[t._v("班級總學生數")]),s("span",[t._v(t._s(t.classForm.student))])]),s("div",{staticClass:"input-box"},[t._m(3),s("div",{staticClass:"check-list"},[s("label",{attrs:{for:"active_1"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.classForm.active,expression:"classForm.active"}],staticClass:"required",attrs:{type:"radio",name:"active",id:"active_1",value:"1"},domProps:{checked:t._q(t.classForm.active,"1")},on:{change:function(e){return t.$set(t.classForm,"active","1")}}}),s("div",{staticClass:"radio-box"}),s("span",[t._v("啟用")])]),s("label",{attrs:{for:"active_2"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.classForm.active,expression:"classForm.active"}],staticClass:"radio-box required",attrs:{type:"radio",name:"active",id:"active_2",value:"2"},domProps:{checked:t._q(t.classForm.active,"2")},on:{change:function(e){return t.$set(t.classForm,"active","2")}}}),s("div",{staticClass:"radio-box"}),s("span",[t._v("停用")])]),""!==t.errorMsgMap["active"]?s("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["active"]))]):t._e()])]),s("div",{staticClass:"btn-area"},[s("router-link",{staticClass:"btn btn-cancel",attrs:{to:"/admin/class"}},[s("i",{staticClass:"fa fa-chevron-left"}),t._v(" 取消")]),s("div",{staticClass:"btn btn-submit"},[s("i",{staticClass:"fa fa-check"}),t._v(" 確認送出 "),s("input",{staticClass:"btn",attrs:{type:"button",disabled:t.doubleClick},on:{click:function(e){return e.preventDefault(),t.validateAndSubmit()}}})])],1)])]),s("Lightbox",{attrs:{message:t.errorMsg,openLB:t.openLB},on:{closeLightbox:t.closeLB}})],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"cid"}},[s("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("上課分校")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"name"}},[s("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("班級名稱")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"title"},[s("div",{staticClass:"group-box-83"},[s("div",{staticClass:"box-14"},[t._v("老師姓名")]),s("div",{staticClass:"box-20"},[t._v("聯絡電話")])]),s("div",{staticClass:"box-15"},[t._v("操作")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"active"}},[s("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("狀態")])}],n=s("9ab4"),r=s("1b40"),c=s("87d7"),o=s("f2fa"),l=s("c00b"),u=s("43e4"),d=s("4f4c"),h=s("3617"),v=s("93f3"),m=s("0d59"),p=s("60b9"),f=function(){function t(){this.cid="",this.sid="",this.name="",this.active="",this.teacher=[],this.clid="",this.student=""}return Object(n["b"])([Object(c["a"])(),Object(o["a"])({message:"必填"})],t.prototype,"cid",void 0),Object(n["b"])([Object(c["a"])(),Object(o["a"])({message:"必填"})],t.prototype,"sid",void 0),Object(n["b"])([Object(c["a"])(),Object(o["a"])({message:"必填"}),Object(l["a"])(20,{message:"最多輸入20字"})],t.prototype,"name",void 0),Object(n["b"])([Object(c["a"])(),Object(o["a"])({message:"必填"})],t.prototype,"active",void 0),t}(),b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.classForm=new f,e.cityList={},e.schoolList={},e.teacherList={},e.selectTeacherList=[],e.clid="",e.tid="",e.identity=window.localStorage.getItem("admin_identity"),e.token=window.localStorage.getItem("adminToken"),e.errorMsg="",e.openLB=!1,e.errNo=0,e.errorMsgMap={sid:"",name:"",active:""},e}return Object(n["c"])(e,t),e.prototype.created=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e,s,i,a,r,c,o,l;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return t={clid:this.$route.query.clid,token:this.token},[4,m["b"].get(t)];case 1:return e=n.sent(),this.assignDataToForm(e),this.selectTeacherList=this.classForm.teacher,"1"!=this.identity?[3,4]:(s=this,[4,p["a"].getSchoolCity()]);case 2:return s.cityList=n.sent(),i=this.classForm.cid,a=this,[4,p["a"].getSchool(i)];case 3:return a.schoolList=n.sent(),[3,6];case 4:return r=window.localStorage.getItem("admin_sid"),c=this,[4,p["a"].getCity(r)];case 5:c.cityList=n.sent(),o=window.localStorage.getItem("admin_school"),this.schoolList[0]={sid:r,name:o},n.label=6;case 6:return l=this.classForm.sid,this.getTeacher(l),[2]}}))}))},e.prototype.assignDataToForm=function(t){p["a"].checkToken(t.ERR_CODE);var e=t.info;this.classForm.clid=e.clid,this.classForm.cid=e.cid,this.classForm.sid=e.sid,this.classForm.name=e.name,this.classForm.teacher=e.teacher,this.classForm.student=e.student,this.classForm.active=e.active},e.prototype.getSchool=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e;return Object(n["d"])(this,(function(s){switch(s.label){case 0:return"1"!=this.identity?[3,2]:(this.classForm.sid="",this.teacherList={},this.tid="",e=this,[4,p["a"].getSchool(t)]);case 1:e.schoolList=s.sent(),s.label=2;case 2:return[2]}}))}))},e.prototype.getTeacher=function(t){return Object(n["a"])(this,void 0,void 0,(function(){var e,s;return Object(n["d"])(this,(function(i){switch(i.label){case 0:return e={sid:t,token:this.token},[4,m["b"].getTeacher(e)];case 1:return s=i.sent(),p["a"].checkToken(s.ERR_CODE),this.teacherList=s.list,[2]}}))}))},e.prototype.addTeacher=function(){var t=this.tid.split(","),e=t[0],s=t[1],i=t[2];if(""!=e){var a={tid:e,name:s,phone:i};this.selectTeacherList.push(a),this.tid=""}else this.errorMsg="請先選擇老師",this.openLB=!0},e.prototype.delTeacher=function(t){this.doubleClick||(this.doubleClick=!0,this.selectTeacherList.splice(t,1),this.doubleClick=!1)},e.prototype.validateAndSubmit=function(){var t=this;Object(u["a"])(this.classForm,{skipMissingProperties:!0}).then((function(e){return Object(n["a"])(t,void 0,void 0,(function(){var t,s,i=this;return Object(n["d"])(this,(function(a){switch(a.label){case 0:return 0!==e.length?(this.errorMsgMap={sid:"",name:"",active:""},e.forEach((function(t,e){var s=t.constraints;Object.keys(s).forEach((function(e){i.errorMsgMap[t.property]=s[e]}))})),[2]):this.doubleClick?[3,2]:(this.doubleClick=!0,t={sid:this.classForm.sid,name:this.classForm.name,teacherList:this.selectTeacherList,active:this.classForm.active,clid:this.classForm.clid,token:this.token},s=this,[4,m["b"].edit(t)]);case 1:s.errNo=a.sent(),p["a"].checkToken(this.errNo),this.openLB=!0,this.doubleClick=!1,this.errorMsg=v["b"][this.errNo],a.label=2;case 2:return[2]}}))}))}))},e.prototype.closeLB=function(){this.openLB=!1,this.errNo===v["a"].Success&&this.$router.push("/admin/class")},e=Object(n["b"])([Object(r["a"])({components:{SideNav:d["e"],Lightbox:h["i"]}})],e),e}(r["d"]),g=b,_=(s("8cf3"),s("2877")),k=Object(_["a"])(g,i,a,!1,null,null,null);e["default"]=k.exports},"60b9":function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var i=s("9ab4"),a=s("1b40"),n=s("0d59"),r=s("93f3"),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("adminToken"),e}return Object(i["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/admin/login"},e.prototype.checkToken=function(t){t!==r["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(s){switch(s.label){case 0:return t={token:this.token},[4,n["c"].getGrade(t)];case 1:return e=s.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,s;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={grade:t,token:this.token},[4,n["c"].getLevel(e)];case 1:return s=i.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e.prototype.getUnit=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(s){for(t={},e=1;e<=25;e++)t[e]={unit:"Unit-"+e};return t[26]={unit:"Midterm Exam"},t[27]={unit:"Final Exam"},[2,t]}))}))},e.prototype.getAllCity=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(s){switch(s.label){case 0:return t={token:this.token},[4,n["c"].getAllCity(t)];case 1:return e=s.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getRegion=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,s;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={cid:t,token:this.token},[4,n["c"].getRegion(e)];case 1:return s=i.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e.prototype.getSchoolCity=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(s){switch(s.label){case 0:return t={token:this.token},[4,n["c"].getSchoolCity(t)];case 1:return e=s.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getCity=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,s;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={sid:t,token:this.token},[4,n["c"].getCity(e)];case 1:return s=i.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e.prototype.getSchool=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,s;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={cid:t,token:this.token},[4,n["c"].getSchool(e)];case 1:return s=i.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e.prototype.getClass=function(t,e,s){return Object(i["a"])(this,void 0,void 0,(function(){var a,r;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return a={type:t,sid:e,clid:s,token:this.token},[4,n["f"].getClass(a)];case 1:return r=i.sent(),this.checkToken(r.ERR_CODE),[2,r.list]}}))}))},e.prototype.getTeacher=function(t,e,s){return Object(i["a"])(this,void 0,void 0,(function(){var a,r;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return a={type:t,clid:e,tid:s,token:this.token},[4,n["f"].getClassTeacher(a)];case 1:return r=i.sent(),this.checkToken(r.ERR_CODE),[2,r.list]}}))}))},e}(a["d"]),o=c.instance},"8cf3":function(t,e,s){},c00b:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var i=s("472e"),a=s("0dd9"),n=s.n(a),r="maxLength";function c(t,e){return"string"===typeof t&&n()(t,{min:0,max:e})}function o(t,e){return Object(i["a"])({name:r,constraints:[t],validator:{validate:function(t,e){return c(t,e.constraints[0])},defaultMessage:Object(i["b"])((function(t){return t+"$property must be shorter than or equal to $constraint1 characters"}),e)}},e)}}}]);
//# sourceMappingURL=chunk-399903d9.dcbe7022.js.map