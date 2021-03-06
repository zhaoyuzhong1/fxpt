!function(a){
    // console.log(a)
    a.fn.EasyTree = function (b) {

        var c = {
                selectable: !0,
                deletable: !1,
                editable: !1,
                addable: !1,
                i18n: {
                    deleteNull: "请选择要删除的项。",
                    deleteConfirmation: "您确认要执行删除操作吗？",
                    confirmButtonLabel: "确认",
                    editNull: "请选择要编辑的项。",
                    editMultiple: "一次只能编辑一项",
                    addMultiple: "请选择一项添加",
                    collapseTip: "收起分支",
                    expandTip: "展开分支",
                    selectTip: "选择",
                    unselectTip: "取消选择",
                    editTip: "编辑",
                    addTip: "添加",
                    deleteTip: "删除",
                    cancelButtonLabel: "取消"
                }
            },

            d = a('<div class="alert alert-warning alert-dismissable"><button type="button"  class="close" data-dismiss="alert"  aria-hidden="true">&times;</button><strong></strong><span  class="alert-content"></span> </div> '),
            e = a('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong></strong><span class="alert-content"></span> </div> '),
            f = a('<div class="input-group"><input type="text" class="form-control"><span class="input-group-btn"><button type="button" class="btn btn-default btn-success confirm"></button> </span><span class="input-group-btn"><button type="button" class="btn btn-default cancel"></button> </span> </div> ');

        b = a.extend(c, b), this.each(function () {
            var c = a(this);
            a.each(a(c).find("ul > li"), function () {
                var b;
                if (a(this).is("li:has(ul)")) {
                    var c = a(this).find(" > ul");
                    console.log(c), a(c).remove(), b = a(this).text(), a(this).html('<span><span class="fa"></span><a href="javascript: void(0);"></a> </span>'), a(this).find(" > span > span").addClass("fa-folder-open"), a(this).find(" > span > a").text(b), a(this).append(c)
                } else b = a(this).text(), a(this).html('<span><span class="fa"></span><a href="javascript: void(0);"></a> </span>'), a(this).find(" > span > span").addClass("fa-file"), a(this).find(" > span > a").text(b)
            }), a(c).find("li:has(ul)").addClass("parent_li").find(" > span").attr("title", b.i18n.collapseTip), (b.deletable || b.editable || b.addable) && a(c).prepend('<div class="easy-tree-toolbar"></div> '), b.addable && (a(c).find(".easy-tree-toolbar").append('<div class="create"><button class="btn btn-default btn-sm btn-success"><span class="fa fa-plus"></span></button></div> '), a(c).find(".easy-tree-toolbar .create > button").attr("title", b.i18n.addTip).click(function () {



                var e = a(c).find(".easy-tree-toolbar .create");
                a(e).append(f), a(f).find("input").focus(), a(f).find(".confirm").text(b.i18n.confirmButtonLabel), a(f).find(".confirm").click(function () {
                    if ("" !== a(f).find("input").val()) {
                        var e = g(),
                            h = a('<li><span><span class="fa fa-file"></span><a href="javascript: void(0);">' + a(f).find("input").val() + "</a> </span></li>");

                        a(h).find(" > span > span").attr("title", b.i18n.collapseTip), a(h).find(" > span > a").attr("title", b.i18n.selectTip), e.length <= 0 ? a(c).find(" > ul").append(a(h)) : e.length > 1 ? (a(c).prepend(d), a(c).find(".alert .alert-content").text(b.i18n.addMultiple)) : a(e).hasClass("parent_li") ? a(e).find(" > ul").append(h) : (a(e).addClass("parent_li").find(" > span > span").addClass("fa-folder-open").removeClass("fa-file"), a(e).append(a("<ul></ul>")).find(" > ul").append(h)), a(f).find("input").val(""), b.selectable && (a(h).find(" > span > a").attr("title", b.i18n.selectTip), a(h).find(" > span > a").click(function (d) {
                            var e = a(this).parent().parent();
                            if (e.hasClass("li_selected") ? (a(this).attr("title", b.i18n.selectTip), a(e).removeClass("li_selected")) : (a(c).find("li.li_selected").removeClass("li_selected"), a(this).attr("title", b.i18n.unselectTip), a(e).addClass("li_selected")), b.deletable || b.editable || b.addable) {
                                var f = g();
                                b.editable && (f.length <= 0 || f.length > 1 ? a(c).find(".easy-tree-toolbar .edit > button").addClass("disabled") : a(c).find(".easy-tree-toolbar .edit > button").removeClass("disabled")), b.deletable && (f.length <= 0 || f.length > 1 ? a(c).find(".easy-tree-toolbar .remove > button").addClass("disabled") : a(c).find(".easy-tree-toolbar .remove > button").removeClass("disabled"))
                            }
                            d.stopPropagation()
                        })), a(f).remove()
                    }
                }), a(f).find(".cancel").text(b.i18n.cancelButtonLabel), a(f).find(".cancel").click(function () {
                    a(f).remove()
                })
            })), b.editable && (a(c).find(".easy-tree-toolbar").append('<div class="edit"><button class="btn btn-default btn-sm btn-primary disabled"><span class="fa fa-edit"></span></button></div> '), a(c).find(".easy-tree-toolbar .edit > button").attr("title", b.i18n.editTip).click(function () {
                a(c).find("input.easy-tree-editor").remove(), a(c).find("li > span > a:hidden").show();
                var e = g();
                if (e.length <= 0) a(c).prepend(d), a(c).find(".alert .alert-content").html(b.i18n.editNull); else if (e.length > 1) a(c).prepend(d), a(c).find(".alert .alert-content").html(b.i18n.editMultiple); else {
                    var f = a(e).find(" > span > a").text();
                    a(e).find(" > span > a").hide(), a(e).find(" > span").append('<input type="text" class="easy-tree-editor">');
                    var h = a(e).find(" > span > input.easy-tree-editor");
                    a(h).val(f), a(h).focus(), a(h).keydown(function (b) {
                        13 == b.which && "" !== a(h).val() && (a(e).find(" > span > a").text(a(h).val()), a(h).remove(), a(e).find(" > span > a").show())
                    })
                }
            })), b.deletable && (a(c).find(".easy-tree-toolbar").append('<div class="remove"><button class="btn btn-default btn-sm btn-danger disabled"><span class="fa fa-remove"></span></button></div> '), a(c).find(".easy-tree-toolbar .remove > button").attr("title", b.i18n.deleteTip).click(function () {
                var f = g();
                f.length <= 0 ? (a(c).prepend(d), a(c).find(".alert .alert-content").html(b.i18n.deleteNull)) : (a(c).prepend(e), a(c).find(".alert .alert-content").html(b.i18n.deleteConfirmation).append('<a style="margin-left: 10px;" class="btn btn-default btn-danger confirm"></a>').find(".confirm").html(b.i18n.confirmButtonLabel), a(c).find(".alert .alert-content .confirm").on("click", function () {
                    a(f).find(" ul ").remove(), a(f).remove(), a(e).remove()
                }))
            })), a(c).delegate("li.parent_li > span", "click", function (c) {

                var d = a(this).parent("li.parent_li").find(" > ul > li");
                d.is(":visible") ? (d.hide("fast"), a(this).attr("title", b.i18n.expandTip).find(" > span.fa").addClass("fa-folder").removeClass("fa-folder-open")) : (d.show("fast"), a(this).attr("title", b.i18n.collapseTip).find(" > span.fa").addClass("fa-folder-open").removeClass("fa-folder")), c.stopPropagation()
            }), b.selectable && (a(c).find("li > span > a").attr("title", b.i18n.selectTip), a(c).find("li > span > a").click(function (d) {


                var id =$(this).closest('li')[0].id;//获取节点id
                $("#clickId").val($(this).closest('li')[0].id); //每次点击获取的id 赋值给input 添加 修改／删除 通过抓取input的值
            //添加上级节点
                $.ajax({
                    type: 'get',
                    url:"../organization/querybyId",
                    cache: false,
                    async: false, // 采用同步方式
                    global:true,
                    dataType :"text",
                    data:{"id":id},
                    success: function(data) {

                        $("#Superiornode").val(data);  //回调函数
                    }
                });
                //修改上级节点
                $.ajax({
                    type: 'get',
                    url:"../organization/queryupdayeid",
                    cache: false,
                    async: false, // 采用同步方式
                    global:true,
                    dataType :"text",
                    data:{"id":id},
                    success: function(data) {

                        $("#updatediv").val(data);  //回调函数
                    }
                });

                //编辑回显
                $.ajax({
                    type: 'get',
                    url:"../organization/querybyId",
                    cache: false,
                    async: false, // 采用同步方式
                    global:true,
                    dataType :"text",
                    data:{"id":id},
                    success: function(data) {

                        $("#updateEditnode").val(data);  //回调函数
                    }
                });


                var e = a(this).parent().parent();
                if (e.hasClass("li_selected") ? (a(this).attr("title", b.i18n.selectTip), a(e).removeClass("li_selected")) : (a(c).find("li.li_selected").removeClass("li_selected"), a(this).attr("title", b.i18n.unselectTip), a(e).addClass("li_selected")), b.deletable || b.editable || b.addable) {
                    var f = g();

                    b.editable && (f.length <= 0 || f.length > 1 ? a(c).find(".easy-tree-toolbar .edit > button").addClass("disabled") : a(c).find(".easy-tree-toolbar .edit > button").removeClass("disabled")), b.deletable && (f.length <= 0 || f.length > 1 ? a(c).find(".easy-tree-toolbar .remove > button").addClass("disabled") : a(c).find(".easy-tree-toolbar .remove > button").removeClass("disabled"))
                }
                d.stopPropagation()
            }));
            var g = function () {

                return a(c).find("li.li_selected")
            }
        })
    }
    ;}(jQuery);


