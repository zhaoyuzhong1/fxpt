package com.fxpt.web;

import com.fxpt.dao.StockDao;
import com.fxpt.dto.Stock;
import com.fxpt.dto.User;
import com.fxpt.service.InterService;
import com.fxpt.util.LogUtil;
import com.fxpt.util.MenuUtil;
import com.fxpt.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping(value = "stock")
public class PickUpGoodsController {
	@Autowired
	LogUtil logUtil;
	@Autowired
	StockDao stockDao;
	@Autowired
	InterService interService;

	//提货库存跳转
	@RequestMapping(value = "/pickupgoods")
	public String index(Model model, @ModelAttribute MenuUtil menuUtil, HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("访问提货库存管理",emp1.getId(),emp1.getName());
		model.addAttribute("menuUtil", menuUtil);
		return "stock/pickupgoods";
	}


	//提货列表
	@ResponseBody
	@RequestMapping(value = "/pickUpList")
	public Map<String, Object> queryList(String mobile,String beginDate,String finishDate,Integer pagesize, Integer count) {
		Map<String, Object> map = new HashMap<>();
		try{
			Date fd=new Date();
			SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
			if(finishDate!=null&&!"".equals(finishDate)){
				fd=sdf.parse(finishDate);
			}
			//finishDate=sdf.format(fd);
			Date bd=new Date();
			bd.setTime(0);
			if(beginDate!=null&&!"".equals(beginDate)){
				bd=sdf.parse(beginDate);
			}
			//beginDate=sdf.format(bd);
			if(mobile==null){
				mobile="";
			}
			Page<Stock> pageList = stockDao.getList(mobile,bd,fd,pagesize, count,"3","1");
			map.put("rows", pageList.getResult());
			map.put("total", pageList.getTotalCount());
		}catch (Exception e){
			map.put("message","error");
			return map;
		}

		return map;
	}
	//审核提货
	@ResponseBody
	@RequestMapping(value = "/auditingPickUpGoods")
	public String auditingPickUpGoods(Integer id,HttpServletRequest request){
		String message="";
		try{
			User emp1 = (User) request.getSession().getAttribute("empSession");
			logUtil.addLog("审核提货库存",emp1.getId(),emp1.getName());
			Integer i=stockDao.updateStockFlagByFour(id);
			message="ok";
		}catch (Exception e){
			message="error";
			return message;
		}
		return message;
	}


	//购买库存跳转
	@RequestMapping(value = "/buygoods")
	public String buygoods(Model model, @ModelAttribute MenuUtil menuUtil, HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("访问购买库存管理",emp1.getId(),emp1.getName());
		model.addAttribute("menuUtil", menuUtil);
		return "stock/buygoods";
	}

	//购买库存列表
	@ResponseBody
	@RequestMapping(value = "/buyGoodsList")
	public Map<String, Object> buyGoodsList(String mobile,String beginDate,String finishDate,Integer pagesize, Integer count) {
		Map<String, Object> map = new HashMap<>();
		try{
			Date fd=new Date();
			SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
			if(finishDate!=null&&!"".equals(finishDate)){
				fd=sdf.parse(finishDate);
			}
			//finishDate=sdf.format(fd);
			Date bd=new Date();
			bd.setTime(0);
			if(beginDate!=null&&!"".equals(beginDate)){
				bd=sdf.parse(beginDate);
			}
			//beginDate=sdf.format(bd);
			if(mobile==null){
				mobile="";
			}
			Page<Stock> pageList = stockDao.getList(mobile,bd,fd,pagesize, count,"1","0");
			map.put("rows", pageList.getResult());
			map.put("total", pageList.getTotalCount());
		}catch (Exception e){
			map.put("message","error");
			return map;
		}
		return map;
	}

	//审核购买库存
	@ResponseBody
	@RequestMapping(value = "/auditingBuyGoods")
	public String auditingBuyGoods(Integer id,HttpServletRequest request){
		String message="";
		try{
			User emp1 = (User) request.getSession().getAttribute("empSession");
			logUtil.addLog("审核购买库存",emp1.getId(),emp1.getName());
			Integer i=stockDao.updateStockFlagByTwo(id);
			message="ok";
		}catch (Exception e){
			message="error";
			return message;
		}
		return message;
	}

	//取消
	@ResponseBody
	@RequestMapping(value = "/cancelStock")
	public String cancelStock(Integer id,HttpServletRequest request){
		String message="";
		try{
			User emp1 = (User) request.getSession().getAttribute("empSession");
			logUtil.addLog("取消提货",emp1.getId(),emp1.getName());
			Integer i=stockDao.updateStockFlagByNine(id);
			message="ok";
		}catch (Exception e){
			message="error";
			return message;
		}
		return message;
	}

}
