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
                            <i class="fa fa-th-list" style="margin-right: 5px"></i>工资及奖金管理
                        </h3>
                    </div>
                    <div class="panel-body" >
                        <div class="form-inline pull-right" style="margin-bottom:15px;">
                            <div class="form-group form-group-sm">
                                <input id="search_name" name="search_name" type="text" class="form-control" onkeydown="if(event.keytype==13){gosearch();}" placeholder="请输入电话号码或姓名">
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
        $('#teacher_table').bootstrapTable('refreshOptions',{pageNumber:1,pagesize:5});}

    //重置
    function goreset() {
        $('#search_name').val("");
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
                url: "${ctx}/userIncome/getsalaryList",
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
                        field: 'name',
                        title: '姓名'
                    },{
                        field: 'mobile',
                        title: '电话'
                    },{
                        field: 'rolename',
                        title: '角色名称'
                    }, {
                        field: 'newmoney',
                        title: '收入',
                        formatter: function(value,row,index){
                            if(row.newflag==0||row.newflag==null){
                                return [
                                    "<input type='text' value='"+value+"' id='"+row.id+"newmoney'>",
                                ].join('');
                            }else if(row.newflag==1){
                                return [
                                    "<span>"+value+"</span>",
                                ].join('');

                            }else{
                                return [
                                    "<span>"+value+"</span>",
                                ].join('');
                            }
                        }
                    }, {
                        field: 'reward',
                        title: '奖金',
                        formatter: function(value,row,index){
                            if(row.newflag==0||row.newflag==null){
                                return [
                                    "<input type='text' value='"+value+"' id='"+row.id+"reward'>",
                                ].join('');
                            }else if(row.newflag==1){
                                return [
                                    "<span>"+value+"</span>",
                                ].join('');

                            }else{
                                return [
                                    "<span>"+value+"</span>",
                                ].join('');
                            }

                        }
                    }, {
                        field: 'totalsalary',
                        title: '总工资'
                    },{
                        field: 'newflag',
                        title: '状态',
                        formatter: function(value,row,index){
                            if(value==0||value==null){
                                return [
                                    "<span>未申请提现</span>",
                                ].join('');
                            }else if(value==1){
                                return [
                                    "<span>已申请提现</span>",
                                ].join('');

                            }else{
                                return [
                                    "<span>已提现成功</span>",
                                ].join('');
                            }

                        }
                    },{
                        field: 'id',
                        title: '操作',
                        align: 'center',
                        width:'150px',
                        formatter: function(value,row,index){
                            if(row.newflag==0||row.newflag==null){
                                var button ='<div class="btn-group btn-group-xs" style="width:150px">'+
                                    '<button type="button" class="btn btn-default btn-maincolor"onclick="examine(\'' +row.id+'\')" ><i class="fa fa-pencil "></i>&nbsp;修&nbsp改</button>';
                                var b = '<button type="button" style="margin-left: 10px"  class="btn btn-default btn-maincolor"onclick="cancelgoods(\'' + row.id + '\')" ><i class="fa fa-trash-o"></i>&nbsp;申请提现</button>';
                                return button +b+  '</div>';
                            }else if(row.newflag==1){
                                return [
                                    "<span>已申请提现</span>",
                                ].join('');
                            }else{
                                return [
                                    "<span>已提现成功</span>",
                                ].join('');
                            }

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
                search_name:$('#search_name').val().trim(),

            };
        };
        return oTableInit;
    }


    //修改
    function examine(userid){
        Showbo.Msg.confirm('确定修改吗？',function (btn) {
            var nm=userid+"newmoney";
            var nr=userid+"reward";
            var  money=$('#'+nm+'').val().trim();
            var reward=$('#'+nr+'').val().trim();
            if (isNaN(money)){
                Showbo.Msg.alert("工资含有非法字符，请重新输入！");
                return false;
            }
            if (isNaN(reward)){
                Showbo.Msg.alert("奖金含有非法字符，请重新输入！");
                return false;
            }
            if(btn=='yes'){
                $.post("${ctx}/userIncome/upadeSalary",{userid:userid,money:money,reward:reward},function (d) {
                    if(d=="ajaxfail"){
                        Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                            if(btn=="yes"){
                                window.location.href="${ctx}/sys/index";
                            }
                        });
                    }else {
                        if(d=="ok"){
                            Showbo.Msg.alert('修改成功');
                            $('#teacher_table').bootstrapTable('refresh');
                        }else {
                            Showbo.Msg.alert('修改失败');
                        }
                    }
                });
            }
        })
    }

    //删除
    function cancelgoods(userid){
        Showbo.Msg.confirm('确定要申请吗？',function (btn) {
            var nm=userid+"newmoney";
            var nr=userid+"reward";
            var  money=$('#'+nm+'').val().trim();
            var reward=$('#'+nr+'').val().trim();
            //var myReg = /^[\d{n}[.]\d{n}]+$/;
            if (isNaN(money)){
                Showbo.Msg.alert("工资含有非法字符，请重新输入！");
                return false;
            }
            if (isNaN(reward)){
                Showbo.Msg.alert("奖金含有非法字符，请重新输入！");
                return false;
            }
            if(btn=='yes'){
                $.post("${ctx}/userIncome/deleteSalary",{id:userid,money:money,reward:reward},function (d) {
                    if(d=="ajaxfail"){
                        Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                            if(btn=="yes"){
                                window.location.href="${ctx}/sys/index";
                            }
                        });
                    }else {
                        if(d=="ok"){
                            Showbo.Msg.alert('申请成功');
                            $('#teacher_table').bootstrapTable('refresh');
                        }else {
                            Showbo.Msg.alert('申请失败');
                        }
                    }
                });
            }
        })
    }

</script>
</html>