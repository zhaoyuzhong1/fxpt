
//单条删除
function delet(id,g_resourcetype) {
    Showbo.Msg.confirm('您已选择了'+g_resourcetype+'。 请确认你的选择。 这个动作不能撤消。',function (btn) {
        if(btn=='yes'){
            $.post("../cmdb/deletecmdb",{id:id},function (d) {
                if(d=="ok"){
                    Showbo.Msg.alert("删除成功！");
                    $('#teacher_table').bootstrapTable('refreshOptions', {pageNumber: 1, pagesize: 8});

                }
            });
        }
    });
}
//查看
function queryAll(id,g_resourcetype,g_type,g_purpose,g_ascriptionregion,g_ascriptionplace,g_ascriptionroom,
                  g_installposition,g_cabinet,g_unumber,g_shelvingmode,g_manufacturer,g_model,g_serialnumber,g_networkregion,
                  g_bandmanageip,g_bandmanagesmask,g_bandmanagegateway,g_onlinedate,g_hardwarewbtype,g_hardwarewbenddate,
                  g_hardwarewbServiceprovider,g_hardwarewbstate,g_hardwarewblevel,g_hardwareguardian,g_assettagnumber,
                  g_assetstatus,g_assetmanager,g_assetmemo,g_isthekryj,g_powersupply,g_weight,
                  f_serverhostname,f_ywwipaddress,f_ywwsubnetmask,f_ywwgateway,f_glwipaddress,f_glwsubnetmask,f_glwgateway,
                  f_cputype,f_cpunumber,f_cpukernelnumber,f_memorysize,f_swapzonesize,f_operatingsystem,f_builtindisksize,
                  f_builtindisknumber,f_gigabitportnumber,f_alreadygigabitportnum,f_qzportnumber,f_qzalreadynumber,
                  f_ysyhbacardnumber,f_hbacardrate,f_hbawwwnnumber,f_hbacardnumber,
                  c_configurecachesize,c_configureportnum,c_hostportrate,c_physicaldisktype,c_configurecapacity,c_raidmode,c_raidactualcapacity,
                  c_lunsize,c_lunactualnumber,c_alreadyallotlunnum,c_notadyallotlunnum,c_notallotcapacity,c_alreadyallotcapacity,
                  s_configureportnumber,s_configurefcmodulenumber,s_portrate,s_surplusportnumb,s_cardslotnumb,s_cardnumb,
                  j_switchtype,j_lthreeayerexchange,j_configurecardslotnumb,j_usecardslotnumb,j_configuregigabitportnumb,
                  j_configurenumbodules,j_portnumbavailable,j_configureqzlightnumb,j_configureqzmodularnumb,j_qzopticalportnum,
                  j_configureportnumb,j_porttyperate,j_availableportsnumb,j_routingprotocol,j_backplane,
                  j_packetrate,j_stproot,j_stpprotoctype,j_startstp,j_stack,
                  a_devicetype,a_specialequipment,a_managementquantity,a_lightratetype,a_configuregknumb,a_configuremodular,
                  a_havelightquantity,a_porttyperate,a_portnumber,a_yyportnumber,a_supportbypass,a_throughput,a_concurrent,
                  sj_sjdevicetype,sj_managementport,sj_gklightratetypes,sj_sjportconfiguration,sj_sjconfiguremodules,
                  sj_sjportnumber,sj_sjporttyperate,sj_sjconfigureportnumb,sj_sjportnumb,sj_sjmemorysize,sj_sjauditdate)
{
    if(g_resourcetype=="服务器"){
        $('#model1').modal();
        if(g_type=="null"||g_type=="undefined"||g_type==""){
            $("#emp_name2").text('-');
        }else{
            if (g_type=="1"){
                $("#emp_name2").text("已加电使用中");
            }else if(g_type=="2") {
                $("#emp_name2").text("已加电未使用");
            }else if(g_type=="3") {
                $("#emp_name2").text("修理中");
            }else if(g_type=="4") {
                $("#emp_name2").text("已下电待报废");
            }
        }
        if(g_purpose=="null"||g_purpose=="undefined"||g_purpose==""){
            $("#emp_name3").text('-');
        }else{
            $("#emp_name3").text(g_purpose);
        }
        if(g_ascriptionregion=="null"||g_ascriptionregion=="undefined"||g_ascriptionregion==""){
            $("#emp_name4").text('-');
        }else{
            $("#emp_name4").text(g_ascriptionregion);
        }
        if(g_ascriptionplace=="null"||g_ascriptionplace=="undefined"||g_ascriptionplace==""){
            $("#emp_name5").text('-');
        }else{
            $("#emp_name5").text(g_ascriptionplace);
        }
        if(g_ascriptionroom=="null"||g_ascriptionroom=="undefined"||g_ascriptionroom==""){
            $("#emp_name6").text('-');
        }else{
            $("#emp_name6").text(g_ascriptionroom);
        }
        if(g_installposition=="null"||g_installposition=="undefined"||g_installposition==""){
            $("#emp_name7").text('-');
        }else{
            $("#emp_name7").text(g_installposition);
        }if(g_cabinet=="null"||g_cabinet=="undefined"||g_cabinet==""){
            $("#emp_name8").text('-');
        }else{
            $("#emp_name8").text(g_cabinet);
        }
        if(g_assettagnumber=="null"||g_assettagnumber=="undefined"||g_assettagnumber==""){
            $("#emp_name9").text('-');
        }else{
            $("#emp_name9").text(g_assettagnumber);
        }
        if(g_assetstatus=="null"||g_assetstatus=="undefined"||g_assetstatus==""){
            $("#emp_name10").text('-');
        }else{
            if (g_assetstatus=="1"){
                $("#emp_name10").text("已报废");
            }else if (g_assetstatus=="2"){
                $("#emp_name10").text("已转固");
            }else if (g_assetstatus=="3"){
                $("#emp_name10").text("待报废");
            }else if (g_assetstatus=="4"){
                $("#emp_name10").text("无法转固");
            }else if (g_assetstatus=="5"){
                $("#emp_name10").text("未转固");
            }else if (g_assetstatus=="6"){
                $("#emp_name10").text("运行");
            }
        }
        if(g_assetmanager=="null"||g_assetmanager=="undefined"||g_assetmanager==""){
            $("#emp_name11").text('-');
        }else{
            $("#emp_name11").text(g_assetmanager);
        }
        if(g_assetmemo=="null"||g_assetmemo=="undefined"||g_assetmemo==""){
            $("#emp_name12").text('-');
        }else{
            $("#emp_name12").text(g_assetmemo);
        }
        if(g_isthekryj=="null"||g_isthekryj=="undefined"||g_isthekryj==""){
            $("#emp_name13").text('-');
        }else{
            if (g_isthekryj=="1"){
                $("#emp_name13").text("是");
            }else if (g_isthekryj=="2"){
                $("#emp_name13").text("否");
            }
        }
        if(g_powersupply=="null"||g_powersupply=="undefined"||g_powersupply==""){
            $("#emp_name14").text('-');
        }else{
            $("#emp_name14").text(g_powersupply);
        }
        if(g_weight=="null"||g_weight=="undefined"||g_weight==""){
            $("#emp_name15").text('-');
        }else{
            $("#emp_name15").text(g_weight);
        }
        if(f_serverhostname=="null"||f_serverhostname=="undefined"||f_serverhostname==""){
            $("#emp_name16").text('-');
        }else{
            $("#emp_name16").text(f_serverhostname);
        }
        if(f_ywwipaddress=="null"||f_ywwipaddress=="undefined"||f_ywwipaddress==""){
            $("#emp_name17").text('-');
        }else{
            $("#emp_name17").text(f_ywwipaddress);
        }
        if(f_ywwsubnetmask=="null"||f_ywwsubnetmask=="undefined"||f_ywwsubnetmask==""){
            $("#emp_name18").text('-');
        }else{
            $("#emp_name18").text(f_ywwsubnetmask);
        }
        if(f_ywwgateway=="null"||f_ywwgateway=="undefined"||f_ywwgateway==""){
            $("#emp_name19").text('-');
        }else{
            $("#emp_name19").text(f_ywwgateway);
        }
        if(f_glwipaddress=="null"||f_glwipaddress=="undefined"||f_glwipaddress==""){
            $("#emp_name20").text('-');
        }else{
            $("#emp_name20").text(f_glwipaddress);
        }
        if(f_glwsubnetmask=="null"||f_glwsubnetmask=="undefined"||f_glwsubnetmask==""){
            $("#emp_name21").text('-');
        }else{
            $("#emp_name21").text(f_glwsubnetmask);
        }
        if(f_glwgateway=="null"||f_glwgateway=="undefined"||f_glwgateway==""){
            $("#emp_name22").text('-');
        }else{
            $("#emp_name22").text(f_glwgateway);
        }
        if(f_cputype=="null"||f_cputype=="undefined"||f_cputype==""){
            $("#emp_name23").text('-');
        }else{
            $("#emp_name23").text(f_cputype);
        }
        if(f_cpunumber=="null"||f_cpunumber=="undefined"||f_cpunumber==""){
            $("#emp_name24").text('-');
        }else{
            $("#emp_name24").text(f_cpunumber);
        }
        if(f_cpukernelnumber=="null"||f_cpukernelnumber=="undefined"||f_cpukernelnumber==""){
            $("#emp_name25").text('-');
        }else{
            $("#emp_name25").text(f_cpukernelnumber);
        }
        if(f_swapzonesize=="null"||f_swapzonesize=="undefined"||f_swapzonesize==""){
            $("#emp_name26").text('-');
        }else{
            $("#emp_name26").text(f_swapzonesize);
        }
        if(f_memorysize=="null"||f_memorysize=="undefined"||f_memorysize==""){
            $("#emp_name27").text('-');
        }else{
            $("#emp_name27").text(f_memorysize);
        }
        if(g_unumber=="null"||g_unumber=="undefined"||g_unumber==""){
            $("#emp_name28").text('-');
        }else{
            $("#emp_name28").text(g_unumber);
        }
        if(g_shelvingmode=="null"||g_shelvingmode=="undefined"||g_shelvingmode==""){
            $("#emp_name29").text('-');
        }else{
            if (g_shelvingmode=="1"){
                $("#emp_name29").text("托板");
            }else if (g_shelvingmode=="2"){
                $("#emp_name29").text("整体");
            }else if (g_shelvingmode=="3"){
                $("#emp_name29").text("滑轨");
            }
        }
        if(g_manufacturer=="null"||g_manufacturer=="undefined"||g_manufacturer==""){
            $("#emp_name30").text('-');
        }else{
            $("#emp_name30").text(g_manufacturer);
        }
        if(g_model=="null"||g_model=="undefined"||g_model==""){
            $("#emp_name31").text('-');
        }else{
            $("#emp_name31").text(g_model);
        }
        if(g_serialnumber=="null"||g_serialnumber=="undefined"||g_serialnumber==""){
            $("#emp_name32").text('-');
        }else{
            $("#emp_name32").text(g_serialnumber);
        }
        if(g_networkregion=="null"||g_networkregion=="undefined"||g_networkregion==""){
            $("#emp_name33").text('-');
        }else{
            if (g_networkregion=="RegionOne"){
                $("#emp_name33").text("政务网区");
            }else if(g_networkregion=="RegionTwo"){
                $("#emp_name33").text("互联网区");
            }
        }
        if(g_bandmanageip=="null"||g_bandmanageip=="undefined"||g_bandmanageip==""){
            $("#emp_name34").text('-');
        }else{
            $("#emp_name34").text(g_bandmanageip);
        }
        if(g_bandmanagesmask=="null"||g_bandmanagesmask=="undefined"||g_bandmanagesmask==""){
            $("#emp_name35").text('-');
        }else{
            $("#emp_name35").text(g_bandmanagesmask);
        }
        if(g_bandmanagegateway=="null"||g_bandmanagegateway=="undefined"||g_bandmanagegateway==""){
            $("#emp_name36").text('-');
        }else{
            $("#emp_name36").text(g_bandmanagegateway);
        }
        if(g_onlinedate=="null"||g_onlinedate=="undefined"||g_onlinedate==""){
            $("#emp_name37").text('-');
        }else{
            $("#emp_name37").text(getTime(g_onlinedate));
        }
        if(g_hardwarewbtype=="null"||g_hardwarewbtype=="undefined"||g_hardwarewbtype==""){
            $("#emp_name38").text('-');
        }else{
            if (g_hardwarewbtype=="1"){
                $("#emp_name38").text("原厂硬件维保");
            }else if (g_hardwarewbtype=="2"){
                $("#emp_name38").text("第三方硬件维保");
            }
        }
        if(g_hardwarewbenddate=="null"||g_hardwarewbenddate=="undefined"||g_hardwarewbenddate==""){
            $("#emp_name39").text('-');
        }else{
            $("#emp_name39").text(getTime(g_hardwarewbenddate));
        }
        if(g_hardwarewbServiceprovider=="null"||g_hardwarewbServiceprovider=="undefined"||g_hardwarewbServiceprovider==""){
            $("#emp_name40").text('-');
        }else{
            $("#emp_name40").text(g_hardwarewbServiceprovider);
        }
        if(g_hardwarewbstate=="null"||g_hardwarewbstate=="undefined"||g_hardwarewbstate==""){
            $("#emp_name41").text('-');
        }else{
            if (g_hardwarewbstate=="1"){
                $("#emp_name41").text("在保");
            }else if (g_hardwarewbstate=="2"){
                $("#emp_name41").text("出保");
            }
        }
        if(g_hardwarewblevel=="null"||g_hardwarewblevel=="undefined"||g_hardwarewblevel==""){
            $("#emp_name42").text('-');
        }else{
            if (g_hardwarewblevel=="1"){
                $("#emp_name42").text("7*24");
            }else if (g_hardwarewblevel=="2"){
                $("#emp_name42").text("5*9");
            }
        }
        if(g_hardwareguardian=="null"||g_hardwareguardian=="undefined"||g_hardwareguardian==""){
            $("#emp_name43").text('-');
        }else{
            $("#emp_name43").text(g_hardwareguardian);
        }
        if(f_operatingsystem=="null"||f_operatingsystem=="undefined"||f_operatingsystem==""){
            $("#emp_name44").text('-');
        }else{
            $("#emp_name44").text(f_operatingsystem);
        }
        if(f_builtindisksize=="null"||f_builtindisksize=="undefined"||f_builtindisksize==""){
            $("#emp_name45").text('-');
        }else{
            $("#emp_name45").text(f_builtindisksize);
        }
        if(f_builtindisknumber=="null"||f_builtindisknumber=="undefined"||f_builtindisknumber==""){
            $("#emp_name46").text('-');
        }else{
            $("#emp_name46").text(f_builtindisknumber);
        }
        if(f_gigabitportnumber=="null"||f_gigabitportnumber=="undefined"||f_gigabitportnumber==""){
            $("#emp_name47").text('-');
        }else{
            $("#emp_name47").text(f_gigabitportnumber);
        }
        if(f_alreadygigabitportnum=="null"||f_alreadygigabitportnum=="undefined"||f_alreadygigabitportnum==""){
            $("#emp_name48").text('-');
        }else{
            $("#emp_name48").text(f_alreadygigabitportnum);
        }
        if(f_qzportnumber=="null"||f_qzportnumber=="undefined"||f_qzportnumber==""){
            $("#emp_name49").text('-');
        }else{
            $("#emp_name49").text(f_qzportnumber);
        }
        if(f_qzalreadynumber=="null"||f_qzalreadynumber=="undefined"||f_qzalreadynumber==""){
            $("#emp_name50").text('-');
        }else{
            $("#emp_name50").text(f_qzalreadynumber);
        }
        if(f_hbacardnumber=="null"||f_hbacardnumber=="undefined"||f_hbacardnumber==""){
            $("#emp_name51").text('-');
        }else{
            $("#emp_name51").text(f_hbacardnumber);
        }
        if(f_ysyhbacardnumber=="null"||f_ysyhbacardnumber=="undefined"||f_ysyhbacardnumber==""){
            $("#emp_name52").text('-');
        }else{
            $("#emp_name52").text(f_ysyhbacardnumber);
        }
        if(f_hbacardrate=="null"||f_hbacardrate=="undefined"||f_hbacardrate==""){
            $("#emp_name53").text('-');
        }else{
            $("#emp_name53").text(f_hbacardrate);
        }
        if(f_hbawwwnnumber=="null"||f_hbawwwnnumber=="undefined"||f_hbawwwnnumber==""){
            $("#emp_name54").text('-');
        }else{
            $("#emp_name54").text(f_hbawwwnnumber);
        }

    }else if(g_resourcetype=="存储"){

        $('#models').modal();

        if(g_type=="null"||g_type=="undefined"||g_type==""){
            $("#Cc_name2").text('-');
        }else{
            if (g_type=="1"){
                $("#Cc_name2").text("已加电使用中");
            }else if(g_type=="2") {
                $("#Cc_name2").text("已加电未使用");
            }else if(g_type=="3") {
                $("#Cc_name2").text("修理中");
            }else if(g_type=="4") {
                $("#Cc_name2").text("已下电待报废");
            }
        }
        if(g_purpose=="null"||g_purpose=="undefined"||g_purpose==""){
            $("#Cc_name3").text('-');
        }else{
            $("#Cc_name3").text(g_purpose);
        }
        if(g_ascriptionregion=="null"||g_ascriptionregion=="undefined"||g_ascriptionregion==""){
            $("#Cc_name4").text('-');
        }else{
            $("#Cc_name4").text(g_ascriptionregion);
        }
        if(g_ascriptionplace=="null"||g_ascriptionplace=="undefined"||g_ascriptionplace==""){
            $("#Cc_name5").text('-');
        }else{
            $("#Cc_name5").text(g_ascriptionplace);
        }
        if(g_ascriptionroom=="null"||g_ascriptionroom=="undefined"||g_ascriptionroom==""){
            $("#Cc_name6").text('-');
        }else{
            $("#Cc_name6").text(g_ascriptionroom);
        }
        if(g_installposition=="null"||g_installposition=="undefined"||g_installposition==""){
            $("#Cc_name7").text('-');
        }else{
            $("#Cc_name7").text(g_installposition);
        }if(g_cabinet=="null"||g_cabinet=="undefined"||g_cabinet==""){
            $("#Cc_name8").text('-');
        }else{
            $("#Cc_name8").text(g_cabinet);
        }
        if(g_assettagnumber=="null"||g_assettagnumber=="undefined"||g_assettagnumber==""){
            $("#Cc_name9").text('-');
        }else{
            $("#Cc_name9").text(g_assettagnumber);
        }
        if(g_assetstatus=="null"||g_assetstatus=="undefined"||g_assetstatus==""){
            $("#Cc_name10").text('-');
        }else{
            if (g_assetstatus=="1"){
                $("#Cc_name10").text("已报废");
            }else if (g_assetstatus=="2"){
                $("#Cc_name10").text("已转固");
            }else if (g_assetstatus=="3"){
                $("#Cc_name10").text("待报废");
            }else if (g_assetstatus=="4"){
                $("#Cc_name10").text("无法转固");
            }else if (g_assetstatus=="5"){
                $("#Cc_name10").text("未转固");
            }else if (g_assetstatus=="6"){
                $("#Cc_name10").text("运行");
            }
        }
        if(g_assetmanager=="null"||g_assetmanager=="undefined"||g_assetmanager==""){
            $("#Cc_name11").text('-');
        }else{
            $("#Cc_name11").text(g_assetmanager);
        }
        if(g_assetmemo=="null"||g_assetmemo=="undefined"||g_assetmemo==""){
            $("#Cc_name12").text('-');
        }else{
            $("#Cc_name12").text(g_assetmemo);
        }
        if(g_isthekryj=="null"||g_isthekryj=="undefined"||g_isthekryj==""){
            $("#Cc_name13").text('-');
        }else{
            if (g_isthekryj=="1"){
                $("#Cc_name13").text("是");
            }else if (g_isthekryj=="2"){
                $("#Cc_name13").text("否");
            }
        }
        if(g_powersupply=="null"||g_powersupply=="undefined"||g_powersupply==""){
            $("#Cc_name14").text('-');
        }else{
            $("#Cc_name14").text(g_powersupply);
        }
        if(g_weight=="null"||g_weight=="undefined"||g_weight==""){
            $("#Cc_name15").text('-');
        }else{
            $("#Cc_name15").text(g_weight);
        }
        if(c_configurecachesize=="null"||c_configurecachesize=="undefined"||c_configurecachesize==""){
            $("#Cc_name16").text('-');
        }else{
            $("#Cc_name16").text(c_configurecachesize);
        }
        if(c_configureportnum=="null"||c_configureportnum=="undefined"||c_configureportnum==""){
            $("#Cc_name17").text('-');
        }else{
            $("#Cc_name17").text(c_configureportnum);
        }
        if(c_hostportrate=="null"||c_hostportrate=="undefined"||c_hostportrate==""){
            $("#Cc_name18").text('-');
        }else{
            $("#Cc_name18").text(c_hostportrate);
        }
        if(c_physicaldisktype=="null"||c_physicaldisktype=="undefined"||c_physicaldisktype==""){
            $("#Cc_name19").text('-');
        }else{
            $("#Cc_name19").text(c_physicaldisktype);
        }
        if(c_configurecapacity=="null"||c_configurecapacity=="undefined"||c_configurecapacity==""){
            $("#Cc_name20").text('-');
        }else{
            $("#Cc_name20").text(c_configurecapacity);
        }
        if(c_raidmode=="null"||c_raidmode=="undefined"||c_raidmode==""){
            $("#Cc_name21").text('-');
        }else{
            $("#Cc_name21").text(c_raidmode);
        }
        if(g_unumber=="null"||g_unumber=="undefined"||g_unumber==""){
            $("#Cc_name28").text('-');
        }else{
            $("#Cc_name28").text(g_unumber);
        }
        if(g_shelvingmode=="null"||g_shelvingmode=="undefined"||g_shelvingmode==""){
            $("#Cc_name29").text('-');
        }else{
            if (g_shelvingmode=="1"){
                $("#Cc_name29").text("托板");
            }else if (g_shelvingmode=="2"){
                $("#Cc_name29").text("整体");
            }else if (g_shelvingmode=="3"){
                $("#Cc_name29").text("滑轨");
            }
        }
        if(g_manufacturer=="null"||g_manufacturer=="undefined"||g_manufacturer==""){
            $("#Cc_name30").text('-');
        }else{
            $("#Cc_name30").text(g_manufacturer);
        }
        if(g_model=="null"||g_model=="undefined"||g_model==""){
            $("#Cc_name31").text('-');
        }else{
            $("#Cc_name31").text(g_model);
        }
        if(g_serialnumber=="null"||g_serialnumber=="undefined"||g_serialnumber==""){
            $("#Cc_name32").text('-');
        }else{
            $("#Cc_name32").text(g_serialnumber);
        }
        if(g_networkregion=="null"||g_networkregion=="undefined"||g_networkregion==""){
            $("#Cc_name33").text('-');
        }else{
            if (g_networkregion=="RegionOne"){
                $("#Cc_name33").text("政务网区");
            }else if(g_networkregion=="RegionTwo"){
                $("#Cc_name33").text("互联网区");
            }
        }
        if(g_bandmanageip=="null"||g_bandmanageip=="undefined"||g_bandmanageip==""){
            $("#Cc_name34").text('-');
        }else{
            $("#Cc_name34").text(g_bandmanageip);
        }
        if(g_bandmanagesmask=="null"||g_bandmanagesmask=="undefined"||g_bandmanagesmask==""){
            $("#Cc_name35").text('-');
        }else{
            $("#Cc_name35").text(g_bandmanagesmask);
        }
        if(g_bandmanagegateway=="null"||g_bandmanagegateway=="undefined"||g_bandmanagegateway==""){
            $("#Cc_name36").text('-');
        }else{
            $("#Cc_name36").text(g_bandmanagegateway);
        }
        if(g_onlinedate=="null"||g_onlinedate=="undefined"||g_onlinedate==""){
            $("#Cc_name37").text('-');
        }else{
            $("#Cc_name37").text(getTime(g_onlinedate));
        }
        if(g_hardwarewbtype=="null"||g_hardwarewbtype=="undefined"||g_hardwarewbtype==""){
            $("#Cc_name38").text('-');
        }else{
            if (g_hardwarewbtype=="1"){
                $("#Cc_name38").text("原厂硬件维保");
            }else if (g_hardwarewbtype=="2"){
                $("#Cc_name38").text("第三方硬件维保");
            }
        }
        if(g_hardwarewbenddate=="null"||g_hardwarewbenddate=="undefined"||g_hardwarewbenddate==""){
            $("#Cc_name39").text('-');
        }else{
            $("#Cc_name39").text(getTime(g_hardwarewbenddate));
        }
        if(g_hardwarewbServiceprovider=="null"||g_hardwarewbServiceprovider=="undefined"||g_hardwarewbServiceprovider==""){
            $("#Cc_name40").text('-');
        }else{
            $("#Cc_name40").text(g_hardwarewbServiceprovider);
        }
        if(g_hardwarewbstate=="null"||g_hardwarewbstate=="undefined"||g_hardwarewbstate==""){
            $("#Cc_name41").text('-');
        }else{
            if (g_hardwarewbstate=="1"){
                $("#Cc_name41").text("在保");
            }else if (g_hardwarewbstate=="2"){
                $("#Cc_name41").text("出保");
            }
        }
        if(g_hardwarewblevel=="null"||g_hardwarewblevel=="undefined"||g_hardwarewblevel==""){
            $("#Cc_name42").text('-');
        }else{
            if (g_hardwarewblevel=="1"){
                $("#Cc_name42").text("7*24");
            }else if (g_hardwarewblevel=="2"){
                $("#Cc_name42").text("5*9");
            }
        }
        if(g_hardwareguardian=="null"||g_hardwareguardian=="undefined"||g_hardwareguardian==""){
            $("#Cc_name43").text('-');
        }else{
            $("#Cc_name43").text(g_hardwareguardian);
        }
        if(c_raidactualcapacity=="null"||c_raidactualcapacity=="undefined"||c_raidactualcapacity==""){
            $("#Cc_name44").text('-');
        }else{
            $("#Cc_name44").text(c_raidactualcapacity);
        }
        if(c_lunsize=="null"||c_lunsize=="undefined"||c_lunsize==""){
            $("#Cc_name45").text('-');
        }else{
            $("#Cc_name45").text(c_lunsize);
        }
        if(c_lunactualnumber=="null"||c_lunactualnumber=="undefined"||c_lunactualnumber==""){
            $("#Cc_name46").text('-');
        }else{
            $("#Cc_name46").text(c_lunactualnumber);
        }
        if(c_alreadyallotlunnum=="null"||c_alreadyallotlunnum=="undefined"||c_alreadyallotlunnum==""){
            $("#Cc_name47").text('-');
        }else{
            $("#Cc_name47").text(c_alreadyallotlunnum);
        }
        if(c_notadyallotlunnum=="null"||c_notadyallotlunnum=="undefined"||c_notadyallotlunnum==""){
            $("#Cc_name48").text('-');
        }else{
            $("#Cc_name48").text(c_notadyallotlunnum);
        }
        if(c_notallotcapacity=="null"||c_notallotcapacity=="undefined"||c_notallotcapacity==""){
            $("#Cc_name49").text('-');
        }else{
            $("#Cc_name49").text(c_notallotcapacity);
        }
        if(c_alreadyallotcapacity=="null"||c_alreadyallotcapacity=="undefined"||c_alreadyallotcapacity==""){
            $("#Cc_name50").text('-');
        }else{
            $("#Cc_name50").text(c_alreadyallotcapacity);
        }

    }else if(g_resourcetype=="SAN交换机"){

        $('#modelsan').modal();

        if(g_type=="null"||g_type=="undefined"||g_type==""){
            $("#san_name2").text('-');
        }else{
            if (g_type=="1"){
                $("#san_name2").text("已加电使用中");
            }else if(g_type=="2") {
                $("#san_name2").text("已加电未使用");
            }else if(g_type=="3") {
                $("#san_name2").text("修理中");
            }else if(g_type=="4") {
                $("#san_name2").text("已下电待报废");
            }

        }
        if(g_purpose=="null"||g_purpose=="undefined"||g_purpose==""){
            $("#san_name3").text('-');
        }else{
            $("#san_name3").text(g_purpose);
        }
        if(g_ascriptionregion=="null"||g_ascriptionregion=="undefined"||g_ascriptionregion==""){
            $("#san_name4").text('-');
        }else{
            $("#san_name4").text(g_ascriptionregion);
        }
        if(g_ascriptionplace=="null"||g_ascriptionplace=="undefined"||g_ascriptionplace==""){
            $("#san_name5").text('-');
        }else{
            $("#san_name5").text(g_ascriptionplace);
        }
        if(g_ascriptionroom=="null"||g_ascriptionroom=="undefined"||g_ascriptionroom==""){
            $("#san_name6").text('-');
        }else{
            $("#san_name6").text(g_ascriptionroom);
        }
        if(g_installposition=="null"||g_installposition=="undefined"||g_installposition==""){
            $("#san_name7").text('-');
        }else{
            $("#san_name7").text(g_installposition);
        }if(g_cabinet=="null"||g_cabinet=="undefined"||g_cabinet==""){
            $("#san_name8").text('-');
        }else{
            $("#san_name8").text(g_cabinet);
        }
        if(g_assettagnumber=="null"||g_assettagnumber=="undefined"||g_assettagnumber==""){
            $("#san_name9").text('-');
        }else{
            $("#san_name9").text(g_assettagnumber);
        }
        if(g_assetstatus=="null"||g_assetstatus=="undefined"||g_assetstatus==""){
            $("#san_name10").text('-');
        }else{
            if (g_assetstatus=="1"){
                $("#san_name10").text("已报废");
            }else if (g_assetstatus=="2"){
                $("#san_name10").text("已转固");
            }else if (g_assetstatus=="3"){
                $("#san_name10").text("待报废");
            }else if (g_assetstatus=="4"){
                $("#san_name10").text("无法转固");
            }else if (g_assetstatus=="5"){
                $("#san_name10").text("未转固");
            }else if (g_assetstatus=="6"){
                $("#san_name10").text("运行");
            }
        }
        if(g_assetmanager=="null"||g_assetmanager=="undefined"||g_assetmanager==""){
            $("#san_name11").text('-');
        }else{
            $("#san_name11").text(g_assetmanager);
        }
        if(g_assetmemo=="null"||g_assetmemo=="undefined"||g_assetmemo==""){
            $("#san_name12").text('-');
        }else{
            $("#san_name12").text(g_assetmemo);
        }
        if(g_isthekryj=="null"||g_isthekryj=="undefined"||g_isthekryj==""){
            $("#san_name13").text('-');
        }else{
            if (g_isthekryj=="1"){
                $("#san_name13").text("是");
            }else if (g_isthekryj=="2"){
                $("#san_name13").text("否");
            }
        }
        if(g_powersupply=="null"||g_powersupply=="undefined"||g_powersupply==""){
            $("#san_name14").text('-');
        }else{
            $("#san_name14").text(g_powersupply);
        }
        if(g_weight=="null"||g_weight=="undefined"||g_weight==""){
            $("#san_name15").text('-');
        }else{
            $("#san_name15").text(g_weight);
        }
        if(g_unumber=="null"||g_unumber=="undefined"||g_unumber==""){
            $("#san_name28").text('-');
        }else{
            $("#san_name28").text(g_unumber);
        }
        if(g_shelvingmode=="null"||g_shelvingmode=="undefined"||g_shelvingmode==""){
            $("#san_name29").text('-');
        }else{
            if (g_shelvingmode=="1"){
                $("#san_name29").text("托板");
            }else if (g_shelvingmode=="2"){
                $("#san_name29").text("整体");
            }else if (g_shelvingmode=="3"){
                $("#san_name29").text("滑轨");
            }
        }
        if(g_manufacturer=="null"||g_manufacturer=="undefined"||g_manufacturer==""){
            $("#san_name30").text('-');
        }else{
            $("#san_name30").text(g_manufacturer);
        }
        if(g_model=="null"||g_model=="undefined"||g_model==""){
            $("#san_name31").text('-');
        }else{
            $("#san_name31").text(g_model);
        }
        if(g_serialnumber=="null"||g_serialnumber=="undefined"||g_serialnumber==""){
            $("#san_name32").text('-');
        }else{
            $("#san_name32").text(g_serialnumber);
        }
        if(g_networkregion=="null"||g_networkregion=="undefined"||g_networkregion==""){
            $("#san_name33").text('-');
        }else{
            if (g_networkregion=="RegionOne"){
                $("#san_name33").text("政务网区");
            }else if(g_networkregion=="RegionTwo"){
                $("#san_name33").text("互联网区");
            }
        }
        if(g_bandmanageip=="null"||g_bandmanageip=="undefined"||g_bandmanageip==""){
            $("#san_name34").text('-');
        }else{
            $("#san_name34").text(g_bandmanageip);
        }
        if(g_bandmanagesmask=="null"||g_bandmanagesmask=="undefined"||g_bandmanagesmask==""){
            $("#san_name35").text('-');
        }else{
            $("#san_name35").text(g_bandmanagesmask);
        }
        if(g_bandmanagegateway=="null"||g_bandmanagegateway=="undefined"||g_bandmanagegateway==""){
            $("#san_name36").text('-');
        }else{
            $("#san_name36").text(g_bandmanagegateway);
        }
        if(g_onlinedate=="null"||g_onlinedate=="undefined"||g_onlinedate==""){
            $("#san_name37").text('-');
        }else{
            $("#san_name37").text(getTime(g_onlinedate));
        }
        if(g_hardwarewbtype=="null"||g_hardwarewbtype=="undefined"||g_hardwarewbtype==""){
            $("#san_name38").text('-');
        }else{
            if (g_hardwarewbtype=="1"){
                $("#san_name38").text("原厂硬件维保");
            }else if (g_hardwarewbtype=="2"){
                $("#san_name38").text("第三方硬件维保");
            }
        }
        if(g_hardwarewbenddate=="null"||g_hardwarewbenddate=="undefined"||g_hardwarewbenddate==""){
            $("#san_name39").text('-');
        }else{
            $("#san_name39").text(getTime(g_hardwarewbenddate));
        }
        if(g_hardwarewbServiceprovider=="null"||g_hardwarewbServiceprovider=="undefined"||g_hardwarewbServiceprovider==""){
            $("#san_name40").text('-');
        }else{
            $("#san_name40").text(g_hardwarewbServiceprovider);
        }
        if(g_hardwarewbstate=="null"||g_hardwarewbstate=="undefined"||g_hardwarewbstate==""){
            $("#san_name41").text('-');
        }else{
            if (g_hardwarewbstate=="1"){
                $("#san_name41").text("在保");
            }else if (g_hardwarewbstate=="2"){
                $("#san_name41").text("出保");
            }
        }
        if(g_hardwarewblevel=="null"||g_hardwarewblevel=="undefined"||g_hardwarewblevel==""){
            $("#san_name42").text('-');
        }else{
            if (g_hardwarewblevel=="1"){
                $("#san_name42").text("7*24");
            }else if (g_hardwarewblevel=="2"){
                $("#san_name42").text("5*9");
            }
        }
        if(g_hardwareguardian=="null"||g_hardwareguardian=="undefined"||g_hardwareguardian==""){
            $("#san_name43").text('-');
        }else{
            $("#san_name43").text(g_hardwareguardian);
        }
        if(s_configureportnumber=="null"||s_configureportnumber=="undefined"||s_configureportnumber==""){
            $("#san_name44").text('-');
        }else{
            $("#san_name44").text(s_configureportnumber);
        }
        if(s_configurefcmodulenumber=="null"||s_configurefcmodulenumber=="undefined"||s_configurefcmodulenumber==""){
            $("#san_name45").text('-');
        }else{
            $("#san_name45").text(s_configurefcmodulenumber);
        }
        if(s_portrate=="null"||s_portrate=="undefined"||s_portrate==""){
            $("#san_name46").text('-');
        }else{
            $("#san_name46").text(s_portrate);
        }
        if(s_surplusportnumb=="null"||s_surplusportnumb=="undefined"||s_surplusportnumb==""){
            $("#san_name47").text('-');
        }else{
            $("#san_name47").text(s_surplusportnumb);
        }
        if(s_cardslotnumb=="null"||s_cardslotnumb=="undefined"||s_cardslotnumb==""){
            $("#san_name48").text('-');
        }else{
            $("#san_name48").text(s_cardslotnumb);
        }
        if(s_cardnumb=="null"||s_cardnumb=="undefined"||s_cardnumb==""){
            $("#san_name49").text('-');
        }else{
            $("#san_name49").text(s_cardnumb);
        }

    }else if(g_resourcetype=="交换机")  {
        $('#modeljhj').modal();

        if(g_type=="null"||g_type=="undefined"||g_type==""){
            $("#jhj_name2").text('-');
        }else{
            if (g_type=="1"){
                $("#jhj_name2").text("已加电使用中");
            }else if(g_type=="2") {
                $("#jhj_name2").text("已加电未使用");
            }else if(g_type=="3") {
                $("#jhj_name2").text("修理中");
            }else if(g_type=="4") {
                $("#jhj_name2").text("已下电待报废");
            }
        }
        if(g_purpose=="null"||g_purpose=="undefined"||g_purpose==""){
            $("#jhj_name3").text('-');
        }else{
            $("#jhj_name3").text(g_purpose);
        }
        if(g_ascriptionregion=="null"||g_ascriptionregion=="undefined"||g_ascriptionregion==""){
            $("#jhj_name4").text('-');
        }else{
            $("#jhj_name4").text(g_ascriptionregion);
        }
        if(g_ascriptionplace=="null"||g_ascriptionplace=="undefined"||g_ascriptionplace==""){
            $("#jhj_name5").text('-');
        }else{
            $("#jhj_name5").text(g_ascriptionplace);
        }
        if(g_ascriptionroom=="null"||g_ascriptionroom=="undefined"||g_ascriptionroom==""){
            $("#jhj_name6").text('-');
        }else{
            $("#jhj_name6").text(g_ascriptionroom);
        }
        if(g_installposition=="null"||g_installposition=="undefined"||g_installposition==""){
            $("#jhj_name7").text('-');
        }else{
            $("#jhj_name7").text(g_installposition);
        }
        if(g_cabinet=="null"||g_cabinet=="undefined"||g_cabinet==""){
            $("#jhj_name8").text('-');
        }else{
            $("#jhj_name8").text(g_cabinet);
        }
        if(g_assettagnumber=="null"||g_assettagnumber=="undefined"||g_assettagnumber==""){
            $("#jhj_name9").text('-');
        }else{
            $("#jhj_name9").text(g_assettagnumber);
        }
        if(g_assetstatus=="null"||g_assetstatus=="undefined"||g_assetstatus==""){
            $("#jhj_name10").text('-');
        }else{
            if (g_assetstatus=="1"){
                $("#jhj_name10").text("已报废");
            }else if (g_assetstatus=="2"){
                $("#jhj_name10").text("已转固");
            }else if (g_assetstatus=="3"){
                $("#jhj_name10").text("待报废");
            }else if (g_assetstatus=="4"){
                $("#jhj_name10").text("无法转固");
            }else if (g_assetstatus=="5"){
                $("#jhj_name10").text("未转固");
            }else if (g_assetstatus=="6"){
                $("#jhj_name10").text("运行");
            }
        }
        if(g_assetmanager=="null"||g_assetmanager=="undefined"||g_assetmanager==""){
            $("#jhj_name11").text('-');
        }else{
            $("#jhj_name11").text(g_assetmanager);
        }
        if(g_assetmemo=="null"||g_assetmemo=="undefined"||g_assetmemo==""){
            $("#jhj_name12").text('-');
        }else{
            $("#jhj_name12").text(g_assetmemo);
        }
        if(g_isthekryj=="null"||g_isthekryj=="undefined"||g_isthekryj==""){
            $("#jhj_name13").text('-');
        }else{
            if (g_isthekryj=="1"){
                $("#jhj_name13").text("是");
            }else if (g_isthekryj=="2"){
                $("#jhj_name13").text("否");
            }
        }
        if(g_powersupply=="null"||g_powersupply=="undefined"||g_powersupply==""){
            $("#jhj_name14").text('-');
        }else{
            $("#jhj_name14").text(g_powersupply);
        }
        if(g_weight=="null"||g_weight=="undefined"||g_weight==""){
            $("#jhj_name15").text('-');
        }else{
            $("#jhj_name15").text(g_weight);
        }
        if(g_unumber=="null"||g_unumber=="undefined"||g_unumber==""){
            $("#jhj_name28").text('-');
        }else{
            $("#jhj_name28").text(g_unumber);
        }
        if(g_shelvingmode=="null"||g_shelvingmode=="undefined"||g_shelvingmode==""){
            $("#jhj_name29").text('-');
        }else{
            if (g_shelvingmode=="1"){
                $("#jhj_name29").text("托板");
            }else if (g_shelvingmode=="2"){
                $("#jhj_name29").text("整体");
            }else if (g_shelvingmode=="3"){
                $("#jhj_name29").text("滑轨");
            }
        }
        if(g_manufacturer=="null"||g_manufacturer=="undefined"||g_manufacturer==""){
            $("#jhj_name30").text('-');
        }else{
            $("#jhj_name30").text(g_manufacturer);
        }
        if(g_model=="null"||g_model=="undefined"||g_model==""){
            $("#jhj_name31").text('-');
        }else{
            $("#jhj_name31").text(g_model);
        }
        if(g_serialnumber=="null"||g_serialnumber=="undefined"||g_serialnumber==""){
            $("#jhj_name32").text('-');
        }else{
            $("#jhj_name32").text(g_serialnumber);
        }
        if(g_networkregion=="null"||g_networkregion=="undefined"||g_networkregion==""){
            $("#jhj_name33").text('-');
        }else{
            if (g_networkregion=="RegionOne"){
                $("#jhj_name33").text("政务网区");
            }else if(g_networkregion=="RegionTwo"){
                $("#jhj_name33").text("互联网区");
            }
        }
        if(g_bandmanageip=="null"||g_bandmanageip=="undefined"||g_bandmanageip==""){
            $("#jhj_name34").text('-');
        }else{
            $("#jhj_name34").text(g_bandmanageip);
        }
        if(g_bandmanagesmask=="null"||g_bandmanagesmask=="undefined"||g_bandmanagesmask==""){
            $("#jhj_name35").text('-');
        }else{
            $("#jhj_name35").text(g_bandmanagesmask);
        }
        if(g_bandmanagegateway=="null"||g_bandmanagegateway=="undefined"||g_bandmanagegateway==""){
            $("#jhj_name36").text('-');
        }else{
            $("#jhj_name36").text(g_bandmanagegateway);
        }
        if(g_onlinedate=="null"||g_onlinedate=="undefined"||g_onlinedate==""){
            $("#jhj_name37").text('-');
        }else{
            $("#jhj_name37").text(getTime(g_onlinedate));
        }
        if(g_hardwarewbtype=="null"||g_hardwarewbtype=="undefined"||g_hardwarewbtype==""){
            $("#jhj_name38").text('-');
        }else{
            if (g_hardwarewbtype=="1"){
                $("#jhj_name38").text("原厂硬件维保");
            }else if (g_hardwarewbtype=="2"){
                $("#jhj_name38").text("第三方硬件维保");
            }
        }
        if(g_hardwarewbenddate=="null"||g_hardwarewbenddate=="undefined"||g_hardwarewbenddate==""){
            $("#jhj_name39").text('-');
        }else{
            $("#jhj_name39").text(getTime(g_hardwarewbenddate));
        }
        if(g_hardwarewbServiceprovider=="null"||g_hardwarewbServiceprovider=="undefined"||g_hardwarewbServiceprovider==""){
            $("#jhj_name40").text('-');
        }else{
            $("#jhj_name40").text(g_hardwarewbServiceprovider);
        }
        if(g_hardwarewbstate=="null"||g_hardwarewbstate=="undefined"||g_hardwarewbstate==""){
            $("#jhj_name41").text('-');
        }else{

            if (g_hardwarewbstate=="1"){
                $("#jhj_name41").text("在保");
            }else if (g_hardwarewbstate=="2"){
                $("#jhj_name41").text("出保");
            }
        }
        if(g_hardwarewblevel=="null"||g_hardwarewblevel=="undefined"||g_hardwarewblevel==""){
            $("#jhj_name42").text('-');
        }else{
            if (g_hardwarewblevel=="1"){
                $("#jhj_name42").text("7*24");
            }else if (g_hardwarewblevel=="2"){
                $("#jhj_name42").text("5*9");
            }
        }
        if(g_hardwareguardian=="null"||g_hardwareguardian=="undefined"||g_hardwareguardian==""){
            $("#jhj_name43").text('-');
        }else{
            $("#jhj_name43").text(g_hardwareguardian);
        }
        if(j_switchtype=="null"||j_switchtype=="undefined"||j_switchtype==""){
            $("#jhj_name44").text('-');
        }else{
            if (j_switchtype=="1"){
                $("#jhj_name44").text("模块化交换机");
            }else if (j_switchtype=="2"){
                $("#jhj_name44").text("非模块化交换机");
            }
        }
        if(j_lthreeayerexchange=="null"||j_lthreeayerexchange=="undefined"||j_lthreeayerexchange==""){
            $("#jhj_name45").text('-');
        }else{
            if (j_lthreeayerexchange=="1"){
                $("#jhj_name45").text("是");
            }else if (j_lthreeayerexchange=="2"){
                $("#jhj_name45").text("否");
            }
        }
        if(j_configurecardslotnumb=="null"||j_configurecardslotnumb=="undefined"||j_configurecardslotnumb==""){
            $("#jhj_name46").text('-');
        }else{
            $("#jhj_name46").text(j_configurecardslotnumb);
        }
        if(j_usecardslotnumb=="null"||j_usecardslotnumb=="undefined"||j_usecardslotnumb==""){
            $("#jhj_name47").text('-');
        }else{
            $("#jhj_name47").text(j_usecardslotnumb);
        }
        if(j_configuregigabitportnumb=="null"||j_configuregigabitportnumb=="undefined"||j_configuregigabitportnumb==""){
            $("#jhj_name48").text('-');
        }else{
            $("#jhj_name48").text(j_configuregigabitportnumb);
        }
        if(j_configurenumbodules=="null"||j_configurenumbodules=="undefined"||j_configurenumbodules==""){
            $("#jhj_name49").text('-');
        }else{
            $("#jhj_name49").text(j_configurenumbodules);
        }
        if(j_portnumbavailable=="null"||j_portnumbavailable=="undefined"||j_portnumbavailable==""){
            $("#jhj_name50").text('-');
        }else{
            $("#jhj_name50").text(j_portnumbavailable);
        }
        if(j_configureqzlightnumb=="null"||j_configureqzlightnumb=="undefined"||j_configureqzlightnumb==""){
            $("#jhj_name51").text('-');
        }else{
            $("#jhj_name51").text(j_configureqzlightnumb);
        }
        if(j_configureqzmodularnumb=="null"||j_configureqzmodularnumb=="undefined"||j_configureqzmodularnumb==""){
            $("#jhj_name52").text('-');
        }else{
            $("#jhj_name52").text(j_configureqzmodularnumb);
        }
        if(j_qzopticalportnum=="null"||j_qzopticalportnum=="undefined"||j_qzopticalportnum==""){
            $("#jhj_name53").text('-');
        }else{
            $("#jhj_name53").text(j_qzopticalportnum);
        }
        if(j_configureportnumb=="null"||j_configureportnumb=="undefined"||j_configureportnumb==""){
            $("#jhj_name54").text('-');
        }else{
            $("#jhj_name54").text(j_configureportnumb);
        }
        if(j_porttyperate=="null"||j_porttyperate=="undefined"||j_porttyperate==""){
            $("#jhj_name55").text('-');
        }else{
            if (j_porttyperate=="1"){
                $("#jhj_name55").text("10/100/1000Mbps");
            }else if (j_porttyperate=="2"){
                $("#jhj_name55").text("10/100Mbps");
            }
        }
        if(j_availableportsnumb=="null"||j_availableportsnumb=="undefined"||j_availableportsnumb==""){
            $("#jhj_name56").text('-');
        }else{
            $("#jhj_name56").text(j_availableportsnumb);
        }
        if(j_routingprotocol=="null"||j_routingprotocol=="undefined"||j_routingprotocol==""){
            $("#jhj_name57").text('-');
        }else{
            $("#jhj_name57").text(j_routingprotocol);
        }
        if(j_backplane=="null"||j_backplane=="undefined"||j_backplane==""){
            $("#jhj_name58").text('-');
        }else{
            if (j_backplane=="1"){
                $("#jhj_name58").text("1024Gbps");
            }else if (j_backplane=="2"){
                $("#jhj_name58").text("256Gbps");
            }
        }
        if(j_packetrate=="null"||j_packetrate=="undefined"||j_packetrate==""){
            $("#jhj_name59").text('-');
        }else{
            if (j_packetrate=="1"){
                $("#jhj_name59").text("512Mpps");
            }else if (j_packetrate=="2"){
                $("#jhj_name59").text("42Mpps");
            }
        }
        if(j_stproot=="null"||j_stproot=="undefined"||j_stproot==""){
            $("#jhj_name60").text('-');
        }else{
            if (j_stproot=="1"){
                $("#jhj_name60").text("是");
            }else if (j_stproot=="2"){
                $("#jhj_name60").text("否");
            }
        }
        if(j_stpprotoctype=="null"||j_stpprotoctype=="undefined"||j_stpprotoctype==""){
            $("#jhj_name61").text('-');
        }else{
            if (j_stpprotoctype=="1"){
                $("#jhj_name61").text("MSTP");
            }else if (j_stpprotoctype=="2"){
                $("#jhj_name61").text("RSTP");
            }
        }
        if(j_startstp=="null"||j_startstp=="undefined"||j_startstp==""){
            $("#jhj_name62").text('-');
        }else{
            if (j_startstp=="1"){
                $("#jhj_name62").text("是");
            }else if (j_startstp=="2"){
                $("#jhj_name62").text("否");
            }
        }
        if(j_stack=="null"||j_stack=="undefined"||j_stack==""){
            $("#jhj_name63").text('-');
        }else{
            if (j_stack=="1"){
                $("#jhj_name63").text("是");
            }else if (j_stack=="2"){
                $("#jhj_name63").text("否");
            }
        }
    }else if(g_resourcetype=="安全设备") {
        $('#modelaq').modal();

        if(g_type=="null"||g_type=="undefined"||g_type==""){
            $("#aq_name2").text('-');
        }else{
            if (g_type=="1"){
                $("#aq_name2").text("已加电使用中");
            }else if(g_type=="2") {
                $("#aq_name2").text("已加电未使用");
            }else if(g_type=="3") {
                $("#aq_name2").text("修理中");
            }else if(g_type=="4") {
                $("#aq_name2").text("已下电待报废");
            }
        }
        if(g_purpose=="null"||g_purpose=="undefined"||g_purpose==""){
            $("#aq_name3").text('-');
        }else{
            $("#aq_name3").text(g_purpose);
        }
        if(g_ascriptionregion=="null"||g_ascriptionregion=="undefined"||g_ascriptionregion==""){
            $("#aq_name4").text('-');
        }else{
            $("#aq_name4").text(g_ascriptionregion);
        }
        if(g_ascriptionplace=="null"||g_ascriptionplace=="undefined"||g_ascriptionplace==""){
            $("#aq_name5").text('-');
        }else{
            $("#aq_name5").text(g_ascriptionplace);
        }
        if(g_ascriptionroom=="null"||g_ascriptionroom=="undefined"||g_ascriptionroom==""){
            $("#aq_name6").text('-');
        }else{
            $("#aq_name6").text(g_ascriptionroom);
        }
        if(g_installposition=="null"||g_installposition=="undefined"||g_installposition==""){
            $("#aq_name7").text('-');
        }else{
            $("#aq_name7").text(g_installposition);
        }if(g_cabinet=="null"||g_cabinet=="undefined"||g_cabinet==""){
            $("#aq_name8").text('-');
        }else{
            $("#aq_name8").text(g_cabinet);
        }
        if(g_assettagnumber=="null"||g_assettagnumber=="undefined"||g_assettagnumber==""){
            $("#aq_name9").text('-');
        }else{
            $("#aq_name9").text(g_assettagnumber);
        }
        if(g_assetstatus=="null"||g_assetstatus=="undefined"||g_assetstatus==""){
            $("#aq_name10").text('-');
        }else{
            if (g_assetstatus=="1"){
                $("#aq_name10").text("已报废");
            }else if (g_assetstatus=="2"){
                $("#aq_name10").text("已转固");
            }else if (g_assetstatus=="3"){
                $("#aq_name10").text("待报废");
            }else if (g_assetstatus=="4"){
                $("#aq_name10").text("无法转固");
            }else if (g_assetstatus=="5"){
                $("#aq_name10").text("未转固");
            }else if (g_assetstatus=="6"){
                $("#aq_name10").text("运行");
            }
        }
        if(g_assetmanager=="null"||g_assetmanager=="undefined"||g_assetmanager==""){
            $("#aq_name11").text('-');
        }else{
            $("#aq_name11").text(g_assetmanager);
        }
        if(g_assetmemo=="null"||g_assetmemo=="undefined"||g_assetmemo==""){
            $("#aq_name12").text('-');
        }else{
            $("#aq_name12").text(g_assetmemo);
        }
        if(g_isthekryj=="null"||g_isthekryj=="undefined"||g_isthekryj==""){
            $("#aq_name13").text('-');
        }else{
            if (g_isthekryj=="1"){
                $("#aq_name13").text("是");
            }else if (g_isthekryj=="2"){
                $("#aq_name13").text("否");
            }
        }
        if(g_powersupply=="null"||g_powersupply=="undefined"||g_powersupply==""){
            $("#aq_name14").text('-');
        }else{
            $("#aq_name14").text(g_powersupply);
        }
        if(g_weight=="null"||g_weight=="undefined"||g_weight==""){
            $("#aq_name15").text('-');
        }else{
            $("#aq_name15").text(g_weight);
        }
        if(g_unumber=="null"||g_unumber=="undefined"||g_unumber==""){
            $("#aq_name28").text('-');
        }else{
            $("#aq_name28").text(g_unumber);
        }
        if(g_shelvingmode=="null"||g_shelvingmode=="undefined"||g_shelvingmode==""){
            $("#aq_name29").text('-');
        }else{
            if (g_shelvingmode=="1"){
                $("#aq_name29").text("托板");
            }else if (g_shelvingmode=="2"){
                $("#aq_name29").text("整体");
            }else if (g_shelvingmode=="3"){
                $("#aq_name29").text("滑轨");
            }
        }
        if(g_manufacturer=="null"||g_manufacturer=="undefined"||g_manufacturer==""){
            $("#aq_name30").text('-');
        }else{
            $("#aq_name30").text(g_manufacturer);
        }
        if(g_model=="null"||g_model=="undefined"||g_model==""){
            $("#aq_name31").text('-');
        }else{
            $("#aq_name31").text(g_model);
        }
        if(g_serialnumber=="null"||g_serialnumber=="undefined"||g_serialnumber==""){
            $("#aq_name32").text('-');
        }else{
            $("#aq_name32").text(g_serialnumber);
        }
        if(g_networkregion=="null"||g_networkregion=="undefined"||g_networkregion==""){
            $("#aq_name33").text('-');
        }else{
            if (g_networkregion=="RegionOne"){
                $("#aq_name33").text("政务网区");
            }else if(g_networkregion=="RegionTwo"){
                $("#aq_name33").text("互联网区");
            }
        }
        if(g_bandmanageip=="null"||g_bandmanageip=="undefined"||g_bandmanageip==""){
            $("#aq_name34").text('-');
        }else{
            $("#aq_name34").text(g_bandmanageip);
        }
        if(g_bandmanagesmask=="null"||g_bandmanagesmask=="undefined"||g_bandmanagesmask==""){
            $("#aq_name35").text('-');
        }else{
            $("#aq_name35").text(g_bandmanagesmask);
        }
        if(g_bandmanagegateway=="null"||g_bandmanagegateway=="undefined"||g_bandmanagegateway==""){
            $("#aq_name36").text('-');
        }else{
            $("#aq_name36").text(g_bandmanagegateway);
        }
        if(g_onlinedate=="null"||g_onlinedate=="undefined"||g_onlinedate==""){
            $("#aq_name37").text('-');
        }else{
            $("#aq_name37").text(getTime(g_onlinedate));
        }
        if(g_hardwarewbtype=="null"||g_hardwarewbtype=="undefined"||g_hardwarewbtype==""){
            $("#aq_name38").text('-');
        }else{
            if (g_hardwarewbtype=="1"){
                $("#aq_name38").text("原厂硬件维保");
            }else if (g_hardwarewbtype=="2"){
                $("#aq_name38").text("第三方硬件维保");
            }
        }
        if(g_hardwarewbenddate=="null"||g_hardwarewbenddate=="undefined"||g_hardwarewbenddate==""){
            $("#aq_name39").text('-');
        }else{
            $("#aq_name39").text(getTime(g_hardwarewbenddate));
        }
        if(g_hardwarewbServiceprovider=="null"||g_hardwarewbServiceprovider=="undefined"||g_hardwarewbServiceprovider==""){
            $("#aq_name40").text('-');
        }else{
            $("#aq_name40").text(g_hardwarewbServiceprovider);
        }
        if(g_hardwarewbstate=="null"||g_hardwarewbstate=="undefined"||g_hardwarewbstate==""){
            $("#aq_name41").text('-');
        }else{
            if (g_hardwarewbstate=="1"){
                $("#aq_name41").text("在保");
            }else if (g_hardwarewbstate=="2"){
                $("#aq_name41").text("出保");
            }
        }
        if(g_hardwarewblevel=="null"||g_hardwarewblevel=="undefined"||g_hardwarewblevel==""){
            $("#aq_name42").text('-');
        }else{
            if (g_hardwarewblevel=="1"){
                $("#aq_name42").text("7*24");
            }else if (g_hardwarewblevel=="2"){
                $("#aq_name42").text("5*9");
            }
        }
        if(g_hardwareguardian=="null"||g_hardwareguardian=="undefined"||g_hardwareguardian==""){
            $("#aq_name43").text('-');
        }else{
            $("#aq_name43").text(g_hardwareguardian);
        }
        if(a_devicetype=="null"||a_devicetype=="undefined"||a_devicetype==""){
            $("#aq_name44").text('-');
        }else{
            if (a_devicetype=="1"){
                $("#aq_name44").text("防火墙");
            }else if (a_devicetype=="2"){
                $("#aq_name44").text("WEB应用防火墙");
            }else if (a_devicetype=="3"){
                $("#aq_name44").text("IPS");
            }else if (a_devicetype=="4"){
                $("#aq_name44").text("IDS");
            }else if (a_devicetype=="5"){
                $("#aq_name44").text("入侵检测");
            }else if (a_devicetype=="6"){
                $("#aq_name44").text("VPN");
            }else if (a_devicetype=="7"){
                $("#aq_name44").text("专用设备-G");
            }else if (a_devicetype=="8"){
                $("#aq_name44").text("专用设备-K");
            }else if (a_devicetype=="9"){
                $("#aq_name44").text("专用设备-D");
            }
        }
        if(a_specialequipment=="null"||a_specialequipment=="undefined"||a_specialequipment==""){
            $("#aq_name45").text('-');
        }else{
            if(a_specialequipment=="1"){
                $("#aq_name45").text("是");
            }else if(a_specialequipment=="2"){
                $("#aq_name45").text("否");
            }
        }
        if(a_managementquantity=="null"||a_managementquantity=="undefined"||a_managementquantity==""){
            $("#aq_name46").text('-');
        }else{
            $("#aq_name46").text(a_managementquantity);
        }
        if(a_lightratetype=="null"||a_lightratetype=="undefined"||a_lightratetype==""){
            $("#aq_name47").text('-');
        }else{

            if (a_lightratetype=="1"){
                $("#aq_name47").text("10000Mbps");
            }else if(a_lightratetype=="2") {
                $("#aq_name47").text("1000Mbps");
            }
        }
        if(a_configuregknumb=="null"||a_configuregknumb=="undefined"||a_configuregknumb==""){
            $("#aq_name48").text('-');
        }else{
            $("#aq_name48").text(a_configuregknumb);
        }
        if(a_configuremodular=="null"||a_configuremodular=="undefined"||a_configuremodular==""){
            $("#aq_name49").text('-');
        }else{
            $("#aq_name49").text(a_configuremodular);
        }
        if(a_havelightquantity=="null"||a_havelightquantity=="undefined"||a_havelightquantity==""){
            $("#aq_name50").text('-');
        }else{
            $("#aq_name50").text(a_havelightquantity);
        }
        if(a_porttyperate=="null"||a_porttyperate=="undefined"||a_porttyperate==""){
            $("#aq_name51").text('-');
        }else{
            if (a_porttyperate=="1"){
                $("#aq_name51").text("10/100/1000Mbps");
            }else if(a_porttyperate=="2") {
                $("#aq_name51").text("10/100Mbps");
            }
        }
        if(a_portnumber=="null"||a_portnumber=="undefined"||a_portnumber==""){
            $("#aq_name52").text('-');
        }else{
            $("#aq_name52").text(a_portnumber);
        }
        if(a_yyportnumber=="null"||a_yyportnumber=="undefined"||a_yyportnumber==""){
            $("#aq_name53").text('-');
        }else{
            $("#aq_name53").text(a_yyportnumber);
        }
        if(a_supportbypass=="null"||a_supportbypass=="undefined"||a_supportbypass==""){
            $("#aq_name54").text('-');
        }else{
            if (a_supportbypass=="1"){
                $("#aq_name54").text("是");
            }else if(a_supportbypass=="2") {
                $("#aq_name54").text("否");
            }
        }
        if(a_throughput=="null"||a_throughput=="undefined"||a_throughput==""){
            $("#aq_name55").text('-');
        }else{
            $("#aq_name55").text(a_throughput);
        }
        if(a_concurrent=="null"||a_concurrent=="undefined"||a_concurrent==""){
            $("#aq_name56").text('-');
        }else{
            $("#aq_name56").text(a_concurrent);
        }

    }else if(g_resourcetype=="审计设备") {
        $('#modelsj').modal();

        if(g_type=="null"||g_type=="undefined"||g_type==""){
            $("#sj_name2").text('-');
        }else{
            if (g_type=="1"){
                $("#sj_name2").text("已加电使用中");
            }else if(g_type=="2") {
                $("#sj_name2").text("已加电未使用");
            }else if(g_type=="3") {
                $("#sj_name2").text("修理中");
            }else if(g_type=="4") {
                $("#sj_name2").text("已下电待报废");
            }
        }
        if(g_purpose=="null"||g_purpose=="undefined"||g_purpose==""){
            $("#sj_name3").text('-');
        }else{
            $("#sj_name3").text(g_purpose);
        }
        if(g_ascriptionregion=="null"||g_ascriptionregion=="undefined"||g_ascriptionregion==""){
            $("#sj_name4").text('-');
        }else{
            $("#sj_name4").text(g_ascriptionregion);
        }
        if(g_ascriptionplace=="null"||g_ascriptionplace=="undefined"||g_ascriptionplace==""){
            $("#sj_name5").text('-');
        }else{
            $("#sj_name5").text(g_ascriptionplace);
        }
        if(g_ascriptionroom=="null"||g_ascriptionroom=="undefined"||g_ascriptionroom==""){
            $("#sj_name6").text('-');
        }else{
            $("#sj_name6").text(g_ascriptionroom);
        }
        if(g_installposition=="null"||g_installposition=="undefined"||g_installposition==""){
            $("#sj_name7").text('-');
        }else{
            $("#sj_name7").text(g_installposition);
        }if(g_cabinet=="null"||g_cabinet=="undefined"||g_cabinet==""){
            $("#sj_name8").text('-');
        }else{
            $("#sj_name8").text(g_cabinet);
        }
        if(g_assettagnumber=="null"||g_assettagnumber=="undefined"||g_assettagnumber==""){
            $("#sj_name9").text('-');
        }else{
            $("#sj_name9").text(g_assettagnumber);
        }
        if(g_assetstatus=="null"||g_assetstatus=="undefined"||g_assetstatus==""){
            $("#sj_name10").text('-');
        }else{
            if (g_assetstatus=="1"){
                $("#sj_name10").text("已报废");
            }else if (g_assetstatus=="2"){
                $("#sj_name10").text("已转固");
            }else if (g_assetstatus=="3"){
                $("#sj_name10").text("待报废");
            }else if (g_assetstatus=="4"){
                $("#sj_name10").text("无法转固");
            }else if (g_assetstatus=="5"){
                $("#sj_name10").text("未转固");
            }else if (g_assetstatus=="6"){
                $("#sj_name10").text("运行");
            }
        }
        if(g_assetmanager=="null"||g_assetmanager=="undefined"||g_assetmanager==""){
            $("#sj_name11").text('-');
        }else{
            $("#sj_name11").text(g_assetmanager);
        }
        if(g_assetmemo=="null"||g_assetmemo=="undefined"||g_assetmemo==""){
            $("#sj_name12").text('-');
        }else{
            $("#sj_name12").text(g_assetmemo);
        }
        if(g_isthekryj=="null"||g_isthekryj=="undefined"||g_isthekryj==""){
            $("#sj_name13").text('-');
        }else{
            if (g_isthekryj=="1"){
                $("#sj_name13").text("是");
            }else if (g_isthekryj=="2"){
                $("#sj_name13").text("否");
            }
        }
        if(g_powersupply=="null"||g_powersupply=="undefined"||g_powersupply==""){
            $("#sj_name14").text('-');
        }else{
            $("#sj_name14").text(g_powersupply);
        }
        if(g_weight=="null"||g_weight=="undefined"||g_weight==""){
            $("#sj_name15").text('-');
        }else{
            $("#sj_name15").text(g_weight);
        }
        if(g_unumber=="null"||g_unumber=="undefined"||g_unumber==""){
            $("#sj_name28").text('-');
        }else{
            $("#sj_name28").text(g_unumber);
        }
        if(g_shelvingmode=="null"||g_shelvingmode=="undefined"||g_shelvingmode==""){
            $("#sj_name29").text('-');
        }else{
            if (g_shelvingmode=="1"){
                $("#sj_name29").text("托板");
            }else if (g_shelvingmode=="2"){
                $("#sj_name29").text("整体");
            }else if (g_shelvingmode=="3"){
                $("#sj_name29").text("滑轨");
            }
        }
        if(g_manufacturer=="null"||g_manufacturer=="undefined"||g_manufacturer==""){
            $("#sj_name30").text('-');
        }else{
            $("#sj_name30").text(g_manufacturer);
        }
        if(g_model=="null"||g_model=="undefined"||g_model==""){
            $("#sj_name31").text('-');
        }else{
            $("#sj_name31").text(g_model);
        }
        if(g_serialnumber=="null"||g_serialnumber=="undefined"||g_serialnumber==""){
            $("#sj_name32").text('-');
        }else{
            $("#sj_name32").text(g_serialnumber);
        }
        if(g_networkregion=="null"||g_networkregion=="undefined"||g_networkregion==""){
            $("#sj_name33").text('-');
        }else{
            if (g_networkregion=="RegionOne"){
                $("#sj_name33").text("政务网区");
            }else if(g_networkregion=="RegionTwo"){
                $("#sj_name33").text("互联网区");
            }
        }
        if(g_bandmanageip=="null"||g_bandmanageip=="undefined"||g_bandmanageip==""){
            $("#sj_name34").text('-');
        }else{
            $("#sj_name34").text(g_bandmanageip);
        }
        if(g_bandmanagesmask=="null"||g_bandmanagesmask=="undefined"||g_bandmanagesmask==""){
            $("#sj_name35").text('-');
        }else{
            $("#sj_name35").text(g_bandmanagesmask);
        }
        if(g_bandmanagegateway=="null"||g_bandmanagegateway=="undefined"||g_bandmanagegateway==""){
            $("#sj_name36").text('-');
        }else{
            $("#sj_name36").text(g_bandmanagegateway);
        }
        if(g_onlinedate=="null"||g_onlinedate=="undefined"||g_onlinedate==""){
            $("#sj_name37").text('-');
        }else{
            $("#sj_name37").text(getTime(g_onlinedate));
        }
        if(g_hardwarewbtype=="null"||g_hardwarewbtype=="undefined"||g_hardwarewbtype==""){
            $("#sj_name38").text('-');
        }else{
            if (g_hardwarewbtype=="1"){
                $("#sj_name38").text("原厂硬件维保");
            }else if (g_hardwarewbtype=="2"){
                $("#sj_name38").text("第三方硬件维保");
            }
        }
        if(g_hardwarewbenddate=="null"||g_hardwarewbenddate=="undefined"||g_hardwarewbenddate==""){
            $("#sj_name39").text('-');
        }else{
            $("#sj_name39").text(getTime(g_hardwarewbenddate));
        }
        if(g_hardwarewbServiceprovider=="null"||g_hardwarewbServiceprovider=="undefined"||g_hardwarewbServiceprovider==""){
            $("#sj_name40").text('-');
        }else{
            $("#sj_name40").text(g_hardwarewbServiceprovider);
        }
        if(g_hardwarewbstate=="null"||g_hardwarewbstate=="undefined"||g_hardwarewbstate==""){
            $("#sj_name41").text('-');
        }else{
            if (g_hardwarewbstate=="1"){
                $("#sj_name41").text("在保");
            }else if (g_hardwarewbstate=="2"){
                $("#sj_name41").text("出保");
            }
        }
        if(g_hardwarewblevel=="null"||g_hardwarewblevel=="undefined"||g_hardwarewblevel==""){
            $("#sj_name42").text('-');
        }else{
            if (g_hardwarewblevel=="1"){
                $("#sj_name42").text("7*24");
            }else if (g_hardwarewblevel=="2"){
                $("#sj_name42").text("5*9");
            }
        }
        if(g_hardwareguardian=="null"||g_hardwareguardian=="undefined"||g_hardwareguardian==""){
            $("#sj_name43").text('-');
        }else{
            $("#sj_name43").text(g_hardwareguardian);
        }
        if(sj_sjdevicetype=="null"||sj_sjdevicetype=="undefined"||sj_sjdevicetype==""){
            $("#sj_name44").text('-');
        }else{
            if (sj_sjdevicetype=="1"){
                $("#sj_name44").text("数据库审计");
            }else if (sj_sjdevicetype=="2"){
                $("#sj_name44").text("运维审计");
            }else if (sj_sjdevicetype=="3"){
                $("#sj_name44").text("安全行为审计");
            }
        }
        if(sj_managementport=="null"||sj_managementport=="undefined"||sj_managementport==""){
            $("#sj_name45").text('-');
        }else{
            $("#sj_name45").text(sj_managementport);
        }
        if(sj_gklightratetypes=="null"||sj_gklightratetypes=="undefined"||sj_gklightratetypes==""){
            $("#sj_name46").text('-');
        }else{
            if (sj_gklightratetypes=="1"){
                $("#sj_name46").text("10000Mbps");
            }else if (sj_gklightratetypes=="2"){
                $("#sj_name46").text("1000Mbps");
            }
        }
        if(sj_sjportconfiguration=="null"||sj_sjportconfiguration=="undefined"||sj_sjportconfiguration==""){
            $("#sj_name47").text('-');
        }else{
            $("#sj_name47").text(sj_sjportconfiguration);
        }
        if(sj_sjconfiguremodules=="null"||sj_sjconfiguremodules=="undefined"||sj_sjconfiguremodules==""){
            $("#sj_name48").text('-');
        }else{
            $("#sj_name48").text(sj_sjconfiguremodules);
        }
        if(sj_sjportnumber=="null"||sj_sjportnumber=="undefined"||sj_sjportnumber==""){
            $("#sj_name49").text('-');
        }else{
            $("#sj_name49").text(sj_sjportnumber);
        }
        if(sj_sjporttyperate=="null"||sj_sjporttyperate=="undefined"||sj_sjporttyperate==""){
            $("#sj_name50").text('-');
        }else{
            if (sj_sjporttyperate=="1"){
                $("#sj_name50").text("10/100/1000Mbps");
            }else if (sj_sjporttyperate=="2"){
                $("#sj_name50").text("10/100Mbps");
            }
        }
        if(sj_sjconfigureportnumb=="null"||sj_sjconfigureportnumb=="undefined"||sj_sjconfigureportnumb==""){
            $("#sj_name51").text('-');
        }else{
            $("#sj_name51").text(sj_sjconfigureportnumb);
        }
        if(sj_sjportnumb=="null"||sj_sjportnumb=="undefined"||sj_sjportnumb==""){
            $("#sj_name52").text('-');
        }else{
            $("#sj_name52").text(sj_sjportnumb);
        }
        if(sj_sjmemorysize=="null"||sj_sjmemorysize=="undefined"||sj_sjmemorysize==""){
            $("#sj_name53").text('-');
        }else{
            $("#sj_name53").text(sj_sjmemorysize);
        }
        if(sj_sjauditdate=="null"||sj_sjauditdate=="undefined"||sj_sjauditdate==""){
            $("#sj_name54").text('-');
        }else{
            $("#sj_name54").text(sj_sjauditdate);
        }
    }
}
//修改
function update (id,g_resourcetype,g_type,g_purpose,g_ascriptionregion,g_ascriptionplace,g_ascriptionroom,
                 g_installposition,g_cabinet,g_unumber,g_shelvingmode,g_manufacturer,g_model,g_serialnumber,g_networkregion,
                 g_bandmanageip,g_bandmanagesmask,g_bandmanagegateway,g_onlinedate,g_hardwarewbtype,g_hardwarewbenddate,
                 g_hardwarewbServiceprovider,g_hardwarewbstate,g_hardwarewblevel,g_hardwareguardian,g_assettagnumber,
                 g_assetstatus,g_assetmanager,g_assetmemo,g_isthekryj,g_powersupply,g_weight,
                 f_serverhostname,f_ywwipaddress,f_ywwsubnetmask,f_ywwgateway,f_glwipaddress,f_glwsubnetmask,f_glwgateway,
                 f_cputype,f_cpunumber,f_cpukernelnumber,f_memorysize,f_swapzonesize,f_operatingsystem,f_builtindisksize,
                 f_builtindisknumber,f_gigabitportnumber,f_alreadygigabitportnum,f_qzportnumber,f_qzalreadynumber,
                 f_ysyhbacardnumber,f_hbacardrate,f_hbawwwnnumber,f_hbacardnumber,
                 c_configurecachesize,c_configureportnum,c_hostportrate,c_physicaldisktype,c_configurecapacity,c_raidmode,c_raidactualcapacity,
                 c_lunsize,c_lunactualnumber,c_alreadyallotlunnum,c_notadyallotlunnum,c_notallotcapacity,c_alreadyallotcapacity,
                 s_configureportnumber,s_configurefcmodulenumber,s_portrate,s_surplusportnumb,s_cardslotnumb,s_cardnumb,
                 j_switchtype,j_lthreeayerexchange,j_configurecardslotnumb,j_usecardslotnumb,j_configuregigabitportnumb,
                 j_configurenumbodules,j_portnumbavailable,j_configureqzlightnumb,j_configureqzmodularnumb,j_qzopticalportnum,
                 j_configureportnumb,j_porttyperate,j_availableportsnumb,j_routingprotocol,j_backplane,
                 j_packetrate,j_stproot,j_stpprotoctype,j_startstp,j_stack,
                 a_devicetype,a_specialequipment,a_managementquantity,a_lightratetype,a_configuregknumb,a_configuremodular,
                 a_havelightquantity,a_porttyperate,a_portnumber,a_yyportnumber,a_supportbypass,a_throughput,a_concurrent,
                 sj_sjdevicetype,sj_managementport,sj_gklightratetypes,sj_sjportconfiguration,sj_sjconfiguremodules,
                 sj_sjportnumber,sj_sjporttyperate,sj_sjconfigureportnumb,sj_sjportnumb,sj_sjmemorysize,sj_sjauditdate){
    if(g_resourcetype=="服务器"){
        if (g_assetstatus=="4" || g_assetstatus=="5"){
            $("#nzbq").css("display","none");
        }else {
            $("#nzbq").css("display","block");
        }

        $('#fuwuqiId').val(id);
//公共属性
        $('#zhuangtai').val(g_type);//状态
        $('#yongtu').val(g_purpose);//用途
        $('#gsqy').val(g_ascriptionregion);//归属区域
        $('#gsdd').val(g_ascriptionplace);//归属地点
        $('#gsfj').val(g_ascriptionroom);//归属房间
        $('#azwz').val(g_installposition);//安装位置
        $('#szjg').val(g_cabinet);//所在机柜
        $('#zcbqh').val(g_assettagnumber);//资产标签号
        $('#zczt').val(g_assetstatus);//资产状态
        $('#zcgly').val(g_assetmanager);//资产管理员
        $('#zcbz').val(g_assetmemo);//资产备注
        $('#sfwkryj').val(g_isthekryj);//是否为扩容元件
        $('#eddygl').val(g_powersupply);//额定电源功率(KW)
        $('#zhonglian').val(g_weight);//重量
        $('#szus').val(g_unumber);//所占U数
        $('#sjfs').val(g_shelvingmode);//上架方式
        $('#sccs').val(g_manufacturer);//生产厂商
        $('#xinghao').val(g_model);//型号
        $('#xuliehao').val(g_serialnumber);//序列号
        if (g_networkregion=="RegionOne"){
            $('#wlqy').val(2);//网络区域
        }else if (g_networkregion=="RegionTwo"){
            $('#wlqy').val(1);//网络区域
        }
        $('#dwglip').val(g_bandmanageip);//带外管理IP、
        $('#dwglzwym').val(g_bandmanagesmask);//带外管理子网掩码

        $('#dwglwg').val(g_bandmanagegateway);//带外管理网关
        $('#sxsj').val(getTime(g_onlinedate));//上线时间
        $('#yjwblx').val(g_hardwarewbtype);//硬件维保类型
        $('#yjwbjssj').val(getTime(g_hardwarewbenddate));//硬件维保服务结束日期
        $('#yjwbfwcs').val(g_hardwarewbServiceprovider);//硬件维保服务厂商
        $('#yjwbzt').val(g_hardwarewbstate);//硬件维保状态
        $('#yjwbfwjb').val(g_hardwarewblevel);//硬件维保服务级别
        $('#yjwbfzr').val(g_hardwareguardian);//硬件维保负责人
//服务器属性
        $('#fwqzjm').val(f_serverhostname);//服务器主机名
        $('#ywwipdz').val(f_ywwipaddress);//业务网IP地址
        $('#ywwzwym').val(f_ywwsubnetmask);//业务网子网掩码
        $('#ywwwg').val(f_ywwgateway);//业务网网关
        $('#glwipdz').val(f_glwipaddress);// 管理网Ip地址
        $('#glwzwym').val(f_glwsubnetmask);//f管理网子网掩码
        $('#glwwg').val(f_glwgateway);//管理网网关
        $('#cpulx').val(f_cputype);//Cpu类型
        $('#cpusl').val(f_cpunumber);//Cpu数量
        $('#cpunhs').val(f_cpukernelnumber);//Cpu内核数
        $('#swapqdx').val(f_swapzonesize);//SWAP区大小
        $('#ncdx').val(f_memorysize);//内存大小
        $('#czxt').val(f_operatingsystem);//操作系统
        $('#nzypdx').val(f_builtindisksize);//内置硬盘大小
        $('#nzypsl').val(f_builtindisknumber);//f内置硬盘数量
        $('#wzdksl').val(f_gigabitportnumber);//万兆端口数量
        $('#ysywzdksl').val(f_alreadygigabitportnum);//已使用万兆端口数量
        $('#qzdksl').val(f_qzportnumber);//千兆端口数量
        $('#ysyqzdksl').val(f_qzalreadynumber);//已使用千兆端口数量
        $('#hbaksl').val(f_hbacardnumber);//HBA卡数量
        $('#yhbaksl').val(f_ysyhbacardnumber);//已使用HBA卡数量
        $('#hbaksulv').val(f_hbacardrate);//HBA卡速率
        $('#hbakwwwnh').val(f_hbawwwnnumber);//HBA卡WWWN号
        $('#fuwuqiModel').modal();
        $("#fwqdiv").css("display","block");
        $("#qlfoot1").css("display","none");
        $("#qlfoot2").css("display","block");
        $("#qlfoot4").css("display","block");
        $("#qlfoot3").css("display","none");
        /**
         * 存储
         */
        $("#ccdiv").css("display","none"); //存储div 隐藏
        $("#cunchusave").css("display","none");  //存储表头
        $("#cunchuupdaee").css("display","none"); //存储修改表头
        $("#ccxiugai").css("display","none");
        $("#ccsave").css("display","none"); //存储div 隐藏
        /**
         * San
         */
        $("#sandiv").css("display","none"); //存储div 隐藏
        $("#sanad").css("display","none");  //存储表头
        $("#sup").css("display","none"); //存储修改表头
        $("#sansave").css("display","none");
        $("#sanup").css("display","none"); //存储div 隐藏
        /**
         * 交换机
         */
        $("#jhjdiv1").css("display","none"); //存储div 隐藏
        $("#jhjfoot3").css("display","none");  //存储表头
        $("#jhjfoot4").css("display","none"); //存储修改表头
        $("#jhjfoot1").css("display","none");
        $("#jhjfoot2").css("display","none"); //存储div 隐藏
        /**
         * 安全设备
         */
        $("#Aq1").css("display","none" );
        $("#Aq2").css("display","none");
        $("#Aq4").css("display","none");
        $("#Aq3").css("display","none");
        $("#aq1div").css("display","none"); //存储div 隐藏
        /**
         * 审计设备
         */
        $("#Sj1").css("display","none" );
        $("#Sj3").css("display","none");
        $("#Sj4").css("display","none");
        $("#Sj2").css("display","none");
        $("#sj1div").css("display","none"); //存储div 隐藏

    }else if(g_resourcetype=="交换机"){
        if (g_assetstatus=="4" || g_assetstatus=="5"){
            $("#nzbq").css("display","none");
        }else {
            $("#nzbq").css("display","block");
        }

        $('#JhjId').val(id);//id
        $('#zhuangtai').val(g_type);//状态
        $('#yongtu').val(g_purpose);//用途
        $('#gsqy').val(g_ascriptionregion);//归属区域
        $('#gsdd').val(g_ascriptionplace);//归属地点
        $('#gsfj').val(g_ascriptionroom);//归属房间
        $('#azwz').val(g_installposition);//安装位置
        $('#szjg').val(g_cabinet);//所在机柜
        $('#zcbqh').val(g_assettagnumber);//资产标签号
        $('#zczt').val(g_assetstatus);//资产状态
        $('#zcgly').val(g_assetmanager);//资产管理员
        $('#zcbz').val(g_assetmemo);//资产备注
        $('#sfwkryj').val(g_isthekryj);//是否为扩容元件
        $('#eddygl').val(g_powersupply);//额定电源功率(KW)
        $('#zhonglian').val(g_weight);//重量
        $('#szus').val(g_unumber);//所占U数
        $('#sjfs').val(g_shelvingmode);//上架方式
        $('#sccs').val(g_manufacturer);//生产厂商
        $('#xinghao').val(g_model);//型号
        $('#xuliehao').val(g_serialnumber);//序列号
        if (g_networkregion=="RegionOne"){
            $('#wlqy').val(2);//网络区域
        }else if (g_networkregion=="RegionTwo"){
            $('#wlqy').val(1);//网络区域
        }
        $('#dwglip').val(g_bandmanageip);//带外管理IP、
        $('#dwglzwym').val(g_bandmanagesmask);//带外管理子网掩码
        $('#dwglwg').val(g_bandmanagegateway);//带外管理网关
        $('#sxsj').val(getTime(g_onlinedate));//上线时间
        $('#yjwblx').val(g_hardwarewbtype);//硬件维保类型
        $('#yjwbjssj').val(getTime(g_hardwarewbenddate));//硬件维保服务结束日期
        $('#yjwbfwcs').val(g_hardwarewbServiceprovider);//硬件维保服务厂商
        $('#yjwbzt').val(g_hardwarewbstate);//硬件维保状态
        $('#yjwbfwjb').val(g_hardwarewblevel);//硬件维保服务级别
        $('#yjwbfzr').val(g_hardwareguardian);//硬件维保负责人
//交换机
        $('#jhjlx').val(j_switchtype);//交换机类型
        $('#sfscjhj').val(j_lthreeayerexchange);//是否三层交换机
        $('#pzbjccsl').val(j_configurecardslotnumb);//配置板卡插槽数量
        $('#yybkccsl').val(j_usecardslotnumb);//已用板卡插槽数量
        $('#pzwzgksl').val(j_configuregigabitportnumb);//配置万兆光口数量
        $('#pzwzgmksl').val(j_configurenumbodules);//配置万兆光模块数量
        $('#kywzgdksl').val(j_portnumbavailable);//可用万兆光端口数量
        $('#pzqzgksl').val(j_configureqzlightnumb);//配置千兆光口数量
        $('#pzqzgmksl').val(j_configureqzmodularnumb);//配置千兆光模块数量
        $('#kyqzgdksl').val(j_qzopticalportnum);//可用千兆光端口数量
        $('#pzdksl').val(j_configureportnumb);//配置电口数量
        $('#dksllx').val(j_porttyperate);//电口速率类型
        $('#kydksl').val(j_availableportsnumb);//可用端口数量
        $('#lyxy').val(j_routingprotocol);//路由协议
        $('#bbdk').val(j_backplane);//背板带宽
        $('#bzfl').val(j_packetrate);//包转发率
        $('#sfstproot').val(j_stproot);//是否STPRoot
        $('#stpxylx').val(j_stpprotoctype);//STP协议类型
        $('#sfqdstp').val(j_startstp);//是否启动STP
        $('#sfkdj').val(j_stack);//是否可堆叠

        /**
         * 服务器
         */
        $('#fuwuqiModel').modal();
        $("#fwqdiv").css("display","none");
        $("#qlfoot2").css("display","none");
        $("#qlfoot1").css("display","none");
        $("#qlfoot3").css("display","none");
        $("#qlfoot4").css("display","none");
        /**
         * 存储
         */
        $("#ccdiv").css("display","none"); //存储div 隐藏
        $("#cunchusave").css("display","none");  //存储表头
        $("#cunchuupdaee").css("display","none"); //存储修改表头
        $("#ccxiugai").css("display","none");
        $("#ccsave").css("display","none"); //存储div 隐藏
        /**
         * San
         */
        $("#sandiv").css("display","none"); //存储div 隐藏
        $("#sanad").css("display","none");  //存储表头
        $("#sup").css("display","none"); //存储修改表头
        $("#sansave").css("display","none");
        $("#sanup").css("display","none"); //存储div 隐藏
        /**
         * 交换机
         */
        $("#jhjdiv1").css("display","block"); //存储div 隐藏
        $("#jhjfoot2").css("display","block");
        $("#jhjfoot1").css("display","none");
        $("#jhjfoot4").css("display","block");
        $("#jhjfoot3").css("display","none");
        /**
         * 安全设备
         */
        $("#Aq1").css("display","none" );
        $("#Aq2").css("display","none");
        $("#Aq4").css("display","none");
        $("#Aq3").css("display","none");
        $("#aq1div").css("display","none"); //存储div 隐藏
        /**
         * 审计设备
         */
        $("#Sj1").css("display","none" );
        $("#Sj3").css("display","none");
        $("#Sj4").css("display","none");
        $("#Sj2").css("display","none");
        $("#sj1div").css("display","none"); //存储div 隐藏
    }else if(g_resourcetype=="SAN交换机"){
        if (g_assetstatus=="4" || g_assetstatus=="5"){
            $("#nzbq").css("display","none");
        }else {
            $("#nzbq").css("display","block");
        }

        $('#sanId').val(id);//id
        $('#zhuangtai').val(g_type);//状态
        $('#yongtu').val(g_purpose);//用途
        $('#gsqy').val(g_ascriptionregion);//归属区域
        $('#gsdd').val(g_ascriptionplace);//归属地点
        $('#gsfj').val(g_ascriptionroom);//归属房间
        $('#azwz').val(g_installposition);//安装位置
        $('#szjg').val(g_cabinet);//所在机柜
        $('#zcbqh').val(g_assettagnumber);//资产标签号
        $('#zczt').val(g_assetstatus);//资产状态
        $('#zcgly').val(g_assetmanager);//资产管理员
        $('#zcbz').val(g_assetmemo);//资产备注
        $('#sfwkryj').val(g_isthekryj);//是否为扩容元件
        $('#eddygl').val(g_powersupply);//额定电源功率(KW)
        $('#zhonglian').val(g_weight);//重量
        $('#szus').val(g_unumber);//所占U数
        $('#sjfs').val(g_shelvingmode);//上架方式
        $('#sccs').val(g_manufacturer);//生产厂商
        $('#xinghao').val(g_model);//型号
        $('#xuliehao').val(g_serialnumber);//序列号
        if (g_networkregion=="RegionOne"){
            $('#wlqy').val(2);//网络区域
        }else if (g_networkregion=="RegionTwo"){
            $('#wlqy').val(1);//网络区域
        }
        $('#dwglip').val(g_bandmanageip);//带外管理IP、
        $('#dwglzwym').val(g_bandmanagesmask);//带外管理子网掩码
        $('#dwglwg').val(g_bandmanagegateway);//带外管理网关
        $('#sxsj').val(getTime(g_onlinedate));//上线时间
        $('#yjwblx').val(g_hardwarewbtype);//硬件维保类型
        $('#yjwbjssj').val(getTime(g_hardwarewbenddate));//硬件维保服务结束日期
        $('#yjwbfwcs').val(g_hardwarewbServiceprovider);//硬件维保服务厂商
        $('#yjwbzt').val(g_hardwarewbstate);//硬件维保状态
        $('#yjwbfwjb').val(g_hardwarewblevel);//硬件维保服务级别
        $('#yjwbfzr').val(g_hardwareguardian);//硬件维保负责人

        $('#pzdks').val(s_configureportnumber);//配置端口数
        $('#pzfcmks').val(s_configurefcmodulenumber);//配置FC模块数
        $('#dksl').val(s_portrate);//端口速率
        $('#sykydks').val(s_surplusportnumb);//剩余可用端口数
        $('#pzbkccs').val(s_cardslotnumb);//配置板卡插槽数
        $('#pzbks').val(s_cardnumb);//配置板卡数
        $('#fuwuqiModel').modal();


        /**
         * 存储
         */
        $("#ccdiv").css("display","none"); //存储div 隐藏
        $("#cunchusave").css("display","none");  //存储表头
        $("#cunchuupdaee").css("display","none"); //存储修改表头
        $("#ccxiugai").css("display","none");
        $("#ccsave").css("display","none"); //存储div 隐藏
        /**
         * 服务器
         */

        $("#fwqdiv").css("display","none");//服务器英藏
        $("#qlfoot1").css("display","none");
        $("#qlfoot2").css("display","none");
        $("#qlfoot4").css("display","none");
        $("#qlfoot3").css("display","none" );
        /**
         * San
         */
        $("#sandiv").css("display","block"); //存储div 隐藏
        $("#sup").css("display","block");
        $("#sanad").css("display","none");
        $("#sanup").css("display","block");
        $("#sansave").css("display","none");
        /**
         * 交换机
         */
        $("#jhjdiv1").css("display","none"); //存储div 隐藏
        $("#jhjfoot3").css("display","none");  //存储表头
        $("#jhjfoot4").css("display","none"); //存储修改表头
        $("#jhjfoot1").css("display","none");
        $("#jhjfoot2").css("display","none"); //存储div 隐藏
        /**
         * 安全设备
         */
        $("#Aq1").css("display","none" );
        $("#Aq2").css("display","none");
        $("#Aq4").css("display","none");
        $("#Aq3").css("display","none");
        $("#aq1div").css("display","none"); //存储div 隐藏
        /**
         * 审计设备
         */
        $("#Sj1").css("display","none" );
        $("#Sj3").css("display","none");
        $("#Sj4").css("display","none");
        $("#Sj2").css("display","none");
        $("#sj1div").css("display","none"); //存储div 隐藏
    }else if(g_resourcetype=="安全设备"){
        if (g_assetstatus=="4" || g_assetstatus=="5"){
            $("#nzbq").css("display","none");
        }else {
            $("#nzbq").css("display","block");
        }

        $('#Aqid').val(id);//编号

        $('#zhuangtai').val(g_type);//状态
        $('#yongtu').val(g_purpose);//用途
        $('#gsqy').val(g_ascriptionregion);//归属区域
        $('#gsdd').val(g_ascriptionplace);//归属地点
        $('#gsfj').val(g_ascriptionroom);//归属房间
        $('#azwz').val(g_installposition);//安装位置
        $('#szjg').val(g_cabinet);//所在机柜
        $('#zcbqh').val(g_assettagnumber);//资产标签号
        $('#zczt').val(g_assetstatus);//资产状态
        $('#zcgly').val(g_assetmanager);//资产管理员
        $('#azcbz').val(g_assetmemo);//资产备注
        $('#sfwkryj').val(g_isthekryj);//是否为扩容元件
        $('#eddygl').val(g_powersupply);//额定电源功率(KW)
        $('#zhonglian').val(g_weight);//重量
        $('#szus').val(g_unumber);//所占U数
        $('#sjfs').val(g_shelvingmode);//上架方式
        $('#sccs').val(g_manufacturer);//生产厂商
        $('#xinghao').val(g_model);//型号
        $('#xuliehao').val(g_serialnumber);//序列号
        // $('#awlqy').val(g_networkregion);//网络区域
        if (g_networkregion=="RegionOne"){
            $('#wlqy').val(2);//网络区域
        }else if (g_networkregion=="RegionTwo"){
            $('#wlqy').val(1);//网络区域
        }
        $('#dwglip').val(g_bandmanageip);//带外管理IP、
        $('#dwglzwym').val(g_bandmanagesmask);//带外管理子网掩码
        $('#dwglwg').val(g_bandmanagegateway);//带外管理网关
        $('#sxsj').val(getTime(g_onlinedate));//上线时间
        $('#yjwblx').val(g_hardwarewbtype);//硬件维保类型
        $('#yjwbjssj').val(getTime(g_hardwarewbenddate));//硬件维保服务结束日期
        $('#yjwbfwcs').val(g_hardwarewbServiceprovider);//硬件维保服务厂商
        $('#yjwbzt').val(g_hardwarewbstate);//硬件维保状态
        $('#yjwbfwjb').val(g_hardwarewblevel);//硬件维保服务级别
        $('#yjwbfzr').val(g_hardwareguardian);//硬件维保负责人
//安全设备
        $('#aqsblx').val(a_devicetype);//安全设备类型
        $('#sfzysb').val(a_specialequipment);//是否专用设备
        $('#glksl').val(a_managementquantity);//管理口数量
        $('#gksllx').val(a_lightratetype);//光口速率类型
        $('#pzgksl').val(a_configuregknumb);//配置光口数量
        $('#pzgmksl').val(a_configuremodular);//配置光模块数量
        $('#yygksl').val(a_havelightquantity);//已用光口数量
        $('#adksllx').val(a_porttyperate);//电口速率类型
        $('#apzdksl').val(a_portnumber);//配置电口数量
        $('#yydksl').val(a_yyportnumber);//已用电口数量
        $('#sfzcbypass').val(a_supportbypass);//是否支持by-pass
        $('#ttl').val(a_throughput);//吞吐量
        $('#zdbfs').val(a_concurrent);//最大并发数
        /**
         * 服务器
         */

        $('#fuwuqiModel').modal();
        $("#fwqdiv").css("display","none");
        $("#qlfoot2").css("display","none");
        $("#qlfoot1").css("display","none");
        $("#qlfoot3").css("display","none");
        $("#qlfoot4").css("display","none");

        /**
         * 存储
         */
        $("#ccdiv").css("display","none"); //存储div 隐藏
        $("#cunchusave").css("display","none");  //存储表头
        $("#cunchuupdaee").css("display","none"); //存储修改表头
        $("#ccxiugai").css("display","none");
        $("#ccsave").css("display","none"); //存储div 隐藏
        /**
         * San
         */
        $("#sandiv").css("display","none"); //存储div 隐藏
        $("#sanad").css("display","none");  //存储表头
        $("#sup").css("display","none"); //存储修改表头
        $("#sansave").css("display","none");
        $("#sanup").css("display","none"); //存储div 隐藏

        /**
         * 交换机
         */
        $("#jhjdiv1").css("display","none"); //存储div 隐藏
        $("#jhjfoot2").css("display","none");
        $("#jhjfoot1").css("display","none");
        $("#jhjfoot4").css("display","none");
        $("#jhjfoot3").css("display","none");
        /**
         * 安全设备
         */

        $("#Aq1").css("display","none");
        $("#Aq2").css("display","block");
        $("#Aq4").css("display","block");
        $("#Aq3").css("display","none");
        $("#aq1div").css("display","block"); //存储div 隐藏

        /**
         * 审计设备
         */
        $("#Sj1").css("display","none" );
        $("#Sj3").css("display","none");
        $("#Sj4").css("display","none");
        $("#Sj2").css("display","none");
        $("#sj1div").css("display","none"); //存储div 隐藏
    }else if(g_resourcetype=="审计设备"){
        if (g_assetstatus=="4" || g_assetstatus=="5"){
            $("#nzbq").css("display","none");
        }else {
            $("#nzbq").css("display","block");
        }
        $('#SjId').val(id);
        $('#zhuangtai').val(g_type);//状态
        $('#yongtu').val(g_purpose);//用途
        $('#gsqy').val(g_ascriptionregion);//归属区域
        $('#gsdd').val(g_ascriptionplace);//归属地点
        $('#gsfj').val(g_ascriptionroom);//归属房间
        $('#azwz').val(g_installposition);//安装位置
        $('#szjg').val(g_cabinet);//所在机柜
        $('#zcbqh').val(g_assettagnumber);//资产标签号
        $('#zczt').val(g_assetstatus);//资产状态
        $('#zcgly').val(g_assetmanager);//资产管理员
        $('#zcbz').val(g_assetmemo);//资产备注
        $('#sfwkryj').val(g_isthekryj);//是否为扩容元件
        $('#eddygl').val(g_powersupply);//额定电源功率(KW)
        $('#zhonglian').val(g_weight);//重量
        $('#szus').val(g_unumber);//所占U数
        $('#sjfs').val(g_shelvingmode);//上架方式
        $('#sccs').val(g_manufacturer);//生产厂商
        $('#xinghao').val(g_model);//型号
        $('#xuliehao').val(g_serialnumber);//序列号
        if (g_networkregion=="RegionOne"){
            $('#wlqy').val(2);//网络区域
        }else if (g_networkregion=="RegionTwo"){
            $('#wlqy').val(1);//网络区域
        }
        $('#dwglip').val(g_bandmanageip);//带外管理IP、
        $('#dwglzwym').val(g_bandmanagesmask);//带外管理子网掩码
        $('#dwglwg').val(g_bandmanagegateway);//带外管理网关
        $('#sxsj').val(getTime(g_onlinedate));//上线时间
        $('#yjwblx').val(g_hardwarewbtype);//硬件维保类型
        $('#yjwbjssj').val(getTime(g_hardwarewbenddate));//硬件维保服务结束日期
        $('#yjwbfwcs').val(g_hardwarewbServiceprovider);//硬件维保服务厂商
        $('#yjwbzt').val(g_hardwarewbstate);//硬件维保状态
        $('#yjwbfwjb').val(g_hardwarewblevel);//硬件维保服务级别
        $('#yjwbfzr').val(g_hardwareguardian);//硬件维保负责人
        $('#sjsblx').val(sj_sjdevicetype);//审计设备类型
        $('#sjglksl').val(sj_managementport);//管理口数量
        $('#sjgksllx').val(sj_gklightratetypes);//光口速率类型
        $('#sjpzgksl').val(sj_sjportconfiguration);//配置光口数量
        $('#sjpzgmbsl').val(sj_sjconfiguremodules);//配置光模块数量
        $('#sjyygksl').val(sj_sjportnumber);//已用光口数量
        $('#sjdksllx').val(sj_sjporttyperate);//电口速率类型
        $('#sjpzdksl').val(sj_sjconfigureportnumb);//配置电口数量
        $('#sjyydksl').val(sj_sjportnumb);//已用电口数量
        $('#sjncdx').val(sj_sjmemorysize);//内存大小
        $('#sjmmsjs').val(sj_sjauditdate);//每秒审计数据量

        $('#fuwuqiModel').modal();
        /**
         * 存储
         */
        $("#ccdiv").css("display","none"); //存储div 隐藏
        $("#cunchusave").css("display","none");  //存储表头
        $("#cunchuupdaee").css("display","none"); //存储修改表头
        $("#ccxiugai").css("display","none");
        $("#ccsave").css("display","none"); //存储div 隐藏
        /**
         * 服务器
         */

        $("#fwqdiv").css("display","none");//服务器英藏
        $("#qlfoot1").css("display","none");
        $("#qlfoot2").css("display","none");
        $("#qlfoot4").css("display","none");
        $("#qlfoot3").css("display","none" );
        /**
         * San
         */
        $("#sandiv").css("display","none"); //存储div 隐藏
        $("#sanad").css("display","none");  //存储表头
        $("#sup").css("display","none"); //存储修改表头
        $("#sansave").css("display","none");
        $("#sanup").css("display","none"); //存储div 隐藏
        /**
         * 交换机
         */
        $("#jhjdiv1").css("display","none"); //存储div 隐藏
        $("#jhjfoot3").css("display","none");  //存储表头
        $("#jhjfoot4").css("display","none"); //存储修改表头
        $("#jhjfoot1").css("display","none");
        $("#jhjfoot2").css("display","none"); //存储div 隐藏
        /**
         * 安全设备
         */
        $("#Aq1").css("display","none" );
        $("#Aq2").css("display","none");
        $("#Aq4").css("display","none");
        $("#Aq3").css("display","none");
        $("#aq1div").css("display","none"); //存储div 隐藏
        /**
         * 审计设备
         */
        $("#Sj2").css("display","block");
        $("#Sj1").css("display","none");
        $("#Sj3").css("display","none");
        $("#Sj4").css("display","block");
        $("#sj1div").css("display","block"); //存储div 隐藏

    }else if (g_resourcetype=="存储"){
        if (g_assetstatus=="4" || g_assetstatus=="5"){
            $("#nzbq").css("display","none");
        }else {
            $("#nzbq").css("display","block");
        }

        $('#cunchuId').val(id);//id
        $('#zhuangtai').val(g_type);//状态
        $('#yongtu').val(g_purpose);//用途
        $('#gsqy').val(g_ascriptionregion);//归属区域
        $('#gsdd').val(g_ascriptionplace);//归属地点
        $('#gsfj').val(g_ascriptionroom);//归属房间
        $('#azwz').val(g_installposition);//安装位置
        $('#szjg').val(g_cabinet);//所在机柜
        $('#zcbqh').val(g_assettagnumber);//资产标签号
        $('#zczt').val(g_assetstatus);//资产状态
        $('#zcgly').val(g_assetmanager);//资产管理员
        $('#zcbz').val(g_assetmemo);//资产备注
        $('#sfwkryj').val(g_isthekryj);//是否为扩容元件
        $('#eddygl').val(g_powersupply);//额定电源功率(KW)
        $('#zhonglian').val(g_weight);//重量
        $('#szus').val(g_unumber);//所占U数
        $('#sjfs').val(g_shelvingmode);//上架方式
        $('#sccs').val(g_manufacturer);//生产厂商
        $('#xinghao').val(g_model);//型号
        $('#xuliehao').val(g_serialnumber);//序列号
        // $('#cwlqy').val(g_networkregion);//网络区域
        if (g_networkregion=="RegionOne"){
            $('#wlqy').val(2);//网络区域
        }else if (g_networkregion=="RegionTwo"){
            $('#wlqy').val(1);//网络区域
        }
        $('#dwglip').val(g_bandmanageip);//带外管理IP、
        $('#dwglzwym').val(g_bandmanagesmask);//带外管理子网掩码
        $('#dwglwg').val(g_bandmanagegateway);//带外管理网关
        $('#sxsj').val(getTime(g_onlinedate));//上线时间
        $('#yjwblx').val(g_hardwarewbtype);//硬件维保类型
        $('#yjwbjssj').val(getTime(g_hardwarewbenddate));//硬件维保服务结束日期
        $('#yjwbfwcs').val(g_hardwarewbServiceprovider);//硬件维保服务厂商
        $('#yjwbzt').val(g_hardwarewbstate);//硬件维保状态
        $('#yjwbfwjb').val(g_hardwarewblevel);//硬件维保服务级别
        $('#yjwbfzr').val(g_hardwareguardian);//硬件维保负责人
//存储
        $('#pzcachedx').val(c_configurecachesize);//配置CACHE大小(GB)
        $('#pzzjdksl').val(c_configureportnum);//配置主机端口数量
        $('#zjdksl').val(c_hostportrate);//主机端口速率
        $('#wlcplx').val(c_physicaldisktype);//物理磁盘类型/数量
        $('#pzzrl').val(c_configurecapacity);//配置总容量(TB)
        $('#raidfs').val(c_raidmode);//RAID方式
        $('#raidhsjkyrl').val(c_raidactualcapacity);//RAID后实际可用容量(TB)
        $('#lundx').val(c_lunsize);//LUN大小(GB)
        $('#kylunsl').val(c_lunactualnumber);//可用LUN数量
        $('#yfplunsl').val(c_alreadyallotlunnum);//已分配LUN数量
        $('#wfplunsl').val(c_notadyallotlunnum);//未分配LUN数量
        $('#wfprl').val(c_notallotcapacity);//未分配容量(GB)
        $('#yfprl').val(c_alreadyallotcapacity);//已分配容量
        $('#fuwuqiModel').modal();
        /**
         * 存储
         */
        $("#ccdiv").css("display","block"); //存储div 隐藏
        $("#cunchusave").css("display","none");  //存储表头
        $("#cunchuupdaee").css("display","block"); //存储修改表头
        $("#ccxiugai").css("display","block");
        $("#ccsave").css("display","none"); //存储div 隐藏
        /**
         * 服务器
         */

        $("#fwqdiv").css("display","none");//服务器英藏
        $("#qlfoot1").css("display","none");
        $("#qlfoot2").css("display","none");
        $("#qlfoot4").css("display","none");
        $("#qlfoot3").css("display","none" );
        /**
         * San
         */
        $("#sandiv").css("display","none"); //存储div 隐藏
        $("#sanad").css("display","none");  //存储表头
        $("#sup").css("display","none"); //存储修改表头
        $("#sansave").css("display","none");
        $("#sanup").css("display","none"); //存储div 隐藏
        /**
         * 交换机
         */
        $("#jhjdiv1").css("display","none"); //存储div 隐藏
        $("#jhjfoot3").css("display","none");  //存储表头
        $("#jhjfoot4").css("display","none"); //存储修改表头
        $("#jhjfoot1").css("display","none");
        $("#jhjfoot2").css("display","none"); //存储div 隐藏
        /**
         * 安全设备
         */
        $("#Aq1").css("display","none" );
        $("#Aq2").css("display","none");
        $("#Aq4").css("display","none");
        $("#Aq3").css("display","none");
        $("#aq1div").css("display","none"); //存储div 隐藏
        /**
         * 审计设备
         */
        $("#Sj1").css("display","none" );
        $("#Sj3").css("display","none");
        $("#Sj4").css("display","none");
        $("#Sj2").css("display","none");
        $("#sj1div").css("display","none"); //存储div 隐藏
    }
}
function updateSj(){
    var  id = $("#SjId ").val();
    var  zhuangtai=$("#zhuangtai ").val();
    var  yongtu=$("#yongtu ").val();
    var  gsqy=$("#gsqy ").val();
    var  gsdd=$("#gsdd ").val();
    var  gsfj=$("#gsfj ").val();
    var  azwz=$("#azwz ").val();
    var  szjg=$("#szjg ").val();
    var  zcbqh=$("#zcbqh ").val();
    var  zczt=$("#zczt ").val();
    var  zcgly=$("#zcgly ").val();
    var  zcbz=$("#zcbz ").val();
    var  sfwkryj =$("#sfwkryj ").val();
    var  eddygl=$("#eddygl ").val();
    var  zhonglian=$("#zhonglian ").val();
    var  szus=$("#szus ").val();
    var  sjfs=$("#sjfs ").val();
    var  sccs=$("#sccs ").val();
    var  xinghao=$("#xinghao ").val();
    var  xuliehao=$("#xuliehao ").val();
    var  wlqy=$("#wlqy ").val();
    var  dwglip=$("#dwglip ").val();
    var  dwglzwym=$("#dwglzwym ").val();
    var  dwglwg=$("#dwglwg ").val();
    var  sxsj =$("#sxsj ").val();
    var  yjwblx =$("#yjwblx ").val();
    var  yjwbjssj=$("#yjwbjssj ").val();
    var  yjwbfwcs=$("#yjwbfwcs ").val();
    var  yjwbzt=$("#yjwbzt ").val();
    var  yjwbfwjb=$("#yjwbfwjb ").val();
    var  yjwbfzr=$("#yjwbfzr ").val();
//审计设备
    var  sjsblx =$("#sjsblx ").val();//审计设备类型
    var  sjglksl=$("#sjglksl ").val();//管理口数量
    var  sjgksllx=$("#sjgksllx ").val();//光口速率类型
    var  sjpzgksl=$("#sjpzgksl ").val();//配置光口数量
    var  sjpzgmbsl=$("#sjpzgmbsl ").val();//配置光模块数量
    var  sjyygksl =$("#sjyygksl ").val();//已用光口数量
    var  sjdksllx=$("#sjdksllx ").val();//电口速率类型
    var  sjpzdksl=$("#sjpzdksl ").val();//配置电口数量
    var  sjyydksl=$("#sjyydksl ").val();//已用电口数量
    var  sjncdx=$("#sjncdx ").val();//内存大小
    var  sjmmsjs=$("#sjmmsjs ").val();//每秒审计数据量
    if ($.isEmptyObject(xuliehao)||$.trim(xuliehao) == "") {
        Showbo.Msg.alert('请输入序列号！');
        return false;
    }else if ($.isEmptyObject(yongtu)) {
        Showbo.Msg.alert('请输入用途！');
        return false;
    }else if ($.isEmptyObject(gsqy)) {
        Showbo.Msg.alert('请输入归属地域！');
        return false;
    } else if ($.isEmptyObject(gsdd)) {
        Showbo.Msg.alert('请输入归属地点！');
        return false;
    } else if ($.isEmptyObject(gsfj)) {
        Showbo.Msg.alert('请输入归属房间！');
        return false;
    }else if ($.isEmptyObject(azwz)) {
        Showbo.Msg.alert('请输入安装位置！');
        return false;
    }else if ($.isEmptyObject(szjg)) {
        Showbo.Msg.alert('请输入所在机柜！');
        return false;
    } else if ($.isEmptyObject(szus)) {
        Showbo.Msg.alert('请输入所占U数！');
        return false;
    }else if (szus=="0"){
        Showbo.Msg.alert('所占U数不可为0 ！');
        $("#szus ").val("");
        return false;
    } else if ($.isEmptyObject(sccs)) {
        Showbo.Msg.alert('请输入生产厂商！');
        return false;
    }else if ($.isEmptyObject(xinghao)) {
        Showbo.Msg.alert('请输入型号！');
        return false;
    }else if(!isIP(dwglip)){ //带外管理ip
        $('#dwglip').val("");
        return false;
    } else if(!iszIP(dwglzwym)){ //带外管理子网掩码
        $('#dwglzwym').val("");
        return false;
    }else if ($.isEmptyObject(sxsj)) {
        Showbo.Msg.alert('请选择上线日期！');
        return false;
    }else if ($.isEmptyObject(yjwbjssj)) {
        Showbo.Msg.alert('请选择硬件维保服务结束日期！');
        return false;
    } else if ($.isEmptyObject(yjwbfwcs)) {
        Showbo.Msg.alert('请输入硬件维保服务厂商！');
        return false;
    } else if ($.isEmptyObject(yjwbfzr)) {
        Showbo.Msg.alert('请输入硬件维护负责人！');
        return false;
    } else if ($.isEmptyObject(eddygl)) {
        Showbo.Msg.alert('请输入额定电源功率(KW)！');
        return false;
    }  else if ($.isEmptyObject(zcgly)) {
        Showbo.Msg.alert('请输入资产管理员！');
        return false;
    } else if ($.isEmptyObject(zhonglian)) {
        Showbo.Msg.alert('请输入重量！');
        return false;
    }
    else if ($.isEmptyObject(sjsblx)||$.trim(sjsblx) == "") {
        Showbo.Msg.alert('请选择审计设备类型！');
        return false;
    }else if ($.isEmptyObject(sjglksl)||$.trim(sjglksl) == "") {
        Showbo.Msg.alert('请输入管理口数量！');
        return false;
    }else if ($.isEmptyObject(sjpzgksl)||$.trim(sjpzgksl) == "") {
        Showbo.Msg.alert('请输入配置光口数量！');
        return false;
    } else if ($.isEmptyObject(sjpzgmbsl)||$.trim(sjpzgmbsl) == "") {
        Showbo.Msg.alert('请输入配置光模块数量！');
        return false;
    }else if ($.isEmptyObject(sjyygksl)||$.trim(sjyygksl) == "") {
        Showbo.Msg.alert('请输入已用光口数量！');
        return false;
    }else if ($.isEmptyObject(sjpzdksl)||$.trim(sjpzdksl) == "") {
        Showbo.Msg.alert('请输入配置电口数量！');
        return false;
    }else if ($.isEmptyObject(sjyydksl)||$.trim(sjyydksl) == "") {
        Showbo.Msg.alert('请输入已用电口数量！');
        return false;
    }else if ($.isEmptyObject(sjncdx)||$.trim(sjncdx) == "") {
        Showbo.Msg.alert('请输入内存大小(G)！');
        return false;
    }else if ($.isEmptyObject(sjmmsjs)||$.trim(sjmmsjs) == "") {
        Showbo.Msg.alert('请输入每秒审计数据量！');
        return false;
    } else if ($.isEmptyObject(sjgksllx)||$.trim(sjgksllx) == "") {
        Showbo.Msg.alert('请选择光口速率类型！');
        return false;
    }else if ($.isEmptyObject(sjdksllx)||$.trim(sjdksllx) == "") {
        Showbo.Msg.alert('请选择电口速率类型！');
        return false;
    }else if ($('#zczt').val()=="1" || $('#zczt').val()=="2"|| $('#zczt').val()=="3"|| $('#zczt').val()=="6"){
        if ($.isEmptyObject(zcbqh)) {
            Showbo.Msg.alert('请输入资产标签号！');
            return false;
        }
    }
    $.ajax({
        async: false, // 采用同步方式
        type:"POST",
        url :"../cmdb/updateSj",
        data : {"id":id,"zhuangtai":zhuangtai,"yongtu":yongtu,
            "gsqy":gsqy, "gsdd":gsdd,"gsfj":gsfj,"azwz":azwz,"szjg":szjg,"zcbqh":zcbqh,"zczt":zczt,"zcgly":zcgly,
            "zcbz":zcbz,"sfwkryj":sfwkryj,"eddygl":eddygl,"zhonglian":zhonglian,"szus":szus,
            "sjfs":sjfs,"sccs":sccs,"xinghao":xinghao,"xuliehao":xuliehao,
            "wlqy":wlqy,"dwglip":dwglip,"dwglzwym":dwglzwym,"dwglwg":dwglwg,"sxsj":sxsj,
            "yjwblx":yjwblx,"yjwbjssj":yjwbjssj,"yjwbfwcs":yjwbfwcs,"yjwbzt":yjwbzt,
            "yjwbfwjb":yjwbfwjb,"yjwbfzr":yjwbfzr,
//审计
            "sjsblx":sjsblx,"sjglksl":sjglksl,"sjgksllx":sjgksllx,"sjpzgksl":sjpzgksl,
            "sjpzgmbsl":sjpzgmbsl,"sjyygksl":sjpzgmbsl,"sjdksllx":sjdksllx,
            "sjpzdksl":sjpzdksl,"sjyydksl":sjyydksl,"sjncdx":sjncdx,"sjmmsjs":sjmmsjs
        },
        dataType: "text",
        success : function(data) {
            if (data =="you"){
                Showbo.Msg.alert('此序列号已经存在！');
            } else if(data =="ok") {
                Showbo.Msg.alert('更新成功');

                $('#teacher_table').bootstrapTable('refreshOptions', {pageNumber: 1, pagesize: 8});
                $('#fuwuqiModel').modal('hide');
            }else {
                Showbo.Msg.alert('更新失败');
            }
        }})

}
function updateAq(){

    var  id = $("#Aqid").val();
    var  zhuangtai=$("#zhuangtai ").val();
    var  yongtu=$("#yongtu ").val();
    var  gsqy=$("#gsqy ").val();
    var  gsdd=$("#gsdd ").val();
    var  gsfj=$("#gsfj ").val();
    var  azwz=$("#azwz ").val();
    var  szjg=$("#szjg ").val();
    var  zcbqh=$("#zcbqh ").val();
    var  zczt=$("#zczt ").val();
    var  zcgly=$("#zcgly ").val();
    var  zcbz=$("#zcbz ").val();
    var  sfwkryj =$("#sfwkryj ").val();
    var  eddygl=$("#eddygl ").val();
    var  zhonglian=$("#zhonglian ").val();
    var  szus=$("#szus ").val();
    var  sjfs=$("#sjfs ").val();
    var  sccs=$("#sccs ").val();
    var  xinghao=$("#xinghao ").val();
    var  xuliehao=$("#xuliehao ").val();
    var  wlqy=$("#wlqy ").val();
    var  dwglip=$("#dwglip ").val();
    var  dwglzwym=$("#dwglzwym ").val();
    var  dwglwg=$("#dwglwg ").val();
    var   sxsj =$("#sxsj ").val();
    var   yjwblx =$("#yjwblx ").val();
    var   yjwbjssj=$("#yjwbjssj ").val();
    var   yjwbfwcs=$("#yjwbfwcs ").val();
    var   yjwbzt=$("#yjwbzt ").val();
    var   yjwbfwjb=$("#yjwbfwjb ").val();
    var   yjwbfzr=$("#yjwbfzr ").val();
//安全设备
    var   aqsblx=$("#aqsblx ").val();//安全设备类型
    var   sfzysb =$("#sfzysb ").val();//是否专用设备
    var   glksl =$("#glksl ").val();//管理口数量
    var   gksllx =$("#gksllx ").val();//光口速率类型
    var   pzgksl=$("#pzgksl ").val();//配置光口数量
    var   pzgmksl=$("#pzgmksl ").val();//配置光模块数量
    var   yygksl =$("#yygksl ").val();//已用光口数量
    var   adksllx=$("#adksllx ").val();//电口速率类型
    var   apzdksl=$("#apzdksl ").val();//配置电口数量
    var  yydksl =$("#yydksl ").val();//已用电口数量
    var  sfzcbypass =$("#sfzcbypass ").val();//是否支持by-pass
    var   ttl=$("#ttl ").val();//吞吐量
    var   zdbfs=$("#zdbfs ").val();//最大并发数


    if ($.isEmptyObject(xuliehao)||$.trim(xuliehao) == "") {
        Showbo.Msg.alert('请输入序列号！');
        return false;
    }else if ($.isEmptyObject(yongtu)) {
        Showbo.Msg.alert('请输入用途！');
        return false;
    }else if ($.isEmptyObject(gsqy)) {
        Showbo.Msg.alert('请输入归属地域！');
        return false;
    } else if ($.isEmptyObject(gsdd)) {
        Showbo.Msg.alert('请输入归属地点！');
        return false;
    } else if ($.isEmptyObject(gsfj)) {
        Showbo.Msg.alert('请输入归属房间！');
        return false;
    }else if ($.isEmptyObject(azwz)) {
        Showbo.Msg.alert('请输入安装位置！');
        return false;
    }else if ($.isEmptyObject(szjg)) {
        Showbo.Msg.alert('请输入所在机柜！');
        return false;
    } else if ($.isEmptyObject(szus)) {
        Showbo.Msg.alert('请输入所占U数！');
        return false;
    }else if (szus=="0"){
        Showbo.Msg.alert('所占U数不可为0 ！');
        $("#szus ").val("");
        return false;
    } else if ($.isEmptyObject(sccs)) {
        Showbo.Msg.alert('请输入生产厂商！');
        return false;
    }else if ($.isEmptyObject(xinghao)) {
        Showbo.Msg.alert('请输入型号！');
        return false;
    }else if(!isIP(dwglip)){ //带外管理ip
        $('#dwglip').val("");
        return false;
    } else if(!iszIP(dwglzwym)){ //带外管理子网掩码
        $('#dwglzwym').val("");
        return false;
    }else if ($.isEmptyObject(sxsj)) {
        Showbo.Msg.alert('请选择上线日期！');
        return false;
    }else if ($.isEmptyObject(yjwbjssj)) {
        Showbo.Msg.alert('请选择硬件维保服务结束日期！');
        return false;
    } else if ($.isEmptyObject(yjwbfwcs)) {
        Showbo.Msg.alert('请输入硬件维保服务厂商！');
        return false;
    } else if ($.isEmptyObject(yjwbfzr)) {
        Showbo.Msg.alert('请输入硬件维护负责人！');
        return false;
    } else if ($.isEmptyObject(eddygl)) {
        Showbo.Msg.alert('请输入额定电源功率(KW)！');
        return false;
    }  else if ($.isEmptyObject(zcgly)) {
        Showbo.Msg.alert('请输入资产管理员！');
        return false;
    } else if ($.isEmptyObject(zhonglian)) {
        Showbo.Msg.alert('请输入重量！');
        return false;
    }
    else if ($.isEmptyObject(aqsblx)||$.trim(aqsblx) == "") {
        Showbo.Msg.alert('请选择安全设备类型！');
        return false;
    }  else if ($.isEmptyObject(sfzysb)||$.trim(sfzysb) == "") {
        Showbo.Msg.alert('请选择是否专用设备！');
        return false;
    } else if ($.isEmptyObject(glksl)||$.trim(glksl) == "") {
        Showbo.Msg.alert('请输入管理口数量！');
        return false;
    } else if ($.isEmptyObject(gksllx)||$.trim(gksllx) == "") {
        Showbo.Msg.alert('请选择光口速率类型！');
        return false;
    } else if ($.isEmptyObject(pzgksl)||$.trim(pzgksl) == "") {
        Showbo.Msg.alert('请输入配置光口数量！');
        return false;
    }else if ($.isEmptyObject(pzgmksl)||$.trim(pzgmksl) == "") {
        Showbo.Msg.alert('请输入配置光模块数量！');
        return false;
    }else if ($.isEmptyObject(yydksl)||$.trim(yydksl) == "") {
        Showbo.Msg.alert('请输入已用电口数量！');
        return false;
    }else if ($.isEmptyObject(apzdksl)||$.trim(apzdksl) == "") {
        Showbo.Msg.alert('请输入配置电口数量！');
        return false;
    } else if ($.isEmptyObject(yygksl)||$.trim(yygksl) == "") {
        Showbo.Msg.alert('请输入已用光口数量！');
        return false;
    }else if ($.isEmptyObject(ttl)||$.trim(ttl) == "") {
        Showbo.Msg.alert('请输入吞吐量(G)！');
        return false;
    }else if ($.isEmptyObject(zdbfs)||$.trim(zdbfs) == "") {
        Showbo.Msg.alert('请输入最大并发数！');
        return false;
    }
    else if ($.isEmptyObject(adksllx)||$.trim(adksllx) == "") {
        Showbo.Msg.alert('请选择电口速率类型！');
        return false;
    } else if ($.isEmptyObject(sfzcbypass)||$.trim(sfzcbypass) == "") {
        Showbo.Msg.alert('请选择是否支持by-pass！');
        return false;
    } else if ($('#zczt').val()=="1" || $('#zczt').val()=="2"|| $('#zczt').val()=="3"|| $('#zczt').val()=="6"){
        if ($.isEmptyObject(zcbqh)) {
            Showbo.Msg.alert('请输入资产标签号！');
            return false;
        }
    }

    $.ajax({
        async: false, // 采用同步方式
        type:"POST",
        url :"../cmdb/updateAq",
        data : {"id":id,"zhuangtai":zhuangtai,"yongtu":yongtu,
            "gsqy":gsqy, "gsdd":gsdd,"gsfj":gsfj,"azwz":azwz,"szjg":szjg,"zcbqh":zcbqh,"zczt":zczt,"zcgly":zcgly,
            "zcbz":zcbz,"sfwkryj":sfwkryj,"eddygl":eddygl,"zhonglian":zhonglian,"szus":szus,
            "sjfs":sjfs,"sccs":sccs,"xinghao":xinghao,"xuliehao":xuliehao,
            "wlqy":wlqy,"dwglip":dwglip,"dwglzwym":dwglzwym,"dwglwg":dwglwg,"sxsj":sxsj,
            "yjwblx":yjwblx,"yjwbjssj":yjwbjssj,"yjwbfwcs":yjwbfwcs,"yjwbzt":yjwbzt,
            "yjwbfwjb":yjwbfwjb,"yjwbfzr":yjwbfzr,
//安全设备
            "aqsblx":aqsblx,"sfzysb":sfzysb,"glksl":glksl,"gksllx":gksllx,
            "pzgksl":pzgksl,"pzgmksl":pzgmksl,"yygksl":yygksl,"adksllx":adksllx,"apzdksl":apzdksl,
            "yydksl":yydksl,"sfzcbypass":sfzcbypass,"ttl":ttl,"zdbfs":zdbfs
        },
        dataType: "text",
        success : function(data) {
            if (data =="you"){
                Showbo.Msg.alert('此序列号已经存在！');
            }else if(data =="ok") {
                Showbo.Msg.alert('更新成功');

                $('#teacher_table').bootstrapTable('refreshOptions', {pageNumber: 1, pagesize: 8});
                $('#fuwuqiModel').modal('hide');
            }else {
                Showbo.Msg.alert('更新失败');
            }
        }})
}
function updateJhj(){
    var  id = $("#JhjId ").val();
    var  zhuangtai=$("#zhuangtai ").val();
    var  yongtu=$("#yongtu ").val();
    var  gsqy=$("#gsqy ").val();
    var  gsdd=$("#gsdd ").val();
    var  gsfj=$("#gsfj ").val();
    var  azwz=$("#azwz ").val();
    var  szjg=$("#szjg ").val();
    var  zcbqh=$("#zcbqh ").val();
    var  zczt=$("#zczt ").val();
    var  zcgly=$("#zcgly ").val();
    var  zcbz=$("#zcbz ").val();
    var  sfwkryj =$("#sfwkryj ").val();
    var  eddygl=$("#eddygl ").val();
    var  zhonglian=$("#zhonglian ").val();
    var  szus=$("#szus ").val();
    var  sjfs=$("#sjfs ").val();
    var  sccs=$("#sccs ").val();
    var  xinghao=$("#xinghao ").val();
    var  xuliehao=$("#xuliehao ").val();
    var  wlqy=$("#wlqy ").val();
    var  dwglip=$("#dwglip ").val();
    var  dwglzwym=$("#dwglzwym ").val();
    var  dwglwg=$("#dwglwg ").val();
    var  sxsj =$("#sxsj ").val();
    var  yjwblx =$("#yjwblx ").val();
    var  yjwbjssj=$("#yjwbjssj ").val();
    var  yjwbfwcs=$("#yjwbfwcs ").val();
    var  yjwbzt=$("#yjwbzt ").val();
    var  yjwbfwjb=$("#yjwbfwjb ").val();
    var  yjwbfzr=$("#yjwbfzr ").val();

//交换机属性
    var jhjlx =$("#jhjlx").val();//交换机类型
    var sfscjhj =$("#sfscjhj").val();//是否三层交换机
    var pzbjccsl =$("#pzbjccsl").val();//配置板卡插槽数量
    var yybkccsl =$("#yybkccsl").val();//已用板卡插槽数量
    var pzwzgksl =$("#pzwzgksl").val();//配置万兆光口数量
    var pzwzgmksl =$("#pzwzgmksl").val();//配置万兆光模块数量
    var kywzgdksl =$("#kywzgdksl").val();//可用万兆光端口数量
    var pzqzgksl =$("#pzqzgksl").val();//配置千兆光口数量
    var pzqzgmksl =$("#pzqzgmksl").val();//配置千兆光模块数量
    var kyqzgdksl=$("#kyqzgdksl").val();//可用千兆光端口数量
    var pzdksl =$("#pzdksl").val();//配置电口数量
    var dksllx=$("#dksllx").val();//电口速率类型
    var kydksl =$("#kydksl").val();//可用端口数量
    var lyxy=$("#lyxy").val();//路由协议
    var bbdk=$("#bbdk").val();//背板带宽
    var bzfl =$("#bzfl").val();//包转发率
    var sfstproot=$("#sfstproot").val();//是否STPRoot
    var stpxylx=$("#stpxylx").val();//STP协议类型
    var sfqdstp=$("#sfqdstp").val();//是否启动STP
    var sfkdj=$("#sfkdj").val();//是否可堆叠

    if ($.isEmptyObject(xuliehao)||$.trim(xuliehao) == "") {
        Showbo.Msg.alert('请输入序列号！');
        return false;
    }else if ($.isEmptyObject(yongtu)) {
        Showbo.Msg.alert('请输入用途！');
        return false;
    }else if ($.isEmptyObject(gsqy)) {
        Showbo.Msg.alert('请输入归属地域！');
        return false;
    } else if ($.isEmptyObject(gsdd)) {
        Showbo.Msg.alert('请输入归属地点！');
        return false;
    } else if ($.isEmptyObject(gsfj)) {
        Showbo.Msg.alert('请输入归属房间！');
        return false;
    }else if ($.isEmptyObject(azwz)) {
        Showbo.Msg.alert('请输入安装位置！');
        return false;
    }else if ($.isEmptyObject(szjg)) {
        Showbo.Msg.alert('请输入所在机柜！');
        return false;
    } else if ($.isEmptyObject(szus)) {
        Showbo.Msg.alert('请输入所占U数！');
        return false;
    } else if (szus=="0"){
        Showbo.Msg.alert('所占U数不可为0 ！');
        $("#szus ").val("");
        return false;
    }else if ($.isEmptyObject(sccs)) {
        Showbo.Msg.alert('请输入生产厂商！');
        return false;
    }else if ($.isEmptyObject(xinghao)) {
        Showbo.Msg.alert('请输入型号！');
        return false;
    }else if(!isIP(dwglip)){ //带外管理ip
        $('#dwglip').val("");
        return false;
    } else if(!iszIP(dwglzwym)){ //带外管理子网掩码
        $('#dwglzwym').val("");
        return false;
    }else if ($.isEmptyObject(sxsj)) {
        Showbo.Msg.alert('请选择上线日期！');
        return false;
    }else if ($.isEmptyObject(yjwbjssj)) {
        Showbo.Msg.alert('请选择硬件维保服务结束日期！');
        return false;
    } else if ($.isEmptyObject(yjwbfwcs)) {
        Showbo.Msg.alert('请输入硬件维保服务厂商！');
        return false;
    } else if ($.isEmptyObject(yjwbfzr)) {
        Showbo.Msg.alert('请输入硬件维护负责人！');
        return false;
    } else if ($.isEmptyObject(eddygl)) {
        Showbo.Msg.alert('请输入额定电源功率(KW)！');
        return false;
    }  else if ($.isEmptyObject(zcgly)) {
        Showbo.Msg.alert('请输入资产管理员！');
        return false;
    } else if ($.isEmptyObject(zhonglian)) {
        Showbo.Msg.alert('请输入重量！');
        return false;
    }
    else if ($.isEmptyObject(jhjlx)||$.trim(jhjlx) == "") {
        Showbo.Msg.alert('请选择交换机类型！');
        return false;
    }else if ($.isEmptyObject(sfscjhj)||$.trim(sfscjhj) == "") {
        Showbo.Msg.alert('请选择是否三层交换机！');
        return false;
    }else if ($.isEmptyObject(pzbjccsl)||$.trim(pzbjccsl) == "") {
        Showbo.Msg.alert('请输入配置板卡插槽数量！');
        return false;
    }else if ($.isEmptyObject(yybkccsl)||$.trim(yybkccsl) == "") {
        Showbo.Msg.alert('请输入已用板卡插槽数量！');
        return false;
    }else if ($.isEmptyObject(pzwzgksl)||$.trim(pzwzgksl) == "") {
        Showbo.Msg.alert('请输入配置万兆光口数量！');
        return false;
    }else if ($.isEmptyObject(pzwzgmksl)||$.trim(pzwzgmksl) == "") {
        Showbo.Msg.alert('请输入配置万兆光模块数量！');
        return false;
    }else if ($.isEmptyObject(kywzgdksl)||$.trim(kywzgdksl) == "") {
        Showbo.Msg.alert('请输入可用万兆光端口数量！');
        return false;
    } else if ($.isEmptyObject(pzqzgksl)||$.trim(pzqzgksl) == "") {
        Showbo.Msg.alert('请输入配置千兆光口数量！');
        return false;
    }else if ($.isEmptyObject(pzqzgmksl)||$.trim(pzqzgmksl) == "") {
        Showbo.Msg.alert('请输入配置千兆光模块数量！');
        return false;
    }else if ($.isEmptyObject(kyqzgdksl)||$.trim(kyqzgdksl) == "") {
        Showbo.Msg.alert('请输入可用千兆光端口数量！');
        return false;
    }else if ($.isEmptyObject(pzdksl)||$.trim(pzdksl) == "") {
        Showbo.Msg.alert('请输入配置电口数量！');
        return false;
    }else if ($.isEmptyObject(kydksl)||$.trim(kydksl) == "") {
        Showbo.Msg.alert('请输入可用端口数量！');
        return false;
    }else if ($.isEmptyObject(lyxy)||$.trim(lyxy) == "") {
        Showbo.Msg.alert('请输入路由协议！');
        return false;
    } else if ($.isEmptyObject(bbdk)||$.trim(bbdk) == "") {
        Showbo.Msg.alert('请选择背板带宽！');
        return false;
    }else if ($.isEmptyObject(bzfl)||$.trim(bzfl) == "") {
        Showbo.Msg.alert('请选择包转发率！');
        return false;
    }else if ($.isEmptyObject(sfstproot)||$.trim(sfstproot) == "") {
        Showbo.Msg.alert('请选择是否STPRoot！');
        return false;
    }  else if ($.isEmptyObject(stpxylx)||$.trim(stpxylx) == "") {
        Showbo.Msg.alert('请选择STP协议类型！');
        return false;
    }else if ($.isEmptyObject(dksllx)||$.trim(dksllx) == "") {
        Showbo.Msg.alert('请选择电口速率类型！');
        return false;
    }else if ($.isEmptyObject(sfqdstp)||$.trim(sfqdstp) == "") {
        Showbo.Msg.alert('请选择是否启动STP！');
        return false;
    } else if ($.isEmptyObject(sfkdj)||$.trim(sfkdj) == "") {
        Showbo.Msg.alert('请选择是否可堆叠！');
        return false;
    }else if ($('#zczt').val()=="1" || $('#zczt').val()=="2"|| $('#zczt').val()=="3"|| $('#zczt').val()=="6"){
        if ($.isEmptyObject(zcbqh)) {
            Showbo.Msg.alert('请输入资产标签号！');
            return false;
        }
    }
    $.ajax({
        async: false, // 采用同步方式
        type:"POST",
        url :"../cmdb/updateJhj",
        data : {"id":id,"zhuangtai":zhuangtai,"yongtu":yongtu,
            "gsqy":gsqy, "gsdd":gsdd,"gsfj":gsfj,"azwz":azwz,"szjg":szjg,"zcbqh":zcbqh,"zczt":zczt,"zcgly":zcgly,
            "zcbz":zcbz,"sfwkryj":sfwkryj,"eddygl":eddygl,"zhonglian":zhonglian,"szus":szus,
            "sjfs":sjfs,"sccs":sccs,"xinghao":xinghao,"xuliehao":xuliehao,
            "wlqy":wlqy,"dwglip":dwglip,"dwglzwym":dwglzwym,"dwglwg":dwglwg,"sxsj":sxsj,
            "yjwblx":yjwblx,"yjwbjssj":yjwbjssj,"yjwbfwcs":yjwbfwcs,"yjwbzt":yjwbzt,
            "yjwbfwjb":yjwbfwjb,"yjwbfzr":yjwbfzr,
//san
            "jhjlx":jhjlx,"sfscjhj":sfscjhj,"pzbjccsl":pzbjccsl,"yybkccsl":yybkccsl,"pzwzgksl":pzwzgksl,"pzwzgmksl":pzwzgmksl,
            "kywzgdksl":kywzgdksl,
            "pzqzgksl":pzqzgksl,"pzqzgmksl":pzqzgmksl,"kyqzgdksl":kyqzgdksl,"pzdksl":pzdksl,"dksllx":dksllx,"kydksl":kydksl,
            "lyxy":lyxy,"bbdk":bbdk,"bzfl":bzfl,"sfstproot":sfstproot,"stpxylx":stpxylx,"sfqdstp":sfqdstp,"sfkdj":sfkdj
        },
        dataType: "text",
        success : function(data) {
            if (data =="you"){
                Showbo.Msg.alert('此序列号已经存在！');
            }else if(data =="ok") {
                Showbo.Msg.alert('更新成功');

                $('#teacher_table').bootstrapTable('refreshOptions', {pageNumber: 1, pagesize: 8});
                $('#fuwuqiModel').modal('hide');
            }else {
                Showbo.Msg.alert('更新失败');
            }
        }})
}
function updateSan() {
    var id = $("#sanId").val();
    var  zhuangtai=$("#zhuangtai ").val();
    var  yongtu=$("#yongtu ").val();
    var  gsqy=$("#gsqy ").val();
    var  gsdd=$("#gsdd ").val();
    var  gsfj=$("#gsfj ").val();
    var  azwz=$("#azwz ").val();
    var  szjg=$("#szjg ").val();
    var  zcbqh=$("#zcbqh ").val();
    var  zczt=$("#zczt ").val();
    var  zcgly=$("#zcgly ").val();
    var  zcbz=$("#zcbz ").val();
    var  sfwkryj =$("#sfwkryj ").val();
    var  eddygl=$("#eddygl ").val();
    var  zhonglian=$("#zhonglian ").val();
    var  szus=$("#szus ").val();
    var  sjfs=$("#sjfs ").val();
    var  sccs=$("#sccs ").val();
    var  xinghao=$("#xinghao ").val();
    var  xuliehao=$("#xuliehao ").val();
    var  wlqy=$("#wlqy ").val();
    var  dwglip=$("#dwglip ").val();
    var  dwglzwym=$("#dwglzwym ").val();
    var  dwglwg=$("#dwglwg ").val();
    var  sxsj =$("#sxsj").val();
    var  yjwblx =$("#yjwblx ").val();
    var  yjwbjssj=$("#yjwbjssj ").val();
    var  yjwbfwcs=$("#yjwbfwcs ").val();
    var  yjwbzt=$("#yjwbzt ").val();
    var  yjwbfwjb=$("#yjwbfwjb ").val();
    var  yjwbfzr=$("#yjwbfzr ").val();
    var pzbks= $("#pzbks ").val();//配置板卡数
    var pzbkccs= $("#pzbkccs ").val();//配置板卡插槽数
    var sykydks= $("#sykydks ").val();//剩余可用端口数
    var dksl= $("#dksl").val();//端口速率
    var pzfcmks= $("#pzfcmks ").val();//配置FC模块数
    var pzdks= $("#pzdks ").val();//

    if ($.isEmptyObject(xuliehao)||$.trim(xuliehao) == "") {
        Showbo.Msg.alert('请输入序列号！');
        return false;
    }else if ($.isEmptyObject(yongtu)) {
        Showbo.Msg.alert('请输入用途！');
        return false;
    }else if ($.isEmptyObject(gsqy)) {
        Showbo.Msg.alert('请输入归属地域！');
        return false;
    } else if ($.isEmptyObject(gsdd)) {
        Showbo.Msg.alert('请输入归属地点！');
        return false;
    } else if ($.isEmptyObject(gsfj)) {
        Showbo.Msg.alert('请输入归属房间！');
        return false;
    }else if ($.isEmptyObject(azwz)) {
        Showbo.Msg.alert('请输入安装位置！');
        return false;
    }else if ($.isEmptyObject(szjg)) {
        Showbo.Msg.alert('请输入所在机柜！');
        return false;
    } else if ($.isEmptyObject(szus)) {
        Showbo.Msg.alert('请输入所占U数！');
        return false;
    } else if (szus=="0"){
        Showbo.Msg.alert('所占U数不可为0 ！');
        $("#szus ").val("");
        return false;
    }else if ($.isEmptyObject(sccs)) {
        Showbo.Msg.alert('请输入生产厂商！');
        return false;
    }else if ($.isEmptyObject(xinghao)) {
        Showbo.Msg.alert('请输入型号！');
        return false;
    }else if(!isIP(dwglip)){ //带外管理ip
        $('#dwglip').val("");
        return false;
    } else if(!iszIP(dwglzwym)){ //带外管理子网掩码
        $('#dwglzwym').val("");
        return false;
    }else if ($.isEmptyObject(sxsj)) {
        Showbo.Msg.alert('请选择上线日期！');
        return false;
    }else if ($.isEmptyObject(yjwbjssj)) {
        Showbo.Msg.alert('请选择硬件维保服务结束日期！');
        return false;
    } else if ($.isEmptyObject(yjwbfwcs)) {
        Showbo.Msg.alert('请输入硬件维保服务厂商！');
        return false;
    } else if ($.isEmptyObject(yjwbfzr)) {
        Showbo.Msg.alert('请输入硬件维护负责人！');
        return false;
    } else if ($.isEmptyObject(eddygl)) {
        Showbo.Msg.alert('请输入额定电源功率(KW)！');
        return false;
    }  else if ($.isEmptyObject(zcgly)) {
        Showbo.Msg.alert('请输入资产管理员！');
        return false;
    } else if ($.isEmptyObject(zhonglian)) {
        Showbo.Msg.alert('请输入重量！');
        return false;
    }

    else if ($.isEmptyObject(pzdks)||$.trim(pzdks) == "") {
        Showbo.Msg.alert('请输入配置端口数！');
        return false;
    }else if ($.isEmptyObject(pzfcmks)||$.trim(pzfcmks) == "") {
        Showbo.Msg.alert('请输入配置FC模块数！');
        return false;
    }else if ($.isEmptyObject(dksl)||$.trim(dksl) == "") {
        Showbo.Msg.alert('请输入端口速率！');
        return false;
    }else if ($.isEmptyObject(sykydks)||$.trim(sykydks) == "") {
        Showbo.Msg.alert('请输入剩余可用端口数！');
        return false;
    }else if ($.isEmptyObject(pzbkccs)||$.trim(pzbkccs) == "") {
        Showbo.Msg.alert('请输入配置板卡插槽数！');
        return false;
    } else if ($.isEmptyObject(pzbks)||$.trim(pzbks) == "") {
        Showbo.Msg.alert('请输入配置板卡数！');
        return false;
    }else if ($('#zczt').val()=="1" || $('#zczt').val()=="2"|| $('#zczt').val()=="3"|| $('#zczt').val()=="6"){
        if ($.isEmptyObject(zcbqh)) {
            Showbo.Msg.alert('请输入资产标签号！');
            return false;
        }
    }

    $.ajax({
        async: false, // 采用同步方式
        type:"POST",
        url :"../cmdb/updateSan",
        data : {"id":id,"zhuangtai":zhuangtai,"yongtu":yongtu, "gsqy":gsqy, "gsdd":gsdd,"gsfj":gsfj,"azwz":azwz,"szjg":szjg,"zcbqh":zcbqh,"zczt":zczt,"zcgly":zcgly,
            "zcbz":zcbz,"sfwkryj":sfwkryj,"eddygl":eddygl,"zhonglian":zhonglian,"szus":szus, "sjfs":sjfs,"sccs":sccs,"xinghao":xinghao,"xuliehao":xuliehao,
            "wlqy":wlqy,"dwglip":dwglip,"dwglzwym":dwglzwym,"dwglwg":dwglwg,"sxsj":sxsj, "yjwblx":yjwblx,"yjwbjssj":yjwbjssj,"yjwbfwcs":yjwbfwcs,"yjwbzt":yjwbzt, "yjwbfwjb":yjwbfwjb,"yjwbfzr":yjwbfzr, "pzbks":pzbks,"pzbkccs":pzbkccs,"sykydks":sykydks,"dksl":dksl,"pzfcmks":pzfcmks,"pzdks":pzdks},
        dataType: "text",
        success : function(data) {
            if (data =="you"){
                Showbo.Msg.alert('此序列号已经存在！');
            }else if(data =="ok") {
                Showbo.Msg.alert('更新成功');
                $('#teacher_table').bootstrapTable('refreshOptions', {pageNumber: 1, pagesize: 8});
                $('#fuwuqiModel').modal('hide');
            }else {
                Showbo.Msg.alert('更新失败');
            }
        }})
}
function updateCc(){
    var double1 =  /\.\d{1,2}$/;
    var  id = $("#cunchuId ").val();
    var  zhuangtai=$("#zhuangtai ").val();
    var  yongtu=$("#yongtu ").val();
    var  gsqy=$("#gsqy ").val();
    var  gsdd=$("#gsdd ").val();
    var  gsfj=$("#gsfj ").val();
    var  azwz=$("#azwz ").val();
    var  szjg=$("#szjg ").val();
    var  zcbqh=$("#zcbqh ").val();
    var  zczt=$("#zczt ").val();
    var  zcgly=$("#zcgly ").val();
    var  zcbz=$("#zcbz ").val();
    var  sfwkryj =$("#sfwkryj ").val();
    var  eddygl=$("#eddygl ").val();
    var  zhonglian=$("#zhonglian ").val();
    var  szus=$("#szus ").val();
    var  sjfs=$("#sjfs ").val();
    var  sccs=$("#sccs ").val();
    var  xinghao=$("#xinghao ").val();
    var  xuliehao=$("#xuliehao ").val();
    var  wlqy=$("#wlqy ").val();
    var  dwglip=$("#dwglip ").val();
    var  dwglzwym=$("#dwglzwym ").val();
    var  dwglwg=$("#dwglwg ").val();
    var  sxsj =$("#sxsj ").val();
    var  yjwblx =$("#yjwblx ").val();
    var  yjwbjssj=$("#yjwbjssj ").val();
    var  yjwbfwcs=$("#yjwbfwcs ").val();
    var  yjwbzt=$("#yjwbzt ").val();
    var  yjwbfwjb=$("#yjwbfwjb ").val();
    var  yjwbfzr=$("#yjwbfzr ").val();

    var  pzcachedx=$("#pzcachedx ").val();   //配置CACHE大小(GB)
    var  pzzjdksl=$("#pzzjdksl ").val();   //配置主机端口数量
    var  zjdksl=$("#zjdksl ").val();   //主机端口速率
    var  wlcplx=$("#wlcplx ").val();   //物理磁盘类型/数量
    var  pzzrl= $("#pzzrl ").val();   //配置总容量(TB)
    var  raidfs = $("#raidfs ").val();   //RAID方式
    var  raidhsjkyrl= $("#raidhsjkyrl ").val();   //RAID后实际可用容量(TB)
    var  lundx= $("#lundx ").val();   //LUN大小(GB)
    var  kylunsl= $("#kylunsl ").val();   //可用LUN数量
    var  yfplunsl= $("#yfplunsl ").val();   //已分配LUN数量
    var  wfplunsl= $("#wfplunsl ").val();   //未分配LUN数量
    var wfprl = $("#wfprl ").val();   //未分配容量(GB)
    var yfprl = $("#yfprl ").val();   //已分配容量(GB)

    if ($.isEmptyObject(xuliehao)||$.trim(xuliehao) == "") {
        Showbo.Msg.alert('请输入序列号！');
        return false;
    }else if ($.isEmptyObject(yongtu)) {
        Showbo.Msg.alert('请输入用途！');
        return false;
    }else if ($.isEmptyObject(gsqy)) {
        Showbo.Msg.alert('请输入归属地域！');
        return false;
    } else if ($.isEmptyObject(gsdd)) {
        Showbo.Msg.alert('请输入归属地点！');
        return false;
    } else if ($.isEmptyObject(gsfj)) {
        Showbo.Msg.alert('请输入归属房间！');
        return false;
    }else if ($.isEmptyObject(azwz)) {
        Showbo.Msg.alert('请输入安装位置！');
        return false;
    }else if ($.isEmptyObject(szjg)) {
        Showbo.Msg.alert('请输入所在机柜！');
        return false;
    } else if ($.isEmptyObject(szus)) {
        Showbo.Msg.alert('请输入所占U数！');
        return false;
    }else if (szus=="0"){
        Showbo.Msg.alert('所占U数不可为0 ！');
        $("#szus ").val("");
        return false;
    } else if ($.isEmptyObject(sccs)) {
        Showbo.Msg.alert('请输入生产厂商！');
        return false;
    }else if ($.isEmptyObject(xinghao)) {
        Showbo.Msg.alert('请输入型号！');
        return false;
    }else if(!isIP(dwglip)){ //带外管理ip
        $('#dwglip').val("");
        return false;
    } else if(!iszIP(dwglzwym)){ //带外管理子网掩码
        $('#dwglzwym').val("");
        return false;
    }else if ($.isEmptyObject(sxsj)) {
        Showbo.Msg.alert('请选择上线日期！');
        return false;
    }else if ($.isEmptyObject(yjwbjssj)) {
        Showbo.Msg.alert('请选择硬件维保服务结束日期！');
        return false;
    } else if ($.isEmptyObject(yjwbfwcs)) {
        Showbo.Msg.alert('请输入硬件维保服务厂商！');
        return false;
    } else if ($.isEmptyObject(yjwbfzr)) {
        Showbo.Msg.alert('请输入硬件维护负责人！');
        return false;
    } else if ($.isEmptyObject(eddygl)) {
        Showbo.Msg.alert('请输入额定电源功率(KW)！');
        return false;
    }  else if ($.isEmptyObject(zcgly)) {
        Showbo.Msg.alert('请输入资产管理员！');
        return false;
    } else if ($.isEmptyObject(zhonglian)) {
        Showbo.Msg.alert('请输入重量！');
        return false;
    }
    else  if ($.isEmptyObject(pzcachedx)||$.trim(pzcachedx) == "") {
        Showbo.Msg.alert('请输入配置CACHE大小(GB)！');
        return false;
    } else if ($.isEmptyObject(pzzjdksl)||$.trim(pzzjdksl) == "") {
        Showbo.Msg.alert('请输入配置主机端口数量！');
        return false;
    }else  if ($.isEmptyObject(zjdksl)||$.trim(zjdksl) == "") {
        Showbo.Msg.alert('请输入主机端口速率(G)！');
        return false;
    }else if ((wlcplx.indexOf("SAS ") == -1 || wlcplx.indexOf("GB*") == -1)&& (wlcplx.indexOf("TB*") == -1 || wlcplx.indexOf("SATA ") == -1)  ) {
        Showbo.Msg.alert('物理磁盘类型/数量格式为' +
            ':SAS 600GB*30/SATA 2TB*30！');
        return false;
    }else  if ($.isEmptyObject(pzzrl)||$.trim(pzzrl) == "") {
        Showbo.Msg.alert('请输入配置总容量(TB)！');
        return false;
    }else  if ($.isEmptyObject(raidfs)||$.trim(raidfs) == "") {
        Showbo.Msg.alert('请输入RAID方式！');
        return false;
    }else if(!double1.test(raidhsjkyrl)){
        Showbo.Msg.alert('RAID后实际可用容量只允许输入1-2位小数！');
        return false;
    } else  if ($.isEmptyObject(lundx)||$.trim(lundx) == "") {
        Showbo.Msg.alert('请输入LUN大小(GB)！');
        return false;
    } else if (kylunsl.indexOf("GB*") == -1 ){
        Showbo.Msg.alert('可用LUN数量格式为 500GB*100/1000GB*50！');
        return false;
    } else if (yfplunsl.indexOf("GB*") == -1 ){
        Showbo.Msg.alert('已分配LUN数量格式为 500GB*100/1000GB*50！');
        return false;
    }else if (wfplunsl.indexOf("GB*") == -1 ){
        Showbo.Msg.alert('未分配LUN数量格式为 500GB*100/1000GB*50！');
        return false;
    } else  if ($.isEmptyObject(wfprl)||$.trim(wfprl) == "") {
        Showbo.Msg.alert('请输入未分配容量(GB)！');
        return false;
    } else  if ($.isEmptyObject(yfprl)||$.trim(yfprl) == "") {
        Showbo.Msg.alert('请输入已分配容量(GB)！');
        return false;
    }   else if ($('#zczt').val()=="1" || $('#zczt').val()=="2"|| $('#zczt').val()=="3"|| $('#zczt').val()=="6"){
        if ($.isEmptyObject(zcbqh)) {
            Showbo.Msg.alert('请输入资产标签号！');
            return false;
        }
    }

    $.ajax({
        async: false, // 采用同步方式
        type:"POST",
        url :"../cmdb/updateCc",
        data : {"id":id,"zhuangtai":zhuangtai,"yongtu":yongtu, "gsqy":gsqy, "gsdd":gsdd,"gsfj":gsfj,"azwz":azwz,"szjg":szjg,"zcbqh":zcbqh,"zczt":zczt,"zcgly":zcgly, "zcbz":zcbz,"sfwkryj":sfwkryj,"eddygl":eddygl,"zhonglian":zhonglian,"szus":szus,
            "sjfs":sjfs,"sccs":sccs,"xinghao":xinghao,"xuliehao":xuliehao, "wlqy":wlqy,"dwglip":dwglip,"dwglzwym":dwglzwym,"dwglwg":dwglwg,"sxsj":sxsj,
            "yjwblx":yjwblx,"yjwbjssj":yjwbjssj,"yjwbfwcs":yjwbfwcs,"yjwbzt":yjwbzt, "yjwbfwjb":yjwbfwjb,"yjwbfzr":yjwbfzr, "pzcachedx":pzcachedx,"pzzjdksl":pzzjdksl,"zjdksl":zjdksl, "wlcplx":wlcplx,"pzzrl":pzzrl, "raidfs":raidfs , "raidhsjkyrl":raidhsjkyrl, "lundx":lundx,"kylunsl":kylunsl, "yfplunsl":yfplunsl, "wfplunsl":wfplunsl,"wfprl":wfprl , "yfprl":yfprl},
        dataType: "text",
        success : function(data) {
            if (data =="you"){
                Showbo.Msg.alert('此序列号已经存在！');
            }else if(data =="ok") {
                Showbo.Msg.alert('更新成功');
                $('#teacher_table').bootstrapTable('refreshOptions', {pageNumber: 1, pagesize: 8});
                $('#fuwuqiModel').modal('hide');
            }else {
                Showbo.Msg.alert('更新失败');
            }
        }})
}
function updatefwq(){
    var id= $("#fuwuqiId").val();
    var  zhuangtai=$("#zhuangtai ").val();
    var  yongtu=$("#yongtu ").val();
    var  gsqy=$("#gsqy ").val();
    var  gsdd=$("#gsdd ").val();
    var  gsfj=$("#gsfj ").val();
    var  azwz=$("#azwz ").val();
    var  szjg=$("#szjg ").val();
    var  zcbqh=$("#zcbqh ").val();
    var  zczt=$("#zczt ").val();
    var  zcgly=$("#zcgly ").val();
    var  zcbz=$("#zcbz ").val();
    var  sfwkryj =$("#sfwkryj ").val();
    var  eddygl=$("#eddygl ").val();
    var  zhonglian=$("#zhonglian ").val();
    var  szus=$("#szus ").val();
    var  sjfs=$("#sjfs ").val();
    var  sccs=$("#sccs ").val();
    var  xinghao=$("#xinghao ").val();
    var  xuliehao=$("#xuliehao ").val();
    var  wlqy=$("#wlqy ").val();
    var  dwglip=$("#dwglip ").val();
    var  dwglzwym=$("#dwglzwym ").val();
    var  dwglwg=$("#dwglwg ").val();
    var  sxsj =$("#sxsj ").val();
    var  yjwblx =$("#yjwblx ").val();
    var  yjwbjssj=$("#yjwbjssj ").val();
    var  yjwbfwcs=$("#yjwbfwcs ").val();
    var  yjwbzt=$("#yjwbzt ").val();
    var  yjwbfwjb=$("#yjwbfwjb ").val();
    var  yjwbfzr=$("#yjwbfzr ").val();
//服务器属性
    var  fwqzjm=$("#fwqzjm ").val();//服务器名称
    var  ywwipdz=$("#ywwipdz ").val();//f业务网IP地址
    var  ywwzwym=$("#ywwzwym ").val();//业务网子网掩码
    var  ywwwg=$("#ywwwg ").val();//f业务网网关
    var  glwipdz=$("#glwipdz ").val();//f管理网Ip地址
    var  glwzwym=$("#glwzwym ").val();//f管理网子网掩码
    var  glwwg=$("#glwwg ").val();//f管理网网关
    var  cpulx=$("#cpulx ").val();//fCpu类型
    var  cpusl =$("#cpusl ").val();//fCpu数量
    var  swapqdx=$("#swapqdx ").val();//fSWAP区大小
    var  ncdx=$("#ncdx ").val();//f内存大小
    var  czxt=$("#czxt ").val();//f操作系统
    var  nzypdx=$("#nzypdx ").val();//f内置硬盘大小
    var  nzypsl=$("#nzypsl ").val();//f内置硬盘数量11
    var  wzdksl=$("#wzdksl ").val();//f万兆端口数量
    var  ysywzdksl=$("#ysywzdksl ").val();//f已使用万兆端口数量
    var  qzdksl=$("#qzdksl ").val();//f千兆端口数量
    var  ysyqzdksl=$("#ysyqzdksl ").val();//f已使用千兆端口数量
    var  hbaksl=$("#hbaksl ").val();//fHBA卡数量
    var  yhbaksl=$("#yhbaksl ").val();//f已使用HBA卡数量
    var  hbaksulv=$("#hbaksulv ").val();//fHBA卡速率
    var  hbakwwwnh=$("#hbakwwwnh ").val();//fHBA卡WWWN号
    var  cpunhs=$("#cpunhs ").val();//fCpu内核数

    if ($.isEmptyObject(xuliehao)||$.trim(xuliehao) == "") {
        Showbo.Msg.alert('请输入序列号！');
        return false;
    }else if ($.isEmptyObject(yongtu)) {
        Showbo.Msg.alert('请输入用途！');
        return false;
    }else if ($.isEmptyObject(gsqy)) {
        Showbo.Msg.alert('请输入归属地域！');
        return false;
    } else if ($.isEmptyObject(gsdd)) {
        Showbo.Msg.alert('请输入归属地点！');
        return false;
    } else if ($.isEmptyObject(gsfj)) {
        Showbo.Msg.alert('请输入归属房间！');
        return false;
    }else if ($.isEmptyObject(azwz)) {
        Showbo.Msg.alert('请输入安装位置！');
        return false;
    }else if ($.isEmptyObject(szjg)) {
        Showbo.Msg.alert('请输入所在机柜！');
        return false;
    } else if ($.isEmptyObject(szus)) {
        Showbo.Msg.alert('请输入所占U数！');
        return false;
    } else if (szus=="0"){
        Showbo.Msg.alert('所占U数不可为0 ！');
        $("#szus ").val("");
        return false;
    }else if ($.isEmptyObject(sccs)) {
        Showbo.Msg.alert('请输入生产厂商！');
        return false;
    }else if ($.isEmptyObject(xinghao)) {
        Showbo.Msg.alert('请输入型号！');
        return false;
    }else if(!isIP(dwglip)){ //带外管理ip
        $('#dwglip').val("");
        return false;
    } else if(!iszIP(dwglzwym)){ //带外管理子网掩码
        $('#dwglzwym').val("");
        return false;
    }else if ($.isEmptyObject(sxsj)) {
        Showbo.Msg.alert('请选择上线日期！');
        return false;
    }else if ($.isEmptyObject(yjwbjssj)) {
        Showbo.Msg.alert('请选择硬件维保服务结束日期！');
        return false;
    } else if ($.isEmptyObject(yjwbfwcs)) {
        Showbo.Msg.alert('请输入硬件维保服务厂商！');
        return false;
    } else if ($.isEmptyObject(yjwbfzr)) {
        Showbo.Msg.alert('请输入硬件维护负责人！');
        return false;
    } else if ($.isEmptyObject(eddygl)) {
        Showbo.Msg.alert('请输入额定电源功率(KW)！');
        return false;
    }  else if ($.isEmptyObject(zcgly)) {
        Showbo.Msg.alert('请输入资产管理员！');
        return false;
    } else if ($.isEmptyObject(zhonglian)) {
        Showbo.Msg.alert('请输入重量！');
        return false;
    } else if ($.isEmptyObject(fwqzjm)) {
        Showbo.Msg.alert('请输入服务器主机名！');
        return false;
    } else if(!isywwIP(ywwipdz)){
        $('#ywwipdz').val(""); //业务网ip地址
        return false;
    }else if(!isywwzwymIP(ywwzwym)){
        $('#ywwzwym').val(""); //业务网子网掩码
        return false;
    }else if (!isywwwgIP(ywwwg)){
        $('#ywwwg').val("");  //业务网网关
        return false;
    }else if(!isglwipIP(glwipdz)){
        $('#glwipdz').val("");   //管理网IP地址
        return false;
    }else if(!isglwzwymIP(glwzwym)){
        $('#glwzwym').val(""); //管理网子网掩码
        return false;
    }else if (!isglwwgIP(glwwg)){
        $('#glwwg').val(""); //管理网网关
        return false;
    } else if ($.isEmptyObject(cpulx)||$.trim(cpulx) == "") {
        Showbo.Msg.alert('请输入Cpu类型！');
        return false;
    }else if ($.isEmptyObject(cpusl)||$.trim(cpusl) == "") {
        Showbo.Msg.alert('请输入Cpu数量！');
        return false;
    } else if (cpusl=="0"){
        Showbo.Msg.alert('Cpu数量不可为0！');
        $("#cpusl ").val("");//Cpu数量
        return false;
    } else if ($.isEmptyObject(cpunhs)||$.trim(cpunhs) == "") {
        Showbo.Msg.alert('请输入Cpu内核数！');
        return false;
    } else if (cpunhs=="0"){
        Showbo.Msg.alert('Cpu内核数不可为0！');
        $("#cpunhs ").val("");//Cpu数量
        return false;
    } else if ($.isEmptyObject(ncdx)||$.trim(ncdx) == "") {
        Showbo.Msg.alert('请输入内存大小！');
        return false;
    }else if ($.isEmptyObject(swapqdx)||$.trim(swapqdx) == "") {
        Showbo.Msg.alert('请输入SWAP区大小！');
        return false;
    }else if ($.isEmptyObject(czxt)||$.trim(czxt) == "") {
        Showbo.Msg.alert('请输入操作系统！');
        return false;
    }else if (nzypdx.indexOf("GB") == -1 ){
        Showbo.Msg.alert('内置硬盘大小格式为 300GB/600GB！');
        return false;
    } else if (nzypsl.indexOf("GB*") == -1 && nzypsl.indexOf("TB*")==-1 ){
        Showbo.Msg.alert('内置硬盘数量格式为 200GB*6/2TB*4！');
        return false;
    }else if ($.isEmptyObject(wzdksl)||$.trim(wzdksl) == "") {
        Showbo.Msg.alert('请输入万兆端口数量！');
        return false;
    }else if ($.isEmptyObject(ysywzdksl)||$.trim(ysywzdksl) == "") {
        Showbo.Msg.alert('请输入已使用万兆端口数量！');
        return false;
    }else if ($.isEmptyObject(qzdksl)||$.trim(qzdksl) == "") {
        Showbo.Msg.alert('请输入千兆端口数量！');
        return false;
    } else if ($.isEmptyObject(ysyqzdksl)||$.trim(ysyqzdksl) == "") {
        Showbo.Msg.alert('请输入已使用千兆端口数量！');
        return false;
    } else if ($.isEmptyObject(hbaksl)||$.trim(hbaksl) == "") {
        Showbo.Msg.alert('请输入HBA卡数量！');
        return false;
    }else if ($.isEmptyObject(yhbaksl)||$.trim(yhbaksl) == "") {
        Showbo.Msg.alert('请输入已使用HBA卡数量！');
        return false;
    } else if ($('#zczt').val()=="1" || $('#zczt').val()=="2"|| $('#zczt').val()=="3"|| $('#zczt').val()=="6"){
        if ($.isEmptyObject(zcbqh)) {
            Showbo.Msg.alert('请输入资产标签号！');
            return false;
        }
    }

    $.ajax({
        async: false, // 采用同步方式
        type:"POST",
        url :"../cmdb/updatefwq",
        data : {"id":id,"zhuangtai":zhuangtai,"yongtu":yongtu,
            "gsqy":gsqy, "gsdd":gsdd,"gsfj":gsfj,"azwz":azwz,"szjg":szjg,"zcbqh":zcbqh,"zczt":zczt,"zcgly":zcgly,
            "zcbz":zcbz,"sfwkryj":sfwkryj,"eddygl":eddygl,"zhonglian":zhonglian,"szus":szus,
            "sjfs":sjfs,"sccs":sccs,"xinghao":xinghao,"xuliehao":xuliehao,
            "wlqy":wlqy,"dwglip":dwglip,"dwglzwym":dwglzwym,"dwglwg":dwglwg,"sxsj":sxsj,
            "yjwblx":yjwblx,"yjwbjssj":yjwbjssj,"yjwbfwcs":yjwbfwcs,"yjwbzt":yjwbzt,
            "yjwbfwjb":yjwbfwjb,"yjwbfzr":yjwbfzr,
//服务器属性 |
            "fwqzjm":fwqzjm,"ywwipdz":ywwipdz,"ywwzwym":ywwzwym,"ywwwg":ywwwg,"glwipdz":glwipdz,"glwzwym":glwzwym,"glwwg":glwwg,
            "cpulx":cpulx,"cpusl":cpusl,"cpunhs":cpunhs,"swapqdx":swapqdx,"ncdx":ncdx,"czxt":czxt,"nzypdx":nzypdx,
            "nzypsl":nzypsl,"wzdksl":wzdksl,"ysywzdksl":ysywzdksl,"qzdksl":qzdksl,"ysyqzdksl":ysyqzdksl,"hbaksl":hbaksl,
            "yhbaksl":yhbaksl,"hbaksulv":hbaksulv,"hbakwwwnh":hbakwwwnh
        },
        dataType: "text",
        success : function(data) {
            if (data =="you"){
                Showbo.Msg.alert('此序列号已经存在！');
            }else if (data =="ipyou"){
                Showbo.Msg.alert('业务网Ip地址已经存在！');
            } else if(data =="ok") {
                Showbo.Msg.alert('更新成功');
                $('#teacher_table').bootstrapTable('refreshOptions', {pageNumber: 1, pagesize: 8});
                $('#fuwuqiModel').modal('hide');
            }else {
                Showbo.Msg.alert('更新失败');
            }
        }})
}
function addSj () {
    $('#yongtu').val("");//用途
    $('#gsqy').val("");//归属区域
    $('#gsdd').val("");//归属地点
    $('#gsfj').val("");//归属房间
    $('#azwz').val("");//安装位置
    $('#szjg').val("");//所在机柜
    $('#zcbqh').val("");//资产标签号
    $('#zcgly').val("");//资产管理员
    $('#zcbz').val("");//资产备注
    $('#eddygl').val("");//额定电源功率(KW)
    $('#zhonglian').val("");//重量
    $('#szus').val("");//所占U数
    $('#sccs').val("");//生产厂商
    $('#xinghao').val("");//型号
    $('#xuliehao').val("");//序列号
    $('#dwglip').val("");//带外管理IP、
    $('#dwglzwym').val("");//带外管理子网掩码
    $('#dwglwg').val("");//带外管理网关
    $('#sxsj').val("");//上线时间
    $('#yjwbjssj').val("");//硬件维保服务结束日期
    $('#yjwbfwcs').val("");//硬件维保服务厂商
    $('#yjwbfzr').val("");//硬件维保负责人

    $('#sjglksl').val("");//管理口数量
    $('#sjpzgksl').val("");//配置光口数量
    $('#sjpzgmbsl').val("");//配置光模块数量
    $('#sjyygksl').val("");//已用光口数量
    $('#sjpzdksl').val("");//配置电口数量
    $('#sjyydksl').val("");//已用电口数量
    $('#sjncdx').val("");//内存大小
    $('#sjmmsjs').val("");//每秒审计数据量
    $('#fuwuqiModel').modal();
    /**
     * 审计设备
     */
    $("#Sj2").css("display","none");
    $("#Sj1").css("display","block");
    $("#Sj3").css("display","block");
    $("#Sj4").css("display","none");
    $("#sj1div").css("display","block"); //存储div 隐藏

    /**
     * 存储
     */
    $("#ccdiv").css("display","none"); //存储div 隐藏
    $("#cunchusave").css("display","none");  //存储表头
    $("#cunchuupdaee").css("display","none"); //存储修改表头
    $("#ccxiugai").css("display","none");
    $("#ccsave").css("display","none"); //存储div 隐藏
    /**
     * 服务器
     */

    $("#fwqdiv").css("display","none");//服务器英藏
    $("#qlfoot1").css("display","none");
    $("#qlfoot2").css("display","none");
    $("#qlfoot4").css("display","none");
    $("#qlfoot3").css("display","none" );
    /**
     * San
     */
    $("#sandiv").css("display","none"); //存储div 隐藏
    $("#sanad").css("display","none");  //存储表头
    $("#sup").css("display","none"); //存储修改表头
    $("#sansave").css("display","none");
    $("#sanup").css("display","none"); //存储div 隐藏
    /**
     * 交换机
     */
    $("#jhjdiv1").css("display","none"); //存储div 隐藏
    $("#jhjfoot3").css("display","none");  //存储表头
    $("#jhjfoot4").css("display","none"); //存储修改表头
    $("#jhjfoot1").css("display","none");
    $("#jhjfoot2").css("display","none"); //存储div 隐藏
    /**
     * 安全设备
     */
    $("#Aq1").css("display","none" );
    $("#Aq2").css("display","none");
    $("#Aq4").css("display","none");
    $("#Aq3").css("display","none");
    $("#aq1div").css("display","none"); //存储div 隐藏

}
function saveSj() {
    var  zhuangtai=$("#zhuangtai ").val();
    var  yongtu=$("#yongtu ").val();
    var  gsqy=$("#gsqy ").val();
    var  gsdd=$("#gsdd ").val();
    var  gsfj=$("#gsfj ").val();
    var  azwz=$("#azwz ").val();
    var  szjg=$("#szjg ").val();
    var  zcbqh=$("#zcbqh ").val();
    var  zczt=$("#zczt ").val();
    var  zcgly=$("#zcgly ").val();
    var  zcbz=$("#zcbz ").val();
    var  sfwkryj =$("#sfwkryj ").val();
    var  eddygl=$("#eddygl ").val();
    var  zhonglian=$("#zhonglian ").val();
    var  szus=$("#szus ").val();
    var  sjfs=$("#sjfs ").val();
    var  sccs=$("#sccs ").val();
    var  xinghao=$("#xinghao ").val();
    var  xuliehao=$("#xuliehao ").val();
    var  wlqy=$("#wlqy ").val();
    var  dwglip=$("#dwglip ").val();
    var  dwglzwym=$("#dwglzwym ").val();
    var  dwglwg=$("#dwglwg ").val();
    var  sxsj =$("#sxsj ").val();
    var  yjwblx =$("#yjwblx ").val();
    var  yjwbjssj=$("#yjwbjssj ").val();
    var  yjwbfwcs=$("#yjwbfwcs ").val();
    var  yjwbzt=$("#yjwbzt ").val();
    var  yjwbfwjb=$("#yjwbfwjb ").val();
    var  yjwbfzr=$("#yjwbfzr ").val();
    var  sjsblx =$("#sjsblx ").val();//审计设备类型
    var  sjglksl=$("#sjglksl ").val();//管理口数量
    var  sjgksllx=$("#sjgksllx ").val();//光口速率类型
    var  sjpzgksl=$("#sjpzgksl ").val();//配置光口数量
    var  sjpzgmbsl=$("#sjpzgmbsl ").val();//配置光模块数量
    var  sjyygksl =$("#sjyygksl ").val();//已用光口数量
    var  sjdksllx=$("#sjdksllx ").val();//电口速率类型
    var  sjpzdksl=$("#sjpzdksl ").val();//配置电口数量
    var  sjyydksl=$("#sjyydksl ").val();//已用电口数量
    var  sjncdx=$("#sjncdx ").val();//内存大小
    var  sjmmsjs=$("#sjmmsjs ").val();//每秒审计数据量
    if ($.isEmptyObject(xuliehao)||$.trim(xuliehao) == "") {
        Showbo.Msg.alert('请输入序列号！');
        return false;
    }else if ($.isEmptyObject(yongtu)) {
        Showbo.Msg.alert('请输入用途！');
        return false;
    }else if ($.isEmptyObject(gsqy)) {
        Showbo.Msg.alert('请输入归属地域！');
        return false;
    } else if ($.isEmptyObject(gsdd)) {
        Showbo.Msg.alert('请输入归属地点！');
        return false;
    } else if ($.isEmptyObject(gsfj)) {
        Showbo.Msg.alert('请输入归属房间！');
        return false;
    }else if ($.isEmptyObject(azwz)) {
        Showbo.Msg.alert('请输入安装位置！');
        return false;
    }else if ($.isEmptyObject(szjg)) {
        Showbo.Msg.alert('请输入所在机柜！');
        return false;
    } else if ($.isEmptyObject(szus)) {
        Showbo.Msg.alert('请输入所占U数！');
        return false;
    } else if (szus=="0"){
        Showbo.Msg.alert('所占U数不可为0 ！');
        $("#szus ").val("");
        return false;
    }else if ($.isEmptyObject(sccs)) {
        Showbo.Msg.alert('请输入生产厂商！');
        return false;
    }else if ($.isEmptyObject(xinghao)) {
        Showbo.Msg.alert('请输入型号！');
        return false;
    }else if(!isIP(dwglip)){ //带外管理ip
        $('#dwglip').val("");
        return false;
    } else if(!iszIP(dwglzwym)){ //带外管理子网掩码
        $('#dwglzwym').val("");
        return false;
    }else if ($.isEmptyObject(sxsj)) {
        Showbo.Msg.alert('请选择上线日期！');
        return false;
    }else if ($.isEmptyObject(yjwbjssj)) {
        Showbo.Msg.alert('请选择硬件维保服务结束日期！');
        return false;
    } else if ($.isEmptyObject(yjwbfwcs)) {
        Showbo.Msg.alert('请输入硬件维保服务厂商！');
        return false;
    } else if ($.isEmptyObject(yjwbfzr)) {
        Showbo.Msg.alert('请输入硬件维护负责人！');
        return false;
    } else if ($.isEmptyObject(eddygl)) {
        Showbo.Msg.alert('请输入额定电源功率(KW)！');
        return false;
    }  else if ($.isEmptyObject(zcgly)) {
        Showbo.Msg.alert('请输入资产管理员！');
        return false;
    } else if ($.isEmptyObject(zhonglian)) {
        Showbo.Msg.alert('请输入重量！');
        return false;
    }

    else if ($.isEmptyObject(sjsblx)||$.trim(sjsblx) == "") {
        Showbo.Msg.alert('请选择审计设备类型！');
        return false;
    }else if ($.isEmptyObject(sjglksl)||$.trim(sjglksl) == "") {
        Showbo.Msg.alert('请输入管理口数量！');
        return false;
    }else if ($.isEmptyObject(sjpzgksl)||$.trim(sjpzgksl) == "") {
        Showbo.Msg.alert('请输入配置光口数量！');
        return false;
    } else if ($.isEmptyObject(sjpzgmbsl)||$.trim(sjpzgmbsl) == "") {
        Showbo.Msg.alert('请输入配置光模块数量！');
        return false;
    }else if ($.isEmptyObject(sjyygksl)||$.trim(sjyygksl) == "") {
        Showbo.Msg.alert('请输入已用光口数量！');
        return false;
    }else if ($.isEmptyObject(sjpzdksl)||$.trim(sjpzdksl) == "") {
        Showbo.Msg.alert('请输入配置电口数量！');
        return false;
    }else if ($.isEmptyObject(sjyydksl)||$.trim(sjyydksl) == "") {
        Showbo.Msg.alert('请输入已用电口数量！');
        return false;
    }else if ($.isEmptyObject(sjncdx)||$.trim(sjncdx) == "") {
        Showbo.Msg.alert('请输入内存大小(G)！');
        return false;
    }else if ($.isEmptyObject(sjmmsjs)||$.trim(sjmmsjs) == "") {
        Showbo.Msg.alert('请输入每秒审计数据量！');
        return false;
    } else if ($.isEmptyObject(sjgksllx)||$.trim(sjgksllx) == "") {
        Showbo.Msg.alert('请选择光口速率类型！');
        return false;
    }else if ($.isEmptyObject(sjdksllx)||$.trim(sjdksllx) == "") {
        Showbo.Msg.alert('请选择电口速率类型！');
        return false;
    }else if ($('#zczt').val()=="1" || $('#zczt').val()=="2"|| $('#zczt').val()=="3"|| $('#zczt').val()=="6"){
        if ($.isEmptyObject(zcbqh)) {
            Showbo.Msg.alert('请输入资产标签号！');
            return false;
        }
    }

    $.post("../cmdb/SjAddAll",{zhuangtai:zhuangtai,yongtu:yongtu, gsqy:gsqy, gsdd:gsdd,gsfj:gsfj,azwz:azwz,szjg:szjg,zcbqh:zcbqh,zczt:zczt,zcgly:zcgly, zcbz:zcbz,sfwkryj:sfwkryj,eddygl:eddygl,zhonglian:zhonglian,szus:szus,
        sjfs:sjfs,sccs:sccs,xinghao:xinghao,xuliehao:xuliehao, wlqy:wlqy,dwglip:dwglip,dwglzwym:dwglzwym,dwglwg:dwglwg,sxsj:sxsj,
        yjwblx:yjwblx,yjwbjssj:yjwbjssj,yjwbfwcs:yjwbfwcs,yjwbzt:yjwbzt, yjwbfwjb:yjwbfwjb,yjwbfzr:yjwbfzr, sjsblx:sjsblx,sjglksl:sjglksl,sjgksllx:sjgksllx,sjpzgksl:sjpzgksl, sjpzgmbsl:sjpzgmbsl,sjyygksl:sjpzgmbsl,sjdksllx:sjdksllx, sjpzdksl:sjpzdksl,sjyydksl:sjyydksl,sjncdx:sjncdx,sjmmsjs:sjmmsjs},function (d) {
        if (d =="you"){
            Showbo.Msg.alert('此序列号已经存在！');
        } else if(d=="ok"){
            Showbo.Msg.alert('审计设备添加成功');
            $('#teacher_table').bootstrapTable('refreshOptions', {pageNumber: 1, pagesize: 8});
            $('#fuwuqiModel').modal('hide');
        }else {
            Showbo.Msg.alert('添加失败');
        }
    })
}
function addAq() {
    $('#Aqid').val("");//id
    $('#yongtu').val("");//用途
    $('#gsqy').val("");//归属区域
    $('#gsdd').val("");//归属地点
    $('#gsfj').val("");//归属房间
    $('#azwz').val("");//安装位置
    $('#szjg').val("");//所在机柜
    $('#zcbqh').val("");//资产标签号
    $('#zcgly').val("");//资产管理员
    $('#zcbz').val("");//资产备注
    $('#eddygl').val("");//额定电源功率(KW)
    $('#zhonglian').val("");//重量
    $('#szus').val("");//所占U数
    $('#sccs').val("");//生产厂商
    $('#xinghao').val("");//型号
    $('#xuliehao').val("");//序列号
    $('#dwglip').val("");//带外管理IP、
    $('#dwglzwym').val("");//带外管理子网掩码
    $('#dwglwg').val("");//带外管理网关
    $('#sxsj').val("");//上线时间
    $('#yjwbjssj').val("");//硬件维保服务结束日期
    $('#yjwbfwcs').val("");//硬件维保服务厂商
    $('#yjwbfzr').val("");//硬件维保负责人

    $('#glksl').val("");//管理口数量
    $('#pzgksl').val("");//配置光口数量
    $('#pzgmksl').val("");//配置光模块数量
    $('#yygksl').val("");//已用光口数量
    $('#apzdksl').val("");//配置电口数量
    $('#yydksl').val("");//已用电口数量
    $('#ttl').val("");//吞吐量
    $('#zdbfs').val("");//最大并发数

    /**
     * 服务器
     */

    $('#fuwuqiModel').modal();
    $("#fwqdiv").css("display","none");
    $("#qlfoot2").css("display","none");
    $("#qlfoot1").css("display","none");
    $("#qlfoot3").css("display","none");
    $("#qlfoot4").css("display","none");

    /**
     * 存储
     */
    $("#ccdiv").css("display","none"); //存储div 隐藏
    $("#cunchusave").css("display","none");  //存储表头
    $("#cunchuupdaee").css("display","none"); //存储修改表头
    $("#ccxiugai").css("display","none");
    $("#ccsave").css("display","none"); //存储div 隐藏
    /**
     * San
     */
    $("#sandiv").css("display","none"); //存储div 隐藏
    $("#sanad").css("display","none");  //存储表头
    $("#sup").css("display","none"); //存储修改表头
    $("#sansave").css("display","none");
    $("#sanup").css("display","none"); //存储div 隐藏

    /**
     * 交换机
     */
    $("#jhjdiv1").css("display","none"); //存储div 隐藏
    $("#jhjfoot2").css("display","none");
    $("#jhjfoot1").css("display","none");
    $("#jhjfoot4").css("display","none");
    $("#jhjfoot3").css("display","none");
    /**
     * 安全设备
     */

    $("#Aq1").css("display","block");
    $("#Aq2").css("display","none");
    $("#Aq4").css("display","none");
    $("#Aq3").css("display","block");
    $("#aq1div").css("display","block"); //存储div 隐藏
    /**
     * 审计设备
     */
    $("#Sj1").css("display","none" );
    $("#Sj3").css("display","none");
    $("#Sj4").css("display","none");
    $("#Sj2").css("display","none");
    $("#sj1div").css("display","none"); //存储div 隐藏
}
function saveAq () {

    var  zhuangtai=$("#zhuangtai ").val();
    var  yongtu=$("#yongtu ").val();
    var  gsqy=$("#gsqy ").val();
    var  gsdd=$("#gsdd ").val();
    var  gsfj=$("#gsfj ").val();
    var  azwz=$("#azwz ").val();
    var  szjg=$("#szjg ").val();
    var  zcbqh=$("#zcbqh ").val();
    var  zczt=$("#zczt ").val();
    var  zcgly=$("#zcgly ").val();
    var  zcbz=$("#zcbz ").val();
    var  sfwkryj =$("#sfwkryj ").val();
    var  eddygl=$("#eddygl ").val();
    var  zhonglian=$("#zhonglian ").val();
    var  szus=$("#szus ").val();
    var  sjfs=$("#sjfs ").val();
    var  sccs=$("#sccs ").val();
    var  xinghao=$("#xinghao ").val();
    var  xuliehao=$("#xuliehao ").val();
    var  wlqy=$("#wlqy ").val();
    var  dwglip=$("#dwglip ").val();
    var  dwglzwym=$("#dwglzwym ").val();
    var  dwglwg=$("#dwglwg ").val();
    var   sxsj =$("#sxsj ").val();
    var   yjwblx =$("#yjwblx ").val();
    var   yjwbjssj=$("#yjwbjssj ").val();
    var   yjwbfwcs=$("#yjwbfwcs ").val();
    var   yjwbzt=$("#yjwbzt ").val();
    var   yjwbfwjb=$("#yjwbfwjb ").val();
    var   yjwbfzr=$("#yjwbfzr ").val();
    var   aqsblx=$("#aqsblx ").val();//安全设备类型
    var   sfzysb =$("#sfzysb ").val();//是否专用设备
    var   glksl =$("#glksl ").val();//管理口数量
    var   gksllx =$("#gksllx ").val();//光口速率类型
    var   pzgksl=$("#pzgksl ").val();//配置光口数量
    var   pzgmksl=$("#pzgmksl ").val();//配置光模块数量
    var   yygksl =$("#yygksl ").val();//已用光口数量
    var   adksllx=$("#adksllx ").val();//电口速率类型
    var   apzdksl=$("#apzdksl ").val();//配置电口数量
    var  yydksl =$("#yydksl ").val();//已用电口数量
    var  sfzcbypass =$("#sfzcbypass ").val();//是否支持by-pass
    var   ttl=$("#ttl ").val();//吞吐量
    var   zdbfs=$("#zdbfs ").val();//最大并发数
    if ($.isEmptyObject(xuliehao)||$.trim(xuliehao) == "") {
        Showbo.Msg.alert('请输入序列号！');
        return false;
    }else if ($.isEmptyObject(yongtu)) {
        Showbo.Msg.alert('请输入用途！');
        return false;
    }else if ($.isEmptyObject(gsqy)) {
        Showbo.Msg.alert('请输入归属地域！');
        return false;
    } else if ($.isEmptyObject(gsdd)) {
        Showbo.Msg.alert('请输入归属地点！');
        return false;
    } else if ($.isEmptyObject(gsfj)) {
        Showbo.Msg.alert('请输入归属房间！');
        return false;
    }else if ($.isEmptyObject(azwz)) {
        Showbo.Msg.alert('请输入安装位置！');
        return false;
    }else if ($.isEmptyObject(szjg)) {
        Showbo.Msg.alert('请输入所在机柜！');
        return false;
    } else if ($.isEmptyObject(szus)) {
        Showbo.Msg.alert('请输入所占U数！');
        return false;
    } else if (szus=="0"){
        Showbo.Msg.alert('所占U数不可为0 ！');
        $("#szus ").val("");
        return false;
    }else if ($.isEmptyObject(sccs)) {
        Showbo.Msg.alert('请输入生产厂商！');
        return false;
    }else if ($.isEmptyObject(xinghao)) {
        Showbo.Msg.alert('请输入型号！');
        return false;
    }else if(!isIP(dwglip)){ //带外管理ip
        $('#dwglip').val("");
        return false;
    } else if(!iszIP(dwglzwym)){ //带外管理子网掩码
        $('#dwglzwym').val("");
        return false;
    }else if ($.isEmptyObject(sxsj)) {
        Showbo.Msg.alert('请选择上线日期！');
        return false;
    }else if ($.isEmptyObject(yjwbjssj)) {
        Showbo.Msg.alert('请选择硬件维保服务结束日期！');
        return false;
    } else if ($.isEmptyObject(yjwbfwcs)) {
        Showbo.Msg.alert('请输入硬件维保服务厂商！');
        return false;
    } else if ($.isEmptyObject(yjwbfzr)) {
        Showbo.Msg.alert('请输入硬件维护负责人！');
        return false;
    } else if ($.isEmptyObject(eddygl)) {
        Showbo.Msg.alert('请输入额定电源功率(KW)！');
        return false;
    }  else if ($.isEmptyObject(zcgly)) {
        Showbo.Msg.alert('请输入资产管理员！');
        return false;
    } else if ($.isEmptyObject(zhonglian)) {
        Showbo.Msg.alert('请输入重量！');
        return false;
    }
    else if ($.isEmptyObject(aqsblx)||$.trim(aqsblx) == "") {
        Showbo.Msg.alert('请选择安全设备类型！');
        return false;
    }  else if ($.isEmptyObject(sfzysb)||$.trim(sfzysb) == "") {
        Showbo.Msg.alert('请选择是否专用设备！');
        return false;
    } else if ($.isEmptyObject(glksl)||$.trim(glksl) == "") {
        Showbo.Msg.alert('请输入管理口数量！');
        return false;
    } else if ($.isEmptyObject(gksllx)||$.trim(gksllx) == "") {
        Showbo.Msg.alert('请选择光口速率类型！');
        return false;
    } else if ($.isEmptyObject(pzgksl)||$.trim(pzgksl) == "") {
        Showbo.Msg.alert('请输入配置光口数量！');
        return false;
    }else if ($.isEmptyObject(pzgmksl)||$.trim(pzgmksl) == "") {
        Showbo.Msg.alert('请输入配置光模块数量！');
        return false;
    }else if ($.isEmptyObject(yydksl)||$.trim(yydksl) == "") {
        Showbo.Msg.alert('请输入已用电口数量！');
        return false;
    }else if ($.isEmptyObject(apzdksl)||$.trim(apzdksl) == "") {
        Showbo.Msg.alert('请输入配置电口数量！');
        return false;
    } else if ($.isEmptyObject(yygksl)||$.trim(yygksl) == "") {
        Showbo.Msg.alert('请输入已用光口数量！');
        return false;
    }else if ($.isEmptyObject(ttl)||$.trim(ttl) == "") {
        Showbo.Msg.alert('请输入吞吐量(G)！');
        return false;
    }else if ($.isEmptyObject(zdbfs)||$.trim(zdbfs) == "") {
        Showbo.Msg.alert('请输入最大并发数！');
        return false;
    }
    else if ($.isEmptyObject(adksllx)||$.trim(adksllx) == "") {
        Showbo.Msg.alert('请选择电口速率类型！');
        return false;
    } else if ($.isEmptyObject(sfzcbypass)||$.trim(sfzcbypass) == "") {
        Showbo.Msg.alert('请选择是否支持by-pass！');
        return false;
    } else if ($('#zczt').val()=="1" || $('#zczt').val()=="2"|| $('#zczt').val()=="3"|| $('#zczt').val()=="6"){
        if ($.isEmptyObject(zcbqh)) {
            Showbo.Msg.alert('请输入资产标签号！');
            return false;
        }
    }

    $.post("../cmdb/AqAddAll",{zhuangtai:zhuangtai,yongtu:yongtu, gsqy:gsqy, gsdd:gsdd,gsfj:gsfj,azwz:azwz,szjg:szjg,zcbqh:zcbqh,zczt:zczt,zcgly:zcgly, zcbz:zcbz,sfwkryj:sfwkryj,eddygl:eddygl,zhonglian:zhonglian,szus:szus,
        sjfs:sjfs,sccs:sccs,xinghao:xinghao,xuliehao:xuliehao, wlqy:wlqy,dwglip:dwglip,dwglzwym:dwglzwym,dwglwg:dwglwg,sxsj:sxsj, yjwblx:yjwblx,yjwbjssj:yjwbjssj,yjwbfwcs:yjwbfwcs,yjwbzt:yjwbzt, yjwbfwjb:yjwbfwjb,yjwbfzr:yjwbfzr,
        aqsblx:aqsblx,sfzysb:sfzysb,glksl:glksl,gksllx:gksllx, pzgksl:pzgksl,pzgmksl:pzgmksl,yygksl:yygksl,adksllx:adksllx,apzdksl:apzdksl, yydksl:yydksl,sfzcbypass:sfzcbypass,ttl:ttl,zdbfs:zdbfs},function (d) {

        if (d =="you"){
            Showbo.Msg.alert('此序列号已经存在！');
        } else if(d=="ok"){
            Showbo.Msg.alert('安全设备添加成功');
            $('#teacher_table').bootstrapTable('refreshOptions', {pageNumber: 1, pagesize: 8});
            $('#fuwuqiModel').modal('hide');
        }else {
            Showbo.Msg.alert('添加失败');
        }
    });
}
function addJHJ() {
    $('#JhjId').val("");//id
    $('#yongtu').val("");//用途
    $('#gsqy').val("");//归属区域
    $('#gsdd').val("");//归属地点
    $('#gsfj').val("");//归属房间
    $('#azwz').val("");//安装位置
    $('#szjg').val("");//所在机柜
    $('#zcbqh').val("");//资产标签号
    $('#zcgly').val("");//资产管理员
    $('#zcbz').val("");//资产备注
    $('#eddygl').val("");//额定电源功率(KW)
    $('#zhonglian').val("");//重量
    $('#szus').val("");//所占U数
    $('#sccs').val("");//生产厂商
    $('#xinghao').val("");//型号
    $('#xuliehao').val("");//序列号
    $('#dwglip').val("");//带外管理IP、
    $('#dwglzwym').val("");//带外管理子网掩码
    $('#dwglwg').val("");//带外管理网关
    $('#sxsj').val("");//上线时间
    $('#yjwbjssj').val("");//硬件维保服务结束日期
    $('#yjwbfwcs').val("");//硬件维保服务厂商
    $('#yjwbfzr').val("");//硬件维保负责人

    $('#pzbjccsl').val("");//配置板卡插槽数量
    $('#yybkccsl').val("");//已用板卡插槽数量
    $('#pzwzgksl').val("");//配置万兆光口数量
    $('#pzwzgmksl').val("");//配置万兆光模块数量
    $('#kywzgdksl').val("");//可用万兆光端口数量
    $('#pzqzgksl').val("");//配置千兆光口数量
    $('#pzqzgmksl').val("");//配置千兆光模块数量
    $('#kyqzgdksl').val("");//可用千兆光端口数量
    $('#pzdksl').val("");//配置电口数量
    $('#kydksl').val("");//可用端口数量
    $('#lyxy').val("");//路由协议
    /**
     * 服务器
     */

    $('#fuwuqiModel').modal();
    $("#fwqdiv").css("display","none");
    $("#qlfoot2").css("display","none");
    $("#qlfoot1").css("display","none");
    $("#qlfoot3").css("display","none");
    $("#qlfoot4").css("display","none");

    /**
     * 存储
     */
    $("#ccdiv").css("display","none"); //存储div 隐藏
    $("#cunchusave").css("display","none");  //存储表头
    $("#cunchuupdaee").css("display","none"); //存储修改表头
    $("#ccxiugai").css("display","none");
    $("#ccsave").css("display","none"); //存储div 隐藏
    /**
     * San
     */
    $("#sandiv").css("display","none"); //存储div 隐藏
    $("#sanad").css("display","none");  //存储表头
    $("#sup").css("display","none"); //存储修改表头
    $("#sansave").css("display","none");
    $("#sanup").css("display","none"); //存储div 隐藏

    /**
     * 交换机
     */
    $("#jhjdiv1").css("display","block"); //存储div 隐藏
    $("#jhjfoot2").css("display","none");
    $("#jhjfoot1").css("display","block");
    $("#jhjfoot4").css("display","none");
    $("#jhjfoot3").css("display","block");
    /**
     * 安全设备
     */
    $("#Aq1").css("display","none" );
    $("#Aq2").css("display","none");
    $("#Aq4").css("display","none");
    $("#Aq3").css("display","none");
    $("#aq1div").css("display","none"); //存储div 隐藏
    /**
     * 审计设备
     */
    $("#Sj1").css("display","none" );
    $("#Sj3").css("display","none");
    $("#Sj4").css("display","none");
    $("#Sj2").css("display","none");
    $("#sj1div").css("display","none"); //存储div 隐藏

}
function savejhj() {

    var  zhuangtai=$("#zhuangtai ").val();
    var  yongtu=$("#yongtu ").val();
    var  gsqy=$("#gsqy ").val();
    var  gsdd=$("#gsdd ").val();
    var  gsfj=$("#gsfj ").val();
    var  azwz=$("#azwz ").val();
    var  szjg=$("#szjg ").val();
    var  zcbqh=$("#zcbqh ").val();
    var  zczt=$("#zczt ").val();
    var  zcgly=$("#zcgly ").val();
    var  zcbz=$("#zcbz ").val();
    var  sfwkryj =$("#sfwkryj ").val();
    var  eddygl=$("#eddygl ").val();
    var  zhonglian=$("#zhonglian ").val();
    var  szus=$("#szus ").val();
    var  sjfs=$("#sjfs ").val();
    var  sccs=$("#sccs ").val();
    var  xinghao=$("#xinghao ").val();
    var  xuliehao=$("#xuliehao ").val();
    var  yjwblx =$("#yjwblx ").val();
    var  yjwbjssj=$("#yjwbjssj ").val();
    var  yjwbfwcs=$("#yjwbfwcs ").val();
    var  yjwbzt=$("#yjwbzt ").val();
    var  yjwbfwjb=$("#yjwbfwjb ").val();
    var  yjwbfzr=$("#yjwbfzr ").val();
    var jhjlx =$("#jhjlx").val();//交换机类型
    var sfscjhj =$("#sfscjhj").val();//是否三层交换机
    var pzbjccsl =$("#pzbjccsl").val();//配置板卡插槽数量
    var yybkccsl =$("#yybkccsl").val();//已用板卡插槽数量
    var pzwzgksl =$("#pzwzgksl").val();//配置万兆光口数量
    var pzwzgmksl =$("#pzwzgmksl").val();//配置万兆光模块数量
    var kywzgdksl =$("#kywzgdksl").val();//可用万兆光端口数量
    var pzqzgksl =$("#pzqzgksl").val();//配置千兆光口数量
    var pzqzgmksl =$("#pzqzgmksl").val();//配置千兆光模块数量
    var kyqzgdksl=$("#kyqzgdksl").val();//可用千兆光端口数量
    var pzdksl =$("#pzdksl").val();//配置电口数量
    var dksllx=$("#dksllx").val();//电口速率类型
    var kydksl =$("#kydksl").val();//可用端口数量
    var lyxy=$("#lyxy").val();//路由协议
    var bbdk=$("#bbdk").val();//背板带宽
    var bzfl =$("#bzfl").val();//包转发率
    var sfstproot=$("#sfstproot").val();//是否STPRoot
    var stpxylx=$("#stpxylx").val();//STP协议类型
    var sfqdstp=$("#sfqdstp").val();//是否启动STP
    var sfkdj=$("#sfkdj").val();//是否可堆叠
    var  wlqy=$("#wlqy ").val();
    var  dwglip=$("#dwglip ").val();
    var  dwglzwym=$("#dwglzwym ").val();
    var  dwglwg=$("#dwglwg ").val();
    var  sxsj =$("#sxsj ").val();
    if ($.isEmptyObject(xuliehao)||$.trim(xuliehao) == "") {
        Showbo.Msg.alert('请输入序列号！');
        return false;
    }else if ($.isEmptyObject(yongtu)) {
        Showbo.Msg.alert('请输入用途！');
        return false;
    }else if ($.isEmptyObject(gsqy)) {
        Showbo.Msg.alert('请输入归属地域！');
        return false;
    } else if ($.isEmptyObject(gsdd)) {
        Showbo.Msg.alert('请输入归属地点！');
        return false;
    } else if ($.isEmptyObject(gsfj)) {
        Showbo.Msg.alert('请输入归属房间！');
        return false;
    }else if ($.isEmptyObject(azwz)) {
        Showbo.Msg.alert('请输入安装位置！');
        return false;
    }else if ($.isEmptyObject(szjg)) {
        Showbo.Msg.alert('请输入所在机柜！');
        return false;
    } else if ($.isEmptyObject(szus)) {
        Showbo.Msg.alert('请输入所占U数！');
        return false;
    } else if (szus=="0"){
        Showbo.Msg.alert('所占U数不可为0 ！');
        $("#szus ").val("");
        return false;
    }else if ($.isEmptyObject(sccs)) {
        Showbo.Msg.alert('请输入生产厂商！');
        return false;
    }else if ($.isEmptyObject(xinghao)) {
        Showbo.Msg.alert('请输入型号！');
        return false;
    }else if(!isIP(dwglip)){ //带外管理ip
        $('#dwglip').val("");
        return false;
    } else if(!iszIP(dwglzwym)){ //带外管理子网掩码
        $('#dwglzwym').val("");
        return false;
    }else if ($.isEmptyObject(sxsj)) {
        Showbo.Msg.alert('请选择上线日期！');
        return false;
    }else if ($.isEmptyObject(yjwbjssj)) {
        Showbo.Msg.alert('请选择硬件维保服务结束日期！');
        return false;
    } else if ($.isEmptyObject(yjwbfwcs)) {
        Showbo.Msg.alert('请输入硬件维保服务厂商！');
        return false;
    } else if ($.isEmptyObject(yjwbfzr)) {
        Showbo.Msg.alert('请输入硬件维护负责人！');
        return false;
    } else if ($.isEmptyObject(eddygl)) {
        Showbo.Msg.alert('请输入额定电源功率(KW)！');
        return false;
    }  else if ($.isEmptyObject(zcgly)) {
        Showbo.Msg.alert('请输入资产管理员！');
        return false;
    } else if ($.isEmptyObject(zhonglian)) {
        Showbo.Msg.alert('请输入重量！');
        return false;
    }
    else if ($.isEmptyObject(jhjlx)||$.trim(jhjlx) == "") {
        Showbo.Msg.alert('请选择交换机类型！');
        return false;
    }else if ($.isEmptyObject(sfscjhj)||$.trim(sfscjhj) == "") {
        Showbo.Msg.alert('请选择是否三层交换机！');
        return false;
    }else if ($.isEmptyObject(pzbjccsl)||$.trim(pzbjccsl) == "") {
        Showbo.Msg.alert('请输入配置板卡插槽数量！');
        return false;
    }else if ($.isEmptyObject(yybkccsl)||$.trim(yybkccsl) == "") {
        Showbo.Msg.alert('请输入已用板卡插槽数量！');
        return false;
    }else if ($.isEmptyObject(pzwzgksl)||$.trim(pzwzgksl) == "") {
        Showbo.Msg.alert('请输入配置万兆光口数量！');
        return false;
    }else if ($.isEmptyObject(pzwzgmksl)||$.trim(pzwzgmksl) == "") {
        Showbo.Msg.alert('请输入配置万兆光模块数量！');
        return false;
    }else if ($.isEmptyObject(kywzgdksl)||$.trim(kywzgdksl) == "") {
        Showbo.Msg.alert('请输入可用万兆光端口数量！');
        return false;
    } else if ($.isEmptyObject(pzqzgksl)||$.trim(pzqzgksl) == "") {
        Showbo.Msg.alert('请输入配置千兆光口数量！');
        return false;
    }else if ($.isEmptyObject(pzqzgmksl)||$.trim(pzqzgmksl) == "") {
        Showbo.Msg.alert('请输入配置千兆光模块数量！');
        return false;
    }else if ($.isEmptyObject(kyqzgdksl)||$.trim(kyqzgdksl) == "") {
        Showbo.Msg.alert('请输入可用千兆光端口数量！');
        return false;
    }else if ($.isEmptyObject(pzdksl)||$.trim(pzdksl) == "") {
        Showbo.Msg.alert('请输入配置电口数量！');
        return false;
    }else if ($.isEmptyObject(kydksl)||$.trim(kydksl) == "") {
        Showbo.Msg.alert('请输入可用端口数量！');
        return false;
    }else if ($.isEmptyObject(lyxy)||$.trim(lyxy) == "") {
        Showbo.Msg.alert('请输入路由协议！');
        return false;
    } else if ($.isEmptyObject(bbdk)||$.trim(bbdk) == "") {
        Showbo.Msg.alert('请选择背板带宽！');
        return false;
    }else if ($.isEmptyObject(bzfl)||$.trim(bzfl) == "") {
        Showbo.Msg.alert('请选择包转发率！');
        return false;
    }else if ($.isEmptyObject(sfstproot)||$.trim(sfstproot) == "") {
        Showbo.Msg.alert('请选择是否STPRoot！');
        return false;
    }  else if ($.isEmptyObject(stpxylx)||$.trim(stpxylx) == "") {
        Showbo.Msg.alert('请选择STP协议类型！');
        return false;
    }else if ($.isEmptyObject(dksllx)||$.trim(dksllx) == "") {
        Showbo.Msg.alert('请选择电口速率类型！');
        return false;
    }else if ($.isEmptyObject(sfqdstp)||$.trim(sfqdstp) == "") {
        Showbo.Msg.alert('请选择是否启动STP！');
        return false;
    } else if ($.isEmptyObject(sfkdj)||$.trim(sfkdj) == "") {
        Showbo.Msg.alert('请选择是否可堆叠！');
        return false;
    }else if ($('#zczt').val()=="1" || $('#zczt').val()=="2"|| $('#zczt').val()=="3"|| $('#zczt').val()=="6"){
        if ($.isEmptyObject(zcbqh)) {
            Showbo.Msg.alert('请输入资产标签号！');
            return false;
        }
    }

    $.post("../cmdb/JHJAddAll",{zhuangtai:zhuangtai,yongtu:yongtu, gsqy:gsqy, gsdd:gsdd,gsfj:gsfj,azwz:azwz,szjg:szjg,zcbqh:zcbqh,zczt:zczt,zcgly:zcgly, zcbz:zcbz,sfwkryj:sfwkryj,eddygl:eddygl,zhonglian:zhonglian,szus:szus,
        sjfs:sjfs,sccs:sccs,xinghao:xinghao,xuliehao:xuliehao, wlqy:wlqy,dwglip:dwglip,dwglzwym:dwglzwym,dwglwg:dwglwg,sxsj:sxsj, yjwblx:yjwblx,yjwbjssj:yjwbjssj,yjwbfwcs:yjwbfwcs,yjwbzt:yjwbzt, yjwbfwjb:yjwbfwjb,yjwbfzr:yjwbfzr,
        jhjlx:jhjlx,sfscjhj:sfscjhj,pzbjccsl:pzbjccsl,yybkccsl:yybkccsl,pzwzgksl:pzwzgksl,pzwzgmksl:pzwzgmksl,kywzgdksl:kywzgdksl, pzqzgksl:pzqzgksl,pzqzgmksl:pzqzgmksl,kyqzgdksl:kyqzgdksl,pzdksl:pzdksl,dksllx:dksllx,kydksl:kydksl, lyxy:lyxy,bbdk:bbdk,bzfl:bzfl,sfstproot:sfstproot,stpxylx:stpxylx,sfqdstp:sfqdstp,sfkdj:sfkdj},function (d) {
        if (d =="you"){
            Showbo.Msg.alert('此序列号已经存在！');
        }  else if(d=="ok"){
            Showbo.Msg.alert('交换机属性添加成功');
            $('#teacher_table').bootstrapTable('refreshOptions', {pageNumber: 1, pagesize: 8});
            $('#fuwuqiModel').modal('hide');
        }else {
            Showbo.Msg.alert('添加失败');
        }
    });
}
function addSan() {
    $('#sanId').val("");//id
    $('#yongtu').val("");//用途
    $('#gsqy').val("");//归属区域
    $('#gsdd').val("");//归属地点
    $('#gsfj').val("");//归属房间
    $('#azwz').val("");//安装位置
    $('#szjg').val("");//所在机柜
    $('#zcbqh').val("");//资产标签号
    $('#zcgly').val("");//资产管理员
    $('#zcbz').val("");//资产备注
    $('#eddygl').val("");//额定电源功率(KW)
    $('#zhonglian').val("");//重量
    $('#szus').val("");//所占U数
    $('#sccs').val("");//生产厂商
    $('#xinghao').val("");//型号
    $('#xuliehao').val("");//序列号
    $('#dwglip').val("");//带外管理IP、
    $('#dwglzwym').val("");//带外管理子网掩码
    $('#dwglwg').val("");//带外管理网关
    $('#sxsj').val("");//上线时间
    $('#yjwbjssj').val("");//硬件维保服务结束日期
    $('#yjwbfwcs').val("");//硬件维保服务厂商
    $('#yjwbfzr').val("");//硬件维保负责人

    $('#pzdks').val("");//配置端口数
    $('#pzfcmks').val("");//配置FC模块数
    $('#dksl').val("");//端口速率
    $('#sykydks').val("");//剩余可用端口数
    $('#pzbkccs').val("");//配置板卡插槽数
    $('#pzbks').val("");//配置板卡数
    $('#fuwuqiModel').modal();
    /**
     * 存储
     */
    $("#ccdiv").css("display","none"); //存储div 隐藏
    $("#cunchusave").css("display","none");  //存储表头
    $("#cunchuupdaee").css("display","none"); //存储修改表头
    $("#ccxiugai").css("display","none");
    $("#ccsave").css("display","none"); //存储div 隐藏
    /**
     * 服务器
     */

    $("#fwqdiv").css("display","none");//服务器英藏
    $("#qlfoot1").css("display","none");
    $("#qlfoot2").css("display","none");
    $("#qlfoot4").css("display","none");
    $("#qlfoot3").css("display","none" );
    /**
     * San
     */
    $("#sandiv").css("display","block"); //存储div 隐藏
    $("#sup").css("display","none");
    $("#sanad").css("display","block");
    $("#sanup").css("display","none");
    $("#sansave").css("display","block");
    /**
     * 交换机
     */
    $("#jhjdiv1").css("display","none"); //存储div 隐藏
    $("#jhjfoot3").css("display","none");  //存储表头
    $("#jhjfoot4").css("display","none"); //存储修改表头
    $("#jhjfoot1").css("display","none");
    $("#jhjfoot2").css("display","none"); //存储div 隐藏
    /**
     * 安全设备
     */
    $("#Aq1").css("display","none" );
    $("#Aq2").css("display","none");
    $("#Aq4").css("display","none");
    $("#Aq3").css("display","none");
    $("#aq1div").css("display","none"); //存储div 隐藏
    /**
     * 审计设备
     */
    $("#Sj1").css("display","none" );
    $("#Sj3").css("display","none");
    $("#Sj4").css("display","none");
    $("#Sj2").css("display","none");
    $("#sj1div").css("display","none"); //存储div 隐藏
}
function saveSan() {

    var  zhuangtai=$("#zhuangtai ").val();
    var  yongtu=$("#yongtu ").val();
    var  gsqy=$("#gsqy ").val();
    var  gsdd=$("#gsdd ").val();
    var  gsfj=$("#gsfj ").val();
    var  azwz=$("#azwz ").val();
    var  szjg=$("#szjg ").val();
    var  zcbqh=$("#zcbqh ").val();
    var  zczt=$("#zczt ").val();
    var  zcgly=$("#zcgly ").val();
    var  zcbz=$("#zcbz ").val();
    var  sfwkryj =$("#sfwkryj ").val();
    var  eddygl=$("#eddygl ").val();
    var  zhonglian=$("#zhonglian ").val();
    var  szus=$("#szus ").val();
    var  sjfs=$("#sjfs ").val();
    var  sccs=$("#sccs ").val();
    var  xinghao=$("#xinghao ").val();
    var  xuliehao=$("#xuliehao ").val();
    var  yjwblx =$("#yjwblx ").val();
    var  yjwbjssj=$("#yjwbjssj ").val();
    var  yjwbfwcs=$("#yjwbfwcs ").val();
    var  yjwbzt=$("#yjwbzt ").val();
    var  yjwbfwjb=$("#yjwbfwjb ").val();
    var  yjwbfzr=$("#yjwbfzr ").val();

    var pzbks= $("#pzbks ").val();//配置板卡数
    var pzbkccs= $("#pzbkccs ").val();//配置板卡插槽数
    var sykydks= $("#sykydks ").val();//剩余可用端口数
    var dksl= $("#dksl").val();//端口速率
    var pzfcmks= $("#pzfcmks ").val();//配置FC模块数
    var pzdks= $("#pzdks ").val();//
    var  dwglwg=$("#dwglwg ").val();
    var  dwglzwym=$("#dwglzwym ").val();
    var  sxsj =$("#sxsj ").val();
    var  wlqy=$("#wlqy ").val();
    var  dwglip=$("#dwglip ").val();
    if ($.isEmptyObject(xuliehao)||$.trim(xuliehao) == "") {
        Showbo.Msg.alert('请输入序列号！');
        return false;
    }else if ($.isEmptyObject(yongtu)) {
        Showbo.Msg.alert('请输入用途！');
        return false;
    }else if ($.isEmptyObject(gsqy)) {
        Showbo.Msg.alert('请输入归属地域！');
        return false;
    } else if ($.isEmptyObject(gsdd)) {
        Showbo.Msg.alert('请输入归属地点！');
        return false;
    } else if ($.isEmptyObject(gsfj)) {
        Showbo.Msg.alert('请输入归属房间！');
        return false;
    }else if ($.isEmptyObject(azwz)) {
        Showbo.Msg.alert('请输入安装位置！');
        return false;
    }else if ($.isEmptyObject(szjg)) {
        Showbo.Msg.alert('请输入所在机柜！');
        return false;
    } else if ($.isEmptyObject(szus)) {
        Showbo.Msg.alert('请输入所占U数！');
        return false;
    } else if (szus=="0"){
        Showbo.Msg.alert('所占U数不可为0 ！');
        $("#szus ").val("");
        return false;
    }else if ($.isEmptyObject(sccs)) {
        Showbo.Msg.alert('请输入生产厂商！');
        return false;
    }else if ($.isEmptyObject(xinghao)) {
        Showbo.Msg.alert('请输入型号！');
        return false;
    }else if(!isIP(dwglip)){ //带外管理ip
        $('#dwglip').val("");
        return false;
    } else if(!iszIP(dwglzwym)){ //带外管理子网掩码
        $('#dwglzwym').val("");
        return false;
    }else if ($.isEmptyObject(sxsj)) {
        Showbo.Msg.alert('请选择上线日期！');
        return false;
    }else if ($.isEmptyObject(yjwbjssj)) {
        Showbo.Msg.alert('请选择硬件维保服务结束日期！');
        return false;
    } else if ($.isEmptyObject(yjwbfwcs)) {
        Showbo.Msg.alert('请输入硬件维保服务厂商！');
        return false;
    } else if ($.isEmptyObject(yjwbfzr)) {
        Showbo.Msg.alert('请输入硬件维护负责人！');
        return false;
    } else if ($.isEmptyObject(eddygl)) {
        Showbo.Msg.alert('请输入额定电源功率(KW)！');
        return false;
    }  else if ($.isEmptyObject(zcgly)) {
        Showbo.Msg.alert('请输入资产管理员！');
        return false;
    } else if ($.isEmptyObject(zhonglian)) {
        Showbo.Msg.alert('请输入重量！');
        return false;
    }

    else if ($.isEmptyObject(pzdks)||$.trim(pzdks) == "") {
        Showbo.Msg.alert('请输入配置端口数！');
        return false;
    }else if ($.isEmptyObject(pzfcmks)||$.trim(pzfcmks) == "") {
        Showbo.Msg.alert('请输入配置FC模块数！');
        return false;
    }else if ($.isEmptyObject(dksl)||$.trim(dksl) == "") {
        Showbo.Msg.alert('请输入端口速率！');
        return false;
    }else if ($.isEmptyObject(sykydks)||$.trim(sykydks) == "") {
        Showbo.Msg.alert('请输入剩余可用端口数！');
        return false;
    }else if ($.isEmptyObject(pzbkccs)||$.trim(pzbkccs) == "") {
        Showbo.Msg.alert('请输入配置板卡插槽数！');
        return false;
    } else if ($.isEmptyObject(pzbks)||$.trim(pzbks) == "") {
        Showbo.Msg.alert('请输入配置板卡数！');
        return false;
    }else if ($('#zczt').val()=="1" || $('#zczt').val()=="2"|| $('#zczt').val()=="3"|| $('#zczt').val()=="6"){
        if ($.isEmptyObject(zcbqh)) {
            Showbo.Msg.alert('请输入资产标签号！');
            return false;
        }
    }

    $.post("../cmdb/SanAll",{zhuangtai:zhuangtai,yongtu:yongtu, gsqy:gsqy, gsdd:gsdd,gsfj:gsfj,azwz:azwz,szjg:szjg,zcbqh:zcbqh,zczt:zczt,zcgly:zcgly, zcbz:zcbz,sfwkryj:sfwkryj,eddygl:eddygl,zhonglian:zhonglian,szus:szus,
        sjfs:sjfs,sccs:sccs,xinghao:xinghao,xuliehao:xuliehao, wlqy:wlqy,dwglip:dwglip,dwglzwym:dwglzwym,dwglwg:dwglwg,sxsj:sxsj, yjwblx:yjwblx,yjwbjssj:yjwbjssj,yjwbfwcs:yjwbfwcs,yjwbzt:yjwbzt, yjwbfwjb:yjwbfwjb,yjwbfzr:yjwbfzr, pzbks:pzbks,pzbkccs:pzbkccs,sykydks:sykydks,dksl:dksl,pzfcmks:pzfcmks,pzdks:pzdks},function (d) {
        if (d =="you"){
            Showbo.Msg.alert('此序列号已经存在！');
        }  else if(d=="ok"){
            Showbo.Msg.alert('SAN属性添加成功');
            $('#teacher_table').bootstrapTable('refreshOptions', {pageNumber: 1, pagesize: 8});
            $('#fuwuqiModel').modal('hide');
        }else {
            Showbo.Msg.alert('添加失败');
        }
    });
}
function addcunchu() {

    $('#cunchuId').val("");//id
    $('#yongtu').val("");//用途
    $('#gsqy').val("");//归属区域
    $('#gsdd').val("");//归属地点
    $('#gsfj').val("");//归属房间
    $('#azwz').val("");//安装位置
    $('#szjg').val("");//所在机柜
    $('#zcbqh').val("");//资产标签号
    $('#zcgly').val("");//资产管理员
    $('#zcbz').val("");//资产备注
    $('#eddygl').val("");//额定电源功率(KW)
    $('#zhonglian').val("");//重量
    $('#szus').val("");//所占U数
    $('#sccs').val("");//生产厂商
    $('#xinghao').val("");//型号
    $('#xuliehao').val("");//序列号
    $('#dwglip').val("");//带外管理IP、
    $('#dwglzwym').val("");//带外管理子网掩码
    $('#dwglwg').val("");//带外管理网关
    $('#sxsj').val("");//上线时间
    $('#yjwbjssj').val("");//硬件维保服务结束日期
    $('#yjwbfwcs').val("");//硬件维保服务厂商
    $('#yjwbfzr').val("");//硬件维保负责人

    $('#pzcachedx').val("");//配置CACHE大小(GB)
    $('#pzzjdksl').val("");//配置主机端口数量
    $('#zjdksl').val("");//主机端口速率
    $('#wlcplx').val("");//物理磁盘类型/数量
    $('#pzzrl').val("");//配置总容量(TB)
    $('#raidfs').val("");//RAID方式
    $('#raidhsjkyrl').val("");//RAID后实际可用容量(TB)
    $('#lundx').val("");//LUN大小(GB)
    $('#kylunsl').val("");//可用LUN数量
    $('#yfplunsl').val("");//已分配LUN数量
    $('#wfplunsl').val("");//未分配LUN数量
    $('#wfprl').val("");//未分配容量(GB)
    $('#yfprl').val("");//已分配容量
    $('#fuwuqiModel').modal();
    /**
     * 存储
     */
    $("#ccdiv").css("display","block"); //存储div 隐藏
    $("#cunchusave").css("display","block");  //存储表头
    $("#cunchuupdaee").css("display","none"); //存储修改表头
    $("#ccxiugai").css("display","none");
    $("#ccsave").css("display","block"); //存储div 隐藏
    /**
     * 服务器
     */

    $("#fwqdiv").css("display","none");//服务器英藏
    $("#qlfoot1").css("display","none");
    $("#qlfoot2").css("display","none");
    $("#qlfoot4").css("display","none");
    $("#qlfoot3").css("display","none" );
    /**
     * San
     */
    $("#sandiv").css("display","none"); //存储div 隐藏
    $("#sanad").css("display","none");  //存储表头
    $("#sup").css("display","none"); //存储修改表头
    $("#sansave").css("display","none");
    $("#sanup").css("display","none"); //存储div 隐藏

    /**
     * 安全设备
     */
    $("#Aq1").css("display","none" );
    $("#Aq2").css("display","none");
    $("#Aq4").css("display","none");
    $("#Aq3").css("display","none");
    $("#aq1div").css("display","none"); //存储div 隐藏
    /**
     * 交换机
     */
    $("#jhjdiv1").css("display","none"); //存储div 隐藏
    $("#jhjfoot3").css("display","none");  //存储表头
    $("#jhjfoot4").css("display","none"); //存储修改表头
    $("#jhjfoot1").css("display","none");
    $("#jhjfoot2").css("display","none"); //存储div 隐藏
    /**
     * 审计设备
     */
    $("#Sj1").css("display","none" );
    $("#Sj3").css("display","none");
    $("#Sj4").css("display","none");
    $("#Sj2").css("display","none");
    $("#sj1div").css("display","none"); //存储div 隐藏

}
function savecunchu() {
    //正则
    var double =  /\.\d{1,2}$/;
    var  zhuangtai=$("#zhuangtai ").val();
    var  yongtu=$("#yongtu ").val();
    var  gsqy=$("#gsqy ").val();
    var  gsdd=$("#gsdd ").val();
    var  gsfj=$("#gsfj ").val();
    var  azwz=$("#azwz ").val();
    var  szjg=$("#szjg ").val();
    var  zcbqh=$("#zcbqh ").val();
    var  zczt=$("#zczt ").val();
    var  zcgly=$("#zcgly ").val();
    var  zcbz=$("#zcbz ").val();
    var  sfwkryj =$("#sfwkryj ").val();
    var  eddygl=$("#eddygl ").val();
    var  zhonglian=$("#zhonglian ").val();
    var  szus=$("#szus ").val();
    var  sjfs=$("#sjfs ").val();
    var  sccs=$("#sccs ").val();
    var  xinghao=$("#xinghao ").val();
    var  xuliehao=$("#xuliehao ").val();
    var  wlqy=$("#wlqy ").val();
    var  dwglip=$("#dwglip ").val();
    var  yjwblx =$("#yjwblx ").val();
    var  yjwbjssj=$("#yjwbjssj ").val();
    var  yjwbfwcs=$("#yjwbfwcs ").val();
    var  yjwbzt=$("#yjwbzt ").val();
    var  yjwbfwjb=$("#yjwbfwjb ").val();
    var  dwglzwym=$("#dwglzwym ").val();
    var  dwglwg=$("#dwglwg ").val();
    var  sxsj =$("#sxsj ").val();
    var  yjwbfzr=$("#yjwbfzr ").val();
    var  pzcachedx=$("#pzcachedx ").val();   //配置CACHE大小(GB)
    var  pzzjdksl=$("#pzzjdksl ").val();   //配置主机端口数量
    var  zjdksl=$("#zjdksl ").val();   //主机端口速率
    var  wlcplx=$("#wlcplx ").val();   //物理磁盘类型/数量
    var  pzzrl= $("#pzzrl ").val();   //配置总容量(TB)
    var  raidfs = $("#raidfs ").val();   //RAID方式
    var  raidhsjkyrl= $("#raidhsjkyrl ").val();   //RAID后实际可用容量(TB)
    var  lundx= $("#lundx ").val();   //LUN大小(GB)
    var  kylunsl= $("#kylunsl ").val();   //可用LUN数量
    var  yfplunsl= $("#yfplunsl ").val();   //已分配LUN数量
    var  wfplunsl= $("#wfplunsl ").val();   //未分配LUN数量
    var wfprl = $("#wfprl ").val();   //未分配容量(GB)
    var yfprl = $("#yfprl ").val();   //已分配容量(GB)

    if ($.isEmptyObject(xuliehao)||$.trim(xuliehao) == "") {
        Showbo.Msg.alert('请输入序列号！');
        return false;
    }else if ($.isEmptyObject(yongtu)) {
        Showbo.Msg.alert('请输入用途！');
        return false;
    }else if ($.isEmptyObject(gsqy)) {
        Showbo.Msg.alert('请输入归属地域！');
        return false;
    } else if ($.isEmptyObject(gsdd)) {
        Showbo.Msg.alert('请输入归属地点！');
        return false;
    } else if ($.isEmptyObject(gsfj)) {
        Showbo.Msg.alert('请输入归属房间！');
        return false;
    }else if ($.isEmptyObject(azwz)) {
        Showbo.Msg.alert('请输入安装位置！');
        return false;
    }else if ($.isEmptyObject(szjg)) {
        Showbo.Msg.alert('请输入所在机柜！');
        return false;
    } else if ($.isEmptyObject(szus)) {
        Showbo.Msg.alert('请输入所占U数！');
        return false;
    } else if (szus=="0"){
        Showbo.Msg.alert('所占U数不可为0 ！');
        $("#szus ").val("");
        return false;
    } else if ($.isEmptyObject(sccs)) {
        Showbo.Msg.alert('请输入生产厂商！');
        return false;
    }else if ($.isEmptyObject(xinghao)) {
        Showbo.Msg.alert('请输入型号！');
        return false;
    }else if(!isIP(dwglip)){ //带外管理ip
        $('#dwglip').val("");
        return false;
    } else if(!iszIP(dwglzwym)){ //带外管理子网掩码
        $('#dwglzwym').val("");
        return false;
    }else if ($.isEmptyObject(sxsj)) {
        Showbo.Msg.alert('请选择上线日期！');
        return false;
    }else if ($.isEmptyObject(yjwbjssj)) {
        Showbo.Msg.alert('请选择硬件维保服务结束日期！');
        return false;
    } else if ($.isEmptyObject(yjwbfwcs)) {
        Showbo.Msg.alert('请输入硬件维保服务厂商！');
        return false;
    } else if ($.isEmptyObject(yjwbfzr)) {
        Showbo.Msg.alert('请输入硬件维护负责人！');
        return false;
    } else if ($.isEmptyObject(eddygl)) {
        Showbo.Msg.alert('请输入额定电源功率(KW)！');
        return false;
    }  else if ($.isEmptyObject(zcgly)) {
        Showbo.Msg.alert('请输入资产管理员！');
        return false;
    } else if ($.isEmptyObject(zhonglian)) {
        Showbo.Msg.alert('请输入重量！');
        return false;
    }
    else  if ($.isEmptyObject(pzcachedx)||$.trim(pzcachedx) == "") {
        Showbo.Msg.alert('请输入配置CACHE大小(GB)！');
        return false;
    } else if ($.isEmptyObject(pzzjdksl)||$.trim(pzzjdksl) == "") {
        Showbo.Msg.alert('请输入配置主机端口数量！');
        return false;
    }else  if ($.isEmptyObject(zjdksl)||$.trim(zjdksl) == "") {
        Showbo.Msg.alert('请输入主机端口速率(G)！');
        return false;
    }else if ((wlcplx.indexOf("SAS ") == -1 || wlcplx.indexOf("GB*") == -1)&& (wlcplx.indexOf("TB*") == -1 || wlcplx.indexOf("SATA ") == -1)  ) {
        Showbo.Msg.alert('物理磁盘类型/数量格式为' +
            ':SAS 600GB*30/SATA 2TB*30！');
        return false;
    }else  if ($.isEmptyObject(pzzrl)||$.trim(pzzrl) == "") {
        Showbo.Msg.alert('请输入配置总容量(TB)！');
        return false;
    }else  if ($.isEmptyObject(raidfs)||$.trim(raidfs) == "") {
        Showbo.Msg.alert('请输入RAID方式！');
        return false;
    }else if(!double.test(raidhsjkyrl)){
        Showbo.Msg.alert('RAID后实际可用容量只允许输入1-2位小数！');
        return false;
    } else  if ($.isEmptyObject(lundx)||$.trim(lundx) == "") {
        Showbo.Msg.alert('请输入LUN大小(GB)！');
        return false;
    } else if (kylunsl.indexOf("GB*") == -1 ){
        Showbo.Msg.alert('可用LUN数量格式为 500GB*100/1000GB*50！');
        return false;
    } else if (yfplunsl.indexOf("GB*") == -1 ){
        Showbo.Msg.alert('已分配LUN数量格式为 500GB*100/1000GB*50！');
        return false;
    }else if (wfplunsl.indexOf("GB*") == -1 ){
        Showbo.Msg.alert('未分配LUN数量格式为 500GB*100/1000GB*50！');
        return false;
    } else  if ($.isEmptyObject(wfprl)||$.trim(wfprl) == "") {
        Showbo.Msg.alert('请输入未分配容量(GB)！');
        return false;
    } else  if ($.isEmptyObject(yfprl)||$.trim(yfprl) == "") {
        Showbo.Msg.alert('请输入已分配容量(GB)！');
        return false;
    }   else if ($('#zczt').val()=="1" || $('#zczt').val()=="2"|| $('#zczt').val()=="3"|| $('#zczt').val()=="6"){
        if ($.isEmptyObject(zcbqh)) {
            Showbo.Msg.alert('请输入资产标签号！');
            return false;
        }
    }

    $.post("../cmdb/CunChuAll",{zhuangtai:zhuangtai,yongtu:yongtu, gsqy:gsqy, gsdd:gsdd,gsfj:gsfj,azwz:azwz,szjg:szjg,zcbqh:zcbqh,zczt:zczt,zcgly:zcgly, zcbz:zcbz,sfwkryj:sfwkryj,eddygl:eddygl,zhonglian:zhonglian,szus:szus,
        sjfs:sjfs,sccs:sccs,xinghao:xinghao,xuliehao:xuliehao, wlqy:wlqy,dwglip:dwglip,dwglzwym:dwglzwym,dwglwg:dwglwg,sxsj:sxsj, yjwblx:yjwblx,yjwbjssj:yjwbjssj,yjwbfwcs:yjwbfwcs,yjwbzt:yjwbzt, yjwbfwjb:yjwbfwjb,yjwbfzr:yjwbfzr,
        pzcachedx:pzcachedx,pzzjdksl:pzzjdksl,zjdksl:zjdksl, wlcplx:wlcplx,pzzrl:pzzrl, raidfs:raidfs , raidhsjkyrl:raidhsjkyrl, lundx:lundx, kylunsl:kylunsl, yfplunsl:yfplunsl, wfplunsl:wfplunsl,wfprl:wfprl , yfprl:yfprl},function (d) {
        if (d =="you"){
            Showbo.Msg.alert('此序列号已经存在！');
        }  else if(d=="ok"){
            Showbo.Msg.alert('存储属性添加成功');
            $('#teacher_table').bootstrapTable('refreshOptions', {pageNumber: 1, pagesize: 8});
            $('#fuwuqiModel').modal('hide');
        }else {
            Showbo.Msg.alert('添加失败');
        }
    });
}
function addfuwuqi(){
    $('#fuwuqiId').val("");
    $('#yongtu').val("");//用途
    $('#gsqy').val("");//归属区域
    $('#gsdd').val("");//归属地点
    $('#gsfj').val("");//归属房间
    $('#azwz').val("");//安装位置
    $('#szjg').val("");//所在机柜
    $('#zcbqh').val("");//资产标签号
    $('#zcgly').val("");//资产管理员
    $('#zcbz').val("");//资产备注
    $('#eddygl').val("");//额定电源功率(KW)
    $('#zhonglian').val("");//重量
    $('#szus').val("");//所占U数
    $('#sccs').val("");//生产厂商
    $('#xinghao').val("");//型号
    $('#xuliehao').val("");//序列号
    $('#dwglip').val("");//带外管理IP、
    $('#dwglzwym').val("");//带外管理子网掩码
    $('#dwglwg').val("");//带外管理网关
    $('#sxsj').val("");//上线时间
    $('#yjwbjssj').val("");//硬件维保服务结束日期
    $('#yjwbfwcs').val("");//硬件维保服务厂商
    $('#yjwbfzr').val("");//硬件维保负责人
//服务器属性
    $('#fwqzjm').val("");//服务器主机名
    $('#ywwipdz').val("");//业务网IP地址
    $('#ywwzwym').val("");//业务网子网掩码
    $('#ywwwg').val("");//业务网网关
    $('#glwipdz').val("");// 管理网Ip地址
    $('#glwzwym').val("");//f管理网子网掩码
    $('#glwwg').val("");//管理网网关
    $('#cpulx').val("");//Cpu类型
    $('#cpusl').val("");//Cpu数量
    $('#cpunhs').val("");//Cpu内核数
    $('#swapqdx').val("");//SWAP区大小
    $('#ncdx').val("");//内存大小
    $('#czxt').val("");//操作系统
    $('#nzypdx').val("");//内置硬盘大小
    $('#nzypsl').val("");//f内置硬盘数量
    $('#wzdksl').val("");//万兆端口数量
    $('#ysywzdksl').val("");//已使用万兆端口数量
    $('#qzdksl').val("");//千兆端口数量
    $('#ysyqzdksl').val("");//已使用千兆端口数量
    $('#hbaksl').val("");//HBA卡数量
    $('#yhbaksl').val("");//已使用HBA卡数量
    $('#hbaksulv').val("");//HBA卡速率
    $('#hbakwwwnh').val("");//HBA卡WWWN号

    $('#fuwuqiModel').modal();
    $("#fwqdiv").css("display","block");
    $("#qlfoot1").css("display","block");
    $("#qlfoot2").css("display","none");
    $("#qlfoot4").css("display","none");
    $("#qlfoot3").css("display","block");
    /**
     * 存储
     */
    $("#ccdiv").css("display","none"); //存储div 隐藏
    $("#cunchusave").css("display","none");  //存储表头
    $("#cunchuupdaee").css("display","none"); //存储修改表头
    $("#ccxiugai").css("display","none");
    $("#ccsave").css("display","none"); //存储div 隐藏
    /**
     * San
     */
    $("#sandiv").css("display","none"); //存储div 隐藏
    $("#sanad").css("display","none");  //存储表头
    $("#sup").css("display","none"); //存储修改表头
    $("#sansave").css("display","none");
    $("#sanup").css("display","none"); //存储div 隐藏
    /**
     * 交换机
     */
    $("#jhjdiv1").css("display","none"); //存储div 隐藏
    $("#jhjfoot3").css("display","none");  //存储表头
    $("#jhjfoot4").css("display","none"); //存储修改表头
    $("#jhjfoot1").css("display","none");
    $("#jhjfoot2").css("display","none"); //存储div 隐藏
    /**
     * 安全设备
     */
    $("#Aq1").css("display","none" );
    $("#Aq2").css("display","none");
    $("#Aq4").css("display","none");
    $("#Aq3").css("display","none");
    $("#aq1div").css("display","none"); //存储div 隐藏
    /**
     * 审计设备
     */
    $("#Sj1").css("display","none" );
    $("#Sj3").css("display","none");
    $("#Sj4").css("display","none");
    $("#Sj2").css("display","none");
    $("#sj1div").css("display","none"); //存储div 隐藏

}
function savefuwuqi(){
    var  zhuangtai=$("#zhuangtai ").val();
    var  yongtu=$("#yongtu ").val();
    var  gsqy=$("#gsqy ").val();
    var  gsdd=$("#gsdd ").val();
    var  gsfj=$("#gsfj ").val();
    var  azwz=$("#azwz ").val();
    var  szjg=$("#szjg ").val();
    var  zcbqh=$("#zcbqh ").val();
    var  zczt=$("#zczt ").val();
    var  zcgly=$("#zcgly ").val();
    var  zcbz=$("#zcbz ").val();
    var  sfwkryj =$("#sfwkryj ").val();
    var  eddygl=$("#eddygl ").val();
    var  zhonglian=$("#zhonglian ").val();
    var  szus=$("#szus ").val();
    var  sjfs=$("#sjfs ").val();
    var  sccs=$("#sccs ").val();
    var  xinghao=$("#xinghao ").val();
    var  xuliehao=$("#xuliehao ").val();
    var  wlqy=$("#wlqy ").val();
    var  dwglip=$("#dwglip ").val();
    var  dwglzwym=$("#dwglzwym ").val();
    var  dwglwg=$("#dwglwg ").val();
    var  sxsj =$("#sxsj ").val();
    var  yjwblx =$("#yjwblx ").val();
    var  yjwbjssj=$("#yjwbjssj ").val();
    var  yjwbfwcs=$("#yjwbfwcs ").val();
    var  yjwbzt=$("#yjwbzt ").val();
    var  yjwbfwjb=$("#yjwbfwjb ").val();
    var  yjwbfzr=$("#yjwbfzr ").val();

    var  fwqzjm=$("#fwqzjm ").val();//服务器名称
    var  ywwipdz=$("#ywwipdz ").val();//业务网IP地址
    var  ywwzwym=$("#ywwzwym ").val();//业务网子网掩码
    var  ywwwg=$("#ywwwg ").val();//业务网网关
    var  glwipdz=$("#glwipdz ").val();//管理网Ip地址
    var  glwzwym=$("#glwzwym ").val();//管理网子网掩码
    var  glwwg=$("#glwwg ").val();//管理网网关
    var  cpulx=$("#cpulx ").val();//Cpu类型
    var  cpusl =$("#cpusl ").val();//Cpu数量
    var  cpunhs=$("#cpunhs ").val();//Cpu内核数
    var  swapqdx=$("#swapqdx ").val();//SWAP区大小
    var  ncdx=$("#ncdx ").val();//内存大小
    var  czxt=$("#czxt ").val();//操作系统
    var  nzypdx=$("#nzypdx ").val();//内置硬盘大小
    var  nzypsl=$("#nzypsl ").val();//内置硬盘数量
    var  wzdksl=$("#wzdksl ").val();//万兆端口数量
    var  ysywzdksl=$("#ysywzdksl ").val();//已使用万兆端口数量
    var  qzdksl=$("#qzdksl ").val();//千兆端口数量
    var  ysyqzdksl=$("#ysyqzdksl ").val();//已使用千兆端口数量
    var  hbaksl=$("#hbaksl ").val();//HBA卡数量
    var  yhbaksl=$("#yhbaksl ").val();//已使用HBA卡数量
    var  hbaksulv=$("#hbaksulv ").val();//HBA卡速率
    var  hbakwwwnh=$("#hbakwwwnh ").val();//HBA卡WWWN号

    if ($.isEmptyObject(xuliehao)||$.trim(xuliehao) == "") {
        Showbo.Msg.alert('请输入序列号！');
        return false;
    }else if ($.isEmptyObject(yongtu)) {
        Showbo.Msg.alert('请输入用途！');
        return false;
    }else if ($.isEmptyObject(gsqy)) {
        Showbo.Msg.alert('请输入归属地域！');
        return false;
    } else if ($.isEmptyObject(gsdd)) {
        Showbo.Msg.alert('请输入归属地点！');
        return false;
    } else if ($.isEmptyObject(gsfj)) {
        Showbo.Msg.alert('请输入归属房间！');
        return false;
    }else if ($.isEmptyObject(azwz)) {
        Showbo.Msg.alert('请输入安装位置！');
        return false;
    }else if ($.isEmptyObject(szjg)) {
        Showbo.Msg.alert('请输入所在机柜！');
        return false;
    } else if ($.isEmptyObject(szus)) {
        Showbo.Msg.alert('请输入所占U数！');
        return false;
    }else if (szus=="0"){
        Showbo.Msg.alert('所占U数不可为0 ！');
        $("#szus ").val("");
        return false;
    } else if ($.isEmptyObject(sccs)) {
        Showbo.Msg.alert('请输入生产厂商！');
        return false;
    }else if ($.isEmptyObject(xinghao)) {
        Showbo.Msg.alert('请输入型号！');
        return false;
    }else if(!isIP(dwglip)){ //带外管理ip
        $('#dwglip').val("");
        return false;
    } else if(!iszIP(dwglzwym)){ //带外管理子网掩码
        $('#dwglzwym').val("");
        return false;
    }else if ($.isEmptyObject(sxsj)) {
        Showbo.Msg.alert('请选择上线日期！');
        return false;
    }else if ($.isEmptyObject(yjwbjssj)) {
        Showbo.Msg.alert('请选择硬件维保服务结束日期！');
        return false;
    } else if ($.isEmptyObject(yjwbfwcs)) {
        Showbo.Msg.alert('请输入硬件维保服务厂商！');
        return false;
    } else if ($.isEmptyObject(yjwbfzr)) {
        Showbo.Msg.alert('请输入硬件维护负责人！');
        return false;
    } else if ($.isEmptyObject(eddygl)) {
        Showbo.Msg.alert('请输入额定电源功率(KW)！');
        return false;
    }  else if ($.isEmptyObject(zcgly)) {
        Showbo.Msg.alert('请输入资产管理员！');
        return false;
    } else if ($.isEmptyObject(zhonglian)) {
        Showbo.Msg.alert('请输入重量！');
        return false;
    } else if ($.isEmptyObject(fwqzjm)) {
        Showbo.Msg.alert('请输入服务器主机名！');
        return false;
    } else if(!isywwIP(ywwipdz)){
        $('#ywwipdz').val(""); //业务网ip地址
        return false;
    }else if(!isywwzwymIP(ywwzwym)){
        $('#ywwzwym').val(""); //业务网子网掩码
        return false;
    }else if (!isywwwgIP(ywwwg)){
        $('#ywwwg').val("");  //业务网网关
        return false;
    }else if(!isglwipIP(glwipdz)){
        $('#glwipdz').val("");   //管理网IP地址
        return false;
    }else if(!isglwzwymIP(glwzwym)){
        $('#glwzwym').val(""); //管理网子网掩码
        return false;
    }else if (!isglwwgIP(glwwg)){
        $('#glwwg').val(""); //管理网网关
        return false;
    } else if ($.isEmptyObject(cpulx)||$.trim(cpulx) == "") {
        Showbo.Msg.alert('请输入Cpu类型！');
        return false;
    }else if ($.isEmptyObject(cpusl)||$.trim(cpusl) == "") {
        Showbo.Msg.alert('请输入Cpu数量！');
        return false;
    } else if (cpusl=="0"){
        Showbo.Msg.alert('Cpu数量不可为0！');
        $("#cpusl ").val("");//Cpu数量
        return false;
    } else if ($.isEmptyObject(cpunhs)||$.trim(cpunhs) == "") {
        Showbo.Msg.alert('请输入Cpu内核数！');
        return false;
    } else if (cpunhs=="0"){
        Showbo.Msg.alert('Cpu内核数不可为0！');
        $("#cpunhs ").val("");//Cpu数量
        return false;
    }

    else if ($.isEmptyObject(ncdx)||$.trim(ncdx) == "") {
        Showbo.Msg.alert('请输入内存大小！');
        return false;
    }else if ($.isEmptyObject(swapqdx)||$.trim(swapqdx) == "") {
        Showbo.Msg.alert('请输入SWAP区大小！');
        return false;
    }else if ($.isEmptyObject(czxt)||$.trim(czxt) == "") {
        Showbo.Msg.alert('请输入操作系统！');
        return false;
    }else if (nzypdx.indexOf("GB") == -1 ){
        Showbo.Msg.alert('内置硬盘大小格式为 300GB/600GB！');
        return false;
    } else if (nzypsl.indexOf("GB*") == -1 && nzypsl.indexOf("TB*")==-1 ){
        Showbo.Msg.alert('内置硬盘数量格式为 200GB*6/2TB*4！');
        return false;
    }else if ($.isEmptyObject(wzdksl)||$.trim(wzdksl) == "") {
        Showbo.Msg.alert('请输入万兆端口数量！');
        return false;
    }else if ($.isEmptyObject(ysywzdksl)||$.trim(ysywzdksl) == "") {
        Showbo.Msg.alert('请输入已使用万兆端口数量！');
        return false;
    }else if ($.isEmptyObject(qzdksl)||$.trim(qzdksl) == "") {
        Showbo.Msg.alert('请输入千兆端口数量！');
        return false;
    } else if ($.isEmptyObject(ysyqzdksl)||$.trim(ysyqzdksl) == "") {
        Showbo.Msg.alert('请输入已使用千兆端口数量！');
        return false;
    } else if ($.isEmptyObject(hbaksl)||$.trim(hbaksl) == "") {
        Showbo.Msg.alert('请输入HBA卡数量！');
        return false;
    }else if ($.isEmptyObject(yhbaksl)||$.trim(yhbaksl) == "") {
        Showbo.Msg.alert('请输入已使用HBA卡数量！');
        return false;
    } else if ($('#zczt').val()=="1" || $('#zczt').val()=="2"|| $('#zczt').val()=="3"|| $('#zczt').val()=="6"){
        if ($.isEmptyObject(zcbqh)) {
            Showbo.Msg.alert('请输入资产标签号！');
            return false;
        }
    }

    $.post("../cmdb/addAll1",{zhuangtai:zhuangtai,yongtu:yongtu, gsqy:gsqy, gsdd:gsdd,gsfj:gsfj,azwz:azwz,szjg:szjg,zcbqh:zcbqh,zczt:zczt,zcgly:zcgly, zcbz:zcbz,sfwkryj:sfwkryj,eddygl:eddygl,zhonglian:zhonglian,szus:szus, sjfs:sjfs,sccs:sccs,xinghao:xinghao,xuliehao:xuliehao, wlqy:wlqy,dwglip:dwglip,dwglzwym:dwglzwym,dwglwg:dwglwg,sxsj:sxsj,
        yjwblx:yjwblx,yjwbjssj:yjwbjssj,yjwbfwcs:yjwbfwcs,yjwbzt:yjwbzt, yjwbfwjb:yjwbfwjb,yjwbfzr:yjwbfzr, fwqzjm:fwqzjm,ywwipdz:ywwipdz,ywwzwym:ywwzwym,ywwwg:ywwwg,glwipdz:glwipdz,glwzwym:glwzwym,glwwg:glwwg, cpulx:cpulx,cpusl:cpusl,cpunhs:cpunhs,swapqdx:swapqdx,ncdx:ncdx,czxt:czxt,nzypdx:nzypdx, nzypsl:nzypsl,wzdksl:wzdksl,ysywzdksl:ysywzdksl,qzdksl:qzdksl,ysyqzdksl:ysyqzdksl,hbaksl:hbaksl, yhbaksl:yhbaksl,hbaksulv:hbaksulv,hbakwwwnh:hbakwwwnh},function (d) {

        if (d =="you"){
            Showbo.Msg.alert('此序列号已经存在！');
        }else if (d=="ipyou"){
            Showbo.Msg.alert('业务网Ip地址已经存在！');
        } else if(d=="ok"){
            Showbo.Msg.alert('服务器属性添加成功');
            $('#teacher_table').bootstrapTable('refreshOptions', {pageNumber: 1, pagesize: 8});
            $('#fuwuqiModel').modal('hide');
        }else {
            Showbo.Msg.alert('添加失败');
        }
    });
}
function getTime(timestamp) {
    var ts = arguments[0] || 0;
    var t,y,m,d,h,i,s;
    t = ts ? new Date(parseInt(ts)) : new Date();
    y = t.getFullYear();
    m = t.getMonth()+1;
    d = t.getDate();

    // 可根据需要在这里定义时间格式
    return y+'-'+(m<10?'0'+m:m)+'-'+(d<10?'0'+d:d);
}
function isn(numb){
    var  shuz= /^[0-9]*$/
    if (shuz.test(numb))
    {
        return true;
    }
    Showbo.Msg.alert("只能输入数字!");
    return false;
}
function isIP(strIP) {
    var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g
    if(re.test(strIP))
    {
        if( RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) return true;
    }
    Showbo.Msg.alert("请输入正确的带外管理Ip!");
    return false;
}
function iszIP(strzIP) {
    var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g
    if(re.test(strzIP))
    {
        if( RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) return true;
    }
    Showbo.Msg.alert("请输入正确的带外管理子网掩码!");
    return false;
}
function isglwipIP(strzIP) {
    var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g
    if(re.test(strzIP))
    {
        if( RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) return true;
    }
    Showbo.Msg.alert("请输入正确的管理网Ip地址!");
    return false;
}
function isywwIP(strzIP) {
    var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g
    if(re.test(strzIP))
    {
        if( RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) return true;
    }
    Showbo.Msg.alert("请输入正确的业务网Ip地址!");
    return false;
}
function isglwzwymIP(strzIP) {
    var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g
    if(re.test(strzIP))
    {
        if( RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) return true;
    }
    Showbo.Msg.alert("请输入正确的管理网子网掩码!");
    return false;
}
function isywwzwymIP(strzIP) {
    var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g
    if(re.test(strzIP))
    {
        if( RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) return true;
    }
    Showbo.Msg.alert("请输入正确的业务网子网掩码!");
    return false;
}
function isglwwgIP(strzIP) {
    var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g
    if(re.test(strzIP))
    {
        if( RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) return true;
    }
    Showbo.Msg.alert("请输入正确的管理网网关!");
    return false;
}
function isywwwgIP(strzIP) {
    var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g
    if(re.test(strzIP))
    {
        if( RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) return true;
    }
    Showbo.Msg.alert("请输入正确的业务网网关!");
    return false;
}
function iswIP(strzIP) {
    var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g
    if(re.test(strzIP))
    {
        if( RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) return true;
    }
    Showbo.Msg.alert("请输入正确的网关!");
    return false;
}

