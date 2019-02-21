
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<style>
    .top_time ul {
        list-style-type: none;
    }
    .top_time ul li {
        padding-left: 5px;
    }
    /*.dropdown-menu li{
        float: left;
        margin-left: 5px;
    }*/

    /*bootstrap按钮下拉菜单样式覆盖*/
    .dropdown-menu{
        min-width: 100px !important;
    }
    .dropdown-menu>li>button {
        display: block;
        width: 100%;
        text-align: left;
        padding: 3px 20px;
        clear: both;
        font-weight: 400;
        line-height: 1.42857143;
        color: #333;
        white-space: nowrap;
    }
    .dropdown-menu>li>button:focus,
    .dropdown-menu>li>button:hover {
        color: #262626;
        text-decoration: none;
        background-color: #f5f5f5;
    }

    /*.top_right {
        text-align: right;
        margin-right: 22px;
    }*/
    .liantong-logo{
        float: left;
        background-color: #fff;
        width: 220px;
        height: 100%;
        padding-left: 20px;
    }
    .liantong-logo .img-logo{
        background: url("${ctx}/images/logo-liantong.svg") no-repeat left center;
        background-size: contain;
        height: 100%;
        width: 84px;
    }
    .platform-title{
        float: left;
        font-size: 26px;
        color: #fff;
        line-height: 60px;
        padding-left: 20px;
    }

    .btn-mopw{
        color: white;cursor: pointer;
    }
    .btn-mopw:hover .fa{
        transform: rotate(45deg);
        -ms-transform:rotate(45deg); 	/* IE 9 */
        -moz-transform:rotate(45deg); 	/* Firefox */
        -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
        -o-transform:rotate(45deg); 	/* Opera */
        transition: all 0.5s;
    }
</style>

<nav class="navbar navbar-red navbar-fixed-top">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">分销平台</a>
        </div>


    </div>
</nav>

<%--<div class="header-section">--%>



    <%--<a class="toggle-btn" onclick="disimag();"><i class="fa fa-bars"></i></a>--%>
    <%--<div class="pull-right">--%>

        <%--<div class="top_time">--%>
             <%--<span style="color: white;"> ${userNameSession}，欢迎您！</span>--%>
             <%--<span style="color: white;cursor: pointer" onclick="logout()"><i class="fa fa-wrench"></i> 修改密码</span><br>--%>
             <%--<span style="color: white;cursor: pointer" onclick="changecss(1);"><i class="fa fa-wrench"></i> 模板: </span>--%>
             <%--<span style="color: white;cursor: pointer" onclick="changecss(1);"><i class="fa fa-wrench"></i> 样式1 </span>--%>
             <%--<span style="color: white;cursor: pointer" onclick="changecss(2);"><i class="fa fa-wrench"></i> 样式2 </span>--%>
             <%--<span style="color: white" id="requery_index"></span>--%>

            <%--<ul class="" style="margin-bottom: 3px;">--%>
                <%--<li><span class="btn-mopw" onclick="logout()"><i class="fa fa-wrench"></i> 修改密码</span></li>--%>
                <%--<li class="dropdown">--%>
                    <%--<a href="#" class="dropdown-toggle" data-toggle="dropdown">--%>
                        <%--<span style="color: white;cursor: pointer"> 换肤: </span>--%>
                        <%--<b class="caret"></b>--%>
                    <%--</a>--%>
                    <%--<ul class="dropdown-menu">--%>
                        <%--<li><span style="color: #555;" onclick="changecss(1);">模板1:</span> <span onclick="changecss(1);"><i style="color: #3999f1;cursor: pointer;" class="fa fa-stop"></i></span></li>--%>
                        <%--<li><span style="color: #555;" onclick="changecss(2);">模板2:</span> <span onclick="changecss(2);"><i style="color: #1860c2;cursor: pointer;" class="fa fa-stop"></i></span></li>--%>
                    <%--</ul>--%>
                <%--</li>--%>
            <%--</ul>--%>
            <%--<div class="top_right"> <span style="line-height: 60px;" id="requery_index"></span></div>--%>
        <%--</div>--%>

        <%--<div></div>--%>
    <%--</div>--%>
<%--</div>--%>
<%-----------------------------------------------------模态框--%>
<!--
<div class="modal fade" id="usermodel">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header1">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title">修改密码</h4>
            </div>
            <div class="modal-body" >
                <div class="form-group">
                    用户名称：<input id="emp_name111" maxlength="255" type="text" class="labelStyle-style" readonly="readonly">
                </div>
                <div class="form-group">
                    用户账号：<input id="login_name111" maxlength="255" type="text" class="labelStyle-style" readonly="readonly">
                </div>
                <div class="form-group">
                    新密码：&#12288;<input id="login_pwd111"  maxlength="20" type="password" class="labelStyle-style" placeholder="新密码">
                </div>
                <div class="form-group">
                    确认密码：<input id="submit_pwd111" maxlength="20" type="password" class="labelStyle-style" placeholder="确认密码">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" onclick="editSubmit()" ><i class="fa fa-check"></i> 确定</button>
                <button type="button"  class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> 取消</button>
            </div>

        </div>
    </div>
</div>
-->
<!-- /.modal-content -->
<!-- /.modal-dialog -->
<!-- /.modal -->
<script>
    $.post("${ctx}/sys/qhselect",function (d) {
        var arr = d.split("|");
        //$("#qhpro").html(arr[0]);
        $("#qhpro").nextAll().remove();
        $("#qhpro").after(arr[0]);
        $("#proname").html(arr[1]);
    });
    function logout() {
        $.ajax({
            async: false, //采用同步方式
            type:"POST",
            url :"${ctx}/emp/queryUserInfo",
            data : {},
            dataType: "text",
            success : function(data) {
                $("#emp_name111").val(data.split(",")[0]);
                $("#login_name111").val(data.split(",")[1]);
            },
            error:function() {
            }
        });
        $("#login_pwd111").val("");
        $("#submit_pwd111").val("");
        $('#usermodel').modal();
    }
    function editSubmit() {
        var p1=$("#login_pwd111").val();
        if($.isEmptyObject(p1)){
            Showbo.Msg.alert("请输入新的密码！");
            return;
        }
        var p2=$("#submit_pwd111").val();
        if($.isEmptyObject(p2)){
            Showbo.Msg.alert("请输入确认密码！");
            return;
        }
        if(p1!=p2){
            Showbo.Msg.alert("两次密码不一致，请重新输入！");
            return;
        }
        $.post("${ctx}/emp/updateUserInfo",{login_pwd:p1},function (d) {
            if(d=="ok"){
                Showbo.Msg.alert('修改成功');
                $('#usermodel').modal('hide');
            }else {
                Showbo.Msg.alert('修改失败');
            }
        })
    }

//    setTimeout("requery_login()",1000);
//    function requery_login(){
//        var oDate = new Date();
//        var h=oDate.getHours().toString();
//        var m=oDate.getMinutes().toString();
//        var s=oDate.getSeconds().toString();
//        if(h.length==1){
//            h="0"+h;
//        }
//        if(m.length==1){
//            m="0"+m;
//        }
//        if(s.length==1){
//            s="0"+s;
//        }
//        var strTime = oDate.getFullYear() + '年' + eval(oDate.getMonth()+1) + '月' + oDate.getDate() + '日  星期' + '日一二三四五六'.substr(oDate.getDay(),1) + '  ' + h+ ':' + m + ':' + s;
//        document.getElementById("requery_index").innerHTML=strTime;
//        setTimeout("requery_login()",1000);
//    }
//    var ffflag = "1";
//    function disimag(){
//
//        if(ffflag=="1"){
//            document.getElementById('imga').style.display = "none";
//            ffflag = "0";
//        }else if(ffflag=="0"){
//            document.getElementById('imga').style.display = "";
//            ffflag = "1";
//        }
//    }

    function changecss(flag){
        window.location.href="${ctx}/sys/changecss?flag="+flag;
    }
    function qhProject(obj) {
        $("#qhproid").val(obj);
        $("#qhproject").submit();
    }

</script>
<%@include file="../sys/alljscss.jsp"%>