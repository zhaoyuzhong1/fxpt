package com.fxpt.dao;


import com.fxpt.dao.base.BaseDao;
import com.fxpt.dto.Goods;
import com.fxpt.dto.Log;
import com.fxpt.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by james on 2018/10/8.
 */
@Component
public class GoodsDao {
    @Autowired
    BaseDao baseDao;

    //添加
    public Integer addGoods(Goods g){
        String sql =" insert into t_goods (name,price,buyprice1,buyprice2,buyprice3,spec,taste,proadd,fitpeople,stuff,detail,stock,cdate,cuser,flag) values(:name,:price,:buyprice1,:buyprice2,:buyprice3,:spec,:taste,:proadd,:fitpeople,:stuff,:detail,:stock,now(),:cuser,'0')";
        //return baseDao.insert2(log);
        return baseDao.insert(sql,g);
    }

    //列表
    public Page<Goods> getList(String search_name, Integer pagesize, Integer count) {
        String sql = "select * from t_goods where name like ? and flag='0' order by cdate desc ";
        return baseDao.queryByPage(sql,Goods.class,new Object[]{"%"+search_name+"%"},pagesize,count);
    }


    public Integer updateGoods(Goods goods){
        String sql ="update t_goods set name=:name,price=:price,buyprice1=:buyprice1,buyprice2=:buyprice2,buyprice3=:buyprice3,spec=:spec,taste=:taste,proadd=:proadd,fitpeople=:fitpeople,stuff=:stuff,detail=:detail,stock=:stock where id=:id ";
        return baseDao.update(sql,goods);
    }


    public Integer deleteGoods(int id){
        String sql ="update t_goods set flag='1' where id=? ";
        return baseDao.update2(sql,new Object[]{id});
    }


}
