<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="../sys/header.jsp"%>
<head>

</head>
<!DOCTYPE html>
<html lang="en">
<body class="sticky-header">

<section>
   <!-- left side start-->
   <%@include file="../ywsys/ywmenu.jsp"%>
   <!-- main content start-->
   <div class="main-content" >

      <!-- header section start-->
      <%@include file="../ywsys/ywtop.jsp"%>
      <!-- header section end-->

      <div class="wrapper">
         <div class="row">
            <div class="col-sm-12">
               <section class="panel">
                  <div class="page-heading">
                     <h3 class="panel-title">
                        <i class="fa fa-th-list" style="margin-right: 5px"></i>知识库<a href="javascript:history.back()"  class=" pull-right">返回</a>

                     </h3>

                  </div>
                  <div class="panel-body" >
                       ${content}
                  </div>

               </section>
            </div>
         </div>
      </div>



   </div>
   <!-- main content end-->
</section>
</body>

</html>
<script>

</script>
