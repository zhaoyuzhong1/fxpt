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
                        <i class="fa fa-th-list" style="margin-right: 5px"></i>待发货查询
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

<div class="modal fade" id="model">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header1">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title"> 发货管理</h4>
            </div>
            <div class="modal-body" >
                <input type="hidden" id="code">
                <div class="form-horizontal">
                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 购买人：</label>
                        <div class="col-sm-7">
                            <input id="username" maxlength="20" type="text" class="form-control" readonly>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 手机号码：</label>
                        <div class="col-sm-7">
                            <input id="mobile" maxlength="20" type="text" class="form-control" readonly>
                        </div>
                    </div>


                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 快递公司：</label>
                        <div class="col-sm-7">
                            <select id="postcom">
                                <option value="">请选择</option>
                                <option value="顺丰">顺丰</option>
                                <option value="中通">中通</option>
                                <option value="圆通">圆通</option>
                                <option value="申通">申通</option>
                                <option value="韵达">韵达</option>
                                <option value="百世">百世</option>
                            </select>
                        </div>
                    </div>


                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 快递单号：</label>
                        <div class="col-sm-7">
                            <input id="postnum" maxlength="20" type="text" class="form-control">
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
                url: "${ctx}/ug/getQrList",
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
                        title: '用户名称'
                    },{
                        field: 'mobile',
                        title: '手机号'
                    }, {
                        field: 'code',
                        title: '订单编号'
                    }, {
                        field: 'postname',
                        title: '邮寄人'
                    }, {
                        field: 'postmobile',
                        title: '邮寄人手机号码'
                    },{
                        title: '操作',
                        width:'100px',
                        formatter: function(value,row,index){
                            var button ='<div class="btn-group btn-group-xs">'+
                                    '<button type="button" class="btn btn-default btn-maincolor"onclick="fh(\''+ row.code + '\',\''+ row.username + '\',\''+ row.mobile + '\')" ><i class="fa fa-eye"></i>&nbsp;发&nbsp;货</button>';

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


    function fh(code,username,mobile) {
        $("#code").val(code);
        $("#username").val(username);
        $("#mobile").val(mobile);

        $("#qlfoot1").css("display","block");
        $("#qlfoot2").css("display","none");
        $('#model').modal();
    }



    //打开修改模态框
    function add() {
        var code = $("#code").val();
        var postcom = $("#postcom").val();
        var postnum = $("#postnum").val();
        if(postcom.length<1){
            Showbo.Msg.alert('请选择快递公司');
            return false;
        }

        if(postnum.length<1){
            Showbo.Msg.alert('请填写快递单号');
            return false;
        }



        $.post("${ctx}/ug/updateFh",{code:code,postcom:postcom,postnum:postnum},function (d) {
            if(d=="ajaxfail"){
                Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                    if(btn=="yes"){
                        window.location.href="${ctx}/sys/index";
                    }
                });
            }else {
                if(d=='ok'){
                    Showbo.Msg.alert('发货成功');
                    //$('#model').hide();
                    $('#model').modal('hide');
                    $('#teacher_table').bootstrapTable('refresh');
                }else{
                    Showbo.Msg.alert('发货失败');
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