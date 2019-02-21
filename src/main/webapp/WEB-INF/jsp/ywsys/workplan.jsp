<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="../sys/header.jsp"%>

<head>
    <link href="${ctx}/js/fullcalendar/bootstrap-fullcalendar.css" rel="stylesheet" />
</head>
<!DOCTYPE html>
<html lang="en">
<style type="text/css">
    #shclColor {width:100px; height:100px; margin:10px auto;}
</style>
<body class="sticky-header">

<section>
    <!-- left side start-->
    <%@include file="../ywsys/ywmenu.jsp"%>


    <!-- main content start-->
    <div class="main-content" >
        <!-- header section start-->
        <%@include file="../ywsys/ywtop.jsp"%>
        <!-- header section end-->
        <div class="wrapper">
            <div class="row">
                <div class="col-sm-12">
                    <section class="panel">
                        <div class="page-heading">
                            <h3 class="panel-title">
                                <i class="fa fa-th-list" style="margin-right: 5px"></i>
                                <span>作业计划详情</span>
                            </h3>
                        </div>
                        <div class="panel-body" style="padding-top:5px;">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="tinav-box" id="tit_nav">
                                            <c:forEach items="${platList}" var="t">
                                                <a href="javascript:void(0);" id="${t.id}">${t.name}</a>
                                            </c:forEach>
                                    </div>

                                </div>
                            </div>
                            <div id="table_order">
                                <input id="queryid" hidden>
                                <table id="table" data-page-size="5"> </table>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

        <div class="modal fade" id="configModel">
            <div class="modal-dialog" style="width:400px;">
                <div class="modal-content">
                    <div class="modal-header1">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title"> 作业项完成表单</h4>
                    </div>
                    <div class="modal-body" id="itemtable">
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->

</body>


<script src="${ctx}/js/fullcalendar/fullcalendar.min.js"></script>
<script src="${ctx}/js/calendar.js"></script>
<script src="${ctx}/js/jquery.shCircleLoader.js" type="text/javascript"></script>
<script>

    $(function () {
        $("#tit_nav a:first-child").addClass("active");
        var id=$("#tit_nav a:first-child").attr('id');
        $("#queryid").val(id);
        var oTable1 = new TableInit();
        oTable1.Init();
    });

    $('#tit_nav a').on('click',function(){
        var queryid=$(this).attr('id');
        $("#queryid").val(queryid);
        $('#tit_nav a').removeClass('active');
        $(this).addClass('active');
        $('#table').bootstrapTable('refreshOptions',{pageNumber:1,pagesize:7});
    });


    var TableInit = function () {

        var oTableInit = new Object();

        //初始化Table
        oTableInit.Init = function () {

            $('#table').bootstrapTable({
                url: '${ctx}/ywMain/queryItemAndUser', //请求后台的URL（*）
                method: 'get',
                striped: true,
                cache: false,
                pagination: true,
                sortable: false,
                queryParamsType: "limit",
                queryParams: oTableInit.queryParams,
                pageNumber:1,
                pageSize:7 ,
                strictSearch: true,
                clickToSelect: true,
                cardView: false,
                paginationFirstText:"<<",
                paginationPreText:"<",
                paginationNextText:">",
                paginationLastText:">>",
                showExport: true,//显示导出按钮
                exportDataType: "basic",//导出类型
                sidePagination: "server",

                columns: [
                    {
                        title: '序号',
                        formatter: function(value,row,index){
                            return Number(index)+1;

                        }
                    },{
                        title: '系统',
                        field:'sysname'
                    },{
                        title: '作业项',
                        field:'itemname'
                    },{
                        title: '执行日期',
                        field:'execdate'
                    },{
                        title: '执行时间',
                        field:'hours'
                    },{
                        title: '作业项描述',
                        field:'fieldname'
                    }, {
                        title: '操作',
                        width: '100px',
                        formatter: function (value, row, index) {
                            var button =   '<div class="btn-group btn-group-xs">' +
                                    '<button type="button" class="btn btn-default btn-maincolor"onclick="finishItem(\'' + row.id + '\')" >完&nbsp&nbsp成</button>';
                            return button+ '</div>';
                        },
                    }
                ]
            });
        };
        oTableInit.queryParams = function (params) {
            var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
                count: params.limit, //页面大小
                pagesize: params.offset, //页码
                queryid: $("#queryid").val()

        };
            return temp;
        };

        return oTableInit;
    };

    function finishItem(id) {
        $.ajax({
            type: 'post',
            dataType: 'text',
            url:  '${ctx}/ywMain/finishItem',
            data: {"id":id},
            cache: false,
            async: false,
            success: function (data) {
                if(data=="ok"){
                    $('#table').bootstrapTable('refreshOptions',{pageNumber:1,pagesize:7});
                }else if(data=="no"){
                    Showbo.Msg.alert('系统异常');
                }else{
                    $("#itemtable").html(data)
                    $("#configModel").modal();
                }

            }
        });

    }


    function addForm(id,itemid) {
        var result="";
        var count=parseInt(id)-1;
        for(var i=0;i<=count;i++){
            var databaseName=$("#databaseNameA"+i).val();
            var databaseNum=parseInt($("#databaseNumA"+i).val());
            var tempResult="{\"name\":"+"\""+databaseName+"\",\"count\":"+"\""+databaseNum+"\",";
                for(var j=0;j<databaseNum;j++){
                    var value=$("#"+databaseName+j).val();
                    if(value==""){
                        Showbo.Msg.alert('请填写内容');
                        return;
                    }
                    var temp=j+1;
                    if(j<databaseNum-1){
                        tempResult+="\"c"+temp+"\":\""+value+"\",";
                    }else{
                        tempResult+="\"c"+temp+"\":\""+value+"\"";
                    }

                }
            tempResult+="}&&";
            result+=tempResult;
        }



        $.ajax({
            type: 'post',
            dataType: 'text',
            url:  '${ctx}/ywMain/addForm',
            data: {"result":result,"itemid":itemid},
            cache: false,
            async: false,
            success: function (data) {
                if(data=="ok"){
                    $("#configModel").modal('hide');
                    $('#table').bootstrapTable('refreshOptions',{pageNumber:1,pagesize:7});
                }else {
                    Showbo.Msg.alert('系统异常');
                }

            }
        });

    }



</script>

</html>


