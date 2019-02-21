package com.fxpt.dao;


import com.fxpt.dao.base.BaseDao;
import com.fxpt.dto.SysMenu;
import com.fxpt.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SysMenuDao {
	@Autowired
	private BaseDao baseDao;

	//列表
	public Page<SysMenu> getList(String search_name, Integer pagesize, Integer count) {
		String sql = "select a.*,(select a.name from sys_function b where a.pid=b.id) as pidname,(select c.name from sys_user c where a.cuser=c.id) as cusername from sys_function a where name like ?  or url like ? order by id";
		return baseDao.queryByPage(sql,SysMenu.class,new Object[]{"%"+search_name+"%","%"+search_name+"%"},pagesize,count);
	}

	//All
	public List<SysMenu> getAllList() {
		String sql = "select * from sys_function where flag=0 ";
		return baseDao.query(sql,SysMenu.class,null);
	}

	//添加前判断是否存在
	public Integer addExist(SysMenu menu){
		String sql ="select * from sys_function where name = ? ";
		if(baseDao.query(sql,SysMenu.class,new Object[]{menu.getName()}).size()>0){
			return 1;
		}
		return 0;
	}

	//添加
	public Integer addMenu(SysMenu menu){
		String sql ="insert into sys_function(name,url,pid,`order`,cdate,cuser,flag,iconcss) values(:name,:url,:pid,:order,now(),:cuser,0,:iconcss)";
		return baseDao.insert(sql,menu);
	}

	//修改前判断是否存在
	public Integer updateExist(SysMenu menu){
		String sql ="select * from sys_function where name = ? and id != ? ";
		if(baseDao.query(sql,SysMenu.class,new Object[]{menu.getName(),menu.getId()}).size()>0){
			return 1;
		}
		return 0;
	}

	//修改
	public Integer updateMenu(SysMenu menu){
		String sql ="update sys_function set name=:name,url=:url,pid=:pid,`order`=:order,iconcss=:iconcss where id=:id ";
		return baseDao.update(sql,menu);
	}

	//删除(伪)
	public Integer deleteMenu(int id){
		String sql ="update sys_function set flag=1 where id=? ";
		return baseDao.update2(sql,new Object[]{id});
	}
}
