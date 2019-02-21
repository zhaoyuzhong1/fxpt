package com.fxpt.web;

import com.fxpt.dao.GoodsDao;
import com.fxpt.dto.Goods;
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
import java.util.Map;

@Controller
@RequestMapping(value = "goods")
public class GoodsController  {
	@Autowired
	LogUtil logUtil;
	@Autowired
	GoodsDao goodsDao;
	//首页跳转
	@RequestMapping(value = "/index")
	public String index(Model model, @ModelAttribute MenuUtil menuUtil, HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("访问商品管理",emp1.getId(),emp1.getName());
		model.addAttribute("menuUtil", menuUtil);
		return "goods/index";
	}

	//列表
	@ResponseBody
	@RequestMapping(value = "/queryList")
	public Map<String, Object> queryList(String search_name, Integer pagesize, Integer count) {
		Map<String, Object> map = new HashMap<>();
		Page<Goods> pageList = goodsDao.getList(search_name,pagesize, count);
		map.put("rows", pageList.getResult());
		map.put("total", pageList.getTotalCount());
		return map;
	}

	//添加
	@ResponseBody
	@RequestMapping(value = "/addGoods")
	public String addGoods(Goods goods, HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("添加商品",emp1.getId(),emp1.getName());
		goods.setCuser(emp1.getId());
		int exist = goodsDao.addGoods(goods);
		if(exist > 0){

			return "ok";
		}
		return "nook";
	}

	//修改
	@ResponseBody
	@RequestMapping(value = "/updateGoods")
	public String updateGoods(Goods goods,HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("修改商品",emp1.getId(),emp1.getName());

		int exist = goodsDao.updateGoods(goods);
		if(exist == 0){
			return "ok";
		}
		return "nook";
	}

	//删除(真)
	@ResponseBody
	@RequestMapping(value = "/deleteGoods")
	public String deleteGoods(int id,HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("注销商品",emp1.getId(),emp1.getName());
		int exist = goodsDao.deleteGoods(id);
		if(exist != -1) {
			return "ok";
		}else {
			return "nook";
		}
	}
}
