<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="../sys/header.jsp"%>
<head>
</head>
<!DOCTYPE html>
<html lang="en">
<style type="text/css">
    #shclColor {width:100px; height:100px; margin:10px auto;}
    .i-btnbox button.active{
        background-color: #1490ac;
        border-color: #1490ac;
    }
</style>
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
            <form action="${ctx}/ywMain/findMainToDate" method="post">
                <div class="row" style="margin-bottom: 15px">
                    <div class="col-lg-3">
                        <div class="pull-right">
                            <button class="btn btn-info" type="button" onclick="setWeek()"><i class="fa fa-calendar"></i> 本周</button>
                            <button class="btn btn-info" type="button" onclick="setMonth()"><i class="fa fa-calendar"></i> 本月</button>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <input class="datainp wicon form-control" id="beginDate" name="beginDate" value="${beginDate}" type="text" placeholder="请输入起始时间"  readonly>
                    </div>
                    <div class="col-lg-3">
                        <input class="datainp wicon form-control" id="endDate" name="endDate" value="${endDate}" type="text" placeholder="请输入结束时间"  readonly>
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-info" type="submit" onclick="return grade()"><i class="fa fa-search"></i> 查询</button>
                        <button class="btn btn-info" type="button" onclick="goreset()"><i class="fa fa-repeat"></i> 重置</button>
                    </div>
                </div>
            </form>

            <div class="row">
                <div class="col-sm-6">
                    <section class="panel">
                        <div class="page-heading">
                            <h3 class="panel-title">
                                <i class="fa fa-th-list" style="margin-right: 5px"></i>
                                <a>平台受理数</a>
                            </h3>
                        </div>
                        <div class="panel-body">
                            <div id="echarts_post" style="width:100%;height:350px;"></div>
                        </div>
                    </section>
                </div>
                <div class="col-sm-6">
                    <section class="panel">
                        <div class="page-heading">
                            <h3 class="panel-title">
                                <i class="fa fa-th-list" style="margin-right: 5px"></i>
                                <a>各平台工单分类</a>
                            </h3>
                        </div>
                        <div class="panel-body">
                            <div id="echarts_post2" style="width:100%;height:350px;"></div>
                        </div>
                    </section>
                </div>
            </div>

            <section class="panel">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-sm-12 form-group i-btnbox">
                            <c:forEach items="${plats}" var="plat">
                                <button class="btn btn-info" type="button" onclick="tab(${plat.id},this)">${plat.name}</button>
                            </c:forEach>
                        </div>
                    </div>
                    <div id="table_order">
                        <table id="table" data-page-size="5"> </table>
                    </div>
                </div>
            </section>
        </div>
    </div>
</section>
<%---------------------------------------------------内容结束--%>
</body>
<script type="text/javascript" src="${ctx}/js/jedate.min.js"></script>
<link type="text/css" rel="stylesheet" href="${ctx}/css/jedate.css">
<script type="text/javascript" src="${ctx}/js/echarts/echarts-all.js"></script>
<script>
    $(function(){
        var start = {
            format: 'YYYY-MM-DD',
            minDate: '2014-06-16', //设定最小日期为当前日期
            festival:false,
            //isinitVal:true,
            maxDate: $.nowDate(0), //最大日期
            choosefun: function(elem,datas){
                end.minDate = datas; //开始日选好后，重置结束日的最小日期
            }
        };
        var end = {
            format: 'YYYY-MM-DD',
            minDate: $.nowDate(0), //设定最小日期为当前日期
            festival:false,
            //isinitVal:true,
            maxDate: '2099-06-16', //最大日期
            choosefun: function(elem,datas){
                start.maxDate = datas; //将结束日的初始值设定为开始日的最大日期
            }
        };
        $("#beginDate").jeDate(start);
        $("#endDate").jeDate(end);
    });
    function grade(){
        var beginDate=   $('#beginDate').val();
        var endDate=   $('#endDate').val();
        var end_str = new Date(endDate);//将字符串转化为时间
        //开始时间
        var sta_str = new Date(beginDate);
        var num = (end_str-sta_str)/(1000*3600*24);//求出两个时间的时间差，这个是天数
        var sta_str = new Date(num);
        var days = parseInt(Math.ceil(num));
        if ((!$.isEmptyObject(beginDate))&&($.isEmptyObject(endDate))) {
            Showbo.Msg.alert('请输入结束时间！');
            return false;
        }else if (($.isEmptyObject(beginDate))&&(!$.isEmptyObject(endDate))) {
            Showbo.Msg.alert('请输入开始时间！');
            return false;
        }
        if(days<0){
            Showbo.Msg.alert('开始时间请小于结束时间！');
            return false;
        }
//        if(days>30){
//            Showbo.Msg.alert('请选择30天内进行查询！');
//            return false;
//        }
    }
    function goreset() {
        $("#beginDate").val("");
        $("#endDate").val("");
    }

    function setWeek() {
        var now = new Date($.nowDate(0)); //当前日期
        var nowYear = now.getYear(); //当前年
        nowYear += (nowYear < 2000) ? 1900 : 0;
        var weekStartDate = new Date(nowYear, now.getMonth(), now.getDate() - now.getDay()+1);
        var weekEndDate = new Date(nowYear, now.getMonth(), now.getDate() + (6 - now.getDay()+1));
        $("#beginDate").val(weekStartDate.getFullYear() + "-" + (weekStartDate.getMonth()+1) + "-" + weekStartDate.getDate());
        $("#endDate").val(weekEndDate.getFullYear() + "-" + (weekEndDate.getMonth()+1) + "-" + weekEndDate.getDate());
    }
    function setMonth() {
        var now = new Date($.nowDate(0)); //当前日期
        var nowYear = now.getYear(); //当前年
        nowYear += (nowYear < 2000) ? 1900 : 0;
        var firstDay = new Date(nowYear, now.getMonth(), 1);
        var lastDay = new Date(nowYear, now.getMonth()+1, 0);
        $("#beginDate").val(firstDay.getFullYear() + "-" + (firstDay.getMonth()+1) + "-" + firstDay.getDate());
        $("#endDate").val(lastDay.getFullYear() + "-" + (lastDay.getMonth()+1) + "-" + lastDay.getDate());
    }
    $(function () {
        postChart();
        barChart();
        var oTable = new TableInit();
        oTable.Init();
//        setInterval(function (){//定时刷新
//            var oTable = new TableInit();
//            oTable.Init();
//        },3000*60);
    });
    // 平台受理数
    function postChart(){
        //这个echarts对象应该是在echarts-all.js文件里面初始化好的，所以直接拿来用，
        var myChart = echarts.init(document.getElementById('echarts_post'));
        var data = genData();
        var option = {
            title: {
//                text: '天气情况统计',
//                subtext: '虚构数据',
                left: 'center'
            },
            color: ['#446CB3','#59ABE3','#81CFE0','#52B3D9','#6BB9F0','#22A7F0','#3498DB','#19B5FE'],
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                top: 'middle',
                bottom: 10,
                left: 'center',
                x: 'left',
                data: data.legendData
            },
            series : [
                {
                    type: 'pie',
                    radius : '64%',
                    center: ['58%', '50%'],
                    selectedMode: 'single',
                    data:data.seriesData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    }
    function genData() {
        var dataSource = "[";
        var dataValue = "";
        var beginDate=   $('#beginDate').val();
        var endDate=   $('#endDate').val();
        $.ajax({
            async: false, //采用同步方式
            type:"POST",
            url :"${ctx}/chart/getPieData",
            data : {"beginDate":beginDate,"endDate":endDate},
            dataType: "text",
            success : function(d) {
                dataValue=eval(d);
            },
        });
        for(var i=0; i<dataValue.length; i++) {
            dataSource += "'" +dataValue[i].name + "',";
        }
        dataSource = dataSource.substring(0, dataSource.length-1) + "]";
        return {
            legendData: eval(dataSource),
            seriesData: dataValue
        };
    }
    // 各平台工单分类
    function barChart(){
        //这个echarts对象应该是在echarts-all.js文件里面初始化好的，所以直接拿来用，
        var myChart = echarts.init(document.getElementById('echarts_post2'));
        var data = genBarData();
        var option = {
            tooltip : {
                trigger: 'axis', // item
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (datas) {
                    var res = datas[0].name + '<br/>'
                    for (var i = 0, length = datas.length; i < length; i=i+2) {
                        res += datas[i+1].seriesName + "：" + (datas[i].data + datas[i+1].data) + "(" +
                                "完成 " + datas[i+1].data +",未完成 " +  datas[i].data + "）<br/>"
                    }
                    return res
                }
            },
            legend: {
                data:['服务','需求','问题','未完成']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : data.legendData,
                    axisLabel: {
                        interval:0,
                        rotate:40
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'服务',
                    type:'bar',
                    stack: '服务',
                    data:data.applyYData,//[320, 332, 301, 334, 390, 330, 320, 330, 320],
                    itemStyle:{
                        normal:{color:'#0033CC'}
                    }
                },
                {
                    name:'未完成',
                    type:'bar',
                    stack: '服务',
                    data:data.applyNData,
                    itemStyle:{
                        normal:{color:'#FF0000'}
                    }
                },
                {
                    name:'需求',
                    type:'bar',
                    stack: '需求',
                    data:data.demandYData,
                    itemStyle:{
                        normal:{color:'#3366FF'}
                    }
                },
                {
                    name:'未完成',
                    type:'bar',
                    stack: '需求',
                    data:data.demandNData,
                    itemStyle:{
                        normal:{color:'#FF0000'}
                    }
                },
                {
                    name:'问题',
                    type:'bar',
                    stack: '问题',
                    data:data.questionYData,
                    itemStyle:{
                        normal:{color:'#66CCFF'}
                    }
                },
                {
                    name:'未完成',
                    type:'bar',
                    stack: '问题',
                    data:data.questionNData,
                    itemStyle:{
                        normal:{color:'#FF0000'}
                    }
                }
            ]
        };
        myChart.setOption(option);
    }

    function genBarData() {
        var dataValue = "";
        var dataSource = "[";
        var dataApplyY = "[";
        var dataApplyN = "[";
        var dataDemandY = "[";
        var dataDemandN = "[";
        var dataQuestionY = "[";
        var dataQuestionN = "[";
        var beginDate=   $('#beginDate').val();
        var endDate=   $('#endDate').val();
        $.ajax({
            async: false, //采用同步方式
            type:"POST",
            url :"${ctx}/chart/getBarData",
            data : {"beginDate":beginDate,"endDate":endDate},
            dataType: "text",
            success : function(d) {
                dataValue=eval(d);
            },
        });
        for(var i=0; i<dataValue.length; i++) {
            dataSource += "'" +dataValue[i].name + "',";
            dataApplyY += dataValue[i].apply_y + ",";
            dataApplyN += dataValue[i].apply_n + ",";
            dataDemandY += dataValue[i].demand_y + ",";
            dataDemandN += dataValue[i].demand_n + ",";
            dataQuestionY += dataValue[i].question_y + ",";
            dataQuestionN += dataValue[i].question_n + ",";
        }
        dataSource = dataSource.substring(0, dataSource.length-1) + "]";
        dataApplyY = dataApplyY.substring(0, dataApplyY.length-1) + "]";
        dataApplyN = dataApplyN.substring(0, dataApplyN.length-1) + "]";
        dataDemandY = dataDemandY.substring(0, dataDemandY.length-1) + "]";
        dataDemandN = dataDemandN.substring(0, dataDemandN.length-1) + "]";
        dataQuestionY = dataQuestionY.substring(0, dataQuestionY.length-1) + "]";
        dataQuestionN = dataQuestionN.substring(0, dataQuestionN.length-1) + "]";
        return {
            legendData: eval(dataSource),
            applyYData: eval(dataApplyY),
            applyNData: eval(dataApplyN),
            demandYData: eval(dataDemandY),
            demandNData: eval(dataDemandN),
            questionYData: eval(dataQuestionY),
            questionNData: eval(dataQuestionN)
        };
    }

    function tab(id,ele) {
        $('.i-btnbox button').removeClass('active');
        $(ele).addClass('active');
        var oTable = new TableInit(id);
        oTable.Init();
    }
    var TableInit = function (id) {
        var oTableInit = new Object();
        //初始化Table
        oTableInit.Init = function () {
//            $('#table').bootstrapTable({
            $('#table').bootstrapTable('destroy').bootstrapTable({
                url: '${ctx}/chart/queryList', //请求后台的URL（*）
                method: 'get',
                striped: true,
                cache: false,
                pagination: true,
                sortable: false,
                queryParamsType: "limit",
                queryParams: oTableInit.queryParams,
                pageNumber:1,
                pageSize:5 ,
                strictSearch: true,
                clickToSelect: true,
                cardView: false,
                paginationFirstText:"<<",
                paginationPreText:"<",
                paginationNextText:">",
                paginationLastText:">>",
                showExport: true,//显示导出按钮
                exportDataType: "basic",//导出类型
                sidePagination: "server",
                onClickRow: function (row, tr) {
                    All(row.id,this.pageNumber);
                },

                columns: [
                    {
                        title: '工单数排名',
                        formatter: function(value,row,index){
                            var pageSize=$('#table').bootstrapTable('getOptions').pageSize;//通过表的#id 可以得到每页多少条
                            var pageNumber=$('#table').bootstrapTable('getOptions').pageNumber;//通过表的#id 可以得到当前第几页
                            return pageSize * (pageNumber - 1) + index + 1;
//                            return Number(index)+1;
                        }
                    },{
                        title: '申请系统',
                        field:'apply_sys'
                    },{
                        title: '工单数',
                        field:'apply_plat'
                    },{
                        title: '系统工单平均处理时长(h)',
                        field:'applyNo'
                    },{
                        title: '咨询工单数/平均处理时长(h)',
                        formatter: function(value,row,index){
                            if(row.regionupdate == null && row.apply_ip == null) {
                                return "-";
                            } else {
                                return row.regionupdate + "/" + row.apply_ip;
                            }
                        }
                    },{
                        title: '故障工单数/平均处理时长(h)',
                        formatter: function(value,row,index){
                            if(row.sysupdate == null && row.apply_content == null) {
                                return "-";
                            } else {
                                return row.sysupdate + "/" + row.apply_content;
                            }
                        }
                    },{
                        title: '需求工单数/平均处理时长(h)',
                        formatter: function(value,row,index){
                            if(row.ipupdate == null && row.apply_persons == null) {
                                return "-";
                            } else {
                                return row.ipupdate + "/" + row.apply_persons;
                            }
                        }
                    },{
                        title: '异常工单数',
                        field:'apply_region'
                    }
                ]
            });
        };
        oTableInit.queryParams = function (params) {
            var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
                count: params.limit, //页面大小
                pagesize: params.offset, //页码
                id: id,
                beginDate:$('#beginDate').val(),
                endDate:$('#endDate').val(),
            };
            return temp;
        };
        return oTableInit;
    };
</script>
</html>


