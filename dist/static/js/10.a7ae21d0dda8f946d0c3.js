webpackJsonp([10],{"88XE":function(e,t){},FQn5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("/KFX"),r=a("cXVZ"),n={data:function(){return{pageType:2,searchForm:{option:"",inputText:""},searchParam:{},warningForm:{},keepValuePlan:{},programForm:{weight:"",realDeposit:""},currentPage:1,pageSize:10,totalPage:1,dialogFormVisible:!1,methodVisible:!1,warehouseInnerVisible:!1,selectlistRow:[],addWareHouseTable:[],wareHouseTable:[],tableData:[],showOperate:!0}},mounted:function(){this.searchInfo()},methods:{getOption:function(e,t){this.searchForm.option=e,this.searchForm.inputText=t},searchInfo:function(e,t){var a=this;this.searchParam[this.searchForm.option]=this.searchForm.inputText,this.axios.get(r.l,{params:{pageSize:this.pageSize,pageNum:this.currentPage,search:this.searchParam,status:0,orderField:e,orderType:t}}).then(function(e){200==e.data.resCode?(a.tableData=e.data.resData,a.totalPage=e.data.page.total,a.pageSize=e.data.page.pageSize,a.currentPage=e.data.page.current,a.searchParam={},sessionStorage.setItem("nowTime",e.data.nowdate),a.isTxTime()):a.$message.error(e.data.resMsg)}).catch(function(e){console.log(e)})},clearSearchInfo:function(){this.searchForm.option="",this.searchForm.inputText=""},openDialog:function(e,t){"operate"==t?(this.dialogFormVisible=!0,this.addOperateStatus(e.id,1),this.warningForm=e,this.programForm.contractId=e.contractId,this.programForm.warningPrice=e.warningPrice,this.programForm.totalPrice=e.totalPrice,this.programForm.contractDeposit=e.deposit,this.programForm.id=e.id,this.keepValuePlan.x=e.originalPrice/e.goodsPrice-e.amount,this.keepValuePlan.y=e.originalPrice-e.amount*e.goodsPrice):"method"==t&&(this.methodVisible=!0)},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){this.searchInfo()},formatter:function(e,t){return e.pledgeRate+"%"},pledgeRateFormatter:function(e){return(100*(e.totalLoan/(parseInt(e.goodsPrice)*parseInt(e.amount)+parseInt(e.deposit)))).toFixed(2)+"%"},contactFormatter:function(e,t){return(e.customerLinkman?e.customerLinkman:"")+" "+e.customerPhone},addWarehouse:function(){this.warehouseInnerVisible=!0},selectRow:function(e){this.selectlistRow=e},addRow:function(){var e={rowNum:this.addWareHouseTable.length+1,wwNo:this.wwNo,goodsName:this.goodsName,brand:this.brand,qualityStandard:this.qualityStandard,packingSpecification:this.packingSpecification,quantity:this.quantity,unit:this.unit,warehouseName:this.warehouseName,warehouseAddress:this.warehouseAddress,linkman:this.linkman,linkPhone:this.linkPhone,goodsAddress:this.goodsAddress,goodsAuthenticity:this.goodsAuthenticity};this.addWareHouseTable.unshift(e)},delData:function(){for(var e=this,t=0;t<this.selectlistRow.length;t++){this.selectlistRow.forEach(function(t,a){e.addWareHouseTable.forEach(function(a,o){t.rowNum===a.rowNum&&e.addWareHouseTable.splice(o,1)})})}this.$refs.addWareHouseTable.clearSelection()},addWareHouseTableToProgram:function(){for(var e=this.addWareHouseTable,t=0,a=0;a<e.length;a++)parseInt(e[a].quantity)&&(t+=parseInt(e[a].quantity));this.programForm.weight=t,this.programForm.warehouseWarrantList=this.addWareHouseTable,this.warehouseInnerVisible=!1},submitForm:function(){var e=this;this.axios.post(r.w,this.programForm).then(function(t){200==t.data.resCode?(e.dialogFormVisible=!1,e.searchInfo(),e.$message({message:t.data.resMsg,type:"success"})):e.$message.error(t.data.resMsg)}).catch(function(e){console.log(e)})},sortChange:function(e){"ascending"==e.order?this.searchInfo(e.prop,"asc"):"descending"==e.order?this.searchInfo(e.prop,"desc"):this.searchInfo()},addOperateStatus:function(e,t){var a=this,o={formId:e,formType:t};this.axios.post(r.q,o).then(function(e){200==e.data.resCode?console.log("success"):a.$message.error(e.data.resMsg)}).catch(function(e){console.log(e)})},tofixed:function(e){return this.common.toFixed(e)},isTxTime:function(){var e=parseInt(sessionStorage.getItem("nowTime")),t=new Date(e),a=t.getHours(),o=t.getMinutes();t.getSeconds();(a>9||a<=11&&o<=30)&&(this.showOperate=!1),(a>=13&&o>=30||a<15)&&(this.showOperate=!1)}},components:{vSearch:o.a}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vSearch",{attrs:{pageType:e.pageType},on:{getOption:e.getOption,searchInfo:e.searchInfo,clearSearchInfo:e.clearSearchInfo}}),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"max-height":"675"},on:{"sort-change":e.sortChange}},[e.showOperate?a("el-table-column",{attrs:{label:"操作",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small",disabled:t.row.totalLoan/(parseInt(t.row.goodsPrice)*parseInt(t.row.amount)+parseInt(t.row.deposit))<parseInt(t.row.recoveryRate)/100},nativeOn:{click:function(a){a.preventDefault(),e.openDialog(t.row,"operate")}}},[e._v("\n          处理\n        ")])]}}])}):e._e(),e._v(" "),a("el-table-column",{attrs:{prop:"customerName",label:"客户名称",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"customerNo",label:"客户号",width:"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"contractNo",label:"合同编号",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsPrice",label:"当前价格",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.tofixed(t.row.goodsPrice))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"warningPrice",label:"预警价格",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.tofixed(t.row.warningPrice))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"pledgeRate",label:"当前担保率",formatter:e.pledgeRateFormatter}}),e._v(" "),a("el-table-column",{attrs:{prop:"contactMember",label:"联系客户",formatter:e.contactFormatter,sortable:""}})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"处理",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"价值预警"}},[a("table",{staticClass:"value-warning"},[a("tr",[a("th",[e._v("放款金额")]),e._v(" "),a("td",[e._v(e._s(this.tofixed(e.warningForm.totalLoan)))])]),e._v(" "),a("tr",[a("th",[e._v("仓单原价值")]),e._v(" "),a("td",[e._v(e._s(this.tofixed(e.warningForm.originalPrice)))]),e._v(" "),a("th",[e._v("仓单现价值")]),e._v(" "),a("td",[e._v(e._s(this.tofixed(e.warningForm.amount*e.warningForm.goodsPrice)))])]),e._v(" "),a("tr",[a("th",[e._v("原保证金")]),e._v(" "),a("td",[e._v(e._s(this.tofixed(e.warningForm.deposit)))]),e._v(" "),a("th",[e._v("现保证金")]),e._v(" "),a("td",[e._v(e._s(this.tofixed(e.warningForm.realDeposit)))])])])]),e._v(" "),a("el-tab-pane",{attrs:{label:"保值方案"}},[a("div",{staticClass:"program"},[e._v("\n          需提醒客户追加"+e._s(e.keepValuePlan.x>0&&isFinite(e.keepValuePlan.x)?e.tofixed(e.keepValuePlan.x):"-")+"吨的货物或"+e._s(e.keepValuePlan.y>0?e.tofixed(e.keepValuePlan.y):"-")+"元保证金。\n        ")])]),e._v(" "),a("el-tab-pane",{attrs:{label:"风险处理"}},[a("div",{staticClass:"program"},[e._v("\n          客户实际追加\n          "),a("el-input",{staticStyle:{width:"120px"},attrs:{clearable:""},on:{focus:e.addWarehouse},model:{value:e.programForm.weight,callback:function(t){e.$set(e.programForm,"weight",t)},expression:"programForm.weight"}}),e._v("\n          吨的货物，\n          "),a("el-input",{staticStyle:{width:"120px"},attrs:{clearable:""},model:{value:e.programForm.realDeposit,callback:function(t){e.$set(e.programForm,"realDeposit",t)},expression:"programForm.realDeposit"}}),e._v("\n          元保证金。\n        ")],1),e._v(" "),a("el-button",{staticClass:"dialog-button",attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确定")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"追加仓单：",visible:e.warehouseInnerVisible,width:"1200px","close-on-click-modal":!1,"append-to-body":""},on:{"update:visible":function(t){e.warehouseInnerVisible=t}}},[a("div",{staticClass:"tableDate"},[a("div",{staticClass:"button",staticStyle:{width:"3%",float:"right"}},[a("P",[a("el-button",{staticClass:"el-icon-plus",on:{click:function(t){t.preventDefault(),e.addRow()}}})],1),e._v(" "),a("p",[a("el-button",{staticClass:"el-icon-minus",on:{click:function(t){t.preventDefault(),e.delData()}}})],1)],1),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{ref:"addWareHouseTable",staticStyle:{width:"95%"},attrs:{data:e.addWareHouseTable,"tooltip-effect":"dark",border:"",stripe:""},on:{"selection-change":e.selectRow}},[a("el-table-column",{attrs:{type:"selection",width:"45",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"仓单编号",align:"center",width:"195"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.wwNo,callback:function(a){e.$set(t.row,"wwNo",a)},expression:"scope.row.wwNo"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"商品名称",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.goodsName,callback:function(a){e.$set(t.row,"goodsName",a)},expression:"scope.row.goodsName"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"品牌/牌号",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.brand,callback:function(a){e.$set(t.row,"brand",a)},expression:"scope.row.brand"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"质量标准",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.qualityStandard,callback:function(a){e.$set(t.row,"qualityStandard",a)},expression:"scope.row.qualityStandard"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"包装规格",width:"115"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.packingSpecification,callback:function(a){e.$set(t.row,"packingSpecification",a)},expression:"scope.row.packingSpecification"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"数量",width:"105"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.quantity,callback:function(a){e.$set(t.row,"quantity",a)},expression:"scope.row.quantity"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"计量单位",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.unit,callback:function(a){e.$set(t.row,"unit",a)},expression:"scope.row.unit"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"仓库名称",width:"115"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.warehouseName,callback:function(a){e.$set(t.row,"warehouseName",a)},expression:"scope.row.warehouseName"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"仓库地址",width:"205"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.warehouseAddress,callback:function(a){e.$set(t.row,"warehouseAddress",a)},expression:"scope.row.warehouseAddress"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"联系人",width:"115"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.linkman,callback:function(a){e.$set(t.row,"linkman",a)},expression:"scope.row.linkman"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"联系电话",width:"165"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.linkPhone,callback:function(a){e.$set(t.row,"linkPhone",a)},expression:"scope.row.linkPhone"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"货物位置",width:"165"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.goodsAddress,callback:function(a){e.$set(t.row,"goodsAddress",a)},expression:"scope.row.goodsAddress"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"货物真实性",width:"115"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.goodsAuthenticity,callback:function(a){e.$set(t.row,"goodsAuthenticity",a)},expression:"scope.row.goodsAuthenticity"}})]}}])})],1)],1)]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addWareHouseTableToProgram}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var i=a("VU/8")(n,s,!1,function(e){a("88XE")},null,null);t.default=i.exports}});
//# sourceMappingURL=10.a7ae21d0dda8f946d0c3.js.map