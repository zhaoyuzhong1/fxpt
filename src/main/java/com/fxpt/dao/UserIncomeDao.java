package com.fxpt.dao;


import com.fxpt.dao.base.Base1Dao;
import com.fxpt.dto.User;
import com.fxpt.dto.UserIncome;
import com.fxpt.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

/**
 * Created by james on 2018/6/28.
 * Update by wcw on 2018/12/29.
 */
@Component
public class UserIncomeDao {
    @Autowired
    private com.fxpt.dao.base.BaseDao baseDao;
    @Autowired
    Base1Dao base1Dao;



    //查询所有用户列表
    public Page<User> getUserList(String search_name,Integer pagesize, Integer count) {
        String sql="SELECT  tu.*,tr.name AS rolename ,tui.yearm,tui.money AS newmoney,tui.flag AS newflag,tui.reward\n" +
                "FROM t_user tu \n" +
                "LEFT JOIN t_role tr ON tr.id =tu.roleid\n" +
                "LEFT JOIN t_user_income tui ON tui.userid =tu.id \n" +
                "WHERE tu.flag='1' AND (tu.name LIKE ? OR tu.mobile LIKE ? ) AND (tui.yearm IN \n" +
                "(SELECT MAX(yearm) FROM t_user_income GROUP BY userid ) OR tui.yearm IS NULL) ORDER BY tui.flag";
        return baseDao.queryByPage(sql,User.class,new Object[]{"%"+search_name+"%","%"+search_name+"%"},pagesize,count);
    }


    //根据用户id和yearm查询user_income
    public UserIncome selectUserIncomeByIdAndyearm(Integer userid,String yearm){
        String sql = "select * from t_user_income where userid=? and yearm=? and flag='0'";
        return baseDao.queryById(sql, UserIncome.class,new Object[]{userid,yearm});
    }

    //根据用户id修改工资
    public Integer updateById(Integer id, BigDecimal money,BigDecimal reward,String  flag){
        BigDecimal  totalp=money.add(reward);
        String sql ="update t_user_income set money=?,reward=?,totalp=?,flag=?,applydate=? where id=?";
        return baseDao.update2(sql,new Object[]{money,reward,totalp,flag,new Date(),id});
    }


    //根据用户id修改工资
    public Integer updateMoneyById(Integer id,BigDecimal money){
        String sql ="update t_user_income set money=?,totalp=? where id=?";
        return baseDao.update2(sql,new Object[]{money,money,id});
    }
    //新增一条记录
    public Integer addUserIncome(UserIncome userIncome){
        String sql =" insert into t_user_income (userid,username,mobile,yearm,money,reward,totalp,cdate,cuser,flag) values(:userid,:username,:mobile,:yearm,:money,:reward,:totalp,now(),:cuser,:flag)";
        return baseDao.insert(sql,userIncome);
    }
    //申请提现
    public Integer upById(Integer id){
        String sql ="update t_user_income set flag='3' where id=? ";
        return baseDao.update2(sql,new Object[]{id});
    }

    //查询已申请提现的用户
    public Page<UserIncome> getUserIncomeList(String search_name,String yearm,Integer pagesize, Integer count) {
        String sql="SELECT tui.*,tu.name AS name,DATE_FORMAT(tui.applydate,'%Y-%m-%d %H:%i:%s') as newapplydate,tu.mobile AS usermobile\n" +
                "FROM t_user_income tui\n" +
                "LEFT JOIN t_user tu  ON tui.userid =tu.id \n" +
                "WHERE tui.yearm=? AND tui.flag='1' and (tu.name LIKE ? OR tu.mobile LIKE ? ) ";
        return baseDao.queryByPage(sql,UserIncome.class,new Object[]{yearm,"%"+search_name+"%","%"+search_name+"%"},pagesize,count);
    }
}
