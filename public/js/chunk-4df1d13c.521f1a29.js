(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4df1d13c","chunk-76f0c525"],{"407b":function(t,e,s){t.exports=s.p+"img/role04.cf3e6cb5.png"},"4c63":function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var i=s("9ab4"),o=s("1b40"),n=s("0d59"),c=s("93f3"),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("teacherToken"),e}return Object(i["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/teacher/login"},e.prototype.checkToken=function(t){t!==c["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(s){switch(s.label){case 0:return t={token:this.token},[4,n["c"].teGetGrade(t)];case 1:return e=s.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,s;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={grade:t,token:this.token},[4,n["c"].teGetLevel(e)];case 1:return s=i.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e.prototype.getUnit=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(s){for(t={},e=1;e<=25;e++)t[e]={unit:"Unit-"+e};return t[26]={unit:"Midterm Exam"},t[27]={unit:"Final Exam"},[2,t]}))}))},e.prototype.getTECity=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,s;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={tid:t,token:this.token},[4,n["c"].getTECity(e)];case 1:return s=i.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e.prototype.getTESchool=function(t,e){return Object(i["a"])(this,void 0,void 0,(function(){var s,o;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return s={cid:t,tid:e,token:this.token},[4,n["c"].getTESchool(s)];case 1:return o=i.sent(),this.checkToken(o.ERR_CODE),[2,o.list]}}))}))},e.prototype.getTEClass=function(t,e){return Object(i["a"])(this,void 0,void 0,(function(){var s,o;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return s={sid:t,tid:e,token:this.token},[4,n["c"].getTEClass(s)];case 1:return o=i.sent(),this.checkToken(o.ERR_CODE),[2,o.list]}}))}))},e.prototype.getTeacher=function(t,e,s){return Object(i["a"])(this,void 0,void 0,(function(){var o,c;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return o={type:t,clid:e,tid:s,token:this.token},[4,n["c"].teGetTeacher(o)];case 1:return c=i.sent(),this.checkToken(c.ERR_CODE),[2,c.list]}}))}))},e}(o["d"]),a=l.instance},a65d:function(t,e,s){},eacb:function(t,e,s){"use strict";s.r(e),s.d(e,"RollcallForm",(function(){return d}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Header",{attrs:{currentPage:"rollcall"}}),i("div",{staticClass:"c-wrap1400"},[t._m(0),i("div",{staticClass:"c-item-group"},[i("div",{staticClass:"c-item h-flex-column"},[i("div",{staticClass:"h-flex"},[i("div",{staticClass:"input-box box-25"},[i("label",{attrs:{for:"tit"}},[t._v("上課日期及時間")]),i("span",[t._v(t._s(t.rollcallForm.time))])]),i("div",{staticClass:"input-box box-25"},[i("label",{attrs:{for:"tit"}},[t._v("上課分校")]),i("span",[t._v(t._s(t.rollcallForm.city)+" "+t._s(t.rollcallForm.school))])]),i("div",{staticClass:"input-box box-20"},[i("label",{attrs:{for:"tit"}},[t._v("上課班級")]),i("span",[t._v(t._s(t.rollcallForm.class))])])]),i("div",[i("div",{staticClass:"input-box box-25"},[i("label",{attrs:{for:"tit"}},[t._v("上課老師")]),i("span",[t._v(t._s(t.rollcallForm.teacher))])]),i("div",{staticClass:"input-box box-20"},[i("label",{attrs:{for:"tit"}},[t._v("點名備註")]),i("span",[t._v(t._s(t.rollcallForm.note))])])])]),i("img",{staticClass:"img-role04",attrs:{src:s("407b")}})]),i("ul",{staticClass:"c-list"},[i("p",{staticClass:"c-list-tit"},[t._v("學生名單")]),t._m(1),t._l(t.rollcallForm.student,(function(e,s){return i("li",{key:s},[i("div",{staticClass:"group-box-100",attrs:{title:"編輯",alt:"編輯"}},[i("div",{staticClass:"box-12"},[t._v(t._s(e.name))]),i("div",{staticClass:"box-14"},[t._v(t._s(e.phone))]),i("div",{staticClass:"box-12"},[t._v(t._s(e.parentName))]),i("div",{staticClass:"box-14"},[t._v(t._s(e.parentPhone))]),i("div",{staticClass:"box-25"},[i("a",{staticClass:"c-btn h-mr10",class:{"c-btn-cancel":"1"!==e.status},on:{click:function(s){return s.preventDefault(),t.rollcall(e.stid,"1")}}},[t._v("報到")]),i("a",{staticClass:"c-btn",class:{"c-btn-cancel":"2"!==e.status},on:{click:function(s){return s.preventDefault(),t.rollcall(e.stid,"2")}}},[t._v("未到")])]),i("div",{staticClass:"box-20"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.note,expression:"item.note"}],staticClass:"input-sty",attrs:{type:"text"},domProps:{value:e.note},on:{input:function(s){s.target.composing||t.$set(e,"note",s.target.value)}}})])])])}))],2),i("p",{staticClass:"h-mt25 h-txt-grey"},[t._v("共"+t._s(t.num)+"筆資料")]),i("div",{staticClass:"c-btn-area h-mt50"},[i("router-link",{staticClass:"c-btn c-btn-cancel h-mr30",attrs:{to:"/teacher/rollcall"}},[t._v("取消")]),i("a",{staticClass:"c-btn",attrs:{disabled:t.doubleClick},on:{click:function(e){return e.preventDefault(),t.validateAndSubmit()}}},[t._v("確認")])],1)]),i("APLightbox",{attrs:{message:t.lightbox.errorMsg,showLB:t.lightbox.showLB},on:{closeAPLightbox:t.closeLB}}),i("Footer")],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"c-tab"},[s("h3",{staticClass:"c-tit"},[t._v("線上點名 / 點名紀錄")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"title"},[s("div",{staticClass:"group-box-100"},[s("div",{staticClass:"box-12"},[t._v("學生姓名")]),s("div",{staticClass:"box-14"},[t._v("連絡電話")]),s("div",{staticClass:"box-12"},[t._v("家長姓名")]),s("div",{staticClass:"box-14"},[t._v("連絡電話")]),s("div",{staticClass:"box-25"},[t._v("點名狀況")]),s("div",{staticClass:"box-10"},[t._v("備註")])])])}],n=s("9ab4"),c=s("1b40"),l=s("4f4c"),a=s("3617"),r=s("93f3"),u=s("0d59"),h=s("4c63"),d=function(){function t(){this.time="",this.city="",this.school="",this.class="",this.teacher="",this.note="",this.rid="",this.student=[],this.token=window.localStorage.getItem("teacherToken")}return t}(),b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.rollcallForm=new d,e.num=0,e.token=window.localStorage.getItem("teacherToken"),e.lightbox={showLB:!1,errorMsg:""},e}return Object(n["c"])(e,t),e.prototype.created=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(s){switch(s.label){case 0:return t={rid:this.$route.query.rid,token:this.token},[4,u["g"].teGet(t)];case 1:return e=s.sent(),this.assignDataToForm(e),this.num=this.rollcallForm.student?Object.keys(this.rollcallForm.student).length:0,[2]}}))}))},e.prototype.assignDataToForm=function(t){h["a"].checkToken(t.ERR_CODE);var e=t.info;this.rollcallForm.rid=e.rid,this.rollcallForm.time=e.time,this.rollcallForm.city=e.city,this.rollcallForm.school=e.school,this.rollcallForm.class=e.class,this.rollcallForm.teacher=e.teacher,this.rollcallForm.note=e.note,this.rollcallForm.student=e.student},e.prototype.rollcall=function(t,e){for(var s in this.rollcallForm.student)this.rollcallForm.student[s]["stid"]==t&&(this.rollcallForm.student[s]["status"]=e)},e.prototype.validateAndSubmit=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t;return Object(n["d"])(this,(function(e){switch(e.label){case 0:return this.doubleClick?[3,2]:(this.doubleClick=!0,[4,u["g"].teEditRecord(this.rollcallForm)]);case 1:switch(t=e.sent(),t){case r["a"].InvalidToken:h["a"].logout();break;case r["a"].Success:this.doubleClick=!1,this.$router.push("/teacher/rollcall");break;default:this.lightbox.errorMsg=r["b"][t],this.lightbox.showLB=!0,this.doubleClick=!1;break}e.label=2;case 2:return[2]}}))}))},e.prototype.closeLB=function(){this.lightbox.showLB=!1},e=Object(n["b"])([Object(c["a"])({components:{Header:l["b"],APLightbox:a["c"],Footer:l["a"]}})],e),e}(c["d"]),v=b,f=(s("a65d"),s("2877")),p=Object(f["a"])(v,i,o,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-4df1d13c.521f1a29.js.map