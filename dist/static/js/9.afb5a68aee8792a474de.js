webpackJsonp([9],{kAfr:function(e,t){},yvxy:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("/KFX"),i=a("cXVZ"),o={data:function(){return{searchForm:{option:"",inputText:""},searchParam:{},pageType:5,paymentReceiptVisible:!1,invoiceVisible:!1,tableData:[],recordList:{fileTypeZero:[],fileTypeOne:[]},currentPage:1,pageSize:10,totalPage:100}},mounted:function(){this.searchInfo()},methods:{getOption:function(e,t){this.searchForm.option=e,this.searchForm.inputText=t},searchInfo:function(e,t){var a=this;this.searchParam[this.searchForm.option]=this.searchForm.inputText,this.axios.get(i.e,{params:{pageSize:this.pageSize,pageNum:this.currentPage,search:this.searchParam,orderField:e,orderType:t}}).then(function(e){a.tableData=e.data.resData,a.totalPage=e.data.page.total,a.pageSize=e.data.page.pageSize,a.currentPage=e.data.page.current,a.searchParam={}}).catch(function(e){console.log(e)})},clearSearchInfo:function(){this.searchForm.option="",this.searchForm.inputText=""},formatter:function(e,t){return e.address},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){this.searchInfo()},openDialog:function(e,t){if(this.recordList={fileTypeZero:[],fileTypeOne:[]},"paymentReceipt"==t){this.paymentReceiptVisible=!0,this.recordList.customerName=e.customerName,this.recordList.contractNo=e.contractNo;for(var a=0;a<e.contractFileList.length;a++)0==e.contractFileList[a].fileType&&this.recordList.fileTypeZero.push(e.contractFileList[a])}else if("invoice"==t){this.recordList={fileTypeZero:[],fileTypeOne:[]},this.invoiceVisible=!0,this.recordList.customerName=e.customerName,this.recordList.contractNo=e.contractNo;for(var r=0;r<e.contractFileList.length;r++)1==e.contractFileList[r].fileType&&this.recordList.fileTypeOne.push(e.contractFileList[r])}},wwIdFormatter:function(e,t){return 0==e.warehouseWarrantList.length?"-":1==e.warehouseWarrantList.length?e.warehouseWarrantList[0].wwNo:e.warehouseWarrantList.length>1?e.warehouseWarrantList[0].wwNo+"~"+e.warehouseWarrantList[e.warehouseWarrantList.length-1].wwNo+"("+e.warehouseWarrantList.length+")":void 0},download:function(e){var t=i.d+"?contractId="+this.recordList.contractNo+"&fileType="+e;this.axios({method:"get",url:t,responseType:"blob"}).then(function(e){if(e){var t=window.URL.createObjectURL(e.data),a=document.createElement("a");a.style.display="none",a.href=t,a.setAttribute("download","image.zip"),document.body.appendChild(a),a.click()}}).catch(function(e){console.log(e)})},sortChange:function(e){"ascending"==e.order?this.searchInfo(e.prop,"asc"):"descending"==e.order?this.searchInfo(e.prop,"desc"):this.searchInfo()}},components:{vSearch:r.a}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vSearch",{attrs:{pageType:e.pageType},on:{getOption:e.getOption,searchInfo:e.searchInfo,clearSearchInfo:e.clearSearchInfo}}),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"max-height":"675"},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{prop:"customerName",label:"客户名称",sortable:"",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"customerNo",label:"客户号",sortable:"",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"totalLoan",label:"放款金额",sortable:"",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"contractNo",label:"合同编号",sortable:"",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"wareHouseId",label:"对应仓单编号(仓单总数)",formatter:e.wwIdFormatter,width:"220"}}),e._v(" "),a("el-table-column",{attrs:{label:"支付回单",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){a.preventDefault(),e.openDialog(t.row,"paymentReceipt")}}},[e._v("\n          查看\n        ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"增值税发票",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){a.preventDefault(),e.openDialog(t.row,"invoice")}}},[e._v("\n          查看\n        ")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"支付回单",visible:e.paymentReceiptVisible},on:{"update:visible":function(t){e.paymentReceiptVisible=t}}},[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"支付回单"}},[a("div",{staticClass:"recordInfo"},[e._v("合同编号："+e._s(e.recordList.contractNo))]),e._v(" "),a("div",{staticClass:"recordInfo"},[e._v("交易客户："+e._s(e.recordList.customerName))]),e._v(" "),a("div",[a("el-carousel",{ref:"payCarousel",attrs:{height:"350px",autoplay:!1}},e._l(e.recordList.fileTypeZero,function(e){return a("el-carousel-item",{key:e.index},[a("img",{staticClass:"bannerImg",staticStyle:{width:"880px",height:"350px","max-width":"100%","max-height":"100%","text-align":"center"},attrs:{src:"http://192.168.2.86:8087"+e.filePath}})])}),1),e._v(" "),a("div",{staticClass:"buttonGroup"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.download(0)}}},[e._v("下载")])],1)],1)])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"增值税发票",visible:e.invoiceVisible},on:{"update:visible":function(t){e.invoiceVisible=t}}},[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"增值税发票"}},[a("div",{staticClass:"recordInfo"},[e._v("合同编号："+e._s(e.recordList.contractNo))]),e._v(" "),a("div",{staticClass:"recordInfo"},[e._v("交易客户："+e._s(e.recordList.customerName))]),e._v(" "),a("div",[a("el-carousel",{ref:"payCarousel",attrs:{height:"350px",autoplay:!1}},e._l(e.recordList.fileTypeOne,function(e){return a("el-carousel-item",{key:e.index},[a("img",{staticClass:"bannerImg",staticStyle:{width:"880px",height:"350px","max-width":"100%","max-height":"100%","text-align":"center"},attrs:{src:"http://192.168.2.86:8087"+e.filePath}})])}),1),e._v(" "),a("div",{staticClass:"buttonGroup"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.download(1)}}},[e._v("下载")])],1)],1)])],1)],1)],1)},staticRenderFns:[]};var s=a("VU/8")(o,n,!1,function(e){a("kAfr")},null,null);t.default=s.exports}});
//# sourceMappingURL=9.afb5a68aee8792a474de.js.map