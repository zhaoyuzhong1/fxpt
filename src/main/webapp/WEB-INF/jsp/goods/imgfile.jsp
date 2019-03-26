<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@include file="../sys/header.jsp"%>
<!DOCcode html>

<style>
    img{
        width: 100%;
        height: 100%;
    }
    #divs{
        width: 570px;
    }
</style>
<html lang="en">


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
                        <i class="fa fa-th-list" style="margin-right: 5px"></i>${goodname}图片管理
                    </h3>
                </div>
                <div class="panel-body" >
                    <div class="form-inline pull-right" style="margin-bottom:15px;">
                        <button class="btn btn-success-o btn-sm" type="button" onclick="addImg(${goodid})"><i class="fa fa-plus"></i> 添加</button>
                    </div>
                    <table id="teacher_table" data-page-size="5"> </table>
                </div>
            </section>
        </div>
    </div>
</div>
<!--body wrapper end-->
<%-----------------------------------------------------添加模态框--%>
<%--<div class="modal fade" id="model">--%>
    <%--<div class="modal-dialog">--%>
        <%--<div class="modal-content">--%>
            <%--<div class="modal-header1">--%>
                <%--<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>--%>
                <%--<h4 class="modal-title">添加图片素材</h4>--%>
            <%--</div>--%>
            <%--<div class="col-sm-4 text-center">--%>
                <%--<div class="kv-avatar">--%>
                    <%--<div class="file-loading">--%>
                        <%--<input id="avatar-1" name="avatar-1" type="file" required>--%>
                    <%--</div>--%>
                <%--</div>--%>
                <%--<div class="kv-avatar-hint"><small>Select file < 1500 KB</small></div>--%>
            <%--</div>--%>
            <%--<div class="col-sm-8">--%>
                <%--<div class="row">--%>
                    <%--<div class="col-sm-6">--%>
                        <%--<div class="form-group">--%>
                            <%--<label for="name" style="color: black">图片名称<span class="kv-reqd" style="color: black">*</span></label>--%>
                            <%--<input type="text" class="form-control" name="name" id="name" required>--%>
                        <%--</div>--%>
                    <%--</div>--%>
                <%--</div>--%>
                <%--<div class="form-group">--%>
                    <%--<div class="text-right">--%>
                        <%--<button id="upload" class="btn btn-primary">上传</button>--%>
                        <%--<button id="clear" class="btn btn-primary">返回</button>--%>
                    <%--</div>--%>
                <%--</div>--%>
            <%--</div>--%>
        <%--</div><!-- /.modal-content -->--%>
    <%--</div><!-- /.modal-dialog -->--%>
    <%--<div id="kv-avatar-errors-1" class="center-block" style="width:800px;display:none"></div>--%>
<%--</div><!-- /.modal -->--%>
<%----------------d----------------------------------查看图片模太窗--%>
    <div class="modal fade" id="model1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header1">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title">查看图片信息</h4>
                </div>
                <div class="panel-body" >
                    <form class="form-horizontal" role="form">

                        <div  id="divs">

                        </div>
                    </form>
                </div>
                <div class="modal-footer" id="qlfoot">
                    <button type="button"  class="btn btn-thollow" data-dismiss="modal" id="myclear"><i class="fa fa-times"></i>返回</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
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
                url: "${ctx}/goods/queryImgList",
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
                        field: 'imgfile',
                        title: '图片名称'
                    }, {
                        field: 'cdate',
                        title: '上传时间'
                    }, {
                        title: '操作',
                        width:'100px',
                        formatter: function(value,row,index){
                            var button ='<div class="btn-group btn-group-xs" style="width:130px">'+
                                '<button type="button" class="btn btn-default btn-maincolor"onclick="lookview(\'' + row.id+'\')" ><i class="fa fa-eye"></i>&nbsp;查&nbsp;看</button>';
                            var b = '<button type="button" style="margin-left: 10px"  class="btn btn-default btn-maincolor" onclick="deleteImg(\''+ row.id + '\')" ><i class="fa fa-eye"></i>&nbsp;删&nbsp;除</button>';
                            var e = '';
                            if(row.fmflag=='1'){
                                e = '<button type="button" style="margin-left: 10px"  class="btn btn-default btn-maincolor" onclick="fm(\''+ row.id + '\',\''+ row.goodid + '\',\''+ row.imgfile + '\')" ><i class="fa fa-eye"></i>设为封面</button>';
                            }

                            return button +e+ b+ '</div>';
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
                goodid:"${goodid}"
            };
        };
        return oTableInit;
    }

    //跳转添加页面
    function addImg(goodid){
        window.location.href="${ctx}/goods/addimg?goodid="+goodid;

    }

    //点击查看里的返回触发事件
    $("#myclear").click(function(){
        $('#model1').modal('hide');
        $('#teacher_table').bootstrapTable('refresh');
    });



    //查看
    function lookview(id){
        $("#model1").modal();
        $.post("${ctx}/goods/lookview",{id:id},function (d) {
            console.log(d);
            if(d=="ajaxfail"){
                Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                    if(btn=="yes"){
                        window.location.href="${ctx}/sys/index";
                    }
                });
            }else {
                if(d.message=="ok"){
                    var src="${ctx}/img_goods/"+d.src;

              /*      var fr = new FileReader();
                    var $img = $('.index-bd .bd .img-wrap img').eq(0);
                    var imgUrl = fr.readAsDataURL(new Blob(['@ViewBag.path'], { type: "text/plain" }));
                    $img.attr('src', imgUrl);*/
                    var imageStr="<image src='"+src+"' />";
                    $("#divs").html(imageStr);
                }else {
                    Showbo.Msg.alert('系统出现错误,请联系系统管理员');
                }
            }

        });
    }


    //删除平台
    function deleteImg(id) {
        Showbo.Msg.confirm('确定要删除吗？',function (btn) {
            if(btn=='yes'){
                $.post("${ctx}/goods/deleteImg",{id:id},function (d) {
                    if(d=="ajaxfail"){
                        Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                            if(btn=="yes"){
                                window.location.href="${ctx}/sys/index";
                            }
                        });
                    }else {
                        if(d=="ok"){
                            Showbo.Msg.alert('删除成功');
                            $('#teacher_table').bootstrapTable('refresh');
                        }else {
                            Showbo.Msg.alert('删除失败');
                        }
                    }

                });
            }
        })
    }



    function fm(id,goodid,imgfile) {
        Showbo.Msg.confirm('确定要设为封面图片吗？',function (btn) {
            if(btn=='yes'){
                $.post("${ctx}/goods/deleteImg",{id:id,goodid:goodid,imgfile:imgfile},function (d) {
                    if(d=="ajaxfail"){
                        Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                            if(btn=="yes"){
                                window.location.href="${ctx}/sys/index";
                            }
                        });
                    }else {
                        if(d=="ok"){
                            Showbo.Msg.alert('设置封面图片成功');
                            $('#teacher_table').bootstrapTable('refresh');
                        }else {
                            Showbo.Msg.alert('设置封面图片失败');
                        }
                    }

                });
            }
        })
    }
</script>
</html>