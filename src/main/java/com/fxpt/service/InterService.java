package com.fxpt.service;

import com.fxpt.dao.*;
import com.fxpt.dto.Cash;
import com.fxpt.dto.GoodsFile;
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
    @Autowired
    GoodsDao goodsDao;


    //启用imgFile的某个图片放在首页
    @Transactional
    public void qyImg(int id){
        imgFileDao.updateZx();
        imgFileDao.updateQy(id);
    }

    //启用goodsFile的某个图片做封面,要更新t_goods表的imgfile
    @Transactional
    public void qyGoodsImg(int id,int goodid,String imgfile){
        goodsFileDao.updateZx();
        goodsFileDao.updateQy(id);
        goodsDao.updateImgfile(goodid,imgfile);//更新goods表的imgfile的内容
    }

    //如果之前的图片有设置默认图片，调用改方法
    @Transactional
    public void addGoodFile(GoodsFile gf){
        goodsFileDao.updateZx();//之前所有的图片都要把fmflag设置为1
        goodsFileDao.addGoodsFile(gf);//插入新的封面图片
        goodsDao.updateImgfile(gf.getGoodid(),gf.getImgfile());//更新goods表的imgfile的内容
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
