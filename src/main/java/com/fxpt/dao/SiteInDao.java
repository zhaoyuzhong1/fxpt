package com.fxpt.dao;

import com.fxpt.dao.base.BaseDao;
import com.fxpt.dto.BaseDTO;
import com.fxpt.dto.SiteIn;
import com.fxpt.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class SiteInDao {

    @Autowired
    BaseDao baseDao;

    /**
     * 存储签到信息数据
     * @param siteIn 签到对象
     */
    public void insertSiteIn(SiteIn siteIn){
        StringBuffer sqlBuffer = new StringBuffer("INSERT INTO t_site_in(openId,site,site_address)");
        sqlBuffer.append(" VALUES('").append(siteIn.getOpenId()).append("','").append(siteIn.getSite());
        sqlBuffer.append("','").append(siteIn.getSiteAddress()).append("')");
        baseDao.insert(sqlBuffer.toString(), siteIn);
    }

    /**
     * 分页查询签到信息表
     * @param pageSize 页大小
     * @param count 总记录数量
     * @param <T> 查询类型为签到信息
     * @return 签到信息列表
     */
    public <T extends BaseDTO> Page<SiteIn> querySiteIn(Integer pageSize, Integer count,String keyWord){
        String sql = "select * from t_site_in ";
        if(keyWord!=null && !keyWord.equals("")){
            sql = sql + " where name like ? or mobile like ? order by cdate desc";
            return baseDao.queryByPage(sql, SiteIn.class,new Object[]{"%"+keyWord+"%","%"+keyWord+"%"}, pageSize, count);
        }else{
            sql = sql + " order by cdate desc";
            return baseDao.queryByPage(sql, SiteIn.class,new Object[]{}, pageSize, count);
        }

    }
}
