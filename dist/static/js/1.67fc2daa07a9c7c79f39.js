webpackJsonp([1],{PVGi:function(e,t){},eerB:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("/KFX"),r=a("yFm/"),l={data:function(){return{pageType:0,searchForm:{option:"",inputText:""},tableData:[{status:"1",customerId:"hz-hzjylxmyyxgs-180926",customerName:"杭州久益隆鑫贸易有限公司",processName:"仓单处理",wareHouseId:"al0260025533~al0260025548",contractNum:"NHZB-CDZY-B-AL-180001",goodsType:"铝",price:"6,596,691.4",duration:"30",txTime:"2018-09-21",companyNmae:"浙江南华资本管理有限公司"}],currentPage:1,pageSize:1,totalPage:100,form:{wareHouseId:"",txAccount:"",time:"",txType:"",liquidatePrice:"",liquidateValue:""},dialogFormVisible:!1}},mounted:function(){},methods:{getOption:function(e,t){this.searchForm.option=e,this.searchForm.inputText=t},searchInfo:function(){console.log(this.searchForm.option+"+"+this.searchForm.inputText)},clearSearchInfo:function(){this.searchForm.option="",this.searchForm.inputText=""},formatter:function(e,t){return e.address},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)},operateRow:function(e){this.form=e,this.dialogFormVisible=!0},dialogFormVisibleChange:function(e){this.dialogFormVisible=e},statusSwitch:function(e,t){switch(e.status){case"0":return"未处理";case"1":return"处理中"}}},components:{vSearch:i.a,handleDialog:r.a}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vSearch",{attrs:{pageType:e.pageType},on:{getOption:e.getOption,searchInfo:e.searchInfo,clearSearchInfo:e.clearSearchInfo}}),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"max-height":"675","default-sort":{prop:"date",order:"descending"}}},[a("el-table-column",{attrs:{prop:"date",label:"操作","min-width":"45%"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){a.preventDefault(),e.operateRow(t.row)}}},[e._v("\n          处理\n        ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",sortable:"",formatter:e.statusSwitch,"min-width":"65%"}}),e._v(" "),a("el-table-column",{attrs:{prop:"customerId",label:"客户号","min-width":"65%"}}),e._v(" "),a("el-table-column",{attrs:{prop:"customerName",label:"客户名称",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"processName",label:"流程名称",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"contractNum",label:"合同编号",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"wareHouseId",label:"仓单编号(仓单总数)","min-width":"100%"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsType",label:"仓单品种",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"仓单交易价格",sortable:"","min-width":"100%"}}),e._v(" "),a("el-table-column",{attrs:{prop:"duration",label:"期限",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"txTime",label:"交易时间",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"companyNmae",label:"发起机构",sortable:""}})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1),e._v(" "),a("handleDialog",{attrs:{dialogFormVisible:e.dialogFormVisible,form:e.form,isDelete:!1},on:{dialogFormVisibleChange:e.dialogFormVisibleChange}})],1)},staticRenderFns:[]};var s=a("VU/8")(l,o,!1,function(e){a("PVGi")},null,null);t.default=s.exports},y4MG:function(e,t){},"yFm/":function(e,t,a){"use strict";var i={txType:[{required:!0,message:"请输入交易方式",trigger:"change"}],time:[{type:"date",required:!0,message:"请输入时间",trigger:"change"}],liquidateValue:[{required:!0,message:"请输入平仓总价",trigger:"blur"}],liquidatePrice:[{required:!0,message:"请输入平仓时间期货价格",trigger:"blur"}],username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},r={props:["dialogFormVisible","form","isDelete"],data:function(){return{formData:{wareHouseId:"",customerId:"",time:"",txType:"",liquidatePrice:"",liquidateValue:""},wareHouseFormVisible:this.dialogFormVisible,formLabelWidth:"135px",rules:i,liquidated:!1}},watch:{dialogFormVisible:function(e){this.wareHouseFormVisible=e},wareHouseFormVisible:function(e){this.$emit("dialogFormVisibleChange",e)}},methods:{liquidate:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.liquidated=!0,alert("submit!")})},deleteRecord:function(e){this.$emit("deleteRecord",e)}},components:{}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:"处理",visible:e.wareHouseFormVisible},on:{"update:visible":function(t){e.wareHouseFormVisible=t}}},[e.isDelete?a("span",{staticClass:"delete-contract",on:{click:function(t){e.deleteRecord("合同")}}},[e._v("删除该合同？")]):e._e(),e._v(" "),a("span",{staticClass:"dialog-title"},[e._v("平仓信息")]),e._v(" "),a("el-form",{ref:"formData",attrs:{model:e.formData,inline:!0}},[a("el-form-item",{staticStyle:{width:"365px"},attrs:{label:"仓单编号","label-width":e.formLabelWidth}},[e._v("\n        "+e._s(e.form.wareHouseId)+"\n      ")]),e._v(" "),a("el-form-item",{attrs:{label:"交易帐户","label-width":e.formLabelWidth}},[e._v("\n        "+e._s(e.form.customerId)+"\n      ")])],1),e._v(" "),a("el-form",{ref:"formData",attrs:{model:e.formData,inline:!0,rules:e.rules}},[a("el-form-item",{staticStyle:{width:"365px"},attrs:{label:"交易方式","label-width":e.formLabelWidth,prop:"txType"}},[a("el-select",{attrs:{placeholder:"请选择交易方式",disabled:e.liquidated},model:{value:e.formData.txType,callback:function(t){e.$set(e.formData,"txType",t)},expression:"formData.txType"}},[a("el-option",{attrs:{label:"回购",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"抛售",value:"2"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"平仓总价","label-width":e.formLabelWidth,prop:"liquidateValue"}},[a("el-input",{attrs:{disabled:e.liquidated},model:{value:e.formData.liquidateValue,callback:function(t){e.$set(e.formData,"liquidateValue",t)},expression:"formData.liquidateValue"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"365px"},attrs:{label:"平仓时间","label-width":e.formLabelWidth,prop:"time"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:"选择日期时间",disabled:e.liquidated},model:{value:e.formData.time,callback:function(t){e.$set(e.formData,"time",t)},expression:"formData.time"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"平仓时间期货价格","label-width":e.formLabelWidth,prop:"liquidatePrice"}},[a("el-input",{attrs:{disabled:e.liquidated},model:{value:e.formData.liquidatePrice,callback:function(t){e.$set(e.formData,"liquidatePrice",t)},expression:"formData.liquidatePrice"}})],1)],1),e._v(" "),a("div",{staticClass:"buttonGroup"},[e.liquidated?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.liquidate("formData")}}},[e._v("确认还款并归档")]):a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.liquidate("formData")}}},[e._v("确认平仓")])],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.wareHouseFormVisible=!1}}},[e._v("取 消")])],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(r,l,!1,function(e){a("y4MG")},null,null);t.a=o.exports}});
//# sourceMappingURL=1.67fc2daa07a9c7c79f39.js.map