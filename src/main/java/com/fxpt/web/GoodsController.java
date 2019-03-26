package com.fxpt.web;

import com.fxpt.dao.GoodsDao;
import com.fxpt.dao.GoodsFileDao;
import com.fxpt.dto.Goods;
import com.fxpt.dto.GoodsFile;
import com.fxpt.dto.Material;
import com.fxpt.dto.User;
import com.fxpt.service.InterService;
import com.fxpt.util.LogUtil;
import com.fxpt.util.MenuUtil;
import com.fxpt.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

@Controller
@RequestMapping(value = "goods")
public class GoodsController  {
	@Autowired
	LogUtil logUtil;
	@Autowired
	GoodsDao goodsDao;
	@Autowired
	GoodsFileDao goodsFileDao;
	@Autowired
	InterService interService;
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



	@RequestMapping(value = "/imgfile")
	public String imgfile(String id,String name, Model model) {
		model.addAttribute("goodname",name);
		model.addAttribute("goodid",id);
		return "goods/imgfile";
	}





	@ResponseBody
	@RequestMapping(value = "/queryImgList")
	public Map<String, Object> queryImgList(String goodid, Integer pagesize, Integer count) {
		Map<String, Object> map = new HashMap<>();
		Page<GoodsFile> pageList = goodsFileDao.getList(goodid,pagesize, count);
		map.put("rows", pageList.getResult());
		map.put("total", pageList.getTotalCount());
		return map;
	}



	@RequestMapping(value = "/uploadGoodsFile")
	public String uploadGoodsFile(HttpServletRequest request, HttpServletResponse response) throws IOException {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		response.setCharacterEncoding("UTF-8");
		Map<String, Object> json = new HashMap<String, Object>();
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;

		/** 页面控件的文件流* */
		MultipartFile multipartFile = null;
		Map map =multipartRequest.getFileMap();
		String fmflag = multipartRequest.getParameter("fmflag");
		String goodid = multipartRequest.getParameter("goodid");
		for (Iterator i = map.keySet().iterator(); i.hasNext();) {
			Object obj = i.next();
			multipartFile=(MultipartFile) map.get(obj);

		}

		/** 获取文件的后缀* */
		String filename = multipartFile.getOriginalFilename();

		InputStream inputStream;
		//System.out.println("             "+request.getRealPath("/"));
		String basePath="D:\\fxpt_upload\\goods\\";

		File f = new File(basePath);
		if(!f.exists()){
			f.mkdir();
		}


		byte[] data = new byte[1024];
		int len = 0;
		FileOutputStream fileOutputStream = null;

		try {
			String name = new Date().getTime()+filename.substring(filename.indexOf("."),filename.length());
			inputStream = multipartFile.getInputStream();
			fileOutputStream = new FileOutputStream(basePath+name);
			while ((len = inputStream.read(data)) != -1) {
				fileOutputStream.write(data, 0, len);
			}
			GoodsFile img = new GoodsFile();
			img.setGoodid(Integer.parseInt(goodid));
			img.setImgfile(name);
			img.setFlag("0");
			img.setCuser(emp1.getId());
			img.setFmflag(fmflag);
			if(fmflag.equals("0")){
				interService.addGoodFile(img);
			}else {
				goodsFileDao.addGoodsFile(img);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}


		return "redirect:imgfile?id="+goodid;

	}


	@ResponseBody
	@RequestMapping(value = "/lookview")
	public Map lookview(Integer id,HttpServletRequest request){

		Map map=new HashMap();
		try{
			GoodsFile gf = goodsFileDao.getFileById(id+"");
			//System.out.println("id:"+id+"==="+gf);
			map.put("src",gf.getImgfile());
			map.put("message","ok");

		}catch (Exception e){
			e.printStackTrace();
			map.put("message","error");
			return map;
		}
		return map;
	}





	@RequestMapping(value = "/addimg")
	public String addimg(String goodid,Model model, @ModelAttribute MenuUtil menuUtil) {
		model.addAttribute("goodid",goodid);
		return "goods/addimg";
	}


	@ResponseBody
	@RequestMapping(value = "/deleteImg")
	public String deleteImg(Integer id,HttpServletRequest request){
		String message="";
		try{
			goodsFileDao.delete(id);
			message="ok";
		}catch (Exception e){
			message="error";
			return message;
		}
		return message;
	}



	//设置某个图片为封面图片
	@ResponseBody
	@RequestMapping(value = "/fm")
	public String fm(Integer id,Integer goodid,String imgfile){
		String result = "ok";
		try{
			interService.qyGoodsImg(id,goodid,imgfile);
		}catch (Exception e){
			result = "nook";
			e.printStackTrace();
		}
		return result;
	}
}
