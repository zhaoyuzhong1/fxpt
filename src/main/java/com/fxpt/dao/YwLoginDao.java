package com.fxpt.dao;



import com.fxpt.dao.base.BaseDao;
import com.fxpt.dto.Function;
import com.fxpt.dto.User;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by What！ on 2017/7/21.
 */
@Component
public class YwLoginDao {
    Log log = LogFactory.getLog(YwLoginDao.class);
    @Autowired
    private BaseDao baseDao;

    public User selectLoginEmp(String loginName, String loginPassword) {
        StringBuffer sql =new StringBuffer();
        sql.append("select * from sys_user where mobile=? and pwd=? and roleid=1");
        List<User> emps = baseDao.query(sql.toString(),User.class,new Object[]{loginName,loginPassword});
        return emps.isEmpty()?null:emps.get(0);
    }


    public List<Function> getAllParent(String roleid){

        StringBuffer sql = new StringBuffer();
        sql.append(" select * from sys_function where flag = '0' and pid=0");
        sql.append(" and id in (SELECT functionid from t_role_function where roleid = ? ) ");
        sql.append(" order by `sort`");
        return baseDao.query(sql.toString(),Function.class,new Object[]{roleid});

    }


    public List<Function> getAllByPid(int pid,String id){
        StringBuffer sql = new StringBuffer();
        sql.append(" select * from sys_function where flag = '1' and pid=? and  id!=? ");
        sql.append(" and id in (SELECT function_id from t_part_function  ) ");
        sql.append(" order by `sort`");
        return baseDao.query(sql.toString(),Function.class,new Object[]{pid,id});
        //return baseDao.query(sql.toString(),Function.class,new Object[]{pid});
    }
    public List<Function> getAllByPid1(int pid,Integer empid){
        StringBuffer sql = new StringBuffer();
      sql.append(" select * from sys_function where flag = '0' and pid=  ?  and  id in  ");
        sql.append(" (SELECT functionid from sys_role_function  WHERE roleid in ");
        sql.append(" (SELECT roleid from sys_user WHERE id = ? )) " );
        sql.append(" order by `sort`");
        return baseDao.query(sql.toString(),Function.class,new Object[]{pid,empid});
    }
    /*public int select(int emp_id) {
        StringBuffer sql = new StringBuffer();
        sql.append(" SELECT count(*) FROM t_service_apply where now_person = ? and now_person != readperson and status =1 ");
        return baseDao.queryForObject(sql.toString(),Integer.class,new Object[]{emp_id});
    }*/


}
