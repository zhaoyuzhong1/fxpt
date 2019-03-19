<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.fxpt.dto.User" %>
<%
    User emp = (User)request.getSession().getAttribute("empSession");

%>
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
    .cloudoss-logo{
        height: 40px;
    }
</style>

<nav class="navbar navbar-red navbar-fixed-top">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button onclick="mNav()" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a style="font-size: 18px;color:#fff;line-height: 50px;" class="navbar-brand" href="#"><img class="cloudoss-logo" src="${ctx}/images/logo.png"/>&nbsp;&nbsp;久康元</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
            <li><p class="navbar-text">${empSession.name}，欢迎您！</p></li>
            <%--<li><a href="javascript:void(0);" onclick="abc()"><i class="fa fa-bell-o"></i> 点击播放mp3</a></li>--%>
            <li><a href="javascript:void(0);" onclick="openPWDModal()"><i class="fa fa-key"></i> 修改密码</a></li>
            <li><a href="${ctx}/sys/nologin"><i  class="fa fa-sign-out"></i> 退出登录</a></li>
        </ul>

        <audio id="bgMusic">
            <source  src="../images/ling.mp3" type="audio/mp3">
            <source  src="hangge.ogg" type="audio/ogg">
        </audio>

    </div>
</nav>



<div class="modal fade" id="topchangePwdModel">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header1">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title">修改密码</h4>
            </div>
            <div class="modal-body" >
                <form id="changePwdForm" action="${ctx}/sys/changePwd">
                    <div class="form-horizontal">
                        <div class="form-group">
                            <div class="control-label col-sm-3">用户名称：</div>
                            <div class="col-sm-9">
                                <input id="empName" maxlength="255" type="text" class="labelStyle-style" readonly="readonly" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="control-label col-sm-3">原始密码：</div>
                            <div class="col-sm-9">
                                <input id="empPwd" type="password" class="labelStyle-style"placeholder="原始密码" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="control-label col-sm-3">新密码：</div>
                            <div class="col-sm-9">
                                <input id="pwd" name="login_pwd"  maxlength="20" type="password" class="labelStyle-style" placeholder="新密码">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="control-label col-sm-3">确认密码：</div>
                            <div class="col-sm-9">
                                <input id="pwdTwice" maxlength="20" type="password" class="labelStyle-style" placeholder="确认密码">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="control-label col-sm-3">电话号码：</div>
                            <div class="col-sm-9">
                                <input id="phone_num1" maxlength="11" type="text" class="labelStyle-style" placeholder="电话号码">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button"  class="btn btn-thollow" data-dismiss="modal"><i class="fa fa-times"></i> 取消</button>
                <button type="button" class="btn btn-tsolid" onclick="changePwd()" ><i class="fa fa-check"></i> 确定</button>
            </div>
        </div>
    </div>
</div>

<!-- /.modal-content -->
<!-- /.modal-dialog -->
<!-- /.modal -->


<script>
    /*$.post("$!{ctx}/message/countSee",function (d) {
        if(d==0){
            $("#countSee").html("");

        }else {
            $("#countSee").html(d);
        }
    });*/
    //修改模态框
    function openPWDModal(){
        $("#empName").val('${empSession.name}');
        $("#phone_num1").val('${empSession.mobile}');
        $('#topchangePwdModel').modal();
        $("#topchangePwdModel").draggable();//为模态对话框添加拖拽
    }

    function changePwd(){
        var pwd = $("#pwd").val();
        var history_pwd = $("#empPwd").val();
        var pwdTwice = $("#pwdTwice").val();

        var phone_num = $("#phone_num1").val();

        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(17[0-9]{1}))+\d{8})$/;  //手机正则

        if(history_pwd.trim()==''){
            Showbo.Msg.alert("原始密码不能为空！");
            return false;
        }
        if(pwd.trim()=='' || pwdTwice.trim()==''){
            Showbo.Msg.alert("请输入新密码！");
            return false;
        }
        if(pwdTwice!=pwd){
            Showbo.Msg.alert("两次输入密码不相同，请重新输入！");
            return false;
        }
        if(phone_num.trim()!="" && !$.isEmptyObject(phone_num)){
            if(!myreg.test(phone_num)) {
                Showbo.Msg.alert("手机号码输入错误！");
                $("#phone_num1").focus();
                return false;
            }
        }

            $.ajax({
                type: 'post',
                url:"${ctx}/user/changePwd",
                cache: false,
                async: false, // 采用同步方式
                global:true,
                dataType :"json",
                data:{"history_pwd":history_pwd,"login_pwd":pwd,"mobile":phone_num},
                success: function(data) {
                    var flag = data.flag;

                    if(flag==0){
                        window.location.href="${ctx}"
                    } else if(flag==2){
                        Showbo.Msg.alert("原始密码有误, 请重新输入！");
                    } else{
                        Showbo.Msg.alert("修改密码失败！");
                    }
                }
            });
    }

</script>

<script >
    //播放消息提醒
    /*$(document).ready(function () {
//        querylist();
        setInterval(function (){ querylist()},60000);//60秒
    });*/


    /*function abc() {
        var audio = document.getElementById("bgMusic");
        audio.play();
    }

    function querylist(){

        $.post('$!{ctx}/sys/toCheckPublicBusi',function(d){

            if(d =="ok"){
                abc();
            }
        });

    }*/


</script>
<%@include file="../sys/alljscss.jsp"%>
<script>
    //mobile nav 切换
    function mNav(){
        $('#left_side').toggle();
    }
</script>
