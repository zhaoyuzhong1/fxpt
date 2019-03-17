package com.fxpt.web;



import com.fxpt.dao.RoleDao;
import com.fxpt.dao.UpGradeDao;
import com.fxpt.dao.UserGoodsDao;
import com.fxpt.dto.SiteIn;
import com.fxpt.dto.UpGrade;
import com.fxpt.dto.User;
import com.fxpt.service.InterService;
import com.fxpt.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "upgrade")
public class UpGradeController {

	@Autowired
    UserGoodsDao userGoodsDao;

	@Autowired
    RoleDao roleDao;

    @Autowired
    UpGradeDao upGradeDao;

    @Autowired
    InterService interService;


	//跳往升级处理  首页
	@RequestMapping(value = "/index")
	public String index(Model model, HttpServletRequest request) {


		return "upgrade/index";
	}



    //跳往升级记录页
    @RequestMapping(value = "/record")
    public String record() {
        return "upgrade/record";
    }



    @ResponseBody
    @RequestMapping("/queryList")
    public Map<String, Object> queryList(String search_name, Integer pagesize, Integer count){
        Map<String, Object> map = new HashMap<>();
        Page<UpGrade> pageList = upGradeDao.queryList(pagesize,count,search_name);
        map.put("rows", pageList.getResult());
        map.put("total", pageList.getTotalCount());
        return map;
    }



    @ResponseBody
    @RequestMapping("/tg")
    public String tg(int id,int userid,int uproleid){
        String result = "ok";
        
        int k = interService.tg(id, userid, uproleid);
        if(k>0) result = "nook";

        return result;
    }



    @ResponseBody
    @RequestMapping("/btg")
    public String btg(int id){
        int k = upGradeDao.updUpGrade(id,"2");
        if(k==0){
            return "ok";
        } else{
            return "nook";
        }
    }

}
