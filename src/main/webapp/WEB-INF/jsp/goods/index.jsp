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
                        <i class="fa fa-th-list" style="margin-right: 5px"></i>系统平台管理
                    </h3>
                </div>
                <div class="panel-body" >
                    <div class="form-inline pull-right" style="margin-bottom:15px;">
                        <div class="form-group form-group-sm">
                            <input id="search_name" name="search_name" type="text" class="form-control" onkeydown="if(event.keytype==13){gosearch();}" placeholder="请输入关键字">
                        </div>&nbsp;
                        <button class="btn btn-main btn-sm" type="button" onclick="gosearch()"><i class="fa fa-search"></i> 查询</button>
                        <button class="btn btn-warning-o btn-sm" type="button" onclick="goreset()"><i class="fa fa-repeat"></i> 重置</button>
                        <button class="btn btn-success-o btn-sm" type="button" onclick="addGoods()"><i class="fa fa-plus"></i> 添加</button>
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
                <h4 class="modal-title"> 商品管理</h4>
            </div>
            <div class="modal-body" >
                <input type="hidden" id="allid">
                <div class="form-horizontal">
                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 商品名称：</label>
                        <div class="col-sm-7">
                            <input id="name" maxlength="80" type="text" class="form-control" placeholder="商品名称" >
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 零售价：</label>
                        <div class="col-sm-7">
                            <input id="price" maxlength="20" type="text" class="form-control" placeholder="零售价" >
                        </div>
                    </div>


                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 董事进货价：</label>
                        <div class="col-sm-7">
                            <input id="buyprice1" maxlength="20" type="text" class="form-control" placeholder="董事进货价" >
                        </div>
                    </div>


                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 大区进货价：</label>
                        <div class="col-sm-7">
                            <input id="buyprice2" maxlength="20" type="text" class="form-control" placeholder="大区进货价" >
                        </div>
                    </div>


                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 规格：</label>
                        <div class="col-sm-7">
                            <input id="spec" maxlength="80" type="text" class="form-control" placeholder="规格" >
                        </div>
                    </div>


                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 口味：</label>
                        <div class="col-sm-7">
                            <input id="taste" maxlength="80" type="text" class="form-control" placeholder="口味" >
                        </div>
                    </div>


                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 产地：</label>
                        <div class="col-sm-7">
                            <input id="proadd" maxlength="100" type="text" class="form-control" placeholder="产地" >
                        </div>
                    </div>


                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 适用人群：</label>
                        <div class="col-sm-7">
                            <input id="fitpeople" maxlength="100" type="text" class="form-control" placeholder="适用人群" >
                        </div>
                    </div>


                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 生产材料：</label>
                        <div class="col-sm-7">
                            <input id="stuff" maxlength="100" type="text" class="form-control" placeholder="生产材料" >
                        </div>
                    </div>


                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 商品详情：</label>
                        <div class="col-sm-7">
                            <input id="detail" maxlength="20" type="text" class="form-control" placeholder="商品详情" >
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-3"><font color="red" >*</font> 库存数量：</label>
                        <div class="col-sm-7">
                            <input id="stock" maxlength="20" type="text"  class="form-control"  placeholder="库存数量" >
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
                <h4 class="modal-title">查看平台信息</h4>
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
    function goreset() {$('#search_name').val("");gosearch();}

    $(function () {
        var dtb1 = new DataTable1();
        dtb1.Init();
    });

    var DataTable1 = function (){
        var oTableInit = new Object();
        oTableInit.Init = function (){
            $('#teacher_table').bootstrapTable('destroy').bootstrapTable({
                url: "${ctx}/goods/queryList",
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
                        title: '商品名称'
                    },{
                        field: 'price',
                        title: '零售价'
                    }, {
                        field: 'buyprice1',
                        title: '董事进货价'
                    }, {
                        field: 'buyprice2',
                        title: '大区进货价'
                    }, {
                        field: 'stock',
                        title: '库存'
                    },{
                        title: '操作',
                        width:'100px',
                        formatter: function(value,row,index){
                            var button ='<div class="btn-group btn-group-xs">'+
                                    '<button type="button" class="btn btn-default btn-maincolor"onclick="All(\''+ row.name + '\',\''+ row.price + '\',\''+ row.buyprice1 + '\',\''+ row.buyprice2 + '\',\''+ row.spec + '\',\''+ row.taste + '\',\''+ row.proadd + '\',\''+ row.fitpeople + '\',\''+ row.stuff + '\',\''+ row.detail + '\',\''+ row.stock + '\')" ><i class="fa fa-eye"></i>&nbsp;查&nbsp看</button>';
                            var e =  '<button type="button" class="btn btn-default btn-maincolor dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> '+
                                    '<span class="caret"></span>'+
                                    '</button>'+
                                    '<ul class="dropdown-menu dropdown-menu-right">'+
                                    '<li style="float: none;"><button type="button" class="btn btn-link" onclick="updateGoods(\''+ row.id + '\',\''+ row.name + '\',\''+ row.price + '\',\''+ row.buyprice1 + '\',\''+ row.buyprice2 + '\',\''+ row.spec + '\',\''+ row.taste + '\',\''+ row.proadd + '\',\''+ row.fitpeople + '\',\''+ row.stuff + '\',\''+ row.detail + '\',\''+ row.stock + '\')">修改</button></li>'+
                                    '<li style="float: none;"><button id="ServerStop" class="btn btn-link "onclick="deleteGoods(\''+row.id+'\')" style="color:red"> 删除</button></li>'+
                                    '</ul>';

                            return button +e +  '</div>';

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
                search_name:$('#search_name').val().trim()
            };
        };
        return oTableInit;
    }

    //打开添加模态框
    function addGoods(){
        $('#id').val("");
        $('#name').val("");
        $('#price').val("");
        $('#buyprice1').val("");
        $('#buyprice2').val("");
        $('#spec').val("");
        $('#taste').val("");
        $('#proadd').val("");
        $('#fitpeople').val("");
        $('#stuff').val("");
        $('#detail').val("");
        $("#stock").val("");

        $("#qlfoot1").css("display","block");
        $("#qlfoot2").css("display","none");
        $('#model').modal();
    }
    //添加平台
    function add() {
        var name = $("#name").val();
        var price = $("#price").val();
        var buyprice1 = $("#buyprice1").val();
        var buyprice2 = $("#buyprice2").val();
        var spec = $("#spec").val();
        var taste = $("#taste").val();
        var proadd = $("#proadd").val();
        var fitpeople = $("#fitpeople").val();
        var stuff = $("#stuff").val();
        var detail = $("#detail").val();
        var stock = $("#stock").val();


        var myReg = /^[^@\/\'\\\"#$%&\^\*]+$/;

        if($.isEmptyObject(name)||name.trim()==""){
            Showbo.Msg.alert("请输入商品名称！");
            return false;
        }else if (!myReg.test(name)){
            Showbo.Msg.alert("商品名称含有非法字符，请重新输入！");
            return false;
        }else if($.isEmptyObject(buyprice1)||buyprice1.trim()==""){
            Showbo.Msg.alert("请输入董事进货价！");
            return false;
        }else if($.isEmptyObject(buyprice2)||buyprice2.trim()==""){
            Showbo.Msg.alert("请输入大区进货价！");
            return false;
        }else if($.isEmptyObject(stock)||stock.trim()==""){
            Showbo.Msg.alert("请输入库存！");
            return false;
        }else if(isNaN(stock)){
            Showbo.Msg.alert("库存为整数！");
            return false;
        }

        $.post("${ctx}/goods/addGoods",{name:name.trim(),price:price.trim(),buyprice1:buyprice1.trim(),buyprice2:buyprice2.trim(),spec:spec.trim(),taste:taste.trim(),proadd:proadd.trim(),fitpeople:fitpeople.trim(),stuff:stuff.trim(),detail:detail.trim(),stock:stock.trim()},function (d) {
            if(d=="ajaxfail"){
                Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                    if(btn=="yes"){
                        window.location.href="${ctx}/sys/index";
                    }
                });
            }else {
                if(d=="ok"){
                    Showbo.Msg.alert('添加成功');
                    $('#teacher_table').bootstrapTable('refresh');
                    $('#model').modal('hide');
                }else {
                    Showbo.Msg.alert('添加失败');
                }
            }
        });

    }

    //打开修改模态框
    function updateGoods(id,name,price,buyprice1,buyprice2,spec,taste,proadd,fitpeople,stuff,detail,stock) {
        $('#allid').val(id);
        $('#name').val(name);
        $('#price').val(price);

        $('#buyprice1').val(buyprice1);
        $('#buyprice2').val(buyprice2);
        $('#spec').val(spec);
        $('#taste').val(taste);
        $('#proadd').val(proadd);
        $('#fitpeople').val(fitpeople);
        $('#stuff').val(stuff);
        $('#detail').val(detail);
        $('#stock').val(stock);


        $("#qlfoot2").css("display","block");
        $("#qlfoot1").css("display","none");
        $('#model').modal();
    }
    //修改菜单
    function update() {
        var id = $('#allid').val();
        var name = $("#name").val();
        var price = $("#price").val();
        var buyprice1 = $("#buyprice1").val();
        var buyprice2 = $("#buyprice2").val();
        var spec = $("#spec").val();
        var taste = $("#taste").val();
        var proadd = $("#proadd").val();
        var fitpeople = $("#fitpeople").val();
        var stuff = $("#stuff").val();
        var detail = $("#detail").val();
        var stock = $("#stock").val();

        var myReg = /^[^@\/\'\\\"#$%&\^\*]+$/;

        if($.isEmptyObject(name)||name.trim()==""){
            Showbo.Msg.alert("请输入商品名称！");
            return false;
        }else if (!myReg.test(name)){
            Showbo.Msg.alert("商品名称含有非法字符，请重新输入！");
            return false;
        }else if($.isEmptyObject(buyprice1)||buyprice1.trim()==""){
            Showbo.Msg.alert("请输入董事进货价！");
            return false;
        }else if($.isEmptyObject(buyprice2)||buyprice2.trim()==""){
            Showbo.Msg.alert("请输入大区进货价！");
            return false;
        }else if($.isEmptyObject(stock)||stock.trim()==""){
            Showbo.Msg.alert("请输入库存！");
            return false;
        }else if(isNaN(stock)){
            Showbo.Msg.alert("库存为整数！");
            return false;
        }

        $.post("${ctx}/goods/updateGoods",{id:id,name:name.trim(),price:price.trim(),buyprice1:buyprice1.trim(),buyprice2:buyprice2.trim(),spec:spec.trim(),taste:taste.trim(),proadd:proadd.trim(),fitpeople:fitpeople.trim(),stuff:stuff.trim(),detail:detail.trim(),stock:stock.trim()},function (d) {
            if(d=="ajaxfail"){
                Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                    if(btn=="yes"){
                        window.location.href="${ctx}/sys/index";
                    }
                });
            }else {
                if(d=="ok"){
                    Showbo.Msg.alert('修改成功');
                    $('#teacher_table').bootstrapTable('refresh');
                    $('#model').modal('hide');
                }else {
                    Showbo.Msg.alert('修改失败');
                }
            }

        });
    }

    //查看
    function All(name,code){
        $("#name_").text(name);
        $("#code_").text(code);

        $("#model1").modal();
    }


    //删除平台
    function deleteGoods(id) {
        Showbo.Msg.confirm('确定要删除吗？',function (btn) {
            if(btn=='yes'){
                $.post("${ctx}/goods/deleteGoods",{id:id},function (d) {
                    if(d=="ajaxfail"){
                        Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                            if(btn=="yes"){
                                window.location.href="${ctx}/sys/index";
                            }
                        });
                    }else {
                        if(d=="ok"){
                            Showbo.Msg.alert('删除成功');
                            $('#teacher_table').bootstrapTable('refresh');
                        }else {
                            Showbo.Msg.alert('删除失败');
                        }
                    }

                });
            }
        })
    }
</script>
</html>