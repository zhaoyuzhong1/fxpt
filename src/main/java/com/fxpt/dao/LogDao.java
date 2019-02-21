package com.fxpt.dao;


import com.fxpt.dao.base.BaseDao;
import com.fxpt.dto.Log;
import com.fxpt.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by james on 2018/10/8.
 */
@Component
public class LogDao {
    @Autowired
    BaseDao baseDao;

    //添加
    public Integer addLog(Log log){
        String sql =" insert into t_log (cuser,username,operate,cdate) values(:cuser,:username,:operate,now())";
        //return baseDao.insert2(log);
        return baseDao.insert(sql,log);
    }

    //列表
    public Page<Log> getList(String search_name, Integer pagesize, Integer count) {
        String sql = "select * from t_log where username like ? or operate like ?  order by cdate desc ";
        return baseDao.queryByPage(sql,Log.class,new Object[]{"%"+search_name+"%","%"+search_name+"%"},pagesize,count);
    }
}
