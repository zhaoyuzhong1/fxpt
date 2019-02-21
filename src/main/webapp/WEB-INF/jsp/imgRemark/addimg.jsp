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

<body class="sticky-header">
<!-- left side end-->

<!-- main content start-->
<div class="main-content" >
<!-- header section end-->
<%--------------------------------------------------------内容--%>



    <!-- some CSS styling changes and overrides -->
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

    <!-- markup -->
    <!-- note: your server code `avatar_upload.php` will receive `$_FILES['avatar']` on form submission -->
    <!-- the avatar markup -->
    <form  action="${ctx}/imgMaterial/uploadImg" method="post" enctype="multipart/form-data">
        <div class="row">
            <div class="col-sm-4 text-center">
                <div class="kv-avatar">
                    <div class="file-loading">
                        <input id="avatar-1" name="avatar-1" type="file" required>
                    </div>
                </div>
                <div class="kv-avatar-hint"><small>Select file < 1500 KB</small></div>
            </div>
            <div class="col-sm-8">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="name">图片名称<span class="kv-reqd">*</span></label>
                            <input type="text" class="form-control" name="name" id="name" required>
                        </div>
                    </div>

                </div>

                <div class="form-group">
                    <div class="text-right">
                        <button type="submit" class="btn btn-primary" id="upload">上传</button>
                        <button id="clear" class="btn btn-primary">返回</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <div id="kv-avatar-errors-1" class="center-block" style="width:800px;display:none"></div>

    <!-- the fileinput plugin initialization -->
    <script>
        var btnCust = '<button type="button" class="btn btn-secondary" title="Add picture tags" ' +
                'onclick="alert(\'Call your custom code here.\')">' +
                '<i class="glyphicon glyphicon-tag"></i>' +
                '</button>';
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


        //点击取消触发事件
        $("#clear").click(function(){
            window.location.href="${ctx}/imgMaterial/imgRemark";
        });


   /*     //上传
        $("#upload").click(function(){
            console.log(" 进入上传方法");
            var name = $("#name").val();
            var src = $("#avatar-1").val();
            $.post("${ctx}/imgMaterial/uploadImg",{name:name.trim(),src:src.trim()},function (d) {
                console.log(d);
                if(d=="ajaxfail"){
                    Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                        if(btn=="yes"){
                            window.location.href="${ctx}/sys/index";
                        }
                    });
                }else {
                    if(d.message=="ok"){
                        howbo.Msg.confirm1("上传成功,是否继续上传!",function(btn){
                            if(btn=="yes"){
                                window.location.href="${ctx}/imgMaterial/uploadImg";
                            }else{
                                window.location.href="${ctx}/imgMaterial/imgRemark";
                            }
                        })
                    }else {
                        Showbo.Msg.alert('系统出现错误,请联系系统管理员');
                    }
                }

            });
        });*/


    </script>

</div>


</body>


</html>