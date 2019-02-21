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
                        <i class="fa fa-th-list" style="margin-right: 5px"></i>提现管理
                    </h3>
                </div>
                <div class="panel-body" >
                    <div class="form-inline pull-right" style="margin-bottom:15px;">
                        <div class="form-group form-group-sm">
                            <input id="search_name" name="search_name" type="text" class="form-control" onkeydown="if(event.keytype==13){gosearch();}" placeholder="请输入关键字">
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
    function gosearch() {$('#teacher_table').bootstrapTable('refreshOptions',{pageNumber:1,pagesize:5});}

    //重置
    function goreset() {$('#search_name').val("");gosearch();}

    $(function () {
        var dtb1 = new DataTable1();
        dtb1.Init();
    });

    var DataTable1 = function (){
        var oTableInit = new Object();
        oTableInit.Init = function (){
            $('#teacher_table').bootstrapTable('destroy').bootstrapTable({
                url: "${ctx}/userIncome/withdrawList",
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
                    }
                    ,{
                        field: 'name',
                        title: '姓名'
                    },{
                        field: 'usermobile',
                        title: '电话'
                    }, {
                        field: 'totalp',
                        title: '本月可提现金额'
                    },{
                        field: 'newapplydate',
                        title: '申请日期'
                    }, {
                        title: '操作',
                        width: '100px',
                        formatter: function (value, row, index) {
                            var button = '<div class="btn-group btn-group-xs">' +
                                '<button type="button" class="btn btn-default btn-maincolor"onclick="withdraw(\'' + row.id + '\',\'' + row.money + '\')" ><i class="fa fa-eye"></i>&nbsp;提&nbsp现</button>';
                            return button + '</div>';

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
                search_name:$('#search_name').val().trim()
            };
        };
        return oTableInit;
    }

    function withdraw(id){
        Showbo.Msg.confirm('确定提现吗？',function (btn) {
            if(btn=='yes'){
                console.log(id);
                var str ={
                    id:id,
                };
                $.ajax({
                    "url": "${ctx}/userIncome/auditingWithdraw",
                    "type": "post",
                    "data":JSON.stringify(str),
                    "contentType": "application/json",
                    //"dataType": "String",
                    "success": function(result){
                        if(result=="ok"){
                            Showbo.Msg.alert("提现成功");
                            $('#teacher_table').bootstrapTable('refresh');
                            var dtb1 = new DataTable1();
                            dtb1.Init();
                            //swal("",result.message,"success");
                        }else {
                            Showbo.Msg.alert("提现异常,请联系管理员");
                        }

                    },
                    "error": function(data,XMLHttpRequest, textStatus, errorThrown) {
                        if(data=="ajaxfail"){
                            Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                                if(btn=="yes"){
                                    window.location.href="${ctx}/sys/index";
                                }
                            });
                        }else{
                            Showbo.Msg.alert('提现失败');
                        }
                        //swal("系统错误，请联系管理员");
                        /*                if (null != data.responseText && "" != data.responseText){
                                            swal("","会话过期,请重新登录!","error");
                                            window.location.href = "/login/login";
                                        } else {
                                            if (0 == data.readyState) {
                                                swal("","网络错误，请联系管理员!","error");
                                            } else {
                                                swal("","系统错误，请联系管理员!","error");
                                            }
                                        }*/
                    },
                });
            }
        })




    }

</script>
</html>