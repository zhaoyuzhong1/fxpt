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
                        <i class="fa fa-th-list" style="margin-right: 5px"></i>用户购买货品审核管理
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
<!--body wrapper end-->
<%-----------------------------------------------------模态框--%>
<div class="modal fade" id="model">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header1">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title"> 用户工资管理</h4>
            </div>
            <div class="modal-body" >
                <input type="hidden" id="allid">
                <input type="hidden" id="uiflag">
                <div class="form-horizontal">
                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 用户姓名：</label>
                        <div class="col-sm-7">
                            <input id="name" maxlength="20" type="text" class="form-control" readonly>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 手机号码：</label>
                        <div class="col-sm-7">
                            <input id="mobile" maxlength="20" type="text" class="form-control" readonly>
                        </div>
                    </div>


                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 本月收入：</label>
                        <div class="col-sm-7">
                            <input id="money" maxlength="20" type="text" class="form-control">
                        </div>
                    </div>


                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 工资记录：</label>
                        <div class="col-sm-7" id="uiflag1">
                        </div>
                    </div>


                </div>
            </div>
            <div class="modal-footer" id="qlfoot1">
                <button type="button"  class="btn btn-thollow" data-dismiss="modal"><i class="fa fa-times"></i> 取消</button>
                <button type="button" class="btn btn-tsolid" onclick="add();" ><i class="fa fa-check" ></i> 确定</button>
            </div>
            <div class="modal-footer" id="qlfoot2" style="display: none">
                <button type="button"  class="btn btn-thollow" data-dismiss="modal"><i class="fa fa-times"></i> 取消</button>
                <button type="button" class="btn btn-tsolid" onclick="update();" ><i class="fa fa-check" ></i> 修改</button>
            </div>

        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
<%----------------d----------------------------------内容结束--%>

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
                url: "${ctx}/ug/queryList",
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
                        field: 'cdate',
                        title: '购买时间',
                        formatter: function(value,row,index){
                            return getTime(value)
                        }
                    },{
                        title: '操作',
                        width:'100px',
                        formatter: function(value,row,index){
                            var button ='<div class="btn-group btn-group-xs">'+
                                    '<button type="button" class="btn btn-default btn-maincolor"onclick="queren(\''+ row.id + '\',\''+ row.username + '\')" ><i class="fa fa-eye"></i>&nbsp;确&nbsp;认</button>';

                            var e =  '<button type="button" class="btn btn-default btn-maincolor dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> '+
                                    '<span class="caret"></span>'+
                                    '</button>'+
                                    '<ul class="dropdown-menu dropdown-menu-right">'+
                                    '<li style="float: none;"><button id="ServerStop" class="btn btn-link "onclick="qx(\''+row.id+'\',\''+ row.username + '\')" style="color:red">&nbsp;取&nbsp;消</button></li>';

                            return button +e+ '</ul></div>';

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



    //打开修改模态框
    function queren(id,username) {
        if(confirm("确定"+username+"已付货款吗？")==true){
            $.post("${ctx}/ug/updateQr",{id:id},function (d) {
                if(d=="ajaxfail"){
                    Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                        if(btn=="yes"){
                            window.location.href="${ctx}/sys/index";
                        }
                    });
                }else {
                    if(d=='ok'){
                        Showbo.Msg.alert('确认成功');
                        $('#teacher_table').bootstrapTable('refresh');
                    }else{
                        Showbo.Msg.alert('确认失败');
                    }


                }

            });
        }

    }


    function qx(id,username) {
        if(confirm("确定取消"+username+"购买的商品吗？")==true){
            $.post("${ctx}/ug/deleteUG",{id:id},function (d) {
                if(d=="ajaxfail"){
                    Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                        if(btn=="yes"){
                            window.location.href="${ctx}/sys/index";
                        }
                    });
                }else {
                    if(d=='ok'){
                        Showbo.Msg.alert('取消成功');
                        $('#teacher_table').bootstrapTable('refresh');
                    }else{
                        Showbo.Msg.alert('取消失败');
                    }


                }

            });
        }

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