package com.fxpt.dao;


import com.fxpt.dao.base.Base1Dao;
import com.fxpt.dto.Cash;
import com.fxpt.dto.Role;
import com.fxpt.dto.User;
import com.fxpt.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;

/**
 * Created by james on 2018/6/28.
 * Update by wcw on 2018/12/29.
 */
@Component
public class UserDao {
    @Autowired
    private com.fxpt.dao.base.BaseDao baseDao;
    @Autowired
    Base1Dao base1Dao;

    public User login(String loginName, String pwd){
        final String sql ="select * from t_user where mobile = ? and pwd = ? and flag='0'";
        List<User> emps = baseDao.query(sql,User.class,new Object[]{loginName,pwd});
        return emps.isEmpty() ? null : emps.get(0);
    }





    //查询所有用户列表
    public Page<User> getList(String search_name, String roleid, String flag, Integer pagesize, Integer count) {
        String sql="SELECT a.*,b.name as rolename from t_user a left join t_role b on a.roleid=b.id where 1=1 ";

        if(search_name!=null && !search_name.equals("")){
            sql = sql + " and a.name like '%"+search_name+"%'";
        }

        if(roleid!=null && !roleid.equals("")){
            sql = sql + " and a.roleid = '"+roleid+"'";
        }

        if(flag!=null && !flag.equals("")){
            sql = sql + " and a.flag ='"+flag+"'";
        }

        return baseDao.queryByPage(sql,User.class,new Object[]{},pagesize,count);
    }


    //根据id查询用户
    public User selectUserById(Integer id){
        String sql = "select * from t_user where id=? ";
        return baseDao.queryById(sql, User.class,new Object[]{id});
    }

    //根据id修改用户
    public Integer updateById(Integer id, BigDecimal bigDecimal){
        String sql ="update t_user set money=? where id=?";
        return baseDao.update2(sql,new Object[]{bigDecimal,id});
    }


    //根据id修改用户状态
    public Integer updateFlag(Integer id,String flag){
        String sql ="update t_user set flag=? where id=?";
        return baseDao.update2(sql,new Object[]{flag,id});
    }

    //根据id修改用户
    public Integer updateDelById(Integer id,String del){
        String sql ="update t_user set del=? where id=?";
        return baseDao.update2(sql,new Object[]{del,id});
    }
}
