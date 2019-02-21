package com.fxpt.dao;

import com.fxpt.dao.base.BaseDao;
import com.fxpt.dto.Role;
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
        String sql = "select * from t_role where type!='admin' order by id asc";
        return baseDao.query(sql,Role.class,new Object[]{});
    }
}
