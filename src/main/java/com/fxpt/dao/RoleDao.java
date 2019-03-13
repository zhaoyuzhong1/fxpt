package com.fxpt.dao;

import com.fxpt.dao.base.BaseDao;
import com.fxpt.dto.Role;
import com.fxpt.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by james on 2018/12/17.
 */
@Component
public class RoleDao {
    @Autowired
    BaseDao baseDao;

    public List<Role> getList(){
        String sql = "select * from t_role order by id asc";
        return baseDao.query(sql,Role.class,new Object[]{});
    }


    //列表
    public Page<Role> getList(Integer pagesize, Integer count) {
        String sql = "select * from t_role order by id asc ";
        return baseDao.queryByPage(sql,Role.class,new Object[]{},pagesize,count);
    }


    public Integer updateRole(Role role){
        String sql ="update t_role set name=:name,price=:price,parm=:parm where id =:id ";
        return baseDao.update(sql,role);
    }
}
