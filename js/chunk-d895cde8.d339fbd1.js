(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d895cde8"],{"4c63":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("9ab4"),o=n("1b40"),c=n("0d59"),r=n("93f3"),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("teacherToken"),e}return Object(i["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/teacher/login"},e.prototype.checkToken=function(t){t!==r["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(n){switch(n.label){case 0:return t={token:this.token},[4,c["c"].teGetGrade(t)];case 1:return e=n.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,n;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={grade:t,token:this.token},[4,c["c"].teGetLevel(e)];case 1:return n=i.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getUnit=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(n){for(t={},e=1;e<=25;e++)t[e]={unit:"Unit-"+e};return t[26]={unit:"Midterm Exam"},t[27]={unit:"Final Exam"},t[28]={unit:"VIDEO Q"},t[29]={unit:"WORKSHOP"},[2,t]}))}))},e.prototype.getTECity=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,n;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={tid:t,token:this.token},[4,c["c"].getTECity(e)];case 1:return n=i.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getTESchool=function(t,e){return Object(i["a"])(this,void 0,void 0,(function(){var n,o;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return n={cid:t,tid:e,token:this.token},[4,c["c"].getTESchool(n)];case 1:return o=i.sent(),this.checkToken(o.ERR_CODE),[2,o.list]}}))}))},e.prototype.getTEClass=function(t,e){return Object(i["a"])(this,void 0,void 0,(function(){var n,o;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return n={sid:t,tid:e,token:this.token},[4,c["c"].getTEClass(n)];case 1:return o=i.sent(),this.checkToken(o.ERR_CODE),[2,o.list]}}))}))},e.prototype.getTeacher=function(t,e,n){return Object(i["a"])(this,void 0,void 0,(function(){var o,r;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return o={type:t,clid:e,tid:n,token:this.token},[4,c["c"].teGetTeacher(o)];case 1:return r=i.sent(),this.checkToken(r.ERR_CODE),[2,r.list]}}))}))},e}(o["d"]),a=s.instance},"74d0":function(t,e,n){"use strict";n.r(e),n.d(e,"InputForm",(function(){return h}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{currentPage:"instructions"}}),n("div",{staticClass:"c-wrap1400"},[t._m(0),n("article",{staticClass:"unreset h-wrap-margin",domProps:{innerHTML:t._s(t.inputForm.content)}})]),n("Footer")],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-tab"},[n("h3",{staticClass:"c-tit"},[t._v("使用說明")])])}],c=n("9ab4"),r=n("1b40"),s=n("4f4c"),a=n("4c63"),u=n("0d59"),h=function(){function t(){this.iid="",this.content=""}return t}(),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.inputForm=new h,e.token=window.localStorage.getItem("teacherToken"),e}return Object(c["c"])(e,t),e.prototype.created=function(){return Object(c["a"])(this,void 0,void 0,(function(){var t,e;return Object(c["d"])(this,(function(n){switch(n.label){case 0:return t={iid:"1",token:this.token},[4,u["e"].teGet(t)];case 1:return e=n.sent(),this.assignDataToForm(e),[2]}}))}))},e.prototype.assignDataToForm=function(t){a["a"].checkToken(t.ERR_CODE);var e=t.info;this.inputForm.iid=e.iid,this.inputForm.content=e.content},e=Object(c["b"])([Object(r["a"])({components:{Header:s["b"],Footer:s["a"]}})],e),e}(r["d"]),l=d,f=(n("a65d"),n("2877")),p=Object(f["a"])(l,i,o,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-d895cde8.d339fbd1.js.map