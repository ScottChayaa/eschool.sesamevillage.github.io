(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d3affc4"],{"407b":function(t,e,i){t.exports=i.p+"img/role04.cf3e6cb5.png"},"4c63":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var s=i("9ab4"),n=i("1b40"),a=i("0d59"),o=i("93f3"),r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("teacherToken"),e}return Object(s["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/teacher/login"},e.prototype.checkToken=function(t){t!==o["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,a["c"].teGetGrade(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={grade:t,token:this.token},[4,a["c"].teGetLevel(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getUnit=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(i){for(t={},e=1;e<=25;e++)t[e]={unit:"Unit-"+e};return t[26]={unit:"Midterm Exam"},t[27]={unit:"Final Exam"},[2,t]}))}))},e.prototype.getTECity=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={tid:t,token:this.token},[4,a["c"].getTECity(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getTESchool=function(t,e){return Object(s["a"])(this,void 0,void 0,(function(){var i,n;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return i={cid:t,tid:e,token:this.token},[4,a["c"].getTESchool(i)];case 1:return n=s.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getTEClass=function(t,e){return Object(s["a"])(this,void 0,void 0,(function(){var i,n;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return i={sid:t,tid:e,token:this.token},[4,a["c"].getTEClass(i)];case 1:return n=s.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getTeacher=function(t,e,i){return Object(s["a"])(this,void 0,void 0,(function(){var n,o;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return n={type:t,clid:e,tid:i,token:this.token},[4,a["c"].teGetTeacher(n)];case 1:return o=s.sent(),this.checkToken(o.ERR_CODE),[2,o.list]}}))}))},e}(n["d"]),c=r.instance},cf4d:function(t,e,i){"use strict";i.r(e),i.d(e,"QuizForm",(function(){return l}));var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header",{attrs:{currentPage:"quiz"}}),s("div",{staticClass:"c-wrap1400"},[t._m(0),s("div",{staticClass:"c-item-group"},[s("div",{staticClass:"c-item h-flex-column"},[s("div",[s("div",{staticClass:"input-box box-20"},[s("label",{attrs:{for:"tit"}},[t._v("測驗分校")]),s("span",[t._v(t._s(t.quizForm.city)+" "+t._s(t.quizForm.school))])]),s("div",{staticClass:"input-box box-20"},[s("label",{attrs:{for:"tit"}},[t._v("測驗班級")]),s("span",[t._v(t._s(t.quizForm.class))])]),s("div",{staticClass:"input-box box-20"},[s("label",{attrs:{for:"tit"}},[t._v("測驗名稱")]),s("span",[t._v(t._s(t.quizForm.name))])]),s("div",{staticClass:"input-box box-20"},[s("label",{attrs:{for:"tit"}},[t._v("級數")]),s("span",[t._v(t._s(t.quizForm.grade))])])]),s("div",[s("div",{staticClass:"input-box box-20"},[s("label",{attrs:{for:"tit"}},[t._v("Level")]),s("span",[t._v(t._s(t.quizForm.level))])]),s("div",{staticClass:"input-box box-20"},[s("label",{attrs:{for:"tit"}},[t._v("單元")]),s("span",[t._v(t._s(t.quizForm.unit))])]),s("div",{staticClass:"input-box box-20"},[s("label",{attrs:{for:"tit"}},[t._v("測驗日期")]),s("span",[t._v(t._s(t.quizForm.beginTime)+" ～ "+t._s(t.quizForm.endTime))])])])]),s("img",{staticClass:"img-role04",attrs:{src:i("407b")}})]),s("div",{staticClass:"c-tit-bar"},[t._v("題目內容")]),t._l(t.questionList,(function(e,i){return s("div",{key:i,staticClass:"input-box-w c-exam-group"},[s("div",{staticClass:"h-flexSpaceB-ju"},[s("div",{staticClass:"h-flexColumn h-box100"},[s("div",{staticClass:"input-box input-box-w"},[s("p",{staticClass:"exam-tit",domProps:{innerHTML:t._s(i+1+". "+e.question.replace(/\r\n/g,"<br/>").replace(/\n/g,"<br/>"))}})]),s("div",{staticClass:"input-box input-box-w"},[s("div",{staticClass:"check-list"},t._l(Object.keys(e.option).length,(function(n){return s("label",{key:n,staticClass:"h-flexStart-ai c-exam-option-box",attrs:{for:"option"+(i+1)+"_"+n}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"item.answer"}],staticClass:"radio-box",attrs:{type:"radio",name:"option"+(i+1),id:"option"+(i+1)+"_"+n,disabled:""},domProps:{value:n,checked:t._q(e.answer,n)},on:{change:function(i){return t.$set(e,"answer",n)}}}),s("div",{staticClass:"radio-box"}),"1"===e.type&&"2"===e.option[n].type||"2"===e.type?s("span",{staticClass:"c-exam-option",class:{act:e.answer==n}},[t._v(t._s("1"===e.type?e.option[n].text:e.option[n]))]):t._e(),"1"===e.type&&"1"===e.option[n].type?s("div",{staticClass:"box-85"},[s("img",{staticClass:"img-exam-option",attrs:{src:e.option[n].pic,alt:""}})]):t._e(),e.answer==n?s("label",{staticClass:"correct"},[t._v("正確")]):t._e()])})),0),"3"===e.type?s("textarea",{staticClass:"input-sty c-exam-desc",attrs:{name:"note"+(i+1),id:"note"+(i+1),disabled:""}}):t._e(),"3"===e.type?s("p",{staticClass:"h-my10 h-pt10"},[t._v("參考答案")]):t._e(),"3"===e.type?s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.suggestAns,expression:"item.suggestAns"}],staticClass:"input-sty c-exam-desc",attrs:{disabled:""},domProps:{value:e.suggestAns},on:{input:function(i){i.target.composing||t.$set(e,"suggestAns",i.target.value)}}}):t._e()])]),""!=e.audio||""!=e.pic?s("div",{staticClass:"h-flexColumnEnd-ai h-box100"},[""!=e.audio?s("div",[s("a",{staticClass:"c-btn h-fz14",on:{click:function(e){return t.$refs.audio[i].play()}}},[s("i",{staticClass:"fa fa-play"}),t._v(" 播放題目音檔 ")]),s("audio",{ref:"audio",refInFor:!0,attrs:{controls:"controls",src:e.audio,hidden:""}})]):t._e(),""!=e.pic?s("div",{staticClass:"c-examImg-wrap h-mt30"},[s("img",{attrs:{src:e.pic,alt:""}})]):t._e()]):t._e()])])})),s("div",{staticClass:"c-btn-area h-mt50"},[s("router-link",{staticClass:"c-btn c-btn-cancel h-mr30",attrs:{to:"/teacher/quiz/paper"}},[t._v("取消")])],1)],2),s("Footer")],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"c-tab"},[i("h3",{staticClass:"c-tit"},[t._v("測驗管理 / 試卷內容")])])}],a=i("9ab4"),o=i("1b40"),r=i("4f4c"),c=i("0d59"),u=i("4c63"),l=function(){function t(){this.name="",this.beginTime="",this.endTime="",this.city="",this.school="",this.class="",this.teacher="",this.grade="",this.unit="",this.level="",this.num=0,this.qid=""}return t}(),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.quizForm=new l,e.questionList={},e.token=window.localStorage.getItem("teacherToken"),e}return Object(a["c"])(e,t),e.prototype.created=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t,e;return Object(a["d"])(this,(function(i){switch(i.label){case 0:return t={qid:this.$route.query.qid,token:this.token},[4,c["f"].teGetPaperInfo(t)];case 1:return e=i.sent(),this.assignDataToForm(e),[2]}}))}))},e.prototype.assignDataToForm=function(t){u["a"].checkToken(t.ERR_CODE);var e=t.info;this.quizForm.qid=e.qid,this.quizForm.name=e.name,this.quizForm.beginTime=e.beginTime,this.quizForm.endTime=e.endTime,this.quizForm.city=e.city,this.quizForm.school=e.school,this.quizForm.class=e.class,this.quizForm.teacher=e.teacher,this.quizForm.grade=e.grade,this.quizForm.unit=e.unit,this.quizForm.level=e.level,this.quizForm.num=e.num,this.questionList=t.list},e=Object(a["b"])([Object(o["a"])({components:{Header:r["b"],Footer:r["a"]}})],e),e}(o["d"]),h=d,p=(i("a65d"),i("2877")),v=Object(p["a"])(h,s,n,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-6d3affc4.53cc97a5.js.map