package com.fxpt.web;

import com.fxpt.dao.CashDao;
import com.fxpt.dao.ImgFileDao;
import com.fxpt.dao.MaterialDao;
import com.fxpt.dto.*;
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
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

@Controller
@RequestMapping(value = "imgMaterial")
public class ImageRemarksController {
	@Autowired
	LogUtil logUtil;
	@Autowired
	ImgFileDao imgFileDao;
	@Autowired
	InterService interService;
	@Autowired
	private MaterialDao materialDao;



	//首页跳转
	@RequestMapping(value = "/imgRemark")
	public String index(Model model, @ModelAttribute MenuUtil menuUtil, HttpServletRequest request) {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("访问图片说明管理",emp1.getId(),emp1.getName());
		model.addAttribute("menuUtil", menuUtil);
		return "imgRemark/imgremark";
	}

	//图片列表
	@ResponseBody
	@RequestMapping(value = "/getImgList")
	public Map<String, Object> getImgList(String name,Integer pagesize, Integer count) {
		Map<String, Object> map = new HashMap<>();
		try{
			Page<Material> pageList =materialDao.getList(name, pagesize, count) ;
			map.put("rows", pageList.getResult());
			map.put("total", pageList.getTotalCount());
		}catch (Exception e){
			map.put("message","error");
			return map;
		}

		return map;
	}

	//跳转到添加jsp
    //首页跳转
    @RequestMapping(value = "/addimg")
    public String addimg(Model model, @ModelAttribute MenuUtil menuUtil, HttpServletRequest request) {
        User emp1 = (User) request.getSession().getAttribute("empSession");
        logUtil.addLog("访问添加图片管理",emp1.getId(),emp1.getName());
        model.addAttribute("menuUtil", menuUtil);
        return "imgRemark/addimg";
    }
	@RequestMapping(value = "/uploadImg")
	public String upload(HttpServletRequest request, HttpServletResponse response) throws IOException {
		User emp1 = (User) request.getSession().getAttribute("empSession");
		logUtil.addLog("上传图片", emp1.getId(), emp1.getName());
		response.setCharacterEncoding("UTF-8");
		Map<String, Object> json = new HashMap<String, Object>();
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		/** 页面控件的文件流* */
		MultipartFile multipartFile = null;
		Map map = multipartRequest.getFileMap();
		String name = multipartRequest.getParameter("name");
		System.out.println("name:" + name);
		for (Iterator i = map.keySet().iterator(); i.hasNext(); ) {
			Object obj = i.next();
			multipartFile = (MultipartFile) map.get(obj);
		}
		/** 获取文件的后缀* */
		String filename = multipartFile.getOriginalFilename();
		InputStream inputStream;
		//System.out.println("             "+request.getRealPath("/"));
		String basePath = request.getRealPath("/") + "upload\\index\\";
		byte[] data = new byte[1024];
		int len = 0;
		FileOutputStream fileOutputStream = null;
		try {
			inputStream = multipartFile.getInputStream();
			fileOutputStream = new FileOutputStream(basePath + filename);
			while ((len = inputStream.read(data)) != -1) {
				fileOutputStream.write(data, 0, len);
			}
			Material material=new Material();
			material.setName(name);
			material.setImgpath(basePath + filename);
			material.setCuser(emp1.getId());
			materialDao.addMaterial(material);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "redirect:imgRemark";
	}



    //查看
    @ResponseBody
    @RequestMapping(value = "/lookview")
    public Map lookview(Integer id,HttpServletRequest request){

        Map map=new HashMap();
        try{
            User emp1 = (User) request.getSession().getAttribute("empSession");
            logUtil.addLog("取消提货",emp1.getId(),emp1.getName());
            Material material=materialDao.selectMaterialById(id);
            map.put("name",material.getName());
            String src=material.getImgpath();
            src=src.substring(src.indexOf("app\\")+4);
            map.put("src",src);
            map.put("message","ok");

        }catch (Exception e){
            map.put("message","error");
            return map;
        }
        return map;
    }




	//删除
	@ResponseBody
	@RequestMapping(value = "/deleteImg")
	public String deleteImg(Integer id,HttpServletRequest request){
		String message="";
		try{
			User emp1 = (User) request.getSession().getAttribute("empSession");
			logUtil.addLog("取消提货",emp1.getId(),emp1.getName());
			materialDao.updateMaterial(id);
			message="ok";
		}catch (Exception e){
			message="error";
			return message;
		}
		return message;
	}






	
}
