package com.fxpt.web;

import com.fxpt.dao.RoleDao;
import com.fxpt.dao.UserDao;
import com.fxpt.dao.UserGoodsDao;
import com.fxpt.dao.UserIncomeDao;
import com.fxpt.dto.Role;
import com.fxpt.dto.User;
import com.fxpt.dto.UserGoods;
import com.fxpt.dto.UserIncome;
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
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping(value = "role")
public class RoleController {
	@Autowired
	LogUtil logUtil;
	@Autowired
	RoleDao roleDao;

	//首页跳转
	@RequestMapping(value = "/index")
	public String index(Model model, @ModelAttribute MenuUtil menuUtil, HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("访问级别管理",emp1.getId(),emp1.getName());
		model.addAttribute("menuUtil", menuUtil);
		return "role/index";
	}


	//列表
	@ResponseBody
	@RequestMapping(value = "/queryList")
	public Map<String, Object> queryList(Integer pagesize, Integer count) {
		Map<String, Object> map = new HashMap<>();
		Page<Role> pageList = roleDao.getList(pagesize, count);
		map.put("rows", pageList.getResult());
		map.put("total", pageList.getTotalCount());
		return map;
	}



	@ResponseBody
	@RequestMapping(value = "/updateRole")
	public String updateQr(Role role,HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("修改用户级别信息("+role.getId()+","+role.getName()+")",emp1.getId(),emp1.getName());

		int exist = roleDao.updateRole(role);
		if(exist == 0){
			return "ok";
		}else {
			return "nook";
		}
	}



}
