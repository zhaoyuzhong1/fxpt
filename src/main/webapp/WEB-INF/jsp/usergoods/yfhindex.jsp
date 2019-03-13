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
                        <i class="fa fa-th-list" style="margin-right: 5px"></i>已发货查询
                    </h3>
                </div>
                <div class="panel-body" >
                    <div class="form-inline pull-right" style="margin-bottom:15px;">

                        <div class="form-group form-group-sm">
                            <label class="control-label"> 姓名/手机号码</label>
                            <input id="search_name" name="search_name" type="text" class="form-control" onkeydown="if(event.keytype==13){gosearch();}" placeholder="请输入关键字">
                        </div>&nbsp;
                        <button class="btn btn-main btn-sm" type="button" onclick="gosearch()"><i class="fa fa-search"></i> 查询</button>
                        <button class="btn btn-warning-o btn-sm" type="button" onclick="goreset()"><i class="fa fa-repeat"></i> 重置</button>

                    </div>
                    <table id="teacher_table" data-page-size="5"> </table>
                </div>
            </section>
        </div>
    </div>
</div>

<!--查看-->
<!-- main content end-->
</body>
<script>
    //搜索
    function gosearch() {$('#teacher_table').bootstrapTable('refreshOptions',{pageNumber:1,pagesize:5});}

    //重置
    function goreset() {
        $('#search_name').val("");
        gosearch();
    }

    $(function () {
        var dtb1 = new DataTable1();
        dtb1.Init();
    });

    var DataTable1 = function (){
        var oTableInit = new Object();
        oTableInit.Init = function (){
            $('#teacher_table').bootstrapTable('destroy').bootstrapTable({
                url: "${ctx}/ug/getFhList",
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
                        field: 'username',
                        title: '姓名'
                    },{
                        field: 'mobile',
                        title: '手机号'
                    }, {
                        field: 'goodname',
                        title: '购买商品'
                    }, {
                        field: 'buynum',
                        title: '数量'
                    }, {
                        field: 'buyprice',
                        title: '单价'
                    }, {
                        field: 'totalprice',
                        title: '总价'
                    }, {
                        field: 'fhdate',
                        title: '发货时间',
                        formatter: function(value,row,index){
                            return getTime(value)
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








    //时间format
    function getTime(timestamp) {
        var ts = arguments[0] || 0;
        var t,y,m,d,h,i,s;
        t = ts ? new Date(parseInt(ts)) : new Date();
        y = t.getFullYear();
        m = t.getMonth()+1;
        d = t.getDate();
        h = t.getHours();
        i = t.getMinutes();
        s = t.getSeconds();
        // 可根据需要在这里定义时间格式
        return y+'-'+(m<10?'0'+m:m)+'-'+(d<10?'0'+d:d)+' '+(h<10?'0'+h:h)+':'+(i<10?'0'+i:i)+':'+(s<10?'0'+s:s);
    }


    function getFlag(flag) {
        if(flag=='0'){
            return '未审核';
        }else if(flag=='1'){
            return '已审核';
        }else if(flag=='2'){
            return '审核未通过';
        }
    }
</script>
</html>