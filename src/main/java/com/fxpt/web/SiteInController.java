package com.fxpt.web;

import com.fxpt.dao.SiteInDao;
import com.fxpt.dto.SiteIn;
import com.fxpt.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/site")
public class SiteInController {

    @Autowired
    SiteInDao siteInDao;

    /**
     * @return 页面跳转管理
     */
    @RequestMapping("/index")
    public String webSiteInIndex(){
        return "siteIn/index";
    }

    /**
     * 查询签到信息列表
     * @param search_name 搜索关键字
     * @param pagesize 页大小
     * @param count 每页数量
     * @return 查询结果集
     */
    @ResponseBody
    @RequestMapping("/queryList")
    public Map<String, Object> queryList(String search_name, Integer pagesize, Integer count){
        Map<String, Object> map = new HashMap<>();
        Page<SiteIn> pageList = siteInDao.querySiteIn(pagesize,count,search_name);
        map.put("rows", pageList.getResult());
        map.put("total", pageList.getTotalCount());
        return map;
    }
}