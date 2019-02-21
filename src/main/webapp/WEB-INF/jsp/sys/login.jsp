<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <meta http-equiv="Cache-Control" content="no-store" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <title>分销平台</title>

  <!-- Bootstrap core CSS -->
  <link href="${ctx}/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="${ctx}/css/style.css" rel="stylesheet">
  <!-- Custom styles for this template -->
  <link href="${ctx}/css/dashboard.css" rel="stylesheet">

  <style>

    /*.form-control{
      border: 1px #288ce2 solid;
      background: #fff;
    }*/




    /*.form-signin1 {
      max-width: 800px;
      margin: 0 auto;
      background:#fff;
    }*/
    /*.form-signin1 .checkbox {
      margin-bottom: 10px;
    }
    .form-signin1 .checkbox {
      font-weight: normal;
    }*/
    /*.form-signin1 .form-control {
      position: relative;
      font-size: 14px;
      height: auto;
      padding: 10px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
    .form-signin1 .form-control:focus {
      z-index: 2;
    }*/
    /*.form-signin1 input[type="text"] {
      border-radius: 0;
      color:#000;
    }*/
    /*.form-signin1 input[type="password"] {
      border-radius: 0;
      color:#000;
    }*/
    /*.form-signin1 button {
      border-radius: 0;
    }*/
    /*.form-signin1-heading {
      margin-top: 30px;
      margin-bottom: 50px;
    }*/
    /*.input-group-addon1,.input-group-btn,.input-group .form-control {
      display:table-cell
    }
    .input-group-addon1:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child),.input-group .form-control:not(:first-child):not(:last-child) {
      border-radius:0
    }
    .input-group-addon1,.input-group-btn {
      width:1%;
      white-space:nowrap;
      vertical-align:middle
    }
    .input-group-addon1 {

      padding:8px 18px;
      font-size:14px;
      font-weight:400;
      color:#fff;
      text-align:center;
      background-color: #1ba1f8;
      border:1px solid #0795f8;
    }*/
    /*.input-group-addon1.input-sm {
      padding:5px 10px;
      font-size:12px;
      border-radius:3px
    }
    .input-group-addon1.input-lg {
      padding:10px 16px;
      font-size:18px;
      border-radius:6px
    }
    .input-group-addon1 input[type=radio],.input-group-addon1 input[type=checkbox] {
      margin-top:0
    }*/
    /*.yonghu {
      font-size: 20px;
      line-height: 45px;
      font-family: 微软雅黑;
      font-weight: bold;
      color: #000;
    }*/
  </style>
</head>

<body class="login-body">
<img class="loginpage-logo" src="${ctx}/images/logo-liantong.svg" height="55"/>
<form class="form-signin1 signin-box" style="margin-bottom: 0"  action="${ctx}/sys/login" method="post" id="loginForm">
    <div class="title"><div class="left-tri"></div>分销系统管理平台<div class="right-tri"></div></div>

    <%-- <input  type="text" class="form-control" id="" name="loginName"  placeholder="Username" autofocus>
    <input  type="password" class="form-control" id="" name="loginPwd" style="height: 50px" placeholder="Password">--%>

    <div class="form-group form-group-lg has-feedback" style="margin-top: 40px;">
        <input  type="text" class="form-control" id="fieldName" name="fieldName"  maxlength="20" placeholder="Default" value="Default" autofocus>
        <span class="fa fa-server form-control-feedback" aria-hidden="true"></span>
    </div>
    <div class="form-group form-group-lg has-feedback">
        <input  type="text" class="form-control" id="loginName" name="loginName"  maxlength="20" placeholder="用户名" autofocus>
        <span class="fa fa-user form-control-feedback" aria-hidden="true"></span>
    </div>
    <div class="form-group form-group-lg has-feedback">
        <input  type="password" class="form-control" id="loginPwd" name="loginPwd"  maxlength="20"  placeholder="密码">
        <span class="fa fa-lock form-control-feedback" aria-hidden="true"></span>
    </div>
    <div class="form-group form-group-lg has-feedback">
        <select id="region" name="region" class="form-control">
            <option value="RegionOne">RegionOne</option>
            <option value="RegionTwo">RegionTwo</option>
        </select>

    </div>
    <%--<div class="input-group input-group-lg">
      <span class="input-group-addon1"><i class="fa  fa-table"></i></span>
      <input  type="text" class="form-control" id="fieldName" name="fieldName"  maxlength="20" placeholder="Default" autofocus>
    </div>--%>
    <%--<div class="input-group input-group-lg" style="margin-top: 10px">
      <span class="input-group-addon1"><i class="fa fa-user"></i></span>
      <input  type="text" class="form-control" id="loginName" name="loginName"  maxlength="20" placeholder="Username" autofocus>
    </div>
    <div class="input-group input-group-lg" style="margin-top: 12px">
      <span class="input-group-addon1"><i class="fa fa-lock"></i></span>
      <input  type="password" class="form-control" id="loginPwd" name="loginPwd"  maxlength="20"  placeholder="Password">
    </div>--%>
    <%--<div class="checkbox"style="margin-top: 5px" >
      <label><input type="checkbox" onclick="remembers();" id="remember">记住密码</label>
    </div>--%>
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




<!-- Placed js at the end of the document so the pages load faster -->

<!-- Placed js at the end of the document so the pages load faster -->
<script src="${ctx}/js/jquery-1.10.2.min.js"></script>
<script src="${ctx}/js/bootstrap.min.js"></script>
<script src="${ctx}/js/modernizr.min.js"></script>
<link rel="stylesheet" href="${ctx}/css/showBo.css" />
<script src="${ctx}/js/showBo.js"></script>


<script>
  //记住密码功能在后台解密
  var url;
  $(document).ready(function(){
    var currentUrl = window.location.href;
    var chars = currentUrl.substring(currentUrl.length-1);
    var aa = currentUrl.split("/");
    if (chars=="/"){
      url= aa[aa.length-2];
    }else{
      url= aa[aa.length-1];
    }
    if(url=='nologin'){
      var a = '${remember}';
      if (a=="1"){
        $("#remember").attr("checked","checked");
        $("#rememeberFlag").val("1");
      }else if(a=="0"){
        $("#remember").removeAttr('checked');
        $("#rememeberFlag").val("");
      }
    }
    getCookie()
  });

  function getCookie(){
    $.ajax({
      async: false, //采用同步方式
      type:"POST",
      url :"${ctx}/sys/getDecString",
      dataType: "text",
      success : function(r) {
        if (r!='0'){
          $("#remember").attr("checked","checked");
          var username = r.split("@")[1];
          var password = r.split("@")[2];
          $("#loginName").val(username);
          $("#loginPwd").val(password);
        }
        if(r==''){
          $("#remember").removeAttr('checked');
          $("#rememeberFlag").val("");
        }
      }
    });
  }
  //记住密码功能
  function remembers(){
    var remFlag = $("#remember").is(':checked');
    if(remFlag==true){ //如果选中设置remFlag为1
      Showbo.Msg.confirm('您确定要记住密码吗?',function(btn) {
        if(btn=='yes'){
          $("#rememeberFlag").val("1")
        } else{
          $("#remember").removeAttr('checked');
          $("#rememeberFlag").val("");
        }
      })
    }else{ //如果没选中设置remFlag为""
      $("#remember").removeAttr('checked');
      $("#rememeberFlag").val("");
    }
  }
  $(function() {
    $("#loginPwd").bind('keydown', function(event) {
      if (event.keyCode == "13") {
        var loginName = $("#loginName").val();
        var loginPwd = $("#loginPwd").val();
        var fieldName = $("#fieldName").val();
        if (loginName.length==0 || loginPwd.length==0 ||fieldName.length==0 ) {
          Showbo.Msg.alert("域名,登录名称与登录密码不能为空！");
          return false;
        }else{
          if($.isEmptyObject(loginName) || $.isEmptyObject(loginPwd)){
            Showbo.Msg.alert("请使用极速模式浏览器！");
            return false;
          }else {
            var remFlag = $("#remember").is(':checked');
            if(remFlag==true){ //如果选中设置remFlag为1
              $("#rememeberFlag").val("1")
            }else {
              $("#remember").removeAttr('checked');
              $("#rememeberFlag").val("");
            }
            $("#loginForm").submit();
          }
        }
      }
    });
    $("#btn_login").click(function () {
      var loginName = $("#loginName").val();
      var loginPwd = $("#loginPwd").val();
      var fieldName = $("#fieldName").val();
      if (loginName.length==0 || loginPwd.length==0 || fieldName.length==0 ) {
        Showbo.Msg.alert("域名,登录名称与登录密码不能为空！");
        return false;
      }else{
        if($.isEmptyObject(loginName) || $.isEmptyObject(loginPwd)){
          Showbo.Msg.alert("请使用极速模式浏览器！");
          return false;
        }else {
          var remFlag = $("#remember").is(':checked');
          if(remFlag==true){ //如果选中设置remFlag为1
            $("#rememeberFlag").val("1")
          }else {
            $("#remember").removeAttr('checked');
            $("#rememeberFlag").val("");
          }
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



function cl() {
  $("#phone_num").val("");
  $("#login_name").val("");
  $("#code").val("");
  $("#phone_num").prop('disabled',false);
  $("#login_name").prop('disabled',false);
}
  function cl2() {
    $("#phone_num").val("");
    $("#login_name").val("")
    $("#code").val("");
    $("#phone_num").prop('disabled',false);
    $("#login_name").prop('disabled',false);
  }
</script>

</body>
</html>

