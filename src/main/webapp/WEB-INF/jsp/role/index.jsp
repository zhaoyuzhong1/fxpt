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
                        <i class="fa fa-th-list" style="margin-right: 5px"></i>级别管理
                    </h3>
                </div>
                <div class="panel-body" >

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
                <h4 class="modal-title"> 用户级别管理</h4>
            </div>
            <div class="modal-body" >
                <input type="hidden" id="allid">
                <input type="hidden" id="uiflag">
                <div class="form-horizontal">
                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 级别名称：</label>
                        <div class="col-sm-7">
                            <input id="name" maxlength="20" type="text" class="form-control" readonly>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 升级金额：</label>
                        <div class="col-sm-7">
                            <input id="price" maxlength="20" type="text" class="form-control">
                        </div>
                    </div>


                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 升级描述：</label>
                        <div class="col-sm-7">
                            <input id="parm" maxlength="200" type="text" class="form-control">
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
                <button type="button" class="btn btn-tsolid" onclick="updateRole();" ><i class="fa fa-check" ></i> 修改</button>
            </div>

        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
<%----------------d----------------------------------内容结束--%>



<!-- main content end-->
</body>
<script>

    $(function () {

        var dtb1 = new DataTable1();
        dtb1.Init();
    });

    var DataTable1 = function (){

        var oTableInit = new Object();
        oTableInit.Init = function (){
            $('#teacher_table').bootstrapTable('destroy').bootstrapTable({
                url: "${ctx}/role/queryList",
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
                        title: '级别'
                    },{
                        field: 'price',
                        title: '升级门槛'
                    }, {
                        field: 'parm',
                        title: '升级描述'
                    },{
                        title: '操作',
                        width:'100px',
                        formatter: function(value,row,index){
                            var button ='<div class="btn-group btn-group-xs">'+
                                    '<button type="button" class="btn btn-default btn-maincolor"onclick="update(\''+ row.id + '\',\''+ row.name + '\',\''+ row.price + '\',\''+ row.parm + '\')" ><i class="fa fa-eye"></i>&nbsp;修&nbsp;改</button>';


                            return button +'</div>';

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

            };
        };
        return oTableInit;
    }


    //添加平台
    function updateRole() {
        var name = $("#name").val();
        var price = $("#price").val();
        var parm = $("#parm").val();
        var id = $("#allid").val();


        var myReg = /^[^@\/\'\\\"#$%&\^\*]+$/;

        if($.isEmptyObject(name)||name.trim()==""){
            Showbo.Msg.alert("请输入级别名称！");
            return false;
        }else if (!myReg.test(name)){
            Showbo.Msg.alert("级别名称含有非法字符，请重新输入！");
            return false;
        }else if($.isEmptyObject(price)||price.trim()==""){
            Showbo.Msg.alert("请输入升级金额！");
            return false;
        }else if(isNaN(price)){
            Showbo.Msg.alert("升级金额为数字！");
            return false;
        }else if($.isEmptyObject(parm)||parm.trim()==""){
            Showbo.Msg.alert("请输入升级描述！");
            return false;
        }

        $.post("${ctx}/role/updateRole",{id:id,name:name.trim(),price:price.trim(),parm:parm.trim()},function (d) {
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
                    $('#model').modal('hide');
                }else {
                    Showbo.Msg.alert('修改失败');
                }
            }
        });

    }


    //打开修改模态框
    function update(id,name,price,parm) {
        $('#allid').val(id);
        $('#name').val(name);
        $('#price').val(price);
        $('#parm').val(parm);

        $("#qlfoot2").css("display","block");
        $("#qlfoot1").css("display","none");
        $('#model').modal();
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