webpackJsonp([5],{P7ry:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i("cXVZ");var o={data:function(){var e=this;return{checked:!1,ruleForm:{username:"",password:""},forgetPwdVisible:!1,bindingDialog:!1,forgetPwdData:{phone:"",vCode:"",newPwd:"",newPwdConfirm:""},bindForm:{username:"",phone:"",vCode:"",btntxt:"获取验证码",disabled:!1,time:0},btntxt:"获取验证码",disabled:!1,time:0,rules:{phone:[{required:!0,message:"请输入手机号",trigger:"blur"}],vCode:[{required:!0,message:"请输入验证码",trigger:"blur"}],newPwd:[{required:!0,validator:function(t,i,o){""===i?o(new Error("请输入密码")):(""!==e.forgetPwdData.newPwdConfirm&&e.$refs.form.validateField("newPwdConfirm"),o())},trigger:"blur"}],newPwdConfirm:[{required:!0,validator:function(t,i,o){""===i?o(new Error("请再次输入密码")):i!==e.forgetPwdData.newPwd?o(new Error("两次输入的密码不一致")):o()},trigger:"blur"}]}}},mounted:function(){this.getUsername()},methods:{login:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.ruleForm.username,t.$md5(t.ruleForm.password);localStorage.setItem("aide_username","system"),t.bindingDialog=!0,t.bindForm.username=localStorage.getItem("aide_username")})},sendcode:function(){var e=this,t="/nptOfficialWebsite/apply/sendSms?mobile="+this.forgetPwdData.phone;""!=this.forgetPwdData.phone?(this.time=60,this.disabled=!0,this.timer(),axios.post(t).then(function(t){e.phonedata=t.data})):this.$message({message:"请输入绑定手机号",type:"warning"})},timer:function(){this.time>0?(this.time--,this.btntxt=this.time+"s",setTimeout(this.timer,1e3)):(this.time=0,this.btntxt="获取验证码",this.disabled=!1)},bindsendcode:function(){var e=this,t="/nptOfficialWebsite/apply/sendSms?mobile="+this.bindForm.phone;""!=this.bindForm.phone?(this.bindForm.time=60,this.bindForm.disabled=!0,this.bindtimer(),axios.post(t).then(function(t){e.phonedata=t.data})):this.$message({message:"请输入绑定手机号",type:"warning"})},bindtimer:function(){this.bindForm.time>0?(this.bindForm.time--,this.bindForm.btntxt=this.bindForm.time+"s",setTimeout(this.bindtimer,1e3)):(this.bindForm.time=0,this.bindForm.btntxt="获取验证码",this.bindForm.disabled=!1)},onSubmit:function(){this.$refs.form.validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log("success")})},findPwd:function(){this.forgetPwdVisible=!0},getUsername:function(){this.ruleForm.username=localStorage.getItem("aide_username")},bindFormSubmit:function(){this.$router.push("/")}}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login-wrap"},[i("div",{staticClass:"ms-login"},[i("div",{staticClass:"ms-title"},[e._v("仓单业务风险管理系统")]),e._v(" "),i("el-form",{ref:"ruleForm",staticClass:"ms-content",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"0px"}},[i("el-form-item",{attrs:{prop:"username"}},[i("el-input",{attrs:{placeholder:"用户名"},on:{change:function(t){e.ruleForm.username=t}},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}},[i("el-button",{attrs:{slot:"prepend",icon:"el-icon-all-user"},slot:"prepend"})],1)],1),e._v(" "),i("el-form-item",{attrs:{prop:"password"}},[i("el-input",{attrs:{type:"password",placeholder:"密码"},on:{change:function(t){e.ruleForm.password=t}},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.login("ruleForm")}},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}},[i("el-button",{attrs:{slot:"prepend",icon:"el-icon-all-password"},slot:"prepend"})],1)],1),e._v(" "),i("div",{staticClass:"login-select"},[i("el-checkbox",{staticStyle:{color:"#a0a0a0"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("记住帐户")]),e._v(" "),i("span",{staticClass:"forgetPwd",on:{click:e.findPwd}},[e._v("忘记密码")])],1),e._v(" "),i("div",{staticClass:"login-btn"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.login("ruleForm")}}},[e._v("登录")])],1),e._v(" "),i("p",{staticClass:"login-tips"},[e._v("Tips : 请输入用户名和密码。")])],1),e._v(" "),i("el-dialog",{attrs:{title:"忘记密码",visible:e.forgetPwdVisible,width:"300px"},on:{"update:visible":function(t){e.forgetPwdVisible=t}}},[i("el-form",{ref:"form",attrs:{model:e.forgetPwdData,rules:e.rules,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[i("el-input",{attrs:{type:"text"},model:{value:e.forgetPwdData.phone,callback:function(t){e.$set(e.forgetPwdData,"phone","string"==typeof t?t.trim():t)},expression:"forgetPwdData.phone"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"验证码",prop:"vCode",width:"30%"}},[i("el-input",{staticStyle:{width:"80px"},attrs:{type:"text"},model:{value:e.forgetPwdData.vCode,callback:function(t){e.$set(e.forgetPwdData,"vCode","string"==typeof t?t.trim():t)},expression:"forgetPwdData.vCode"}}),e._v(" "),i("el-button",{attrs:{disabled:e.disabled},on:{click:e.sendcode}},[e._v(e._s(e.btntxt))])],1),e._v(" "),i("el-form-item",{attrs:{label:"新密码",prop:"newPwd"}},[i("el-input",{attrs:{type:"password"},model:{value:e.forgetPwdData.newPwd,callback:function(t){e.$set(e.forgetPwdData,"newPwd","string"==typeof t?t.trim():t)},expression:"forgetPwdData.newPwd"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"确认密码",prop:"newPwdConfirm"}},[i("el-input",{attrs:{type:"password",placeholder:"请重复新密码"},model:{value:e.forgetPwdData.newPwdConfirm,callback:function(t){e.$set(e.forgetPwdData,"newPwdConfirm","string"==typeof t?t.trim():t)},expression:"forgetPwdData.newPwdConfirm"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.forgetPwdVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确 定")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"绑定手机",visible:e.bindingDialog,width:"300px"},on:{"update:visible":function(t){e.bindingDialog=t}}},[i("el-form",{ref:"form",attrs:{model:e.bindForm,rules:e.rules,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[i("el-input",{attrs:{type:"text"},model:{value:e.bindForm.phone,callback:function(t){e.$set(e.bindForm,"phone","string"==typeof t?t.trim():t)},expression:"bindForm.phone"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"验证码",prop:"vCode",width:"30%"}},[i("el-input",{staticStyle:{width:"80px"},attrs:{type:"text"},model:{value:e.bindForm.vCode,callback:function(t){e.$set(e.bindForm,"vCode","string"==typeof t?t.trim():t)},expression:"bindForm.vCode"}}),e._v(" "),i("el-button",{attrs:{disabled:e.bindForm.disabled},on:{click:e.bindsendcode}},[e._v(e._s(e.bindForm.btntxt))])],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.bindingDialog=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.bindFormSubmit}},[e._v("确 定")])],1)],1)],1)])},staticRenderFns:[]};var n=i("VU/8")(o,r,!1,function(e){i("ks/v")},"data-v-2aa2e6b8",null);t.default=n.exports},cXVZ:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var o="http://124.160.26.218:98/app/mock/21",r=o+"/ww/customer/webApi"},"ks/v":function(e,t){}});
//# sourceMappingURL=5.5fc087c6e270fc4d318d.js.map