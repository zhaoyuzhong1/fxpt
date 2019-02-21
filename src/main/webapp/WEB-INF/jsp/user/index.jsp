<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="../sys/header.jsp"%>
<!DOCcode html>
<html lang="en">
<style>


</style>
<body class="sticky-header">

<!-- left side start-->
<%@include file="../ywsys/ywmenu.jsp"%>
<!-- left side end-->

<!-- main content start-->
<div class="main-content" >
<!-- header section start-->
<%@include file="../ywsys/ywtop.jsp"%>
<!-- header section end-->
<%--------------------------------------------------------内容--%>
<!-- page heading start-->
<div class="wrapper">
    <div class="row">
        <div class="col-sm-12">
            <section class="panel">
                <div class="page-heading">
                    <h3 class="panel-title">
                        <i class="fa fa-th-list" style="margin-right: 5px"></i>用户管理
                    </h3>
                </div>
                <div class="panel-body" >
                    <div class="form-inline pull-right" style="margin-bottom:15px;">
                        <div class="form-group form-group-sm">
                            <label class="control-label"> 角色</label>
                            <select id="roleid" class="form-control">
                                <option value="">请选择角色</option>
                                <c:forEach var="i" items="${roles}">
                                    <option value="${i.id}">${i.name}</option>
                                </c:forEach>
                            </select>
                        </div>

                        <div class="form-group form-group-sm">
                            <label class="control-label"> 状态</label>
                            <select id="flag" class="form-control">
                                <option value="">所有</option>
                                <option value="0">未审核</option>
                                <option value="1">已审核</option>
                                <option value="2">未通过</option>
                            </select>
                        </div>

                        <div class="form-group form-group-sm">
                            <label class="control-label"> 姓名</label>
                            <input id="search_name" name="search_name" type="text" class="form-control" onkeydown="if(event.keytype==13){gosearch();}" placeholder="请输入关键字">
                        </div>&nbsp;
                        <button class="btn btn-main btn-sm" type="button" onclick="gosearch()"><i class="fa fa-search"></i> 查询</button>
                        <button class="btn btn-warning-o btn-sm" type="button" onclick="goreset()"><i class="fa fa-repeat"></i> 重置</button>

                    </div>
                    <table id="teacher_table" data-page-size="5"> </table>
                </div>
            </section>
        </div>
    </div>
</div>
<!--body wrapper end-->
<%-----------------------------------------------------模态框--%>
<div class="modal fade" id="model">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header1">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title"> 用户工资管理</h4>
            </div>
            <div class="modal-body" >
                <input type="hidden" id="allid">
                <input type="hidden" id="uiflag">
                <div class="form-horizontal">
                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 用户姓名：</label>
                        <div class="col-sm-7">
                            <input id="name" maxlength="20" type="text" class="form-control" readonly>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 手机号码：</label>
                        <div class="col-sm-7">
                            <input id="mobile" maxlength="20" type="text" class="form-control" readonly>
                        </div>
                    </div>


                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 本月收入：</label>
                        <div class="col-sm-7">
                            <input id="money" maxlength="20" type="text" class="form-control">
                        </div>
                    </div>


                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 工资记录：</label>
                        <div class="col-sm-7" id="uiflag1">
                        </div>
                    </div>


                </div>
            </div>
            <div class="modal-footer" id="qlfoot1">
                <button type="button"  class="btn btn-thollow" data-dismiss="modal"><i class="fa fa-times"></i> 取消</button>
                <button type="button" class="btn btn-tsolid" onclick="add();" ><i class="fa fa-check" ></i> 确定</button>
            </div>
            <div class="modal-footer" id="qlfoot2" style="display: none">
                <button type="button"  class="btn btn-thollow" data-dismiss="modal"><i class="fa fa-times"></i> 取消</button>
                <button type="button" class="btn btn-tsolid" onclick="update();" ><i class="fa fa-check" ></i> 修改</button>
            </div>

        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
<%----------------d----------------------------------内容结束--%>
<!--footer section start-->
<!--footer section end-->
<div class="modal fade" id="model1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header1">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title">查看用户信息</h4>
            </div>
            <div class="panel-body" >
                <form class="form-horizontal" role="form">

                    <div class="form-group">
                        <label  class="col-lg-3 col-sm-2 control-label">商品名称：</label>
                        <div class="col-lg-8">
                            <label id="name_" class="labelStyle-style-lable"></label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label  class="col-lg-3 col-sm-2 control-label">零售价：</label>
                        <div class="col-lg-8">
                            <label id="price_" class="labelStyle-style-lable"></label>
                        </div>
                    </div>

                    <div class="form-group">
                        <label  class="col-lg-3 col-sm-2 control-label">董事进货价：</label>
                        <div class="col-lg-8">
                            <label id="buyprice1_" class="labelStyle-style-lable"></label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label  class="col-lg-3 col-sm-2 control-label">大区进货价：</label>
                        <div class="col-lg-8">
                            <label id="buyprice2_" class="labelStyle-style-lable"></label>
                        </div>
                    </div>


                    <div class="form-group">
                        <label  class="col-lg-3 col-sm-2 control-label">规格：</label>
                        <div class="col-lg-8">
                            <label id="spec_" class="labelStyle-style-lable"></label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label  class="col-lg-3 col-sm-2 control-label">口味：</label>
                        <div class="col-lg-8">
                            <label id="taste_" class="labelStyle-style-lable"></label>
                        </div>
                    </div>


                    <div class="form-group">
                        <label  class="col-lg-3 col-sm-2 control-label">产地：</label>
                        <div class="col-lg-8">
                            <label id="proadd_" class="labelStyle-style-lable"></label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label  class="col-lg-3 col-sm-2 control-label">适用人群：</label>
                        <div class="col-lg-8">
                            <label id="fitpeople_" class="labelStyle-style-lable"></label>
                        </div>
                    </div>


                    <div class="form-group">
                        <label  class="col-lg-3 col-sm-2 control-label">生产材料：</label>
                        <div class="col-lg-8">
                            <label id="stuff_" class="labelStyle-style-lable"></label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label  class="col-lg-3 col-sm-2 control-label">商品详情：</label>
                        <div class="col-lg-8">
                            <label id="detail_" class="labelStyle-style-lable"></label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label  class="col-lg-3 col-sm-2 control-label">库存数量：</label>
                        <div class="col-lg-8">
                            <label id="stock_" class="labelStyle-style-lable"></label>
                        </div>
                    </div>

                </form>
            </div>
            <div class="modal-footer" id="qlfoot">
                <button type="button"  class="btn btn-thollow" data-dismiss="modal"><i class="fa fa-times"></i> 取消</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
<!--查看-->
<!-- main content end-->
</body>
<script>
    //搜索
    function gosearch() {$('#teacher_table').bootstrapTable('refreshOptions',{pageNumber:1,pagesize:5});}

    //重置
    function goreset() {
        $('#search_name').val("");
        $('#flag').val("");
        $('#roleid').val("");
        gosearch();
    }

    $(function () {
        var dtb1 = new DataTable1();
        dtb1.Init();
    });

    var DataTable1 = function (){
        var oTableInit = new Object();
        oTableInit.Init = function (){
            $('#teacher_table').bootstrapTable('destroy').bootstrapTable({
                url: "${ctx}/user/queryList",
                method: 'get',
                striped: true,
                cache: false,
                pagination: true,
                sortable: false,
                queryParamscode: "limit",
                queryParams: oTableInit.queryParams,
                pageNumber:1,
                pageSize: 10,
                pageList:[10,20, 30],
                strictSearch: true,
                clickToSelect: true,
                cardView: false,
                paginationFirstText:"<<",
                paginationPreText:"<",
                paginationNextText:">",
                paginationLastText:">>",
                showExport: true,//显示导出按钮
                exportDatacode: "basic",//导出类型
                sidePagination: "server",

                columns: [
                    {
                        title: '序号',align: 'center',
                        formatter: function(value,row,index){
                            return Number(row.count+index)+1;
                        }
                    }
                    ,{
                        field: 'name',
                        title: '姓名'
                    },{
                        field: 'mobile',
                        title: '手机号'
                    }, {
                        field: 'rolename',
                        title: '角色'
                    }, {
                        field: 'pname',
                        title: '邀请人'
                    }, {
                        field: 'cdate',
                        title: '注册时间',
                        formatter: function(value,row,index){
                            return getTime(value)
                        }
                    }, {
                        field: 'flag',
                        title: '状态',
                        formatter: function(value,row,index){
                            if("0"==value){
                                return "未审核";
                            } else if("1"==value){
                                return "已审核";
                            } else if("2"==value){
                                return "未通过";
                            }
                        }
                    },{
                        title: '操作',
                        width:'100px',
                        formatter: function(value,row,index){
                            var button ='<div class="btn-group btn-group-xs">'+
                                    '<button type="button" class="btn btn-default btn-maincolor"onclick="All(\''+ row.name + '\',\''+ row.rolename + '\',\''+ row.mobile + '\',\''+ row.sex + '\',\''+ row.birthday + '\',\''+ row.idcard + '\',\''+ row.address + '\',\''+ row.headpath + '\',\''+ row.areaname + '\',\''+ row.cdate + '\',\''+ row.flag + '\')" ><i class="fa fa-eye"></i>&nbsp;查&nbsp看</button>';
                            var e =  '<button type="button" class="btn btn-default btn-maincolor dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> '+
                                    '<span class="caret"></span>'+
                                    '</button>'+
                                    '<ul class="dropdown-menu dropdown-menu-right">'+

                            var sh = '';
                            if(row.flag=='0'){
                                sh =  '<li style="float: none;"><button id="ServerStop" class="btn btn-link "onclick="tg(\''+row.id+'\')" style="color:red"> 审核通过</button></li>'+
                                        '<li style="float: none;"><button id="ServerStop" class="btn btn-link "onclick="btg(\''+row.id+'\')" style="color:red"> 审核不通过</button></li>';
                            }

                            var  updategz = '<li style="float: none;"><button type="button" class="btn btn-link" onclick="updateGz(\''+ row.id + '\',\''+ row.name + '\',\''+ row.mobile + '\')">添加工资</button></li>'+



                            return button +e + sh+updategz+ '</ul></div>';

                        }
                    }
                ]
            });
        };

        //得到查询的参数
        oTableInit.queryParams = function (params) {
            return {
                count: params.limit,  //页面大小
                pagesize:params.offset, //页码
                search_name:$('#search_name').val().trim(),
                roleid:$('#roleid').val().trim(),
                flag:$('#flag').val().trim()

            };
        };
        return oTableInit;
    }



    //打开修改模态框
    function updateGz(id,name,mobile) {
        $('#allid').val(id);
        $('#name').val(name);
        $('#mobile').val(mobile);

        $.post("${ctx}/userincome/getMoneyLastMonth",{userid:id},function (d) {
            if(d=="ajaxfail"){
                Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                    if(btn=="yes"){
                        window.location.href="${ctx}/sys/index";
                    }
                });
            }else {
                if(d=='0'){
                    $('#money').val(d);
                    $('#uiflag').val("0");
                    $('#uiflag1').val("上月没有工资");
                }else{
                    var flag = d.split("#")[1];
                    var money = d.split("#")[0];
                    $('#money').val(money);
                    $('#uiflag').val(flag);
                    if(flag=='0') {
                        $('#uiflag1').val("上月已添加工资，但未审核");
                    }else{
                        $('#uiflag1').val("上月工资已审核");
                    }
                }


            }

        });


        $("#qlfoot2").css("display","block");
        $("#qlfoot1").css("display","none");
        $('#model').modal();
    }



    function tg(id) {
        $.post("${ctx}/user/tg",{id:id},function (d) {
            if(d=="ajaxfail"){
                Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                    if(btn=="yes"){
                        window.location.href="${ctx}/sys/index";
                    }
                });
            }else {
                if(d=="ok"){
                    Showbo.Msg.alert('审核成功');
                    $('#teacher_table').bootstrapTable('refresh');
                }else {
                    Showbo.Msg.alert('审核失败');
                }
            }

        });
    }



    function btg(id) {
        $.post("${ctx}/user/btg",{id:id},function (d) {
            if(d=="ajaxfail"){
                Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                    if(btn=="yes"){
                        window.location.href="${ctx}/sys/index";
                    }
                });
            }else {
                if(d=="ok"){
                    Showbo.Msg.alert('审核不通过成功');
                    $('#teacher_table').bootstrapTable('refresh');
                }else {
                    Showbo.Msg.alert('审核不通过失败');
                }
            }

        });
    }


    //修改菜单
    function update() {
        var id = $('#allid').val();
        var name = $("#name").val();
        var mobile = $("#mobile").val();
        var money = $("#money").val();
        var uiflag = $("#uiflag").val();
        if(uiflag=='1'){
            Showbo.Msg.alert("上月工资已审核不能修改");
            return false;
        }

        if($.isEmptyObject(money)||money.trim()==""){
            Showbo.Msg.alert("收入不能为空！");
            return false;
        }


        $.post("${ctx}/userincome/updateIncome",{id:id,name:name.trim(),mobile:mobile.trim(),money:money.trim()},function (d) {
            if(d=="ajaxfail"){
                Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                    if(btn=="yes"){
                        window.location.href="${ctx}/sys/index";
                    }
                });
            }else {
                if(d=="ok"){
                    Showbo.Msg.alert('添加工资成功');
                    $('#model').modal('hide');
                }else {
                    Showbo.Msg.alert('添加工资失败');
                }
            }

        });
    }

    //查看
    function All(name ,rolename ,mobile ,sex ,birthday ,idcard ,address ,headpath ,areaname ,cdate ,flag){
        $("#name").text(name);
        $("#rolename").text(rolename);

        $("#mobile").text(mobile);
        $("#sex").text(sex);
        $("#birthday").text(birthday);
        $("#idcard").text(idcard);
        $("#address").text(address);
        $("#headpath").text(headpath);

        $("#areaname").text(areaname);
        $("#cdate").text(getTime(cdate));
        $("#flag").text(getFlag(flag));

        $("#model1").modal();
    }




    //时间format
    function getTime(timestamp) {
        var ts = arguments[0] || 0;
        var t,y,m,d,h,i,s;
        t = ts ? new Date(parseInt(ts)) : new Date();
        y = t.getFullYear();
        m = t.getMonth()+1;
        d = t.getDate();
        h = t.getHours();
        i = t.getMinutes();
        s = t.getSeconds();
        // 可根据需要在这里定义时间格式
        return y+'-'+(m<10?'0'+m:m)+'-'+(d<10?'0'+d:d)+' '+(h<10?'0'+h:h)+':'+(i<10?'0'+i:i)+':'+(s<10?'0'+s:s);
    }


    function getFlag(flag) {
        if(flag=='0'){
            return '未审核';
        }else if(flag=='1'){
            return '已审核';
        }else if(flag=='2'){
            return '审核未通过';
        }
    }
</script>
</html>