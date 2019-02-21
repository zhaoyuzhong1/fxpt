package com.fxpt.web;

import com.fxpt.dao.ImgFileDao;
import com.fxpt.dao.RoleDao;
import com.fxpt.dao.UserDao;
import com.fxpt.dto.ImgFile;
import com.fxpt.dto.Role;
import com.fxpt.dto.User;
import com.fxpt.service.InterService;
import com.fxpt.util.LogUtil;
import com.fxpt.util.MenuUtil;
import com.fxpt.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "file")
public class FileController {
	@Autowired
	LogUtil logUtil;
	@Autowired
	ImgFileDao imgFileDao;
	@Autowired
	InterService interService;


	@RequestMapping(value = "/uploadFile")
	public String upload(HttpServletRequest request, HttpServletResponse response) throws IOException {

		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("上传首页图片",emp1.getId(),emp1.getName());
		response.setCharacterEncoding("UTF-8");
		Map<String, Object> json = new HashMap<String, Object>();
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;

		/** 页面控件的文件流* */
		MultipartFile multipartFile = null;
		Map map =multipartRequest.getFileMap();
		String name = multipartRequest.getParameter("name");
		System.out.println("name:"+name);
		for (Iterator i = map.keySet().iterator(); i.hasNext();) {
			Object obj = i.next();
			multipartFile=(MultipartFile) map.get(obj);

		}

		/** 获取文件的后缀* */
		String filename = multipartFile.getOriginalFilename();

		InputStream inputStream;
		//System.out.println("             "+request.getRealPath("/"));
		String basePath=request.getRealPath("/")+"upload\\index\\";


		byte[] data = new byte[1024];
		int len = 0;
		FileOutputStream fileOutputStream = null;

		try {
			inputStream = multipartFile.getInputStream();
			fileOutputStream = new FileOutputStream(basePath+filename);
			while ((len = inputStream.read(data)) != -1) {
				fileOutputStream.write(data, 0, len);
			}
			ImgFile img = new ImgFile();
			img.setName(name);
			img.setImgpath(basePath+filename);
			img.setCuser(emp1.getId());
			imgFileDao.addImgFile(img);
		} catch (Exception e) {
			e.printStackTrace();
		}


		return "redirect:index";

	}


	//首页跳转
	@RequestMapping(value = "/index")
	public String index(Model model, @ModelAttribute MenuUtil menuUtil, HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("访问首页图片管理",emp1.getId(),emp1.getName());

		model.addAttribute("menuUtil", menuUtil);
		return "file/test";
	}

	//列表
	@ResponseBody
	@RequestMapping(value = "/queryList")
	public Map<String, Object> queryList(Integer pagesize, Integer count) {
		Map<String, Object> map = new HashMap<>();
		Page<ImgFile> pageList = imgFileDao.getList(pagesize, count);
		map.put("rows", pageList.getResult());
		map.put("total", pageList.getTotalCount());
		return map;
	}


	@ResponseBody
	@RequestMapping(value = "/qy")
	public String qy(int id,HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("启用图片("+id+")",emp1.getId(),emp1.getName());
		String result = "ok";
		try {
			interService.qyImg(id);
		}catch (Exception e){
			result = "nook";
		}
		return result;
	}



	@ResponseBody
	@RequestMapping(value = "/zx")
	public String zx(int id,HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("注销图片("+id+")",emp1.getId(),emp1.getName());
		String result = "ok";
		int oo = imgFileDao.updateZx2(id);
		if(oo!=0){
			result = "nook";
		}
		return result;
	}




	
}
