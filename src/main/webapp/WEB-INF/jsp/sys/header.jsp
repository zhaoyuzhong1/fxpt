
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<%

//    if(HelperClazz.isEmpty(adminName)) {
//
//        String str = "<script language='javascript'>Showbo.Msg.alert('会话过期,请重新登录');"
//                + "window.top.location.href='"
//                + request.getContextPath() + "/sys/login"
//                + "';</script>";
//        response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
//        try {
//            PrintWriter writer = response.getWriter();
//            writer.write(str);
//            writer.flush();
//            writer.close();
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>分销系统管理平台</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="keywords" content="admin, dashboard, bootstrap, template, flat, modern, theme, responsive, fluid, retina, backend, html5, css, css3">
    <meta name="description" content="">
    <meta name="author" content="ThemeBucket">
    <link rel="shortcut icon" href="#" type="image/png">

    <!--dashboard calendar-->
    <link href="${ctx}/css/clndr.css" rel="stylesheet">

    <!--common-->

    <link href="${ctx}/css/style-responsive.css" rel="stylesheet">
    <link href="${ctx}/css/labelStyle.css" rel="stylesheet">
    <link href="${ctx}/css/skin/jedate.css" rel="stylesheet">








    <!-- 图片上传即使预览插件 -->
    <link rel="stylesheet" href="${ctx}/css/fileupload/fileinput.min.css">


  <%--多选下拉框css--%>
    <%--<link rel="stylesheet" href="${ctx}/css/bootstrap.css" />--%>
    <link rel="stylesheet" href="${ctx}/css/multiple-select.css" />

    <style>
        .m-shell{
            position: relative;
            width:300px; height: 533.3333px; height: calc(300px*960 / 540);
            /*width: 30%;
            padding-bottom: 53.333%;*/
            background-color: #fff;
            border: 1px solid #eee;
            box-sizing: content-box;
        }
        @media (max-width: 340px){
            .m-shell{
                width: 100%;
                height: 0;
                padding-bottom: 177.777%;
            }
        }
        .m-shellinner{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .m-shell .golal{
            position: relative;
            width:100%; height:100%;
        }
        .m-shell .close-icon{
            position: absolute;
            top: 30px; right: 30px;
            font-size: 30px;
            color: #fff;
        }
        /*.m-shell .c-nav{
            position: absolute;
            bottom: 35px;
            width: 100%;
        }
        .m-shell .c-nav span{
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 10px;
            background-color: #fff;
            opacity: 0.5;
        }
        .m-shell .c-nav span.focus{
            opacity: 1;
        }*/
        /*.m-shell .top-banner{
            position: absolute;
            top: 0;
            left: 0;
            max-width: 100%;
        }
        .m-shell .bottom-banner{
            position: absolute;
            bottom: 0;
            left: 0;
            max-width: 100%;
        }*/
        .m-shell .top-banner{
            position: absolute;
            width: 100%;
            padding-bottom: 44.44444%
        }
        .m-shell .top-banner img{
            position: absolute;
            top: 0; left: 0;
            width: 100%;
            height: 100%;
            /*border-bottom-right-radius:150px 40px;
            border-bottom-left-radius:150px 40px;*/
        }
        .m-shell .bottom-banner{
            position: absolute;
            bottom: 0; left: 0;
            width: 100%;
            padding-bottom: 37.037037%
        }
        .m-shell .bottom-banner img{
            position: absolute;
            bottom: 0; left: 0;
            width: 100%;
            height: 100%;
        }

        .m-shell .sicon{
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 48.689%;
        }
        .m-shell .sicon img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .m-shell .cicon{
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 100%;
        }
        .m-shell .cicon img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
        .m-shell .sicon-txt{
            position: absolute;
            top: 5px; left: 8px;
            font-size: 12px;  color: #32A6DF;
        }

        /*验证中 start*/
        .certify-modal{
            position: absolute;
            top: 30%; left: 0;
            width: 100%;
            box-sizing: border-box;
        }
        .certify-modal img{
            width: 100%;
        }
        /*验证中 end*/

        @media (max-width: 300px){
            .m-shell .icon-txt{
                font-size: 12px;
            }
        }


        /*帮助提示框start*/
        .help{
            position: relative;
            display: inline-block;
            width: 16px; height: 16px;
            background: url("${ctx}/images/quemark2.svg") no-repeat; background-size: contain;

            margin-left: 3px; vertical-align: middle; margin-bottom: 3px;
        }
        .helptip{
            z-index: 10000;
            display: inline-block;
            background-color: gainsboro;
            border-radius: 5px;
            font-size: 12px; color: black;
            padding: 7px;
            opacity:0;
        }
        .helptip .sharp{
            position: absolute; top: 7px; left: -14px;
            border: 7px solid rgba(92, 173, 241, 0.25);
            border-top-color: transparent;
            border-left-color: transparent;
            border-bottom-color: transparent;
        }
        /*帮助提示框end*/
    </style>

<script>

</script>







































</head>