package com.fxpt.dao;



import com.fxpt.dao.base.BaseDao;
import com.fxpt.dto.BaseDTO;
import com.fxpt.dto.SiteIn;
import com.fxpt.dto.UpGrade;
import com.fxpt.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by james on 2018/10/8.
 */
@Component
public class UpGradeDao {
    @Autowired
    BaseDao baseDao;



    //添加库存包括购买
    public int addUpGrade(UpGrade ug) {
        String sql = "insert into t_upgrade(userid,roleid,uproleid,cdate,flag) values(:userid,:roleid,:uproleid,now(),'0')";
        return baseDao.insert(sql,ug);
    }



    public List<UpGrade> getUpGrade(String flag) {
        String sql = "SELECT * from t_upgrade where flag=? order by cdate desc";
        return baseDao.query(sql,UpGrade.class,new Object[]{flag});
    }




    public int updUpGrade(int id,String flag) {
        String sql = "update t_upgrade set flag=? where id=? ";
        return baseDao.update2(sql,new Object[]{flag,id});
    }



    public <T extends BaseDTO> Page<UpGrade> queryList(Integer pageSize, Integer count, String keyWord){
        String sql = "select a.*,b.name as username,c.name as rolename,d.name as uprolename,(SELECT IFNULL(SUM(totalprice),0) FROM t_user_goods f where f.userid=a.userid and f.flag in('2','3')) as totalprice from t_upgrade a left join t_user b on a.userid=b.id left join t_role c on a.roleid=c.id left join t_role d on a.uproleid=d.id ";
        if(keyWord!=null && !keyWord.equals("")){
            sql = sql + " where a.flag='0' and b.name like ? order by a.cdate desc";
            return baseDao.queryByPage(sql, UpGrade.class,new Object[]{"%"+keyWord+"%","%"+keyWord+"%"}, pageSize, count);
        }else{
            sql = sql + " where a.flag='0' order by a.cdate desc";
            return baseDao.queryByPage(sql, UpGrade.class,new Object[]{}, pageSize, count);
        }

    }


}
