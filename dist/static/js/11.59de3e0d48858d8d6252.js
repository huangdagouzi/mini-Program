webpackJsonp([11],{FQG4:function(e,t){},ORLK:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("/KFX"),n=a("cXVZ"),o={data:function(){return{pageType:2,searchForm:{option:"",inputText:""},searchParam:{},programForm:{weight:"",ammount:""},currentPage:1,pageSize:10,totalPage:1,tableData:[]}},mounted:function(){this.searchInfo()},methods:{getOption:function(e,t){this.searchForm.option=e,this.searchForm.inputText=t},searchInfo:function(e,t){var a=this;this.searchParam[this.searchForm.option]=this.searchForm.inputText,this.axios.get(n.k,{params:{pageSize:this.pageSize,pageNum:this.currentPage,search:this.searchParam,status:1,orderField:e,orderType:t}}).then(function(e){a.tableData=e.data.resData,a.totalPage=e.data.page.total,a.pageSize=e.data.page.pageSize,a.currentPage=e.data.page.current,a.searchParam={}}).catch(function(e){console.log(e)})},clearSearchInfo:function(){this.searchForm.option="",this.searchForm.inputText=""},openDialog:function(e,t){},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){this.searchInfo()},formatter:function(e,t){return e.pledgeRate+"%"},wwIdFormatter:function(e,t){return 0==e.warehouseWarrantList.length?"-":1==e.warehouseWarrantList.length?e.warehouseWarrantList[0].wwNo:e.warehouseWarrantList.length>1?e.warehouseWarrantList[0].wwNo+"~"+e.warehouseWarrantList[e.warehouseWarrantList.length-1].wwNo+"("+e.warehouseWarrantList.length+")":void 0},dateFormat:function(e){return this.common.fullTime(e)},sortChange:function(e){"ascending"==e.order?this.searchInfo(e.prop,"asc"):"descending"==e.order?this.searchInfo(e.prop,"desc"):this.searchInfo()}},components:{vSearch:r.a}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vSearch",{attrs:{pageType:e.pageType},on:{getOption:e.getOption,searchInfo:e.searchInfo,clearSearchInfo:e.clearSearchInfo}}),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"max-height":"675"},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{prop:"customerName",label:"客户名称",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"customerNo",label:"客户号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"contractNo",label:"合同编号",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"contractId",label:"仓单编号（仓单总数）",formatter:e.wwIdFormatter,sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"currentPrice",label:"当前价格",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"warningPrice",label:"预警价格",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"pledgeRate",label:"解除预警时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.dateFormat(t.row.updateTime))+"\n      ")]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)],1)},staticRenderFns:[]};var c=a("VU/8")(o,s,!1,function(e){a("FQG4")},null,null);t.default=c.exports}});
//# sourceMappingURL=11.59de3e0d48858d8d6252.js.map