(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd1eefba"],{"088f":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("9ab4"),a=n("1b40"),s=n("0d59"),c=n("93f3"),o=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("studentToken"),e}return Object(i["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/student/login"},e.prototype.checkToken=function(t){t!==c["a"].InvalidToken||this.logout()},e.prototype.getAllCity=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(n){switch(n.label){case 0:return t={token:this.token},[4,s["a"].stGetAllCity(t)];case 1:return e=n.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getRegion=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,n;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={cid:t,token:this.token},[4,s["a"].stGetRegion(e)];case 1:return n=i.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e}(a["d"]),r=o.instance},9081:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("STHeader",{attrs:{currentPage:"video"}}),i("div",{staticClass:"c-wrap1400"},[t._m(0),i("div",{staticClass:"c-videos-group"},t._l(t.videoList,(function(e,n){return i("router-link",{key:n,staticClass:"c-videos-item",attrs:{to:"/student/video/info?vid="+e.vid}},[i("img",{attrs:{src:"https://img.youtube.com/vi/"+e.link+"/hqdefault.jpg"}}),i("p",[t._v(t._s(e.title))])])})),1),i("p",{staticClass:"h-mt25 h-txt-grey"},[t._v("共"+t._s(t.num)+"筆資料")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.num>t.perpage,expression:"num > perpage"}],staticClass:"c-pagination"},[i("a",{staticClass:"c-page-prev",on:{click:function(e){return e.preventDefault(),t.getPageList(t.page-1)}}},[i("img",{attrs:{src:n("bbc6"),alt:"前一頁"}})]),t._l(t.maxPage,(function(e){return i("a",{key:e,class:{act:e==t.page},on:{click:function(n){return n.preventDefault(),t.getPageList(e)}}},[t._v(t._s(e))])})),i("a",{on:{click:function(e){return e.preventDefault(),t.getPageList(t.page+1)}}},[i("img",{attrs:{src:n("bbc6"),alt:"下一頁"}})])],2)]),i("STFooter")],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-tab"},[n("h3",{staticClass:"c-tit"},[t._v("訓練影片")])])}],s=n("9ab4"),c=n("1b40"),o=n("4f4c"),r=n("0d59"),u=n("088f"),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.videoList={},e.num=0,e.page=1,e.perpage=50,e.maxPage=0,e.token=window.localStorage.getItem("studentToken"),e}return Object(s["c"])(e,t),e.prototype.created=function(){this.getVideoList()},e.prototype.getVideoList=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(n){switch(n.label){case 0:return t={page:this.page,perpage:this.perpage,token:this.token},[4,r["l"].stGetList(t)];case 1:return e=n.sent(),u["a"].checkToken(e.ERR_CODE),this.num=e.num,this.videoList=e.list,this.maxPage=Math.ceil(this.num/this.perpage),[2]}}))}))},e.prototype.getPageList=function(t){this.page=t<1?1:t>this.maxPage?this.maxPage:t,this.getVideoList()},e=Object(s["b"])([Object(c["a"])({components:{STHeader:o["d"],STFooter:o["c"]}})],e),e}(c["d"]),p=l,g=(n("a65d"),n("2877")),d=Object(g["a"])(p,i,a,!1,null,null,null);e["default"]=d.exports},bbc6:function(t,e,n){t.exports=n.p+"img/iocn_arrow.89c14ccc.svg"}}]);
//# sourceMappingURL=chunk-fd1eefba.bc963bcd.js.map