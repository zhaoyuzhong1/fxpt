package com.fxpt.dao;

import com.fxpt.dao.base.BaseDao;
import com.fxpt.dto.UserGoods;
import com.fxpt.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by james on 2018/12/17.
 */
@Component
public class UserGoodsDao {
    @Autowired
    BaseDao baseDao;

    //查询所有用户销售货品列表，查询所有确认结算的数据
    public Page<UserGoods> getList(String search_name,Integer pagesize, Integer count) {
        String sql="SELECT * from t_user_goods where flag='1' ";
        List<String> arr = new ArrayList();
        if(search_name!=null && !search_name.equals("")){
            sql = sql + " and (username like ? or mobile like ? )";
            arr.add("%"+search_name+"%");
            arr.add("%"+search_name+"%");
        }

        return baseDao.queryByPage(sql,UserGoods.class,arr.toArray(),pagesize,count);
    }



    //查询所有用户销售货品列表，查询所有已付款的数据
    public Page<UserGoods> getQrList(String search_name,Integer pagesize, Integer count) {
        String sql="SELECT * from t_user_goods where flag='2' ";
        List<String> arr = new ArrayList();
        if(search_name!=null && !search_name.equals("")){
            sql = sql + " and (username like ? or mobile like ? )";
            arr.add("%"+search_name+"%");
            arr.add("%"+search_name+"%");
        }

        return baseDao.queryByPage(sql,UserGoods.class,arr.toArray(),pagesize,count);
    }



    //查询所有用户销售货品列表，查询所有已发货的数据
    public Page<UserGoods> getFhList(String search_name,Integer pagesize, Integer count) {
        String sql="SELECT * from t_user_goods where flag='3' ";
        List<String> arr = new ArrayList();
        if(search_name!=null && !search_name.equals("")){
            sql = sql + " and (username like ? or mobile like ? )";
            arr.add("%"+search_name+"%");
            arr.add("%"+search_name+"%");
        }

        return baseDao.queryByPage(sql,UserGoods.class,arr.toArray(),pagesize,count);
    }


    //添加
    public Integer addUserGoods(UserGoods ui){
        String sql =" insert into t_user_goods (userid,username,mobile,roleid,goodid,goodname,buyprice,buynum,totalprice,postadd,postname,postmobile,message,cdate,cuser,flag) values(:userid,:username,:mobile,:roleid,:goodid,:goodname,:buyprice,:buynum,:totalprice,:postadd,:postname,:postmobile,:message,now(),:cuser,'0')";
        //return baseDao.insert2(log);
        return baseDao.insert(sql,ui);
    }



    public Integer updateQr(int id,String flag){
        String sqlPunish ="update t_user_goods set flag=?,qrdate=now() where id = ? ";
        Integer punishStatus = baseDao.update2(sqlPunish,new Object[]{flag,id});

        return punishStatus;

    }


    public Integer updateFh(int id,String flag){
        String sqlPunish ="update t_user_goods set flag=?,fhdate=now() where id = ? ";
        Integer punishStatus = baseDao.update2(sqlPunish,new Object[]{flag,id});

        return punishStatus;

    }


    public Integer updateQx(int id,String flag){
        String sqlPunish ="update t_user_goods set flag=?,qxdate=now() where id = ? ";
        Integer punishStatus = baseDao.update2(sqlPunish,new Object[]{flag,id});

        return punishStatus;

    }



}
