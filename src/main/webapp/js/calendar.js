
var Script = function () {
    Date.prototype.Format = function (fmt) { //author: meizz
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    /* initialize the external events
     -----------------------------------------------------------------*/

    $('#external-events div.external-event').each(function() {

        // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
        // it doesn't need to have a start or end
        var eventObject = {
            title: $.trim($(this).text()) // use the element's text as the event title
        };

        // store the Event Object in the DOM element so we can get to it later
        $(this).data('eventObject', eventObject);

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });

    });


    /* initialize the calendar
     -----------------------------------------------------------------*/

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $('#calendar').fullCalendar({
        header: {
            left: '',
            center: '',
            right: ''
        },
        buttonText:{
            today: '',
            week: '',
            day: ''
        },
        height:100,
        defaultView:'basicDay',
        editable: false,
        droppable: true, // this allows things to be dropped onto the calendar !!!
        // 当单击日历中的某一天时，触发callback
        // dayClick: function(date, allDay, jsEvent, view) {//(event, jsEvent, view)
        //
        // },
        eventClick :function(calEvent, jsEvent, view) {

           // alert(calEvent);
        },

        //单击事件调用
        eventClick: function(calEvent, jsEvent, view) {

            if (calEvent.identification == 1){
                Showbo.Msg.confirm("确定把" + calEvent.title.split("-")[0] + "升级为负责人!", function (btn) {
                    if (btn == "yes") {
                        $.post("huanDuiZhang", {
                            id: calEvent.id,
                            start: calEvent.start.Format('yyyy-MM-dd hh:mm:ss')
                        }, function (d) {
                            if (d != -1) {
                                $('#calendar').fullCalendar('refetchEvents');
                            }
                        });
                    }
                });
            }

        },
        //除去第一次移动调用
        eventDrop:function( event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view ) {

        },
        //第一次移进去调用
        drop: function(date, allDay,event) { // this function is called when something is dropped

            // retrieve the dropped element's stored Event Object
            var originalEventObject = $(this).data('eventObject');
            // we need to copy it, so that multiple events don't have a reference to the same object
            var copiedEventObject = $.extend({}, originalEventObject);

            // assign it the date that was reported
            copiedEventObject.start = date;
            copiedEventObject.allDay = allDay;

            // render the event on the calendar
            // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
            $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }
            var da = date.Format('yyyy-MM-dd hh:mm:ss');
            var title = $(this).find("input").val();


        },
        monthNames:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        monthNamesShort:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        dayNamesShort:['星期日','星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        dayNames:['星期日','星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],

        events:function (start,end,callback) {//最新的 events:function (start,end,timezone,callback)
            $.post("queryScheduling",{start:start.Format('yyyy-MM-dd hh:mm:ss'),end:end.Format('yyyy-MM-dd hh:mm:ss')},function (d) {
                callback(d);
            });

        }



        // events: [
        //     {
        //         title: 'All Day Event',
        //         start: new Date(2018, 0, 18),
        //         color:'red',
        //     },


        // ]

    });

}();