(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ea6ddd0"],{"135c":function(t,e,s){t.exports=s.p+"img/role01.86aa94e6.png"},"4c63":function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var a=s("9ab4"),i=s("1b40"),r=s("0d59"),n=s("93f3"),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("teacherToken"),e}return Object(a["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/teacher/login"},e.prototype.checkToken=function(t){t!==n["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t,e;return Object(a["d"])(this,(function(s){switch(s.label){case 0:return t={token:this.token},[4,r["c"].teGetGrade(t)];case 1:return e=s.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(a["a"])(this,void 0,void 0,(function(){var e,s;return Object(a["d"])(this,(function(a){switch(a.label){case 0:return e={grade:t,token:this.token},[4,r["c"].teGetLevel(e)];case 1:return s=a.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e.prototype.getUnit=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t,e;return Object(a["d"])(this,(function(s){for(t={},e=1;e<=25;e++)t[e]={unit:"Unit-"+e};return t[26]={unit:"Midterm Exam"},t[27]={unit:"Final Exam"},t[28]={unit:"VIDEO Q"},t[29]={unit:"WORKSHOP"},[2,t]}))}))},e.prototype.getTECity=function(t){return Object(a["a"])(this,void 0,void 0,(function(){var e,s;return Object(a["d"])(this,(function(a){switch(a.label){case 0:return e={tid:t,token:this.token},[4,r["c"].getTECity(e)];case 1:return s=a.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e.prototype.getTESchool=function(t,e){return Object(a["a"])(this,void 0,void 0,(function(){var s,i;return Object(a["d"])(this,(function(a){switch(a.label){case 0:return s={cid:t,tid:e,token:this.token},[4,r["c"].getTESchool(s)];case 1:return i=a.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getTEClass=function(t,e){return Object(a["a"])(this,void 0,void 0,(function(){var s,i;return Object(a["d"])(this,(function(a){switch(a.label){case 0:return s={sid:t,tid:e,token:this.token},[4,r["c"].getTEClass(s)];case 1:return i=a.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getTeacher=function(t,e,s){return Object(a["a"])(this,void 0,void 0,(function(){var i,n;return Object(a["d"])(this,(function(a){switch(a.label){case 0:return i={type:t,clid:e,tid:s,token:this.token},[4,r["c"].teGetTeacher(i)];case 1:return n=a.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e}(i["d"]),o=c.instance},ad76:function(t,e,s){"use strict";s.r(e),s.d(e,"SearchForm",(function(){return u}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header",{attrs:{currentPage:"quiz"}}),a("div",{staticClass:"c-wrap1400"},[a("div",{staticClass:"c-tab"},[a("h3",{staticClass:"c-tit"},[t._v("測驗管理 / 測驗結果")]),a("div",{staticClass:"c-tab-group"},[a("router-link",{staticClass:"c-tab-red",attrs:{to:"/teacher/quiz/question"}},[t._v("題目管理")]),a("router-link",{staticClass:"c-tab-blue",attrs:{to:"/teacher/quiz/paper"}},[t._v("組卷管理")]),a("router-link",{staticClass:"c-tab-orange act",attrs:{to:"/teacher/quiz/result"}},[t._v("測驗結果查詢")])],1)]),a("div",{staticClass:"c-search-group"},[a("div",{staticClass:"c-search"},[a("div",{staticClass:"search-ui-box h-mr10"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.grade,expression:"searchForm.grade"}],staticClass:"select-sty h-w150",attrs:{name:"grade",id:"grade"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"grade",e.target.multiple?s:s[0])}}},[a("option",{attrs:{value:""}},[t._v("請選擇級數")]),t._l(t.gradeList,(function(e,s){return a("option",{key:s,domProps:{value:e.grade}},[t._v(t._s(e.grade))])}))],2)]),a("div",{staticClass:"search-ui-box h-mr10"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.cid,expression:"searchForm.cid"}],staticClass:"select-sty h-w180",attrs:{name:"cid",id:"cid"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"cid",e.target.multiple?s:s[0])},t.getTESchool]}},[a("option",{attrs:{value:""}},[t._v("請選擇上課分校縣市")]),t._l(t.cityList,(function(e,s){return a("option",{key:s,domProps:{value:e.cid}},[t._v(t._s(e.city))])}))],2)]),a("div",{staticClass:"search-ui-box h-mr10"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.sid,expression:"searchForm.sid"}],staticClass:"select-sty h-w180",attrs:{name:"sid",id:"sid"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"sid",e.target.multiple?s:s[0])},t.getTEClass]}},[a("option",{attrs:{value:""}},[t._v("請選擇上課分校")]),t._l(t.schoolList,(function(e,s){return a("option",{key:s,domProps:{value:e.sid}},[t._v(t._s(e.name))])}))],2)]),a("div",{staticClass:"search-ui-box h-mr10"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.clid,expression:"searchForm.clid"}],staticClass:"select-sty h-w180",attrs:{name:"clid",id:"clid"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchForm,"clid",e.target.multiple?s:s[0])}}},[a("option",{attrs:{value:""}},[t._v("請選擇班級")]),t._l(t.classList,(function(e,s){return a("option",{key:s,domProps:{value:e.clid}},[t._v(t._s(e.name))])}))],2)]),a("div",{staticClass:"search-ui-box h-mr10"},[t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.student,expression:"searchForm.student"}],staticClass:"input-sty h-w180",attrs:{type:"text",name:"student",id:"student"},domProps:{value:t.searchForm.student},on:{input:function(e){e.target.composing||t.$set(t.searchForm,"student",e.target.value)}}})]),a("div",{staticClass:"search-ui-box h-mr10"},[t._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.completeDate,expression:"searchForm.completeDate"}],staticClass:"input-sty  h-w180",attrs:{type:"date",name:"completeDate",id:"completeDate"},domProps:{value:t.searchForm.completeDate},on:{input:function(e){e.target.composing||t.$set(t.searchForm,"completeDate",e.target.value)}}})]),a("div",{staticClass:"search-ui-box h-flex"},[t._m(2),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.name,expression:"searchForm.name"}],staticClass:"input-sty",attrs:{type:"text",name:"name",id:"name"},domProps:{value:t.searchForm.name},on:{input:function(e){e.target.composing||t.$set(t.searchForm,"name",e.target.value)}}})]),a("div",{staticClass:"c-btn-area"},[a("a",{staticClass:"c-btn c-btn-search",on:{click:function(e){return e.preventDefault(),t.getResultList.apply(null,arguments)}}},[t._v("搜尋")])])]),a("img",{staticClass:"img-role01",attrs:{src:s("135c")}})]),a("ul",{staticClass:"c-list"},[t._m(3),t._l(t.resultList,(function(e,s){return a("li",{key:s},[a("div",{staticClass:"group-box-92"},[a("div",{staticClass:"box-16"},[t._v(t._s(e.name))]),a("div",{staticClass:"box-10"},[t._v(t._s(e.grade))]),a("div",{staticClass:"box-10"},[t._v(t._s(e.school))]),a("div",{staticClass:"box-10"},[t._v(t._s(e.city))]),a("div",{staticClass:"box-10"},[t._v(t._s(e.class))]),a("div",{staticClass:"box-10"},[t._v(t._s(e.teacher))]),a("div",{staticClass:"box-10"},[t._v(t._s(e.student))]),a("div",{staticClass:"box-8"},[t._v(t._s("1"===e.active?"":e.accuracy+"%"))]),a("div",{staticClass:"box-16"},[t._v(t._s(e.completeDate))])]),a("div",{staticClass:"box-8 c-operate"},[a("router-link",{attrs:{to:"/teacher/quiz/result/info?sqid="+e.sqid,title:"查看",alt:"查看"}},[a("i",{staticClass:"fa fa-pencil"})])],1)])})),a("p",{staticClass:"h-mt25 h-txt-grey"},[t._v("共"+t._s(t.num)+"筆資料")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.num>t.perpage,expression:"num > perpage"}],staticClass:"c-pagination"},[a("a",{staticClass:"c-page-prev",on:{click:function(e){return e.preventDefault(),t.getPageList(t.page-1)}}},[a("img",{attrs:{src:s("bbc6"),alt:"前一頁"}})]),t._l(t.maxPage,(function(e){return a("a",{key:e,class:{act:e==t.page},on:{click:function(s){return s.preventDefault(),t.getPageList(e)}}},[t._v(t._s(e))])})),a("a",{on:{click:function(e){return e.preventDefault(),t.getPageList(t.page+1)}}},[a("img",{attrs:{src:s("bbc6"),alt:"下一頁"}})])],2)],2)]),a("Footer")],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"tit"}},[s("span",[t._v("學生姓名")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"tit"}},[s("span",[t._v("測驗日期")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"tit"}},[s("span",[t._v("測驗名稱")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"title"},[s("div",{staticClass:"group-box-92"},[s("div",{staticClass:"box-16"},[t._v("測驗名稱")]),s("div",{staticClass:"box-10"},[t._v("級數")]),s("div",{staticClass:"box-10"},[t._v("分校名稱")]),s("div",{staticClass:"box-10"},[t._v("縣市")]),s("div",{staticClass:"box-10"},[t._v("班級名稱")]),s("div",{staticClass:"box-10"},[t._v("組卷老師")]),s("div",{staticClass:"box-10"},[t._v("學生姓名")]),s("div",{staticClass:"box-8"},[t._v("正確率")]),s("div",{staticClass:"box-16"},[t._v("測驗日期")])]),s("div",{staticClass:"box-8"},[t._v("查看試卷")])])}],r=s("9ab4"),n=s("1b40"),c=s("4f4c"),o=s("0d59"),l=s("4c63"),u=function(){function t(){this.grade="",this.cid="",this.sid="",this.clid="",this.student="",this.date="",this.name=""}return t}(),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.searchForm=new u,e.cityList={},e.schoolList={},e.classList={},e.resultList={},e.gradeList={},e.num=0,e.page=1,e.perpage=50,e.maxPage=0,e.tid=window.localStorage.getItem("teacher_tid"),e.token=window.localStorage.getItem("teacherToken"),e}return Object(r["c"])(e,t),e.prototype.created=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(s){switch(s.label){case 0:return this.getResultList(),t=this,[4,l["a"].getTECity(this.tid)];case 1:return t.cityList=s.sent(),e=this,[4,l["a"].getGrade()];case 2:return e.gradeList=s.sent(),[2]}}))}))},e.prototype.getTESchool=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(s){switch(s.label){case 0:return this.searchForm.sid="",this.searchForm.clid="",t=this.searchForm.cid,e=this,[4,l["a"].getTESchool(t,this.tid)];case 1:return e.schoolList=s.sent(),this.classList=[],[2]}}))}))},e.prototype.getTEClass=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(s){switch(s.label){case 0:return this.searchForm.clid="",t=this.searchForm.sid,e=this,[4,l["a"].getTEClass(t,this.tid)];case 1:return e.classList=s.sent(),[2]}}))}))},e.prototype.getResultList=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(s){switch(s.label){case 0:return t={page:this.page,perpage:this.perpage,grade:this.searchForm.grade,cid:this.searchForm.cid,sid:this.searchForm.sid,clid:this.searchForm.clid,student:this.searchForm.student,date:this.searchForm.date,name:this.searchForm.name,tid:this.tid,token:this.token},[4,o["f"].teGetResultList(t)];case 1:return e=s.sent(),l["a"].checkToken(e.ERR_CODE),this.num=e.num,this.resultList=e.list,this.maxPage=Math.ceil(this.num/this.perpage),[2]}}))}))},e.prototype.getPageList=function(t){this.page=t<1?1:t>this.maxPage?this.maxPage:t,this.getResultList()},e=Object(r["b"])([Object(n["a"])({components:{Header:c["b"],Footer:c["a"]}})],e),e}(n["d"]),h=d,v=(s("a65d"),s("2877")),m=Object(v["a"])(h,a,i,!1,null,null,null);e["default"]=m.exports},bbc6:function(t,e,s){t.exports=s.p+"img/iocn_arrow.89c14ccc.svg"}}]);
//# sourceMappingURL=chunk-3ea6ddd0.9463b9a7.js.map