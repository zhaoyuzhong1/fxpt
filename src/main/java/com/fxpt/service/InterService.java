package com.fxpt.service;

import com.fxpt.dao.*;
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
    @Autowired
    UpGradeDao upGradeDao;
    @Autowired
    GoodsFileDao goodsFileDao;


    //启用imgFile的某个图片放在首页
    @Transactional
    public void qyImg(int id){
        imgFileDao.updateZx();
        imgFileDao.updateQy(id);
    }

    //启用goodsFile的某个图片做封面
    @Transactional
    public void qyGoodsImg(int id){
        goodsFileDao.updateZx();
        goodsFileDao.updateQy(id);
    }


    //升级审核通过
    @Transactional
    public int tg(int id,int userid,int uproleid){
        int i = upGradeDao.updUpGrade(id,"1");
        int k = userDao.updateRole(userid,uproleid);
        return i+k;
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
