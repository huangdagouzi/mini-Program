webpackJsonp([9],{"0GWJ":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{searchForm:{option:"",inputText:""},pageType:4,tableData:[{customerId:"hz-hzjylxmyyxgs-180926",customerName:"杭州久益隆鑫贸易有限公司",wareHouseId:"al0260025533~al0260025548",money:"522583334",contractNum:"NHZB-CDZY-B-AL-180001",goodsType:"铝",price:"6,596,691.4",duration:"30",clearDate:"2018-10-21"}],currentPage:1,pageSize:1,totalPage:100}},methods:{getOption:function(e,t){this.searchForm.option=e,this.searchForm.inputText=t},searchInfo:function(){console.log(this.searchForm.option+"+"+this.searchForm.inputText)},clearSearchInfo:function(){this.searchForm.option="",this.searchForm.inputText=""},formatter:function(e,t){return e.address},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)}},components:{vSearch:a("/KFX").a}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vSearch",{attrs:{pageType:e.pageType},on:{getOption:e.getOption,searchInfo:e.searchInfo,clearSearchInfo:e.clearSearchInfo}}),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"max-height":"675","default-sort":{prop:"date",order:"descending"}}},[a("el-table-column",{attrs:{prop:"contractNum",label:"合同编号",sortable:"",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"wareHouseId",label:"仓单编号(仓单总数)",width:"220"}}),e._v(" "),a("el-table-column",{attrs:{prop:"customerName",label:"交易客户",sortable:"",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsType",label:"仓单货物品种",sortable:"",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"customerId",label:"仓单总价值/总现价",sortable:"",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"对应总放款金额",sortable:"",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{prop:"clearDate",label:"结清日期",sortable:"",width:"105"}})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)],1)},staticRenderFns:[]};var n=a("VU/8")(r,o,!1,function(e){a("LHPG")},null,null);t.default=n.exports},LHPG:function(e,t){}});
//# sourceMappingURL=9.6d9dbad38e591d31df7d.js.map