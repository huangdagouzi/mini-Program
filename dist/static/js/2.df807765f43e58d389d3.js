webpackJsonp([2],{WY2J:function(e,t){},b2s4:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r={txType:[{required:!0,message:"请输入交易方式",trigger:"change"}],time:[{type:"date",required:!0,message:"请输入时间",trigger:"change"}],liquidateValue:[{required:!0,message:"请输入平仓总价",trigger:"blur"}],liquidatePrice:[{required:!0,message:"请输入平仓时间期货价格",trigger:"blur"}],username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],newPwdConfirm:[{validator:function(e,t,a){""!==t&&t?t!==this.modifyPwdData.newPwd?a(new Error("两次输入密码不一致!")):a():a(new Error("请再次输入密码"))},trigger:"blur"}],customerName:[{required:!0,message:"请输入客户名称",trigger:"blur"}],customerId:[{required:!0,message:"请输入客户号",trigger:"blur"}],warehouseValue:[{required:!0,message:"请输入仓单原价值",trigger:"blur"}],contractId:[{required:!0,message:"请输入合同编号",trigger:"blur"}],loanAmount:[{required:!0,message:"请输入放款金额",trigger:"blur"}],txDeadline:[{required:!0,message:"请输入合同交易到期日",trigger:"blur"}],contactNum:[{required:!0,message:"请输入联系电话",trigger:"blur"}]}},eerB:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("/KFX"),i=a("yFm/"),o={data:function(){return{pageType:0,operateStatus:0,searchForm:{option:"",inputText:""},tableData:[{status:"1",customerId:"hz-hzjylxmyyxgs-180926",customerName:"杭州久益隆鑫贸易有限公司",processName:"仓单处理",wareHouseId:"al0260025533~al0260025548",contractNum:"NHZB-CDZY-B-AL-180001",goodsType:"铝",price:"6,596,691.4",duration:"30",txTime:"2018-09-21",companyNmae:"浙江南华资本管理有限公司",operateStatus:"0"},{status:"1",customerId:"hz-hzjylxmyyxgs-180926",customerName:"杭州久益隆鑫贸易有限公司",processName:"仓单处理",wareHouseId:"al0260025533",contractNum:"NHZB-CDZY-B-AL-180001",goodsType:"铝",price:"6,691.4",duration:"50",txTime:"2018-09-28",companyNmae:"浙江南华",operateStatus:"1"}],currentPage:1,pageSize:1,totalPage:100,form:{wareHouseId:"",txAccount:"",time:"",txType:"",liquidatePrice:"",liquidateValue:""},dialogFormVisible:!1,dialogFormVisible1:!1}},mounted:function(){},methods:{getOption:function(e,t){this.searchForm.option=e,this.searchForm.inputText=t},searchInfo:function(){console.log(this.searchForm.option+"+"+this.searchForm.inputText)},clearSearchInfo:function(){this.searchForm.option="",this.searchForm.inputText=""},formatter:function(e,t){return e.address},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)},operateRow:function(e){"0"==e.operateStatus?(this.dialogFormVisible=!0,this.form.wareHouseId=e.wareHouseId):"1"==e.operateStatus&&(this.dialogFormVisible1=!0)},dialogFormVisibleChange:function(e){this.dialogFormVisible=e},warningOperateVisibleChange:function(e){this.dialogFormVisible1=e},statusSwitch:function(e,t){switch(e.status){case"0":return"未处理";case"1":return"处理中"}},deleteRecord:function(e){var t=this;"合同"==e&&this.$confirm("此操作删除该合同, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$message({type:"success",message:"删除成功!"}),t.dialogFormVisible=!1,t.$router.push("/Index")}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},sortChange:function(e){console.log(e)}},components:{vSearch:r.a,handleDialog:i.a}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vSearch",{attrs:{pageType:e.pageType},on:{getOption:e.getOption,searchInfo:e.searchInfo,clearSearchInfo:e.clearSearchInfo}}),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"max-height":"675"},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{prop:"date",label:"操作","min-width":"45%"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){a.preventDefault(),e.operateRow(t.row)}}},[e._v("\n          处理\n        ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"processName",label:"流程名称",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",sortable:"",formatter:e.statusSwitch,"min-width":"65%"}}),e._v(" "),a("el-table-column",{attrs:{prop:"customerId",label:"客户号","min-width":"65%"}}),e._v(" "),a("el-table-column",{attrs:{prop:"customerName",label:"客户名称",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"contractNum",label:"合同编号",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"wareHouseId",label:"仓单编号(仓单总数)","min-width":"100%"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsType",label:"仓单品种",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"仓单交易价格",sortable:"","min-width":"100%"}}),e._v(" "),a("el-table-column",{attrs:{prop:"duration",label:"期限",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"txTime",label:"交易时间",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"companyNmae",label:"发起机构",sortable:""}})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1),e._v(" "),a("handleDialog",{attrs:{dialogFormVisible:e.dialogFormVisible,dialogFormVisible1:e.dialogFormVisible1,form:e.form},on:{dialogFormVisibleChange:e.dialogFormVisibleChange,warningOperateVisibleChange:e.warningOperateVisibleChange,deleteRecord:e.deleteRecord}})],1)},staticRenderFns:[]};var s=a("VU/8")(o,l,!1,function(e){a("WY2J")},null,null);t.default=s.exports},pdHr:function(e,t){},"yFm/":function(e,t,a){"use strict";var r=a("b2s4"),i={props:["dialogFormVisible","form","dialogFormVisible1"],data:function(){return{formData:{wareHouseId:"",time:"",txType:"",liquidatePrice:"",liquidateValue:""},programForm:{weight:"",ammount:""},wareHouseFormVisible:this.dialogFormVisible,warningOperateVisible:this.dialogFormVisible1,formLabelWidth:"135px",rules:r.a,liquidated:!1}},watch:{dialogFormVisible:function(e){this.wareHouseFormVisible=e},dialogFormVisible1:function(e){this.warningOperateVisible=e},wareHouseFormVisible:function(e){this.$emit("dialogFormVisibleChange",e)},warningOperateVisible:function(e){this.$emit("warningOperateVisibleChange",e)}},methods:{liquidate:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.liquidated=!0,alert("submit!")})},deleteRecord:function(e){this.$emit("deleteRecord",e)}},components:{}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:"处理",visible:e.wareHouseFormVisible},on:{"update:visible":function(t){e.wareHouseFormVisible=t}}},[a("span",{staticClass:"delete-contract",on:{click:function(t){e.deleteRecord("合同")}}},[e._v("删除该合同？")]),e._v(" "),a("span",{staticClass:"dialog-title"},[e._v("平仓信息")]),e._v(" "),a("el-form",{ref:"formData",attrs:{model:e.formData,inline:!0}},[a("el-form-item",{staticStyle:{width:"365px"},attrs:{label:"仓单编号","label-width":e.formLabelWidth}},[e._v("\n        "+e._s(e.form.wareHouseId)+"\n      ")])],1),e._v(" "),a("el-form",{ref:"formData",attrs:{model:e.formData,inline:!0,rules:e.rules}},[a("el-form-item",{staticStyle:{width:"365px"},attrs:{label:"交易方式","label-width":e.formLabelWidth,prop:"txType"}},[a("el-select",{attrs:{placeholder:"请选择交易方式",disabled:e.liquidated},model:{value:e.formData.txType,callback:function(t){e.$set(e.formData,"txType",t)},expression:"formData.txType"}},[a("el-option",{attrs:{label:"回购",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"抛售",value:"2"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"平仓总价","label-width":e.formLabelWidth,prop:"liquidateValue"}},[a("el-input",{attrs:{disabled:e.liquidated},model:{value:e.formData.liquidateValue,callback:function(t){e.$set(e.formData,"liquidateValue",t)},expression:"formData.liquidateValue"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"365px"},attrs:{label:"平仓时间","label-width":e.formLabelWidth,prop:"time"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:"选择日期时间",disabled:e.liquidated},model:{value:e.formData.time,callback:function(t){e.$set(e.formData,"time",t)},expression:"formData.time"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"平仓时间期货价格","label-width":e.formLabelWidth,prop:"liquidatePrice"}},[a("el-input",{attrs:{disabled:e.liquidated},model:{value:e.formData.liquidatePrice,callback:function(t){e.$set(e.formData,"liquidatePrice",t)},expression:"formData.liquidatePrice"}})],1)],1),e._v(" "),a("div",{staticClass:"buttonGroup"},[e.liquidated?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.liquidate("formData")}}},[e._v("确认还款并归档")]):a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.liquidate("formData")}}},[e._v("确认平仓")])],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.wareHouseFormVisible=!1}}},[e._v("取 消")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"处理",visible:e.warningOperateVisible},on:{"update:visible":function(t){e.warningOperateVisible=t}}},[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"价值预警"}},[a("table",{staticClass:"value-warning"},[a("tr",[a("th",[e._v("放款金额")]),e._v(" "),a("td",[e._v("2")])]),e._v(" "),a("tr",[a("th",[e._v("仓单原价值")]),e._v(" "),a("td",[e._v("4")]),e._v(" "),a("th",[e._v("仓单现价值")]),e._v(" "),a("td",[e._v("6")])]),e._v(" "),a("tr",[a("th",[e._v("原保证金")]),e._v(" "),a("td",[e._v("8")]),e._v(" "),a("th",[e._v("现保证金")]),e._v(" "),a("td",[e._v("10")])])])]),e._v(" "),a("el-tab-pane",{attrs:{label:"保值方案"}},[a("div",{staticClass:"program"},[e._v("\n          需提醒客户追加1000吨的货物或65040000元保证金。\n        ")])]),e._v(" "),a("el-tab-pane",{attrs:{label:"风险处理"}},[a("div",{staticClass:"program"},[e._v("\n          客户实际追加\n          "),a("el-input",{staticStyle:{width:"120px"},attrs:{clearable:""},model:{value:e.programForm.weight,callback:function(t){e.$set(e.programForm,"weight",t)},expression:"programForm.weight"}}),e._v("\n          吨的货物，\n          "),a("el-input",{staticStyle:{width:"120px"},attrs:{clearable:""},model:{value:e.programForm.ammount,callback:function(t){e.$set(e.programForm,"ammount",t)},expression:"programForm.ammount"}}),e._v("\n          元保证金。\n        ")],1),e._v(" "),a("el-button",{staticClass:"dialog-button",attrs:{type:"primary"}},[e._v("确定")])],1)],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(i,o,!1,function(e){a("pdHr")},null,null);t.a=l.exports}});
//# sourceMappingURL=2.df807765f43e58d389d3.js.map