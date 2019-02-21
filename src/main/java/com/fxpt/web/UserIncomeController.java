package com.fxpt.web;

import com.fxpt.dao.ImgFileDao;
import com.fxpt.dao.UserDao;
import com.fxpt.dao.UserIncomeDao;
import com.fxpt.dto.ImgFile;
import com.fxpt.dto.User;
import com.fxpt.dto.UserIncome;
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
import javax.servlet.http.HttpServletResponse;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.*;

@Controller
@RequestMapping(value = "/userIncome")
public class UserIncomeController {
	@Autowired
	LogUtil logUtil;
	@Autowired
	UserIncomeDao userIncomeDao;
	@Autowired
	InterService interService;
    @Autowired
    UserDao userDao;



	//首页跳转
	@RequestMapping(value = "/userIncome")
	public String index(Model model, @ModelAttribute MenuUtil menuUtil, HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("访问工资管理",emp1.getId(),emp1.getName());
		model.addAttribute("menuUtil", menuUtil);
		return "userIncome/usersalary";
	}

	//列表
	@ResponseBody
	@RequestMapping(value = "/getsalaryList")
	public Map<String, Object> queryList(String search_name, Integer pagesize, Integer count) {
		Map<String, Object> map = new HashMap<>();
		Date date=new Date();
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM");
		String yearm=sdf.format(date);
		Page<User> pageList = userIncomeDao.getUserList(search_name,pagesize,count);
		List<User> lists=pageList.getResult();
		List<User> userlist=new ArrayList<>();
		for(User user:lists){
			if(!yearm.equals(user.getYearm())){
				user.setNewmoney(new BigDecimal(0));
				user.setReward(new BigDecimal(0));
			}else{
				if(user.getNewmoney()==null){
					user.setNewmoney(new BigDecimal(0));
				}
				if(user.getReward()==null){
					user.setReward(new BigDecimal(0));
				}
			}
			user.setTotalsalary(user.getNewmoney().add(user.getReward()));
			userlist.add(user);
		}
		pageList.setResult(userlist);
		map.put("rows", pageList.getResult());
		map.put("total", pageList.getTotalCount());
		return map;
	}

	//修改
	@ResponseBody
	@RequestMapping(value = "/upadeSalary")
	public String qy(Integer userid, BigDecimal reward,BigDecimal money, HttpServletRequest request) {
		try{
			User emp1 = (User) request.getSession().getAttribute("empSession");
			logUtil.addLog("修改工资",emp1.getId(),emp1.getName());
			Date date=new Date();
			SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM");
			String yearm=sdf.format(date);
			UserIncome userIncome=userIncomeDao.selectUserIncomeByIdAndyearm(userid,yearm);
			if(userIncome==null){
			    //根据userid查询user
                User user=userDao.selectUserById(userid);
				UserIncome ui=new UserIncome();
				ui.setUserid(userid);
				ui.setUsername(user.getName());
				ui.setMobile(user.getMobile());
				ui.setReward(reward);
				ui.setMoney(money);
				ui.setYearm(yearm);
				ui.setCuser(emp1.getId());
				ui.setTotalp(money.add(reward));
				ui.setFlag("0");
				userIncomeDao.addUserIncome(ui);
			}else{
				userIncomeDao.updateById(userIncome.getId(),money,reward,"0");
			}
			return  "ok";
		}catch (Exception e){
			return  "nook";
		}
	}


	//申请提现
	@ResponseBody
	@RequestMapping(value = "/deleteSalary")
	public String zx(Integer id,BigDecimal reward,BigDecimal money,HttpServletRequest request) {
		try{
			User emp1 = (User) request.getSession().getAttribute("empSession");
			logUtil.addLog("申请提现",emp1.getId(),emp1.getName());
			Date date=new Date();
			SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM");
			String yearm=sdf.format(date);
			UserIncome userIncome=userIncomeDao.selectUserIncomeByIdAndyearm(id,yearm);
			if(userIncome==null){
				//根据userid查询user
				User user=userDao.selectUserById(id);
				UserIncome ui=new UserIncome();
				ui.setUserid(id);
				ui.setUsername(user.getName());
				ui.setMobile(user.getMobile());
				ui.setReward(reward);
				ui.setMoney(money);
				ui.setYearm(yearm);
				ui.setCuser(emp1.getId());
				ui.setTotalp(money.add(reward));
				ui.setFlag("1");
				userIncomeDao.addUserIncome(ui);
			}else{
				userIncomeDao.updateById(userIncome.getId(),money,reward,"1");
			}
			return  "ok";
		}catch (Exception e){
			return "error";
		}

	}


	//首页跳转
	@RequestMapping(value = "/withdraw")
	public String withdraw(Model model, @ModelAttribute MenuUtil menuUtil, HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("访问提现管理",emp1.getId(),emp1.getName());
		model.addAttribute("menuUtil", menuUtil);
		return "userIncome/withdraw";
	}
	//提现待审核列表
	@ResponseBody
	@RequestMapping(value = "/withdrawList")
	public Map<String, Object> withdrawList(String search_name,Integer pagesize, Integer count) {
		Map<String, Object> map = new HashMap<>();

		Date date=new Date();
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM");
		String yearm=sdf.format(date);
		Page<UserIncome> pageList = userIncomeDao.getUserIncomeList(search_name,yearm,pagesize, count);;
		map.put("rows", pageList.getResult());
		map.put("total", pageList.getTotalCount());
		return map;
	}
	//审核提现
	@ResponseBody
	@RequestMapping(value = "/auditingWithdraw")
	public String auditingWithdraw(@RequestBody Map map){
		try{
			Integer id=Integer.parseInt(map.get("id").toString());
			Integer i=userIncomeDao.upById(id);
			return "ok";
		}catch (Exception e){
			return "error";
		}
	}

}
