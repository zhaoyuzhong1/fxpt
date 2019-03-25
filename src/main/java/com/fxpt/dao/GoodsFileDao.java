package com.fxpt.dao;


import com.fxpt.dao.base.Base1Dao;
import com.fxpt.dto.GoodsFile;
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
public class GoodsFileDao {
    @Autowired
    private com.fxpt.dao.base.BaseDao baseDao;
    @Autowired
    Base1Dao base1Dao;

    //查询这个商品的所有图片列表
    public Page<GoodsFile> getList(String id,Integer pagesize, Integer count) {
        String sql="SELECT * from t_goods_file where flag='0' and goodid=? order by fmflag asc";

        return baseDao.queryByPage(sql,GoodsFile.class,new Object[]{id},pagesize,count);
    }




    public int updateZx() {
        String sql="update t_goods_file set fmflag='1' where fmflag='0'";
        return baseDao.update2(sql,new Object[]{});
    }




    public int updateQy(int id) {
        String sql="update t_goods_file set fmflag='0' where id=?";
        return baseDao.update2(sql,new Object[]{id});
    }


    public Integer addGoodsFile(GoodsFile g){
        String sql =" insert into t_goods_file (goodid,imgfile,cdate,cuser,flag,fmflag) values(:goodid,:imgfile,now(),:cuser,'0',:fmflag)";
        //return baseDao.insert2(log);
        return baseDao.insert(sql,g);
    }



    public int delete(int id) {
        String sql="update t_goods_file set flag='1' where id=?";
        return baseDao.update2(sql,new Object[]{id});
    }


}
