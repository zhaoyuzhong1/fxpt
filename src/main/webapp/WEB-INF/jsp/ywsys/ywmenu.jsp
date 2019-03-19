<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:set var="ctx" value="${pageContext.request.contextPath}" />
<%@include file="../sys/alljscss2.jsp"%>
<div class="left-side sticky-left-side" id="left_side">
    <%--<div class="menulogo-box text-center">
        <img src="${ctx}/images/htlt_logo.png"/>
        <div class="text-center m-profile">${empSession.name}，欢迎您！</div>
    </div>--%>
    <div class="left-side-inner">

        <ul class="nav nav-pills nav-stacked custom-nav">
            <!--<li ><a href="${ctx}/sys/index"><i class="fa fa-home"></i> <span>首页</span></a></li>-->
            <li <c:if test="${smenu.id==menuUtil.mid}">class="active"</c:if>><a href="#"><i class="fa fa-home"></i> <span>首页</span></a></li>
            <c:forEach var="menu" items="${smenus}">
                <li <c:if test="${menu.pfunction.id!=menuUtil.pid}">class="menu-list"</c:if> <c:if test="${menu.pfunction.id==menuUtil.pid}">class="menu-list nav-active"</c:if>><a href="#"><i class="${menu.pfunction.iconcss}"></i> <span>${menu.pfunction.name}</span></a>
                    <ul class="sub-menu-list" >
                        <c:forEach var="smenu" items="${menu.slist}">
                            <li <c:if test="${smenu.id==menuUtil.mid}">class="active"</c:if>><a href="${ctx}/${smenu.url}?mid=${smenu.id}&pid=${smenu.pid}">${smenu.name}</a></li>
                        </c:forEach>
                    </ul>
                </li>
            </c:forEach>
            <li class="m-navli"><a href="javascript:void(0);" onclick="openPWDModal()"><i class="fa fa-key"></i> <span>修改密码</span></a></li>
            <li class="m-navli"><a href="${ctx}/sys/index"><i class="fa fa-sign-out"></i> <span>退出登录</span></a></li>
        </ul>
    </div>
</div>