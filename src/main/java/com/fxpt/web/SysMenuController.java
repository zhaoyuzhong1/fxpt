package com.fxpt.web;


import com.fxpt.dao.SysMenuDao;
import com.fxpt.dto.SysMenu;
import com.fxpt.dto.User;
import com.fxpt.util.LogUtil;
import com.fxpt.util.MenuUtil;
import com.fxpt.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/menu")
public class SysMenuController {
	@Autowired
	LogUtil logUtil;
	@Autowired
	SysMenuDao sysMenuDao;
	//首页跳转
	@RequestMapping(value = "/index")
	public String index(Model model, @ModelAttribute MenuUtil menuUtil, HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("访问菜单管理",emp1.getId(),emp1.getName());
		model.addAttribute("menuUtil", menuUtil);
		List<SysMenu> menuList = sysMenuDao.getAllList();
		model.addAttribute("menuList", menuList);
		return "menu/index";
	}

	//列表
	@ResponseBody
	@RequestMapping(value = "/queryList")
	public Map<String, Object> queryList(String search_name, Integer pagesize, Integer count) {
		Map<String, Object> map = new HashMap<>();
		Page<SysMenu> pageList = sysMenuDao.getList(search_name,pagesize, count);
		map.put("rows", pageList.getResult());
		map.put("total", pageList.getTotalCount());
		return map;
	}


}
