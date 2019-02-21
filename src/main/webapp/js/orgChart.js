'use strict';

(function($){

    $(function() {
        // var datasource =getQueryList();

        // var datasource = {
        //     // 'id': '-1',
        //     'name': 'Lao Lao',
        //     'title': 'general manager',
        //     'relationship': { 'children_num': 2, 'parent_num': 1,'sibling_num': 2 },
        //     'children': [
        //         { 'id': '2', 'name': 'Bo Miao', 'title': 'department manager' },
        //         { 'id': '3', 'name': 'Su Miao', 'title': 'department manager',
        //             'children': [
        //                 { 'id': '4', 'name': 'Tie Hua', 'title': 'senior engineer' },
        //                 { 'id': '5', 'name': 'Hei Hei', 'title': 'senior engineer',
        //                     'children': [
        //                         { 'id': '6', 'name': 'Pang Pang', 'title': 'engineer' },
        //                         { 'id': '7', 'name': 'Xiang Xiang', 'title': 'UE engineer' }
        //                     ]
        //                 }
        //             ]
        //         },
        //         { 'id': '8', 'name': 'Yu Jie', 'title': 'department manager' },
        //         { 'id': '9', 'name': 'Yu Li', 'title': 'department manager' },
        //         { 'id': '10', 'name': 'Hong Miao', 'title': 'department manager' },
        //         { 'id': '11', 'name': 'Yu Wei', 'title': 'department manager' },
        //         { 'id': '12', 'name': 'Chun Miao', 'title': 'department manager' },
        //         { 'id': '13', 'name': 'Yu Tie', 'title': 'department manager' }
        //
        //     ]
        //
        // };
        var datascource = {
            'name': 'Lao Lao',
            'title': 'general manager',
            'relationship': { 'children_num': 3 },
            'children': [
                { 'name': 'Bo Miao', 'title': 'department manager',
                    'relationship': { 'children_num': 0, 'parent_num': 1,'sibling_num': 2 }},
                { 'name': 'Su Miao', 'title': 'department manager',
                    'relationship': { 'children_num': 2, 'parent_num': 1,'sibling_num': 2 },
                    'children': [
                        { 'name': 'Tie Hua', 'title': 'senior engineer',
                            'relationship': { 'children_num': 0, 'parent_num': 1,'sibling_num': 1 }},
                        { 'name': 'Hei Hei', 'title': 'senior engineer',
                            'relationship': { 'children_num': 0, 'parent_num': 1,'sibling_num': 1 }}
                    ]
                },
                { 'name': 'Yu Jie', 'title': 'department manager',
                    'relationship': { 'children_num': 0, 'parent_num': 1,'sibling_num': 2 }}
            ]
        };
        // var da = getQueryList();
        // console.log(da)
        var nodeTemplate = function(data) {
            // console.log(data.office)
            return '<div class="title">'+data.name+'</div><div class="id" style="display: none;">'+data.id+'</div>';
        };
        var getId = function() {
            return (new Date().getTime()) * 1000 + Math.floor(Math.random() * 1001);
        };
        var oc = $('#chart-container').orgchart({
            'data' : getQueryList(),
            'nodeTemplate': nodeTemplate,
            'parentNodeSymbol': 'fa-th-large',
            'createNode': function($node, data) {
                $node[0].id = getId();
            }
        });
        oc.$chart
            .on('click', '.node', function() {
                var $this = $(this);
                $('#selected-node').val($this.find('.title').text()).data('node', $this);
            })
            .on('click', '.orgchart', function(event) {
                if (!$(event.target).closest('.node').length) {
                    $('#selected-node').val('');
                }
            });

        $('input[name="chart-state"]').on('click', function() {
            $('.orgchart').toggleClass('view-state', this.value !== 'view');
            $('#edit-panel').toggleClass('view-state', this.value === 'view');
            if ($(this).val() === 'edit') {
                $('.orgchart').find('tr').removeClass('hidden')
                    .find('td').removeClass('hidden')
                    .find('.node').removeClass('slide-up slide-down slide-right slide-left');
            } else {
                $('#btn-reset').trigger('click');
            }
        });

        $('input[name="node-type"]').on('click', function() {
            var $this = $(this);
            if ($this.val() === 'parent') {
                $('#edit-panel').addClass('edit-parent-node');
                $('#new-nodelist').children(':gt(0)').remove();
            } else {
                $('#edit-panel').removeClass('edit-parent-node');
            }
        });

        $('#btn-add-input').on('click', function() {
            $('#new-nodelist').append('<li><input type="text" class="new-node"></li>');
        });

        $('#btn-remove-input').on('click', function() {
            var inputs = $('#new-nodelist').children('li');
            if (inputs.length > 1) {
                inputs.last().remove();
            }
        });

        $('#btn-add-nodes').on('click', function() {
            var $chartContainer = $('#chart-container');
            var nodeVals = [];
            $('#new-nodelist').find('.new-node').each(function (index, item) {
                var validVal = item.value.trim();
                if (validVal.length) {
                    nodeVals.push(validVal);
                }
            });
            var $node = $('#selected-node').data('node');
            if (!nodeVals.length) {
                alert('请编辑节点');
                return;
            }
            var nodeType = $('input[name="node-type"]:checked');
            if (!nodeType.length) {
                alert('Please select a node type');
                return;
            }
            if (nodeType.val() !== 'parent' && !$('.orgchart').length) {
                alert('Please creat the root node firstly when you want to build up the orgchart from the scratch');
                return;
            }
            if (nodeType.val() !== 'parent' && !$node) {
                alert('请选取节点');
                return;
            }
            var i = createNode($node, nodeType, nodeVals);
            if (i > 0) {
                if (nodeType.val() === 'parent') {
                    if (!$chartContainer.children().length) {// if the original chart has been deleted
                        $chartContainer.orgchart({
                            'data': {'name': nodeVals[0]},
                            'exportButton': true,
                            'exportFilename': 'SportsChart',
                            'parentNodeSymbol': 'fa-th-large',
                            'createNode': function ($node, data) {
                                $node[0].id = getId();
                            }
                        })
                            .find('.orgchart').addClass('view-state');
                    } else {
                        oc.addParent($chartContainer.find('.node:first'), {'name': nodeVals[0], 'id': i});
                    }
                } else if (nodeType.val() === 'siblings') {
                    oc.addSiblings($node,
                        {
                            'siblings': nodeVals.map(function (item) {
                                return {'name': item, 'relationship': '110', 'id': i};
                            })
                        });
                } else {
                    var hasChild = $node.parent().attr('colspan') > 0 ? true : false;
                    if (!hasChild) {
                        var rel = nodeVals.length > 1 ? '110' : '100';
                        oc.addChildren($node, {
                            'children': nodeVals.map(function (item) {
                                return {'name': item, 'relationship': rel, 'id': i};
                            })
                        }, $.extend({}, $chartContainer.find('.orgchart').data('options'), {depth: 0}));
                    } else {
                        oc.addSiblings($node.closest('tr').siblings('.nodes').find('.node:first'),
                            {
                                'siblings': nodeVals.map(function (item) {alert(item);
                                    return {'name': item, 'relationship': '110', 'id': i};
                                })
                            });
                    }
                }
                $('#selected-node').val('').data('node', null);
                $('#new-nodelist').find('input:first').val('').parent().siblings().remove();
            }
        });

        $('#btn-edit-nodes').on('click', function() {
            var nodeVals = [];
            $('#new-nodelist').find('.new-node').each(function(index, item) {
                var validVal = item.value.trim();
                if (validVal.length) {
                    nodeVals.push(validVal);
                }
            });
            if (!nodeVals.length) {
                alert('请编辑节点');
                return;
            }
            var $node = $('#selected-node').data('node');
            if (!$node) {
                alert('请选取节点');
                return;
            } else if ($node[0] === $('.orgchart').find('.node:first')[0]) {
                if (!window.confirm('Are you sure you want to delete the whole chart?')) {
                    return;
                }
            }
            var i = editNode($node, nodeVals);
            if (i == 1) {
                $node.find('.title').text(nodeVals);
                $('#selected-node').val('').data('node', null);
                $('#new-nodelist').find('input:first').val('').parent().siblings().remove();
            }
        });

        $('#btn-delete-nodes').on('click', function() {
            var $node = $('#selected-node').data('node');
            if (!$node) {
                alert('请选取节点');
                return;
            } else if ($node[0] === $('.orgchart').find('.node:first')[0]) {
                if (!window.confirm('Are you sure you want to delete the whole chart?')) {
                    return;
                }
            }
            var i = deleteNode($node);
            if (i == 1) {
                oc.removeNodes($node);
                $('#selected-node').val('').data('node', null);
            }
        });

        $('#btn-reset').on('click', function() {
            $('.orgchart').find('.focused').removeClass('focused');
            $('#selected-node').val('');
            $('#new-nodelist').find('input:first').val('').parent().siblings().remove();
            $('#node-type-panel').find('input').prop('checked', false);
        });

    });

})(jQuery);

function getQueryList(){
    var data = null;
    $.ajaxSetup({
        async: false,
    });
    $.post('../organization/queryList', function(d){
        // alert(d)
        data = eval('(' +d + ')');
    });
console.log(data)
    return data;
}

function createNode(node, nodeTypes, nodeVals) {
    //alert(node.find('.id').text()+"*"+nodeTypes.val()+"*"+nodeVals);
    var result = 0;
    $.ajaxSetup({
        async: false,
    });
    $.post(
        '../organization/createNode',
        {nodeId:node.find('.id').text(), nodeType:nodeTypes.val(), nodeVal:nodeVals+""},
        function(d) {
            if(d > 0) {
                result = d;
                alert('添加成功');
            }
        }
    );
    return result;
}

function deleteNode(node) {
    var result = 0;
    if(confirm("您确定要删除吗？")) {
        $.ajaxSetup({
            async: false,
        });
        $.post(
            '../organization/deleteNode',
            {nodeId: node.find('.id').text()},
            function (d) {
                if (d == 1) {
                    result = 1;
                    alert('删除成功');
                } else {
                    alert(d);
                }
            }
        );
    }
    return result
}

function editNode(node, nodeVals) {
    var result = 0;
    $.ajaxSetup({
        async: false,
    });
    $.post(
        '../organization/editNode',
        {nodeId:node.find('.id').text(), nodeVal:nodeVals+""},
        function(d) {
            if(d == 1) {
                result = d;
                alert('修改成功');
            }
        }
    );
    return result;
}