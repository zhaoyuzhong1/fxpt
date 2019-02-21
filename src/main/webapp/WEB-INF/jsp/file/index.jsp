<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="../sys/header.jsp"%>
<!DOCcode html>
<html lang="en">

<link rel="stylesheet" href="${ctx}/css/fileupload/bootstrap.413.min.css" crossorigin="anonymous">
<link href="${ctx}/css/fileupload/fileinput.css" media="all" rel="stylesheet" type="text/css"/>
<link href="${ctx}/js/fileupload/themes/explorer-fas/theme.css" media="all" rel="stylesheet" type="text/css"/>

<script src="${ctx}/js/jquery-3.2.1.js" type="text/javascript"></script>
<script src="${ctx}/js/fileupload/plugins/sortable.js" type="text/javascript"></script>
<script src="${ctx}/js/fileupload/fileinput.js" type="text/javascript"></script>
<script src="${ctx}/js/fileupload/locales/fr.js" type="text/javascript"></script>
<script src="${ctx}/js/fileupload/locales/es.js" type="text/javascript"></script>
<script src="${ctx}/js/fileupload/locales/zh.js" type="text/javascript"></script>
<script src="${ctx}/js/fileupload/themes/fas/theme.js" type="text/javascript"></script>
<script src="${ctx}/js/fileupload/themes/explorer-fas/theme.js" type="text/javascript"></script>

<style>
    .kv-avatar .krajee-default.file-preview-frame,.kv-avatar .krajee-default.file-preview-frame:hover {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
        text-align: center;
    }
    .kv-avatar {
        display: inline-block;
    }
    .kv-avatar .file-input {
        display: table-cell;
        width: 213px;
    }
    .kv-reqd {
        color: red;
        font-family: monospace;
        font-weight: normal;
    }
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
                        <i class="fa fa-th-list" style="margin-right: 5px"></i>首页图片管理${ctx}
                    </h3>
                </div>
                <div class="panel-body" >

                        <button class="btn btn-main btn-sm" type="button" onclick="add()"><i class="fa fa-search"></i> 添加</button>

                </div>
                <table id="teacher_table" data-page-size="5"> </table>

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
                <h4 class="modal-title"> 图片上传</h4>
            </div>
            <div class="modal-body" >
                <form class="form-horizontal" role="form" method="post"
                      action="${ctx}/file/uploadFile" enctype="multipart/form-data">

                <input type="hidden" id="allid">
                <input type="hidden" id="uiflag">
                <div class="form-horizontal">
                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 图片名称：</label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" name="name" id="name" required>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-2 control-label">上传图片：</label>
                        <div class="kv-avatar">
                            <div class="file-loading">
                                <input id="avatar-1" name="avatar-1" type="file" required>
                            </div>
                        </div>
                        <div class="kv-avatar-hint"><small>Select file < 1500 KB</small></div>
                    </div>



                </div>
                </form>
                <div id="kv-avatar-errors-1" class="center-block" style="width:800px;display:none"></div>
            </div>
            <div class="modal-footer" id="qlfoot1">
                <button type="button"  class="btn btn-thollow" data-dismiss="modal"><i class="fa fa-times"></i> 取消</button>
                <button type="submit" class="btn btn-tsolid" ><i class="fa fa-check" ></i> 确定</button>
            </div>
            <div class="modal-footer" id="qlfoot2" style="display: none">
                <button type="button"  class="btn btn-thollow" data-dismiss="modal"><i class="fa fa-times"></i> 取消</button>
                <button type="button" class="btn btn-tsolid" onclick="update();" ><i class="fa fa-check" ></i> 修改</button>
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
                url: "${ctx}/file/queryList",
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
                        title: '图片名称'
                    },{
                        field: 'flag',
                        title: '状态',
                        formatter: function(value,row,index){
                            if("0"==value){
                                return "启用";
                            } else if("1"==value){
                                return "注销";
                            }
                        }
                    },{
                        title: '操作',
                        width:'100px',
                        formatter: function(value,row,index){
                            var button ='<div class="btn-group btn-group-xs">';

                            var b = '';
                            if(row.flag=='0'){
                                b = '<button type="button" class="btn btn-default btn-maincolor"onclick="zx(\''+ row.id + '\')" ><i class="fa fa-eye"></i>&nbsp;注&nbsp;销</button>';
                            }else{
                                b = '<button type="button" class="btn btn-default btn-maincolor"onclick="qy(\''+ row.id + '\')" ><i class="fa fa-eye"></i>&nbsp;启&nbsp;用</button>';
                            }

                            return button +b+ '</div>';

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



    //打开修改模态框
    function add() {

        $("#qlfoot2").css("display","block");
        $("#qlfoot1").css("display","none");
        $('#model').modal();
    }



    function zx(id) {
        $.post("${ctx}/file/zx",{id:id},function (d) {
            if(d=="ajaxfail"){
                Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                    if(btn=="yes"){
                        window.location.href="${ctx}/sys/index";
                    }
                });
            }else {
                if(d=="ok"){
                    Showbo.Msg.alert('注销成功');
                    $('#teacher_table').bootstrapTable('refresh');
                }else {
                    Showbo.Msg.alert('注销失败');
                }
            }

        });
    }



    function qy(id) {
        $.post("${ctx}/file/qy",{id:id},function (d) {
            if(d=="ajaxfail"){
                Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                    if(btn=="yes"){
                        window.location.href="${ctx}/sys/index";
                    }
                });
            }else {
                if(d=="ok"){
                    Showbo.Msg.alert('启用成功');
                    $('#teacher_table').bootstrapTable('refresh');
                }else {
                    Showbo.Msg.alert('启用失败');
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



    $("#avatar-1").fileinput({
        language: 'zh',
        overwriteInitial: true,
        maxFileSize: 1500,
        showClose: false,
        showCaption: false,
        browseLabel: '',
        removeLabel: '',
        browseIcon: '选择文件',
        removeIcon: '删除文件',
        removeTitle: 'Cancel or reset changes',
        elErrorContainer: '#kv-avatar-errors-1',
        msgErrorClass: 'alert alert-block alert-danger',
        defaultPreviewContent: '<img src="${ctx}/upload/default_avatar_male.jpg" alt="Your Avatar">',
        layoutTemplates: {main2: '{preview} ' + ' {remove} {browse}'},
        allowedFileExtensions: ["jpg", "png", "gif"]
    });


</script>


</html>