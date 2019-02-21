<%@ page contentType="text/html;charset=UTF-8" language="java" %>

  <link rel="shortcut icon" href="#" type="image/png">
  <!--icheck-->
  <link href="${ctx}/js/iCheck/skins/minimal/minimal.css" rel="stylesheet">
  <link href="${ctx}/js/iCheck/skins/square/square.css" rel="stylesheet">
  <link href="${ctx}/js/iCheck/skins/square/red.css" rel="stylesheet">
  <link href="${ctx}/js/iCheck/skins/square/blue.css" rel="stylesheet">

  <!--dashboard calendar-->
  <link href="${ctx}/css/clndr.css" rel="stylesheet">

  <!--Morris Chart CSS -->
  <%--<link rel="stylesheet" href="${ctx}/js/morris-chart/morris.css">--%>



<!--common-->

  <link href="${ctx}/css/bootstrap.min.css" rel="stylesheet">
  <link href="${ctx}/css/bootstrap-reset.css" rel="stylesheet">

  <link href="${ctx}/css/style-responsive.css" rel="stylesheet">




  <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!--[if lt IE 9]>
  <script src="${ctx}/js/html5shiv.js"></script>
  <script src="${ctx}/js/respond.min.js"></script>
  <![endif]-->


<!-- Placed js at the end of the document so the pages load faster -->
<script src="${ctx}/js/jquery-1.10.2.min.js"></script>
<script src="${ctx}/js/jquery-ui-1.9.2.custom.min.js"></script>
<script src="${ctx}/js/jquery-migrate-1.2.1.min.js"></script>

<script src="${ctx}/js/modernizr.min.js"></script>
<script src="${ctx}/js/jquery.nicescroll.js"></script>

<!--easy pie chart-->
<%--<script src="${ctx}/js/easypiechart/jquery.easypiechart.js"></script>--%>
<%--<script src="${ctx}/js/easypiechart/easypiechart-init.js"></script>--%>

<!--Sparkline Chart-->
<script src="${ctx}/js/sparkline/jquery.sparkline.js"></script>
<script src="${ctx}/ js/sparkline/sparkline-init.js"></script>

<!--icheck -->
<script src="${ctx}/js/iCheck/jquery.icheck.js"></script>
<script src="${ctx}/js/icheck-init.js"></script>




<!--Morris Chart-->
<%--<script src="${ctx}/js/morris-chart/morris.js"></script>--%>
<%--<script src="${ctx}/js/morris-chart/raphael-min.js"></script>--%>

<!--TCalendar-->
<script src="${ctx}/js/calendar/clndr.js"></script>
<script src="${ctx}/js/calendar/evnt.calendar.init.js"></script>
<script src="${ctx}/js/calendar/moment-2.2.1.js"></script>
<script src="${ctx}/js/underscore-min.js"></script>

<!--common scripts for all pages-->
<script src="${ctx}/js/scripts.js"></script>

<!--Dashboard Charts-->
<%--<script src="${ctx}/js/dashboard-chart-init.js"></script>--%>

<%--------------------------------------------------------table--%>
<!--data table-->
<link rel="stylesheet" href="${ctx}/js/data-tables/DT_bootstrap.css" />
<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>

<![endif]-->

<!--data table-->
<%--<script type="text/javascript" src="js/data-tables/jquery.dataTables.js"></script>--%>
<%--<script type="text/javascript" src="js/data-tables/DT_bootstrap.js"></script>--%>
<!--script for editable table-->
<%--<script src="js/editable-table.js"></script>--%>

<!-- END JAVASCRIPTS -->


<%-----多选下拉框js--%>
<script src="${ctx}/js/multiple-select.js"></script>
<%--
<link rel="stylesheet" href="${ctx}/css/sweet-alert.css" />
<script src="${ctx}/js/sweet-alert.js"></script>
<script>
  function confirmnew(txt,el){
    Showbo.Msg.alert({
              title: txt,
              text: "",
              type: "warning",
              showCancelButton: true,
              confirmButtonColor: '#DD6B55',
              confirmButtonText: '确定',
              cancelButtonText: "取消",
              closeOnConfirm: false
            },
            el);
  }
</script>--%>
<link rel="stylesheet" href="${ctx}/css/showBo.css" />
<script src="${ctx}/js/showBo.js"></script>




<style>

  .tableMany td{border:solid gainsboro; border-width:0px 1px 1px 0px; padding:10px 0px; text-align: center;}
  .tableMany{border:solid gainsboro; border-width:1px 0px 0px 1px;}

</style>