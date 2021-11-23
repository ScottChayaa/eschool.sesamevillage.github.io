(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e6e09fa","chunk-76f0c525"],{"4c63":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var s=n("9ab4"),i=n("1b40"),o=n("0d59"),r=n("93f3"),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("teacherToken"),e}return Object(s["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/teacher/login"},e.prototype.checkToken=function(t){t!==r["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(n){switch(n.label){case 0:return t={token:this.token},[4,o["c"].teGetGrade(t)];case 1:return e=n.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,n;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={grade:t,token:this.token},[4,o["c"].teGetLevel(e)];case 1:return n=s.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getUnit=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(n){for(t={},e=1;e<=25;e++)t[e]={unit:"Unit-"+e};return t[26]={unit:"Midterm Exam"},t[27]={unit:"Final Exam"},[2,t]}))}))},e.prototype.getTECity=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,n;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={tid:t,token:this.token},[4,o["c"].getTECity(e)];case 1:return n=s.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getTESchool=function(t,e){return Object(s["a"])(this,void 0,void 0,(function(){var n,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return n={cid:t,tid:e,token:this.token},[4,o["c"].getTESchool(n)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getTEClass=function(t,e){return Object(s["a"])(this,void 0,void 0,(function(){var n,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return n={sid:t,tid:e,token:this.token},[4,o["c"].getTEClass(n)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getTeacher=function(t,e,n){return Object(s["a"])(this,void 0,void 0,(function(){var i,r;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return i={type:t,clid:e,tid:n,token:this.token},[4,o["c"].teGetTeacher(i)];case 1:return r=s.sent(),this.checkToken(r.ERR_CODE),[2,r.list]}}))}))},e}(i["d"]),c=a.instance},a65d:function(t,e,n){},aca6:function(t,e,n){"use strict";n.r(e),n.d(e,"StudentForm",(function(){return l}));var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{currentPage:"student"}}),n("div",{staticClass:"c-wrap1400"},[n("div",{staticClass:"c-tab"},[n("h3",{staticClass:"c-tit"},[t._v("學生資料")]),n("div",{staticClass:"c-tab-group"},[n("router-link",{staticClass:"c-tab-red act",attrs:{to:"/teacher/student/info?stid="+t.studentForm.stid}},[t._v("基本資料")]),n("router-link",{staticClass:"c-tab-blue",attrs:{to:"/teacher/student/learning?stid="+t.studentForm.stid}},[t._v("學習歷程")])],1)]),n("div",{staticClass:"input-box-w c-avatar-group h-pb7-percent"},[n("div",{staticClass:"h-flexSpaceB-ju"},[n("div",{staticClass:"c-avatarImg-wrap"},[n("img",{attrs:{src:t.studentForm.pic,alt:""}})]),n("div",{staticClass:"c-avatar-info"},[n("div",{staticClass:"input-box input-box-w"},[n("label",{attrs:{for:"tit"}},[t._v("學號")]),n("span",[t._v(t._s(t.studentForm.studentid))])]),n("div",{staticClass:"input-box input-box-w"},[n("label",{attrs:{for:"tit"}},[t._v("學生姓名 / 學生連絡電話")]),n("span",[t._v(t._s(t.studentForm.name)+"  "+t._s(t.studentForm.phone))])]),n("div",{staticClass:"input-box input-box-w"},[n("label",{attrs:{for:"tit"}},[t._v("家長姓名 / 家長連絡電話")]),n("span",[t._v(t._s(t.studentForm.parentName)+"  "+t._s(t.studentForm.parentPhone))])]),n("div",{staticClass:"input-box input-box-w"},[n("label",{attrs:{for:"tit"}},[t._v("地址")]),n("span",[t._v(t._s(t.studentForm.liveCity)+t._s(t.studentForm.region)+t._s(t.studentForm.address))])]),n("div",{staticClass:"input-box input-box-w"},[n("label",{attrs:{for:"tit"}},[t._v("上課分校")]),n("span",[t._v(t._s(t.studentForm.city)+" "+t._s(t.studentForm.school))])]),n("div",{staticClass:"input-box input-box-w"},[n("label",{attrs:{for:"tit"}},[t._v("備註")]),n("span",{staticClass:"h-mr20"},[t._v(t._s(t.studentForm.note))]),n("a",{staticClass:"c-btn",on:{click:function(e){return e.preventDefault(),t.openNoteLB.apply(null,arguments)}}},[t._v("編輯")])])])])])]),n("APLightbox",{attrs:{message:t.lightbox.errorMsg,showLB:t.lightbox.showLB},on:{closeAPLightbox:t.closeLB}}),n("APNote",{on:{submitNote:t.submitNote}}),n("Footer")],1)},i=[],o=n("9ab4"),r=n("1b40"),a=n("4f4c"),c=n("3617"),u=n("0d59"),d=n("93f3"),h=n("4c63"),l=function(){function t(){this.studentid="",this.name="",this.phone="",this.parentName="",this.parentPhone="",this.liveCity="",this.region="",this.address="",this.pic="",this.city="",this.school="",this.note="",this.stid=""}return t}(),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.studentForm=new l,e.token=window.localStorage.getItem("teacherToken"),e.lightbox={showLB:!1,errorMsg:""},e}return Object(o["c"])(e,t),e.prototype.created=function(){return Object(o["a"])(this,void 0,void 0,(function(){var t,e;return Object(o["d"])(this,(function(n){switch(n.label){case 0:return t={stid:this.$route.query.stid,token:this.token},[4,u["i"].teGet(t)];case 1:return e=n.sent(),this.assignDataToForm(e),[2]}}))}))},e.prototype.assignDataToForm=function(t){h["a"].checkToken(t.ERR_CODE);var e=t.info;this.studentForm.stid=e.stid,this.studentForm.studentid=e.studentid,this.studentForm.name=e.name,this.studentForm.phone=e.phone,this.studentForm.parentName=e.parentName,this.studentForm.parentPhone=e.parentPhone,this.studentForm.liveCity=e.liveCity,this.studentForm.region=e.region,this.studentForm.address=e.address,this.studentForm.pic=e.pic,this.studentForm.city=e.city,this.studentForm.school=e.school,this.studentForm.note=e.note},e.prototype.openNoteLB=function(){this.$emit("openNote",!0,this.studentForm.note)},e.prototype.submitNote=function(t){return Object(o["a"])(this,void 0,void 0,(function(){var e,n;return Object(o["d"])(this,(function(s){switch(s.label){case 0:return e={stid:this.studentForm.stid,note:t,token:this.token},[4,u["i"].teEditNote(e)];case 1:switch(n=s.sent(),n){case d["a"].InvalidToken:h["a"].logout();break;case d["a"].Success:this.doubleClick=!1,this.$router.go(0);break;default:this.lightbox.errorMsg=d["b"][n],this.lightbox.showLB=!0,this.doubleClick=!1;break}return[2]}}))}))},e.prototype.closeLB=function(){this.lightbox.showLB=!1},e=Object(o["b"])([Object(r["a"])({components:{Header:a["b"],APLightbox:c["c"],APNote:c["d"],Footer:a["a"]}})],e),e}(r["d"]),b=p,v=(n("a65d"),n("2877")),f=Object(v["a"])(b,s,i,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-6e6e09fa.5171e137.js.map