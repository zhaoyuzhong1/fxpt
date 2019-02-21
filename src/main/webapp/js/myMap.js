//地图
//基本地图加载
var map = new AMap.Map("container", {
    resizeEnable: true,
    zoom:12,//map区域级别
    // center: [116.397428, 39.90923]  //城市经纬度
});
function getPoint(ctx){
    /* 切换城市 */
    /*AMap.event.addDomListener(
     document.getElementById('query'), 'click', function() {
     var cityName = document.getElementById('cityName').value;
     // 城市为空 为哈尔滨
     if (!cityName) {
     cityName = '哈尔滨市';
     }
     //set城市
     map.setCity(cityName);
     });*/

    /* POI信息 _ 出发地_Start*/
    AMapUI.loadUI(['misc/PoiPicker'], function(PoiPicker) {
        var poiPicker = new PoiPicker({
            //city:'北京',
            //input: 'pickerInput'
            input: 'fromadd'
        });

        //初始化poiPicker
        poiPickerReady_fromadd(poiPicker);
    });
    function poiPickerReady_fromadd(poiPicker) {
        window.poiPicker = poiPicker;
        var marker = new AMap.Marker();
        var infoWindow = new AMap.InfoWindow({
            offset: new AMap.Pixel(0, -20)
        });
        //选取了某个POI
        poiPicker.on('poiPicked', function(poiResult) {
            var source = poiResult.source,
                poi = poiResult.item,
                frominfo = {
                    source: source,
                    id: poi.id,
                    name: poi.name,
                    location: poi.location.toString(),
                    address: poi.address
                };
            //将经纬度 放入 input中
            var from = frominfo.location.split(',');
            $("#fromlon").val(from[0]);
            $("#fromlat").val(from[1]);
                /*alert("==>"+from[0]);
                alert(from[1]);*/
                if($("#tolon").val()!="" && $("#tolat").val()!=""){
                    $.post(ctx+"/torder/getKm_Duration",{fromlon:$("#fromlon").val(),fromlat:$("#fromlat").val(),tolon:$("#tolon").val(),tolat:$("#tolat").val()},function (d) {
                        if(d=="ajaxfail"){
                            Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                                if(btn=="yes"){
                                    window.location.href="${ctx}/sys/index";
                                }
                            });
                        }else {
                            var km_d = d.split(',');
                            $("#km").val(km_d[0]);
                            $("#duration").val(km_d[1]);
                            //alert(d);
                        }
                    });
                }
            marker.setMap(map);
            infoWindow.setMap(map);
            marker.setPosition(poi.location);
            infoWindow.setPosition(poi.location);
            //infoWindow.setContent('POI信息: <pre>' + JSON.stringify(info, null, 2) + '</pre>');
            infoWindow.open(map, marker.getPosition());
            //map.setCenter(marker.getPosition());
        });
        poiPicker.onCityReady(function() {
            poiPicker.suggest('美食');
        });
    }
    /* POI信息 _ 出发地_End*/

    // 目的地_Start
    AMapUI.loadUI(['misc/PoiPicker'], function(PoiPicker) {
        var poiPicker = new PoiPicker({
            //city:'北京',
            //input: 'pickerInput'
            input: 'toadd'
        });

        //初始化poiPicker
        poiPickerReady_toadd(poiPicker);
    });
    function poiPickerReady_toadd(poiPicker) {
        window.poiPicker = poiPicker;
        var marker = new AMap.Marker();
        var infoWindow = new AMap.InfoWindow({
            offset: new AMap.Pixel(0, -20)
        });
        //选取了某个POI
        poiPicker.on('poiPicked', function(poiResult) {
            var source = poiResult.source,
                poi = poiResult.item,
                toinfo = {
                    source: source,
                    id: poi.id,
                    name: poi.name,
                    location: poi.location.toString(),
                    address: poi.address
                };
            //将经纬度 放入 input中
            var to = toinfo.location.split(',');
            $("#tolon").val(to[0]);
            $("#tolat").val(to[1]);
                //alert("toadd==>"+info.location);
            if($("#fromlon").val()!="" && $("#fromlat").val()!=""){
                $.post(ctx+"/torder/getKm_Duration",{fromlon:$("#fromlon").val(),fromlat:$("#fromlat").val(),tolon:$("#tolon").val(),tolat:$("#tolat").val()},function (d) {
                    if(d=="ajaxfail"){
                        Showbo.Msg.confirm1("会话过期,请重新登录!",function(btn){
                            if(btn=="yes"){
                                window.location.href="${ctx}/sys/index";
                            }
                        });
                    }else {
                        var km_d = d.split(',');
                        $("#km").val(km_d[0]);
                        $("#duration").val(km_d[1]);
                    }
                });
            }
            marker.setMap(map);
            infoWindow.setMap(map);
            marker.setPosition(poi.location);
            infoWindow.setPosition(poi.location);
            //infoWindow.setContent('POI信息: <pre>' + JSON.stringify(info, null, 2) + '</pre>');
            infoWindow.open(map, marker.getPosition());
            //map.setCenter(marker.getPosition());
        });
        poiPicker.onCityReady(function() {
            poiPicker.suggest('美食');
        });
    }
    // 目的地_End
}

function getMap() {
    //绘制初始路径
    var path = [];
    path.push([$("#fromlon").val(), $("#fromlat").val()]);
     //path.push([116.321354, 39.896436]);
     path.push([$("#tolon").val(), $("#tolat").val()]);

    /*path.push([126.637469,45.7261]); // 文昌街
    //path.push([116.321354, 39.896436]);
    path.push([126.689599,45.726271]); //通乡商店*/
    map.plugin(["AMap.DragRoute"], function() {
        route = new AMap.DragRoute(map, path, AMap.DrivingPolicy.LEAST_FEE); //构造拖拽导航类
        route.search(); //查询导航路径并开启拖拽导航
        AMap.event.addListener(route, "complete",function(data){
            //alert(data['data']['destination'].lat);
            global_fromlat = data['data']['destination'].lat;
            global_fromlon = data['data']['destination'].lng;
            global_tolon = data['data']['origin'].lng;
            global_tolat = data['data']['origin'].lat;
            //console.log(data['data']['destination']);//origin
        });
    });

    $('#map_model').modal();
}
