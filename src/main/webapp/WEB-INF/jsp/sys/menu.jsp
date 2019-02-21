<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<%@include file="alljscss2.jsp"%>
<div class="left-side sticky-left-side">
    <div class="menulogo-box text-center">
        <img src="${ctx}/images/logo_white.png"/>
    </div>
    <div class="left-side-inner">
        <!--sidebar nav start-->
        <ul class="nav nav-pills nav-stacked custom-nav">
            <c:choose>
                <c:when test="${userIdSession=='f5495d4283854692a3bd3335fb12214c'}">
                    <li ><a class="nav-index" href="${ctx}/index/index"><i class="fa fa-home"></i> <span>首页</span></a></li>
                </c:when>
                <c:otherwise>
                    <li ><a class="nav-index" href="${ctx}/lookUsage/index?projectId=${productIdSession}"><i class="fa fa-home"></i> <span>首页</span></a></li>
                </c:otherwise>
            </c:choose>


            <c:forEach var="menu" items="${smenus}">
                <li <c:if test="${menu.pfunction.id!=menuUtil.pid}">class="menu-list"</c:if> <c:if test="${menu.pfunction.id==menuUtil.pid}">class="menu-list nav-active"</c:if>><a href="#"><i class="${menu.pfunction.iconcss}"></i> <span>${menu.pfunction.name}</span></a>
                    <ul class="sub-menu-list" >
                        <c:forEach var="smenu" items="${menu.slist}">
                            <li <c:if test="${smenu.id==menuUtil.mid}">class="active"</c:if>><a href="${ctx}/${smenu.url}?mid=${smenu.id}&pid=${smenu.pid}">${smenu.name}</a></li>
                        </c:forEach>
                    </ul>
                </li>
            </c:forEach>
            <li><a href="${ctx}/sys/nologin"><i class="fa fa-sign-in"></i> <span>退出登录</span></a></li>

        </ul>
        <!--sidebar nav end-->

    </div>
</div>
