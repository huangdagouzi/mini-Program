webpackJsonp([4],{B4nW:function(t,e){},MpTN:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=new(i("7+uW").default),n={data:function(){var t=this;return{collapse:!1,fullscreen:!1,name:"username",message:2,modifyPwdVisible:!1,modifyPwdData:{oldPwd:"",newPwd:"",newPwdConfirm:""},rules:{newPwd:[{required:!0,validator:function(e,i,s){""===i?s(new Error("请输入密码")):(""!==t.modifyPwdData.newPwdConfirm&&t.$refs.form.validateField("newPwdConfirm"),s())},trigger:"blur"}],newPwdConfirm:[{required:!0,validator:function(e,i,s){""===i?s(new Error("请再次输入密码")):i!==t.modifyPwdData.newPwd?s(new Error("两次输入的密码不一致")):s()},trigger:"blur"}]}}},computed:{username:function(){var t=localStorage.getItem("aide_username");return t||this.name}},methods:{handleCommand:function(t){"loginout"==t?(localStorage.removeItem("aide_username"),this.$router.push("/login")):"modify"==t&&(this.modifyPwdVisible=!0)},collapseChage:function(){this.collapse=!this.collapse,s.$emit("collapse",this.collapse)},onSubmit:function(){this.$refs.form.validate(function(t){if(!t)return console.log("error submit!!"),!1;console.log("success")})}},mounted:function(){document.body.clientWidth<1500&&this.collapseChage()}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{staticClass:"collapse-btn",on:{click:t.collapseChage}},[i("i",{staticClass:"el-icon-menu"})]),t._v(" "),i("div",{staticClass:"logo"},[t._v("仓单管理系统")]),t._v(" "),i("div",{staticClass:"header-right"},[i("div",{staticClass:"header-user-con"},[i("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:t.handleCommand}},[i("span",{staticClass:"el-dropdown-link"},[t._v("\n                    "+t._s(t.username)+" "),i("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{divided:"",command:"modify"}},[t._v("修改密码")]),t._v(" "),i("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[t._v("退出登录")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"修改密码",visible:t.modifyPwdVisible,width:"20%"},on:{"update:visible":function(e){t.modifyPwdVisible=e}}},[i("el-form",{ref:"form",attrs:{model:t.modifyPwdData,rules:t.rules,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"原密码",prop:"oldPwd"}},[i("el-input",{attrs:{type:"password",placeholder:"原密码"},model:{value:t.modifyPwdData.oldPwd,callback:function(e){t.$set(t.modifyPwdData,"oldPwd","string"==typeof e?e.trim():e)},expression:"modifyPwdData.oldPwd"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"密码",prop:"newPwd"}},[i("el-input",{attrs:{type:"password",placeholder:"新密码"},model:{value:t.modifyPwdData.newPwd,callback:function(e){t.$set(t.modifyPwdData,"newPwd","string"==typeof e?e.trim():e)},expression:"modifyPwdData.newPwd"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"确认密码",prop:"newPwdConfirm"}},[i("el-input",{attrs:{type:"password",placeholder:"确认密码"},model:{value:t.modifyPwdData.newPwdConfirm,callback:function(e){t.$set(t.modifyPwdData,"newPwdConfirm","string"==typeof e?e.trim():e)},expression:"modifyPwdData.newPwdConfirm"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.modifyPwdVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.onSubmit()}}},[t._v("确 定")])],1)],1)],1)])])},staticRenderFns:[]};var o=i("VU/8")(n,a,!1,function(t){i("NmQf")},"data-v-393f4a54",null).exports,l=i("cXVZ"),r={data:function(){return{collapse:!1,warningNum:0,items:[{icon:"el-icon-all-home",index:"Index",title:"首页"},{icon:"el-icon-all-warning",index:"Warning",title:"预警信息"},{icon:"el-icon-all-economy",index:"GetContract",title:"持有仓单"},{icon:"el-icon-all-user",index:"CustomerInfo",title:"客户信息"},{icon:"el-icon-all-STATISTICS",index:"Statistics",title:"统计信息",subs:[{index:"permission",title:"仓单信息",subs:[{index:"NotCleardBusiness",title:"未结清业务"},{index:"CleardBusiness",title:"已结清业务"}]},{index:"AccountRecord",title:"出账记录"},{index:"1",title:"预警信息",subs:[{index:"CurrentWarning",title:"当前预警"},{index:"HistoryWarning",title:"历史预警"}]}]}]}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var t=this;s.$on("collapse",function(e){t.collapse=e})},mounted:function(){this.getWarningNum()},methods:{getWarningNum:function(){var t=this;this.axios.get(l.j,{params:{status:0}}).then(function(e){t.warningNum=e.data.page.total})}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar"},[i("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""}},[t._l(t.items,function(e){return["Warning"==e.index?i("el-badge",{staticClass:"item",attrs:{value:t.warningNum}}):t._e(),t._v(" "),e.subs?[i("el-submenu",{key:e.index,attrs:{index:e.index}},[i("template",{slot:"title"},[i("i",{class:e.icon}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._v(" "),t._l(e.subs,function(e){return[e.subs?i("el-submenu",{key:e.index,attrs:{index:e.index}},[i("template",{slot:"title"},[t._v(t._s(e.title))]),t._v(" "),t._l(e.subs,function(e,s){return i("el-menu-item",{key:s,attrs:{index:e.index}},[t._v("\n                "+t._s(e.title)+"\n              ")])})],2):i("el-menu-item",{key:e.index,attrs:{index:e.index}},[t._v("\n              "+t._s(e.title)+"\n            ")])]})],2)]:[i("el-menu-item",{key:e.index,attrs:{index:e.index}},[i("i",{class:e.icon}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])]]})],2)],1)},staticRenderFns:[]};var c={data:function(){return{tagsList:[]}},methods:{isActive:function(t){return t===this.$route.fullPath},closeTags:function(t){var e=this.tagsList.splice(t,1)[0],i=this.tagsList[t]?this.tagsList[t]:this.tagsList[t-1];i?e.path===this.$route.fullPath&&this.$router.push(i.path):this.$router.push("/")},closeAll:function(){this.tagsList=[],this.$router.push("/")},closeOther:function(){var t=this,e=this.tagsList.filter(function(e){return e.path===t.$route.fullPath});this.tagsList=e},setTags:function(t){this.tagsList.some(function(e){return e.path===t.fullPath})||(this.tagsList.length>=8&&this.tagsList.shift(),this.tagsList.push({title:t.meta.title,path:t.fullPath,name:t.matched[1].components.default.name})),s.$emit("tags",this.tagsList)},handleTags:function(t){"other"===t?this.closeOther():this.closeAll()}},computed:{showTags:function(){return this.tagsList.length>0}},watch:{$route:function(t,e){this.setTags(t)}},created:function(){this.setTags(this.$route)}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.showTags?i("div",{staticClass:"tags"},[i("ul",t._l(t.tagsList,function(e,s){return i("li",{key:s,staticClass:"tags-li",class:{active:t.isActive(e.path)}},[i("router-link",{staticClass:"tags-li-title",attrs:{to:e.path}},[t._v("\n                "+t._s(e.title)+"\n            ")]),t._v(" "),i("span",{staticClass:"tags-li-icon",on:{click:function(e){t.closeTags(s)}}},[i("i",{staticClass:"el-icon-close"})])],1)}),0),t._v(" "),i("div",{staticClass:"tags-close-box"},[i("el-dropdown",{on:{command:t.handleTags}},[i("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("\n                标签选项"),i("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown",size:"small"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{command:"other"}},[t._v("关闭其他")]),t._v(" "),i("el-dropdown-item",{attrs:{command:"all"}},[t._v("关闭所有")])],1)],1)],1)]):t._e()},staticRenderFns:[]};var m={data:function(){return{tagsList:[],collapse:!1}},components:{vHead:o,vSidebar:i("VU/8")(r,d,!1,function(t){i("B4nW")},"data-v-296c17c5",null).exports,vTags:i("VU/8")(c,u,!1,function(t){i("aDet")},null,null).exports},created:function(){var t=this;s.$on("collapse",function(e){t.collapse=e}),s.$on("tags",function(e){for(var i=[],s=0,n=e.length;s<n;s++)e[s].name&&i.push(e[s].name);t.tagsList=i})}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("v-head"),this._v(" "),e("v-sidebar"),this._v(" "),e("div",{staticClass:"content-box",class:{"content-collapse":this.collapse}},[e("v-tags"),this._v(" "),e("div",{staticClass:"content"},[e("transition",{attrs:{name:"move",mode:"out-in"}},[e("keep-alive",{attrs:{include:this.tagsList}},[e("router-view",{key:this.$route.fullPath})],1)],1)],1)],1)],1)},staticRenderFns:[]},h=i("VU/8")(m,f,!1,null,null,null);e.default=h.exports},NmQf:function(t,e){},aDet:function(t,e){}});
//# sourceMappingURL=4.20a7d2d8cb6a67aa0dc3.js.map