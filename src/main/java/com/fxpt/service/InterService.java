package com.fxpt.service;

import com.fxpt.dao.CashDao;
import com.fxpt.dao.ImgFileDao;
import com.fxpt.dao.UserDao;
import com.fxpt.dto.Cash;
import com.fxpt.dto.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by james on 2018/12/20.
 * Update by wcw on 2018/12/29.
 */
@Service
public class InterService {
    @Autowired
    ImgFileDao imgFileDao;

    @Autowired
    CashDao cashDao;

    @Autowired
    UserDao userDao;



    @Transactional
    public void qyImg(int id){
        imgFileDao.updateZx();
        imgFileDao.updateQy(id);
    }


    @Transactional
    public Map auditingWithdraw(Integer id, BigDecimal bigDecimal){
        Map map =new HashMap();
        try{
            Cash cash=cashDao.selectCashById(id);
            User user=userDao.selectUserById(cash.getUserid());
            if(user.getMoney()==null){
                user.setMoney(new BigDecimal(0));
            }
            Integer j=0;
            Integer i=0;
            if(user.getMoney().compareTo(bigDecimal)>=0){
                BigDecimal sd=user.getMoney().subtract(bigDecimal);
                j=userDao.updateById(user.getId(),sd);
                i=cashDao.updateCash(id);
            }else{
                map.put("message","提现金额大于用户余额,提现失败");
                return map;
            }
            map.put("message","提现成功");
        }catch (Exception e){
            map.put("message","提现失败");
            return map;
        }
        return map;

    }
}
