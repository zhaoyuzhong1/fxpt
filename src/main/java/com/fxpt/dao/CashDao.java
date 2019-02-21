package com.fxpt.dao;


import com.fxpt.dao.base.BaseDao;
import com.fxpt.dto.Cash;
import com.fxpt.dto.Goods;
import com.fxpt.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by wcw on 2018/12/29.
 */
@Component
public class CashDao {
    @Autowired
    BaseDao baseDao;

    //添加
    public Integer addCash(Cash cash){
        String sql =" insert into t_cash (userid,username,mobile,money,cdate,flag) values(:userid,:username,:mobile,:money,now(),'0')";
        return baseDao.insert(sql,cash);
    }

    //未审核列表
    public Page<Cash> getList(String search_name,Integer pagesize, Integer count) {
        String sql = "select tc.*,DATE_FORMAT(tc.cdate,'%Y-%m-%d %H:%i:%s') as ccdate, tu.money as newmoney, tu.name as realname from t_cash tc left join t_user tu on tc.userid=tu.id where tu.name like ? and tc.flag='0' order by tc.cdate desc ";
        return baseDao.queryByPage(sql,Cash.class,new Object[]{"%"+search_name+"%"},pagesize,count);
    }

    //根据id查询提现申请
    public Cash selectCashById(Integer id) {
        String sql = "select * from t_cash where id=? ";
        return baseDao.queryById(sql,Cash.class,new Object[]{id});
    }

    public Integer updateCash(Integer id){
        String sql ="update t_cash set flag='1' where id=? ";
        return baseDao.updateById(sql,id);
    }


    public Integer deleteGoods(int id){
        String sql ="update t_goods set flag='1' where id=? ";
        return baseDao.update2(sql,new Object[]{id});
    }


}
