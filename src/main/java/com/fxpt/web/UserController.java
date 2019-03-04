package com.fxpt.web;

import com.fxpt.dao.GoodsDao;
import com.fxpt.dao.RoleDao;
import com.fxpt.dao.UserDao;
import com.fxpt.dto.Goods;
import com.fxpt.dto.Role;
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
@RequestMapping(value = "user")
public class UserController {
	@Autowired
	LogUtil logUtil;
	@Autowired
	RoleDao roleDao;
	@Autowired
	UserDao userDao;
	//首页跳转
	@RequestMapping(value = "/index")
	public String index(Model model, @ModelAttribute MenuUtil menuUtil, HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("访问用户管理",emp1.getId(),emp1.getName());
		List<Role> rs = roleDao.getList();
		model.addAttribute("roles",rs);
		model.addAttribute("menuUtil", menuUtil);
		return "user/index";
	}

	//列表
	@ResponseBody
	@RequestMapping(value = "/queryList")
	public Map<String, Object> queryList(String search_name,String roleid,String flag, Integer pagesize, Integer count) {
		Map<String, Object> map = new HashMap<>();
		Page<User> pageList = userDao.getList(search_name,roleid,flag,pagesize, count);
		map.put("rows", pageList.getResult());
		map.put("total", pageList.getTotalCount());
		return map;
	}

    //修改
    @ResponseBody
    @RequestMapping(value = "/deluser")
    public String deluser(int id,String del) {
	    try{
            Integer i=userDao.updateDelById(id,del);
            return "ok";
        }catch (Exception e){
	        e.printStackTrace();
            return "nook";
        }
    }


}
