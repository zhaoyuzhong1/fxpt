<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="../sys/header.jsp"%>
<!DOCcode html>
<html lang="en">
<style>


</style>
<body class="sticky-header">

<!-- left side start-->
<%@include file="../ywsys/ywmenu.jsp"%>
<!-- left side end-->

<!-- main content start-->
<div class="main-content" >
    <!-- header section start-->
    <%@include file="../ywsys/ywtop.jsp"%>
    <!-- header section end-->
    <%--------------------------------------------------------内容--%>
    <!-- page heading start-->
    <div class="wrapper">
        <div class="row">
            <div class="col-sm-12">
                <section class="panel">
                    <div class="page-heading">
                        <h3 class="panel-title">
                            <i class="fa fa-th-list" style="margin-right: 5px"></i>库存购买管理
                        </h3>
                    </div>
                    <div class="panel-body" >
                        <div class="form-inline pull-right" style="margin-bottom:15px;">
                            <div class="form-group form-group-sm">
                                开始时间:<input type="date" id="beginDate" >
                                结束时间:<input type="date" id="finishDate" >
                                <input id="search_name" name="search_name" type="text" class="form-control" onkeydown="if(event.keytype==13){gosearch();}" placeholder="请输入电话号码">
                            </div>&nbsp;
                            <button class="btn btn-main btn-sm" type="button" onclick="gosearch()"><i class="fa fa-search"></i> 查询</button>
                            <button class="btn btn-warning-o btn-sm" type="button" onclick="goreset()"><i class="fa fa-repeat"></i> 重置</button>
                            <%-- <button class="btn btn-success-o btn-sm" type="button" onclick="addGoods()"><i class="fa fa-plus"></i> 添加</button>--%>
                        </div>
                        <table id="teacher_table" data-page-size="5"> </table>
                    </div>
                </section>
            </div>
        </div>
    </div>
</body>
<script>
    //搜索
    function gosearch() {
        if($('#beginDate').val()>$('#finishDate').val()){
            Showbo.Msg.alert('开始日期不能晚于结束日期');
            return false;
        }
        console.log( $('#search_name').val().trim()+
            $('#beginDate').val()+$('#finishDate').val());
        $('#teacher_table').bootstrapTable('refreshOptions',{pageNumber:1,pagesize:5});}

    //重置
    function goreset() {$('#search_name').val("");
        $('#beginDate').val("");
        $('#finishDate').val("");
        gosearch();}

    $(function () {
        var dtb1 = new DataTable1();
        dtb1.Init();
    });

    var DataTable1 = function (){
        console.log("进入getlist");
        var oTableInit = new Object();
        oTableInit.Init = function (){
            $('#teacher_table').bootstrapTable('destroy').bootstrapTable({
                url: "${ctx}/stock/buyGoodsList",
                method: 'get',
                striped: true,
                cache: false,
                pagination: true,
                sortable: false,
                queryParamscode: "limit",
                queryParams: oTableInit.queryParams,
                pageNumber:1,
                pageSize: 10,
                pageList:[10,20, 30],
                strictSearch: true,
                clickToSelect: true,
                cardView: false,
                paginationFirstText:"<<",
                paginationPreText:"<",
                paginationNextText:">",
                paginationLastText:">>",
                showExport: true,//显示导出按钮
                exportDatacode: "basic",//导出类型
                sidePagination: "server",

                columns: [
                    {
                        title: '序号',align: 'center',
                        formatter: function(value,row,index){
                            return Number(row.count+index)+1;
                        }
                    },{
                        field: 'goodname',
                        title: '商品名称'
                    },{
                        field: 'username',
                        title: '姓名'
                    },{
                        field: 'mobile',
                        title: '电话'
                    },{
                        field: 'price',
                        title: '零售价'
                    }, {
                        field: 'buynum',
                        title: '购买数量'
                    }, {
                        field: 'buyprice',
                        title: '购买总价'
                    }, {
                        field: 'ccdate',
                        title: '提货时间'
                    }, {
                        field: 'message',
                        title: '留言'
                    },{
                        field: 'id',
                        title: '操作',
                        align: 'center',
                        width:'130px',
                        formatter: function(value,row,index){
                            var button ='<div class="btn-group btn-group-xs" style="width:130px">'+
                                '<button type="button" class="btn btn-default btn-maincolor"onclick="examine(\'' + row.id+'\')" ><i class="fa fa-eye"></i>&nbsp;审&nbsp核</button>';
                            var b = '<button type="button" style="margin-left: 10px"  class="btn btn-default btn-maincolor"onclick="cancelgoods(\''+ row.id + '\')" ><i class="fa fa-eye"></i>&nbsp;注&nbsp;销</button>';
                            return button +b+  '</div>';
                        }
                    }
                ]
            });
        };

        //得到查询的参数
        oTableInit.queryParams = function (params) {

            return {
                count: params.limit,  //页面大小
                pagesize:params.offset, //页码
                mobile:$('#search_name').val().trim(),
                beginDate:$('#beginDate').val(),
                finishDate:$('#finishDate').val()
            };
        };
        return oTableInit;
    }


    //审核
    function examine(id){
        Showbo.Msg.confirm('确定审核吗？',function (btn) {
            if(btn=='yes'){
                $.post("${ctx}/stock/auditingBuyGoods",{id:id},function (d) {
                    if(d=="ajaxfail"){
                        Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                            if(btn=="yes"){
                                window.location.href="${ctx}/sys/index";
                            }
                        });
                    }else {
                        if(d=="ok"){
                            Showbo.Msg.alert('审核成功');
                            $('#teacher_table').bootstrapTable('refresh');
                        }else {
                            Showbo.Msg.alert('审核失败');
                        }
                    }
                });
            }
        })
    }

    //取消
    function cancelgoods(id){
        Showbo.Msg.confirm('确定取消吗？',function (btn) {
            if(btn=='yes'){
                $.post("${ctx}/stock/cancelStock",{id:id},function (d) {
                    if(d=="ajaxfail"){
                        Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                            if(btn=="yes"){
                                window.location.href="${ctx}/sys/index";
                            }
                        });
                    }else {
                        if(d=="ok"){
                            Showbo.Msg.alert('取消成功');
                            $('#teacher_table').bootstrapTable('refresh');
                        }else {
                            Showbo.Msg.alert('取消失败');
                        }
                    }
                });
            }
        })
    }

</script>
</html>