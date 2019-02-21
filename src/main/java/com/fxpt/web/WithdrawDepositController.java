package com.fxpt.web;

import com.fxpt.dao.CashDao;
import com.fxpt.dao.ImgFileDao;
import com.fxpt.dto.Cash;
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
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping(value = "withdraw")
public class WithdrawDepositController {
	@Autowired
	LogUtil logUtil;
	@Autowired
	ImgFileDao imgFileDao;
	@Autowired
	InterService interService;
	@Autowired
	private  CashDao cashDao;



	//首页跳转
	@RequestMapping(value = "/withdraw")
	public String index(Model model, @ModelAttribute MenuUtil menuUtil, HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("访问提现管理",emp1.getId(),emp1.getName());
		model.addAttribute("menuUtil", menuUtil);
		return "cash/withdraw";
	}

	//用户添加提现申请
	@ResponseBody
	@RequestMapping(value = "/userWithdraw")
	public String upload(@RequestBody  Map map){
		Cash cash=new Cash();
		if(map.get("userid")!=null){
			cash.setUserid(Integer.parseInt(map.get("userid").toString()));
		}
		if(map.get("moble")!=null){
			cash.setMobile(map.get("moble").toString());
		}
		if(map.get("username")!=null){
			cash.setUsername(map.get("username").toString());
		}
		if(map.get("money")!=null){
			cash.setMoney(BigDecimal.valueOf(Double.parseDouble(map.get("money").toString())));
		}
		Integer i=cashDao.addCash(cash);
		String result="";
		if(i==1){
			result="申请提现成功";
		}else {
			result="申请提现失败";
		}
		return result;
	}



	//提现待审核列表
	@ResponseBody
	@RequestMapping(value = "/withdrawList")
	public Map<String, Object> withdrawList(String search_name,Integer pagesize, Integer count) {
		Map<String, Object> map = new HashMap<>();
		Page<Cash> pageList = cashDao.getList(search_name,pagesize, count);
		map.put("rows", pageList.getResult());
		map.put("total", pageList.getTotalCount());
		return map;
	}

	//审核提现
	@ResponseBody
	@RequestMapping(value = "/auditingWithdraw")
	public String auditingWithdraw(@RequestBody  Map map){
		Integer id=Integer.parseInt(map.get("id").toString());
		BigDecimal bigDecimal=BigDecimal.valueOf(Double.parseDouble(map.get("bigDecimal").toString()));
		Map newmap=interService.auditingWithdraw(id,bigDecimal);
		String message=newmap.get("message").toString();
		return message;
	}











	
}
