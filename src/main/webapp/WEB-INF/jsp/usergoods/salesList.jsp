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
                        <i class="fa fa-th-list" style="margin-right: 5px"></i>销售排行榜
                    </h3>

                </div>
                <div class="panel-body" >
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


    $(function () {
        var dtb1 = new DataTable1();
        dtb1.Init();
    });

    var DataTable1 = function (){
        console.log('111111')
        var oTableInit = new Object();
        oTableInit.Init = function (){
            $('#teacher_table').bootstrapTable('destroy').bootstrapTable({
                url: "${ctx}/ug/querysalesList",
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
                    },   {
                        field: 'cdate',
                        title: '注册时间',
                        formatter: function(value,row,index){
                            return getTime(value);
                        }
                    }, {
                        field: 'totalsnum',
                        title: '销售总量'
                    }, {
                        field: 'totalsprice',
                        title: '销售总价'
                    }, {
                        field: 'money',
                        title: '分配收入',
                        formatter: function(value,row,index){
                            return "  <input type='text' value='"+value+"' id='money"+row.userid+"'>";
                        }
                    }, {
                        field: 'id',
                        title: '修改',
                        formatter: function(value,row,index){
                            var button ='<div class="btn-group btn-group-xs">'+
                                '<button type="button" class="btn btn-default btn-maincolor"onclick="update(\''+ row.userid + '\')" ><i class="fa fa-pencil"></i>&nbsp;修&nbsp改</button>';
                            return button +'</ul></div>';
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
/*                search_name:$('#search_name').val().trim(),
                roleid:$('#roleid').val().trim(),
                flag:$('#flag').val().trim()*/
            };
        };
        return oTableInit;
    }
    function update(userid) {

        var money = $("#money"+userid).val();
        console.log(money);
        $.post("${ctx}/ug/updateIncome",{userid:userid,money:money},function (d) {
            if(d=="ajaxfail"){
                Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                    if(btn=="yes"){
                        window.location.href="${ctx}/sys/index";
                    }
                });
            }else {
                if(d=="ok"){
                    Showbo.Msg.alert('修改成功');
                    $('#model').modal('hide');
                }else {
                    Showbo.Msg.alert('修改失败,请输入数字');
                }
            }

        });

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


</script>
</html>