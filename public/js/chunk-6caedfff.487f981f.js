(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6caedfff"],{"088f":function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var a=s("9ab4"),i=s("1b40"),n=s("0d59"),c=s("93f3"),r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("studentToken"),e}return Object(a["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/student/login"},e.prototype.checkToken=function(t){t!==c["a"].InvalidToken||this.logout()},e.prototype.getAllCity=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t,e;return Object(a["d"])(this,(function(s){switch(s.label){case 0:return t={token:this.token},[4,n["a"].stGetAllCity(t)];case 1:return e=s.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getRegion=function(t){return Object(a["a"])(this,void 0,void 0,(function(){var e,s;return Object(a["d"])(this,(function(a){switch(a.label){case 0:return e={cid:t,token:this.token},[4,n["a"].stGetRegion(e)];case 1:return s=a.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e}(i["d"]),o=r.instance},"135c":function(t,e,s){t.exports=s.p+"img/role01.86aa94e6.png"},bbc6:function(t,e,s){t.exports=s.p+"img/iocn_arrow.89c14ccc.svg"},e59f:function(t,e,s){"use strict";s.r(e),s.d(e,"SearchForm",(function(){return u}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("STHeader",{attrs:{currentPage:"quiz"}}),a("div",{staticClass:"c-wrap1400"},[a("div",{staticClass:"c-tab"},[a("h3",{staticClass:"c-tit"},[t._v("線上測驗 / 測驗結果")]),a("div",{staticClass:"c-tab-group"},[a("router-link",{staticClass:"c-tab-red",attrs:{to:"/student/quiz"}},[t._v("線上測驗")])],1)]),a("div",{staticClass:"c-search-group"},[a("div",{staticClass:"c-search"},[a("div",{staticClass:"h-flexCenter-ai"},[a("div",{staticClass:"search-ui-box h-w250 h-mr10 h-flexCenter-ai"},[t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.date,expression:"searchForm.date"}],staticClass:"input-sty",attrs:{type:"date",name:"date",id:"date"},domProps:{value:t.searchForm.date},on:{input:function(e){e.target.composing||t.$set(t.searchForm,"date",e.target.value)}}})]),a("div",{staticClass:"search-ui-box h-flexCenter-ai"},[t._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.name,expression:"searchForm.name"}],staticClass:"input-sty",attrs:{type:"text",name:"name",id:"name"},domProps:{value:t.searchForm.name},on:{input:function(e){e.target.composing||t.$set(t.searchForm,"name",e.target.value)}}})])]),a("div",{staticClass:"c-btn-area"},[a("a",{staticClass:"c-btn c-btn-search",on:{click:function(e){return e.preventDefault(),t.getResultList.apply(null,arguments)}}},[t._v("搜尋")])])]),a("img",{staticClass:"img-role01",attrs:{src:s("135c")}})]),a("ul",{staticClass:"c-list"},[t._m(2),t._l(t.resultList,(function(e,s){return a("li",{key:s},[a("div",{staticClass:"group-box-92"},[a("div",{staticClass:"box-16"},[t._v(t._s(e.name))]),a("div",{staticClass:"box-10"},[t._v(t._s(e.grade))]),a("div",{staticClass:"box-10"},[t._v(t._s(e.school))]),a("div",{staticClass:"box-10"},[t._v(t._s(e.city))]),a("div",{staticClass:"box-10"},[t._v(t._s(e.class))]),a("div",{staticClass:"box-10"},[t._v(t._s(e.teacher))]),a("div",{staticClass:"box-10"},[t._v(t._s(e.student))]),a("div",{staticClass:"box-8"},[t._v(t._s("1"===e.active?"":e.accuracy+"%"))]),a("div",{staticClass:"box-16"},[t._v(t._s(e.completeDate))])]),a("div",{staticClass:"box-8 c-operate"},[a("router-link",{attrs:{to:"/student/quiz/result/info?sqid="+e.sqid,title:"查看",alt:"查看"}},[a("i",{staticClass:"fa fa-pencil"})])],1)])})),a("p",{staticClass:"h-mt25 h-txt-grey"},[t._v("共"+t._s(t.num)+"筆資料")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.num>t.perpage,expression:"num > perpage"}],staticClass:"c-pagination"},[a("a",{staticClass:"c-page-prev",on:{click:function(e){return e.preventDefault(),t.getPageList(t.page-1)}}},[a("img",{attrs:{src:s("bbc6"),alt:"前一頁"}})]),t._l(t.maxPage,(function(e){return a("a",{key:e,class:{act:e==t.page},on:{click:function(s){return s.preventDefault(),t.getPageList(e)}}},[t._v(t._s(e))])})),a("a",{on:{click:function(e){return e.preventDefault(),t.getPageList(t.page+1)}}},[a("img",{attrs:{src:s("bbc6"),alt:"下一頁"}})])],2)],2)]),a("STFooter")],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"tit"}},[s("span",[t._v("測驗日期")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"tit"}},[s("span",[t._v("測驗名稱")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"title"},[s("div",{staticClass:"group-box-92"},[s("div",{staticClass:"box-16"},[t._v("測驗名稱")]),s("div",{staticClass:"box-10"},[t._v("級數")]),s("div",{staticClass:"box-10"},[t._v("分校名稱")]),s("div",{staticClass:"box-10"},[t._v("縣市")]),s("div",{staticClass:"box-10"},[t._v("班級名稱")]),s("div",{staticClass:"box-10"},[t._v("組卷老師")]),s("div",{staticClass:"box-10"},[t._v("學生姓名")]),s("div",{staticClass:"box-8"},[t._v("正確率")]),s("div",{staticClass:"box-16"},[t._v("測驗日期")])]),s("div",{staticClass:"box-8"},[t._v("查看試卷")])])}],n=s("9ab4"),c=s("1b40"),r=s("4f4c"),o=s("0d59"),l=s("088f"),u=function(){function t(){this.date="",this.name=""}return t}(),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.searchForm=new u,e.resultList={},e.num=0,e.page=1,e.perpage=50,e.maxPage=0,e.stid=window.localStorage.getItem("student_stid"),e.token=window.localStorage.getItem("studentToken"),e}return Object(n["c"])(e,t),e.prototype.created=function(){this.getResultList()},e.prototype.getResultList=function(){return Object(n["a"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(s){switch(s.label){case 0:return t={page:this.page,perpage:this.perpage,date:this.searchForm.date,name:this.searchForm.name,stid:this.stid,token:this.token},[4,o["f"].stGetResultList(t)];case 1:return e=s.sent(),l["a"].checkToken(e.ERR_CODE),this.num=e.num,this.resultList=e.list,this.maxPage=Math.ceil(this.num/this.perpage),[2]}}))}))},e.prototype.getPageList=function(t){this.page=t<1?1:t>this.maxPage?this.maxPage:t,this.getResultList()},e=Object(n["b"])([Object(c["a"])({components:{STHeader:r["d"],STFooter:r["c"]}})],e),e}(c["d"]),v=d,p=(s("a65d"),s("2877")),h=Object(p["a"])(v,a,i,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-6caedfff.487f981f.js.map