<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
    <meta name="renderer" content="webkit" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, minimum-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<%--<meta http-equiv="X-UA-Compatible" content="IE=edge">--%>
  <%--<meta name="viewport" content="width=device-width, initial-scale=1">--%>
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <meta http-equiv="Cache-Control" content="no-store" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <title>分销平台</title>

  <link href="${ctx}/css/bootstrap.min.css" rel="stylesheet">

  <link href="${ctx}/css/style.css" rel="stylesheet">
  <!-- Custom styles for this template -->
  <link href="${ctx}/css/dashboard.css" rel="stylesheet">
</head>

<body class="login-body">

<form class="form-signin1 signin-box" style="margin-bottom: 0"  action="${ctx}/sys/login" method="post" id="loginForm">
    <%--<div class="login-logobox">--%>
        <%--<img src="${ctx}/images/htlt_logo.png" height="55"/>--%>
    <%--</div>--%>

    <div class="title"><div class="left-tri"></div>分销平台<div class="right-tri"></div></div>
    <div class="form-group form-group-lg has-feedback" style="margin-top: 40px;">
        <input  type="text" class="form-control" id="loginName" name="loginName"  maxlength="20" placeholder="用户名" autofocus>
        <span class="fa fa-user form-control-feedback" aria-hidden="true"></span>
    </div>

    <div class="form-group form-group-lg has-feedback">
        <input  type="password" class="form-control" id="loginPwd" name="loginPwd"  maxlength="20"  placeholder="密码">
        <span class="fa fa-lock form-control-feedback" aria-hidden="true"></span>
    </div>
    <input type="hidden" id="rememeberFlag" name="rememeberFlag">

    <button style="margin-top: 40px;" class="btn btn-red btn-lg center-block" id="btn_login" type="button">登录</button>


    <!-- Modal -->
    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Forgot Password ?</h4>
          </div>
          <div class="modal-body">
            <p>Enter your e-mail address below to reset your password.</p>
            <input type="text" name="email" placeholder="Email" autocomplete="off" class="form-control placeholder-no-fix">
          </div>
          <div class="modal-footer">
            <button data-dismiss="modal" class="btn btn-default" type="button">Cancel</button>
            <button class="btn btn-primary" type="button">Submit</button>
          </div>
        </div>
      </div>
    </div>
    <!-- modal -->
    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="model" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div class="modal-footer"  >
            <button data-dismiss="modal" class="btn btn-default" type="button" onclick="cl()">取消</button>
            <button class="btn btn-primary" type="button" onclick="Submit()">提交</button>
          </div>
        </div>
      </div>
    </div>
    <!--model1-->
    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="model1" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

          </div>
          <div class="modal-body" style="margin-left: 13px;margin-right: 13px">
            <button data-dismiss="modal" class="btn btn-default" type="button" onclick="cl2()">取消</button>
            <button class="btn btn-primary" type="button" onclick="SubmitPwd()">确定</button>
          </div>
        </div>
      </div>
    </div>

</form>


<script src="${ctx}/js/jquery-1.10.2.min.js"></script>
<script src="${ctx}/js/bootstrap.min.js"></script>
<script src="${ctx}/js/modernizr.min.js"></script>
<link rel="stylesheet" href="${ctx}/css/showBo.css" />
<script src="${ctx}/js/showBo.js"></script>


<script>
    //窗口高度控制
    var win_h = $(document).height();
    $("body").height(win_h);

    $(function() {

        $("#loginPwd").bind('keydown', function(event) {
            if (event.keyCode == "13") {
                var loginName = $("#loginName").val();
                var loginPwd = $("#loginPwd").val();
                if (loginName.length==0 || loginPwd.length==0  ) {
                    Showbo.Msg.alert("登录名称与登录密码不能为空！");
                    return false;
                }else{
                    if($.isEmptyObject(loginName) || $.isEmptyObject(loginPwd)){
                        Showbo.Msg.alert("请使用极速模式浏览器！");
                        return false;
                    }else {

                        $("#loginForm").submit();
                    }
                }
            }
        });
        $("#btn_login").click(function () {
            var loginName = $("#loginName").val();
            var loginPwd = $("#loginPwd").val();
            if (loginName.length==0 || loginPwd.length==0  ) {
                Showbo.Msg.alert("登录名称与登录密码不能为空！");
                return false;
            }else{
                if($.isEmptyObject(loginName) || $.isEmptyObject(loginPwd)){
                    Showbo.Msg.alert("请使用极速模式浏览器！");
                    return false;
                }else {

                    $("#loginForm").submit();
                }
            }
        });
        var returnInfo = "${returnInfo}";
        if(!$.isEmptyObject(returnInfo)){
            if(returnInfo == "loginNoOK"){
                Showbo.Msg.alert("登录失败，登录名称或登录密码错误！");
                $("#loginName").focus();
                return false;
            }
        }
    })
</script>

</body>
</html>

