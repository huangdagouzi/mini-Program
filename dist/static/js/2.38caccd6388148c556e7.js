webpackJsonp([2],{"3fs2":function(t,e,a){var r=a("RY/4"),o=a("dSzd")("iterator"),n=a("/bQp");t.exports=a("FeBl").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||n[r(t)]}},BO1k:function(t,e,a){t.exports={default:a("fxRn"),__esModule:!0}},"RY/4":function(t,e,a){var r=a("R9M2"),o=a("dSzd")("toStringTag"),n="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,a,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(a=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?a:n?r(e):"Object"==(i=r(e))&&"function"==typeof e.callee?"Arguments":i}},fxRn:function(t,e,a){a("+tPU"),a("zQR9"),t.exports=a("g8Ux")},g8Ux:function(t,e,a){var r=a("77Pl"),o=a("3fs2");t.exports=a("FeBl").getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},pTZ7:function(t,e){},xT8z:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("BO1k"),o=a.n(r),n=a("/KFX"),i=a("cXVZ"),s={data:function(){return{pageType:3,searchForm:{option:"",inputText:""},currentCustomer:"",searchParam:{},currentPage:1,pageSize:0,totalPage:0,dialogFormVisible:!1,tableData:[],warehouseList:[],timeout:null,state:""}},mounted:function(){this.searchInfo()},methods:{getOption:function(t,e){this.searchForm.option=t,this.searchForm.inputText=e},searchInfo:function(t,e){var a=this;this.searchParam[this.searchForm.option]=this.searchForm.inputText,this.axios.get(i.g,{params:{pageSize:this.pageSize,pageNum:this.currentPage,search:this.searchParam,orderField:t,orderType:e}}).then(function(t){a.tableData=t.data.resData,a.totalPage=t.data.page.total,a.pageSize=t.data.page.pageSize,a.searchParam={}}).catch(function(t){console.log(t)})},clearSearchInfo:function(){this.searchForm.option="",this.searchForm.inputText=""},openDialog:function(t,e){var a=this;this.dialogFormVisible=!0,this.axios.get(i.h,{params:{customerNo:t.customerNo}}).then(function(e){a.warehouseList=e.data.resData,a.currentCustomer=t.customerNo}).catch(function(t){})},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.searchInfo()},priceFormatter:function(t,e){return this.tofixed(t.amount*t.goodsPrice)+" / "+this.tofixed(t.originalPrice)},querySearchAsync:function(t,e){var a=this.warehouseList,r=!0,n=!1,i=void 0;try{for(var s,c=o()(a);!(r=(s=c.next()).done);r=!0){var l=s.value;l.value=l.wwNo}}catch(t){n=!0,i=t}finally{try{!r&&c.return&&c.return()}finally{if(n)throw i}}var u=t?a.filter(this.createStateFilter(t)):a;clearTimeout(this.timeout),this.timeout=setTimeout(function(){e(u)},300*Math.random())},createStateFilter:function(t){return function(e){return 0===e.value.toLowerCase().indexOf(t.toLowerCase())}},handleSelect:function(t){var e=this;this.axios.get(i.h,{params:{wwNo:this.state,customerNo:this.currentCustomer}}).then(function(t){e.warehouseList=t.data.resData}).catch(function(t){console.log(t)})},loadWarehouseId:function(){var t=!0,e=!1,a=void 0;try{for(var r,n=o()(this.warehouseList);!(t=(r=n.next()).done);t=!0){var i=r.value;i.value=i.wwNo}}catch(t){e=!0,a=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw a}}},searchWarehouse:function(){var t=this;this.axios.get(i.h,{params:{wwNo:this.state,customerNo:this.currentCustomer}}).then(function(e){t.warehouseList=e.data.resData}).catch(function(t){console.log(t)})},sortChange:function(t){"ascending"==t.order?this.searchInfo(t.prop,"asc"):"descending"==t.order?this.searchInfo(t.prop,"desc"):this.searchInfo()},tofixed:function(t){return this.common.toFixed(t)}},components:{vSearch:n.a}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vSearch",{attrs:{pageType:t.pageType},on:{getOption:t.getOption,searchInfo:t.searchInfo,clearSearchInfo:t.clearSearchInfo}}),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"max-height":"675"},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{prop:"customerName",label:"客户名称",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"customerNo",label:"客户号",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{label:"被买断仓单"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){a.preventDefault(),t.openDialog(e.row,"warehouse")}}},[t._v("\n          查看\n        ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"totalLoan",label:"总放款金额（人民币）",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.tofixed(e.row.totalLoan))+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"originalPrice",label:"原仓单总价值（人民币）",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.tofixed(e.row.originalPrice))+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"totalCurrentPrice",label:"现仓单总价值（人民币）",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.tofixed(e.row.totalCurrentPrice))+"\n      ")]}}])})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,layout:"prev, pager, next, jumper",total:t.totalPage},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1),t._v(" "),a("el-dialog",{staticStyle:{width:"1500px"},attrs:{title:"被买断仓单",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("div",{staticStyle:{float:"left"}},[t._v("仓单编号：")]),t._v(" "),a("el-autocomplete",{staticClass:"selectSearch",attrs:{"fetch-suggestions":t.querySearchAsync,placeholder:"请输入内容"},on:{select:t.handleSelect},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}}),t._v(" "),a("el-button",{staticStyle:{"margin-top":"-5px"},attrs:{type:"primary"},on:{click:t.searchWarehouse}},[t._v("搜索")]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.warehouseList,"max-height":"675"}},[a("el-table-column",{attrs:{prop:"wwNo",label:"仓单编号",sortable:"",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{label:"仓单现价/原价（人民币）",formatter:t.priceFormatter,sortable:"",width:"300"}}),t._v(" "),a("el-table-column",{attrs:{prop:"contractNo",label:"合同编号",sortable:"",width:"180"}})],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(s,c,!1,function(t){a("pTZ7")},null,null);e.default=l.exports}});
//# sourceMappingURL=2.38caccd6388148c556e7.js.map