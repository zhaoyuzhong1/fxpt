package com.fxpt.web;

import com.fxpt.dao.GoodsDao;
import com.fxpt.dao.UserDao;
import com.fxpt.dao.UserGoodsDao;
import com.fxpt.dao.UserIncomeDao;
import com.fxpt.dto.Goods;
import com.fxpt.dto.User;
import com.fxpt.dto.UserGoods;
import com.fxpt.dto.UserIncome;
import com.fxpt.util.LogUtil;
import com.fxpt.util.MenuUtil;
import com.fxpt.util.Page;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.*;

@Controller
@RequestMapping(value = "ug")
public class UserGoodsController {
	@Autowired
	LogUtil logUtil;
	@Autowired
	UserGoodsDao userGoodsDao;
	@Autowired
	UserIncomeDao userIncomeDao;
	@Autowired
	UserDao userDao;

	//首页跳转
	@RequestMapping(value = "/index")
	public String index(Model model, @ModelAttribute MenuUtil menuUtil, HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("访问购买商品管理",emp1.getId(),emp1.getName());
		model.addAttribute("menuUtil", menuUtil);
		return "usergoods/index";
	}



	@RequestMapping(value = "/fhindex")
	public String fhindex(Model model, @ModelAttribute MenuUtil menuUtil, HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("访问购买商品待发货管理",emp1.getId(),emp1.getName());
		model.addAttribute("menuUtil", menuUtil);
		return "usergoods/fhindex";
	}




	@RequestMapping(value = "/yfhindex")
	public String yfhindex(Model model, @ModelAttribute MenuUtil menuUtil, HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("访问购买商品已发货管理",emp1.getId(),emp1.getName());
		model.addAttribute("menuUtil", menuUtil);
		return "usergoods/yfhindex";
	}


	@RequestMapping(value = "/yfhindex1")
	public String salesList(Model model, @ModelAttribute MenuUtil menuUtil, HttpServletRequest request) {

		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("访问销售排行榜",emp1.getId(),emp1.getName());
		model.addAttribute("menuUtil", menuUtil);
		return "usergoods/salesList";
	}

	//列表
	@ResponseBody
	@RequestMapping(value = "/querysalesList")
	public Map<String, Object> querysalesList() {
		Map<String, Object> map = new HashMap<>();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM");
		Calendar c = Calendar.getInstance();
		Date date=new Date();
		String now=format1.format(date);
		//过去90天
		c.setTime(date);
		c.add(Calendar.DATE, - 90);
		Date d = c.getTime();
		String day = format.format(d);
		Page<UserGoods> pageList = userGoodsDao.getListTen(now,day);
		map.put("rows", pageList.getResult());
		map.put("total", pageList.getTotalCount());
		return map;
	}

	//修改
	@ResponseBody
	@RequestMapping(value = "/updateIncome")
	public String updateIncome(Integer userid,String money) {
		SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM");
		Date date=new Date();
		String now=format1.format(date);
		UserIncome userIncome=userIncomeDao.selectUserIncomeByIdAndyearm(userid,now);

		try{
			BigDecimal imoney =new BigDecimal(Double.parseDouble(money));
			if(userIncome==null){
				UserIncome u=new UserIncome();
				User user=userDao.selectUserById(userid);
				u.setUserid(userid);
				u.setUsername(user.getName());
				u.setMobile(user.getMobile());
				u.setFlag("0");
				u.setYearm(now);
				u.setMoney(imoney);
				u.setTotalp(imoney);
				u.setCuser(1);
				userIncomeDao.addUserIncome(u);

			}else{
				userIncomeDao.updateMoneyById(userIncome.getId(),imoney);
			}
		}catch (Exception e){
			return  "nook";
		}

		return  "ok";
	}

	//列表
	@ResponseBody
	@RequestMapping(value = "/queryList")
	public Map<String, Object> queryList(String search_name, Integer pagesize, Integer count) {
		Map<String, Object> map = new HashMap<>();
		Page<UserGoods> pageList = userGoodsDao.getList2(search_name,pagesize, count);
		map.put("rows", pageList.getResult());
		map.put("total", pageList.getTotalCount());
		return map;
	}



	@ResponseBody
	@RequestMapping(value = "/getQrList")
	public Map<String, Object> getQrList(String search_name, Integer pagesize, Integer count) {
		Map<String, Object> map = new HashMap<>();
		Page<UserGoods> pageList = userGoodsDao.getQrList(search_name,pagesize, count);
		map.put("rows", pageList.getResult());
		map.put("total", pageList.getTotalCount());
		return map;
	}


	@ResponseBody
	@RequestMapping(value = "/getFhList")
	public Map<String, Object> getFhList(String search_name, Integer pagesize, Integer count) {
		Map<String, Object> map = new HashMap<>();
		Page<UserGoods> pageList = userGoodsDao.getFhList(search_name,pagesize, count);
		map.put("rows", pageList.getResult());
		map.put("total", pageList.getTotalCount());
		return map;
	}



	//修改
	@ResponseBody
	@RequestMapping(value = "/updateQr")
	public String updateQr(String code,HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("确认购买商品已付款("+code+")",emp1.getId(),emp1.getName());

		int exist = userGoodsDao.updateQr2(code,"2");
		if(exist == 0){
			return "ok";
		}
		return "nook";
	}



	@ResponseBody
	@RequestMapping(value = "/updateFh")
	public String updateFh(String code,String postcom,String postnum,HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("确认购买商品可以发货("+code+")",emp1.getId(),emp1.getName());

		int exist = userGoodsDao.updateFh2(code,"3",postcom,postnum);
		if(exist == 0){
			return "ok";
		}
		return "nook";
	}

	//删除(假)
	@ResponseBody
	@RequestMapping(value = "/deleteUG")
	public String deleteUG(String code,HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("注销购买商品("+code+")",emp1.getId(),emp1.getName());
		int exist = userGoodsDao.updateQx2(code,"9");
		if(exist != -1) {
			return "ok";
		}else {
			return "nook";
		}
	}


	@ResponseBody
	@RequestMapping(value = "/getUgInfoByCode")
	public String getUgInfoByCode(String code) {
		JSONObject jo = new JSONObject();
		List<UserGoods> ugs = userGoodsDao.getUgInfoByCode(code);
		if(ugs.size()>0) {
			try {
				JSONArray ja = new JSONArray();
				String rolename = "";
				for (UserGoods ug : ugs) {
					JSONObject jo1 = new JSONObject();
					jo1.put("goodname", ug.getGoodname());
					jo1.put("buynum", ug.getBuynum());
					jo1.put("buyprice", ug.getBuyprice());
					jo1.put("total", ug.getTotalprice());
					ja.put(jo1);
					rolename = ug.getRolename();
				}
				jo.put("rolename", rolename);
				jo.put("list", ja);
			}catch (Exception e){
				e.printStackTrace();
			}
			return jo.toString();
		}else{
			return "";
		}
	}
}
