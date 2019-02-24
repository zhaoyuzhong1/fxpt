package com.fxpt.dao;


import com.fxpt.dao.base.BaseDao;
import com.fxpt.dto.Cash;
import com.fxpt.dto.Material;
import com.fxpt.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by wcw on 2018/12/29.
 */
@Component
public class MaterialDao {
    @Autowired
    BaseDao baseDao;

    //添加素材
    public Integer addMaterial(Material material){
        String sql =" insert into t_material (name,imgpath,typeid,cdate,cuser,flag) values(:name,:imgpath,:typeid,now(),:cuser,'0')";
        return baseDao.insert(sql,material);
    }


    //未审核列表
    public Page<Material> getList(String search_name,Integer pagesize, Integer count) {
        String sql = "select tm.*,DATE_FORMAT(tm.cdate,'%Y-%m-%d %H:%i:%s') as ccdate,tu.name as username,tmt.name as typename from t_material tm left join t_user tu on tm.cuser=tu.id left join t_material_type tmt on.tm.typeid=tmt.id where tm.name like ? and tm.flag='0' order by tm.cdate desc ";
        return baseDao.queryByPage(sql,Material.class,new Object[]{"%"+search_name+"%"},pagesize,count);
    }

    //根据id查询提现申请
    public Material selectMaterialById(Integer id) {
        String sql = "select * from t_material where id=? ";
        return baseDao.queryById(sql,Material.class,new Object[]{id});
    }


    //删除素材
    public Integer updateMaterial(Integer id){
        String sql ="update t_material set flag='1' where id=? ";
        return baseDao.updateById(sql,id);
    }




}
