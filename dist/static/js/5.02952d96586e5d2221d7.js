webpackJsonp([5],{sMgO:function(e,t){},vZ1i:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("/KFX"),n=a("cXVZ"),o={data:function(){return{searchForm:{option:"",inputText:""},searchParam:{},pageType:4,tableData:[],currentPage:1,pageSize:10,totalPage:1,methodVisible:!1,keepValuePlan:{}}},mounted:function(){this.searchInfo()},methods:{getOption:function(e,t){this.searchForm.option=e,this.searchForm.inputText=t},searchInfo:function(e,t){var a=this;this.searchParam[this.searchForm.option]=this.searchForm.inputText,this.axios.get(n.j,{params:{pageSize:this.pageSize,pageNum:this.currentPage,search:this.searchParam,status:!1,orderField:e,orderType:t}}).then(function(e){a.tableData=e.data.resData,a.totalPage=e.data.page.total,a.pageSize=e.data.page.pageSize,a.searchParam={}}).catch(function(e){console.log(e)})},clearSearchInfo:function(){this.searchForm.option="",this.searchForm.inputText=""},formatter:function(e,t){return e.address},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){this.searchInfo()},wwIdFormatter:function(e,t){return 0==e.warehouseWarrantList.length?"-":1==e.warehouseWarrantList.length?e.warehouseWarrantList[0].wwNo:e.warehouseWarrantList.length>1?e.warehouseWarrantList[0].wwNo+"~"+e.warehouseWarrantList[e.warehouseWarrantList.length-1].wwNo+"("+e.warehouseWarrantList.length+")":void 0},priceFormatter:function(e,t){return this.tofixed(e.originalPrice)+" / "+this.tofixed(e.amount*e.goodsPrice)},dateFormat:function(e){return this.common.fullTime(e)},openDialog:function(e,t){"method"==t&&(this.methodVisible=!0,this.keepValuePlan.x=e.originalPrice/e.goodsPrice-e.amount,this.keepValuePlan.y=e.originalPrice-e.amount*e.goodsPrice)},sortChange:function(e){"ascending"==e.order?this.searchInfo(e.prop,"asc"):"descending"==e.order?this.searchInfo(e.prop,"desc"):this.searchInfo()},tofixed:function(e){return this.common.toFixed(e)}},components:{vSearch:r.a}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vSearch",{attrs:{pageType:e.pageType},on:{getOption:e.getOption,searchInfo:e.searchInfo,clearSearchInfo:e.clearSearchInfo}}),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"max-height":"675"},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{prop:"contractNo",label:"合同编号",sortable:"",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"wareHouseId",label:"仓单编号(仓单总数)",width:"220",formatter:e.wwIdFormatter}}),e._v(" "),a("el-table-column",{attrs:{prop:"customerName",label:"交易客户",sortable:"",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsName",label:"仓单货物品种",sortable:"",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"customerId",label:"仓单总价值/总现价",formatter:e.priceFormatter,sortable:"",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{label:"保值方案",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){a.preventDefault(),e.openDialog(t.row,"method")}}},[e._v("\n          查看\n        ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"totalLoan",label:"对应总放款金额",sortable:"",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.tofixed(t.row.totalLoan))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"tradeEndtime",label:"仓单交易到期日",sortable:"",width:"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.dateFormat(t.row.tradeEndtime))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"loanEndtime",label:"货款到期日",sortable:"",width:"105"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.dateFormat(t.row.loanEndtime))+"\n      ")]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"保值方案",visible:e.methodVisible},on:{"update:visible":function(t){e.methodVisible=t}}},[a("el-tabs",{staticStyle:{height:"200px"},attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"保值方案"}},[a("div",{staticClass:"program"},[e._v("\n          需提醒客户追加"+e._s(e.keepValuePlan.x>0&&isFinite(e.keepValuePlan.x)?e.tofixed(e.keepValuePlan.x):"-")+"吨的货物或"+e._s(e.keepValuePlan.y>0?e.tofixed(e.keepValuePlan.y):"-")+"元保证金。\n        ")])])],1)],1)],1)},staticRenderFns:[]};var s=a("VU/8")(o,i,!1,function(e){a("sMgO")},null,null);t.default=s.exports}});
//# sourceMappingURL=5.02952d96586e5d2221d7.js.map