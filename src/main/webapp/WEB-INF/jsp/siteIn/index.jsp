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
                            <i class="fa fa-th-list" style="margin-right: 5px"></i>签到查询
                        </h3>
                    </div>
                    <div class="panel-body" >
                        <div class="form-inline pull-right" style="margin-bottom:15px;">
                            <div class="form-group form-group-sm">
                                <input id="search_name" name="search_name" type="text" class="form-control" onkeydown="if(event.keytype==13){gosearch();}" placeholder="请输入关键字">
                            </div>&nbsp;
                            <button class="btn btn-main btn-sm" type="button" onclick="goSearch();"><i class="fa fa-search"></i> 查询</button>
                        </div>
                        <table id="teacher_table" data-page-size="5"> </table>
                    </div>
                </section>
            </div>
        </div>
    </div>
    <!--body wrapper end-->

</body>
<script>
    //搜索
    function goSearch() {
        $('#teacher_table').bootstrapTable('refreshOptions',{pageNumber:1,pagesize:5});
    }

    var DataTable1 = function (){
        var oTableInit = new Object();
        oTableInit.Init = function (){
            $('#teacher_table').bootstrapTable('destroy').bootstrapTable({
                url: "${ctx}/site/queryList",
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
                        align: 'center',
                        title: '用户姓名'
                    }, {
                        field: 'mobile',
                        align: 'center',
                        title: '用户手机'
                    }, {
                        field: 'cdate',
                        align: 'center',
                        title: '签到时间'
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
    $(function () {
        var dtb1 = new DataTable1();
        dtb1.Init();
    });
</script>
</html>