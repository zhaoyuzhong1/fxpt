package com.fxpt.dao;


import com.fxpt.dao.base.Base1Dao;
import com.fxpt.dto.ImgFile;
import com.fxpt.dto.User;
import com.fxpt.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by james on 2018/6/28.
 */
@Component
public class ImgFileDao {
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
    public Page<ImgFile> getList(Integer pagesize, Integer count) {
        String sql="SELECT * from t_imgfile order by flag asc";

        return baseDao.queryByPage(sql,ImgFile.class,new Object[]{},pagesize,count);
    }


    public ImgFile getImgFileById(int id) {
        String sql="SELECT * from t_imgfile where id=?";

        return baseDao.queryForObject(sql,ImgFile.class,new Object[]{id});
    }



    public int updateZx() {
        String sql="update t_imgfile set flag='1' where flag='0'";
        return baseDao.update2(sql,new Object[]{});
    }


    public int updateZx2(int id) {
        String sql="update t_imgfile set flag='1' where id=?";
        return baseDao.update2(sql,new Object[]{id});
    }


    public int updateQy(int id) {
        String sql="update t_imgfile set flag='0' where id=?";
        return baseDao.update2(sql,new Object[]{id});
    }

    public Integer addImgFile(ImgFile g){
        String sql =" insert into t_imgfile (name,imgpath,cdate,cuser,flag) values(:name,:imgpath,now(),:cuser,'1')";
        //return baseDao.insert2(log);
        return baseDao.insert(sql,g);
    }


}
