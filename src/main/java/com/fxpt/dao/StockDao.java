package com.fxpt.dao;


import com.fxpt.dao.base.BaseDao;
import com.fxpt.dto.Cash;
import com.fxpt.dto.Stock;
import com.fxpt.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;

/**
 * Created by wcw on 2018/12/29.
 */
@Component
public class StockDao {
    @Autowired
    BaseDao baseDao;

    //添加
    public Integer addStock(Cash cash){
        String sql =" insert into t_stock (userid,username,mobile,goodid,goodname,type,price,buynum,buyprice,cdate,postname,postmobile,postadd,message,flag) values(:userid,:username,:mobile,:goodid,:goodname,:type,:price,:buynum,:buyprice,now(),:postname,:postmobile,:postadd,:message,'1')";
        return baseDao.insert(sql,cash);
    }

    //未审核列表
    public Page<Stock> getList(String mobile, Date beginDate, Date finishDate, Integer pagesize, Integer count, String flag, String type) {
        String sql = "select *,DATE_FORMAT(cdate,'%Y-%m-%d %H:%i:%s') as ccdate from t_stock where mobile like ? and cdate >= ? and cdate<=? and flag=? and type=? order by cdate desc ";
        return baseDao.queryByPage(sql,Stock.class,new Object[]{"%"+mobile+"%",beginDate,finishDate,flag,type},pagesize,count);
    }

    //审核提货
    public Integer updateStockFlagByFour(Integer id){
        String sql ="update t_stock set flag='4' where id=? ";
        return baseDao.updateById(sql,id);
    }

    //审核购买库存
    public Integer updateStockFlagByTwo(Integer id){
        String sql ="update t_stock set flag='2' where id=? ";
        return baseDao.updateById(sql,id);
    }


    //取消审核
    public Integer updateStockFlagByNine(Integer id){
        String sql ="update t_stock set flag='9' where id=? ";
        return baseDao.updateById(sql,id);
    }

}
