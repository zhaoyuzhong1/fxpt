package com.fxpt.dao;


import com.fxpt.dao.base.BaseDao;
import com.fxpt.dto.Material;
import com.fxpt.dto.MaterialType;
import com.fxpt.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by wcw on 2018/12/29.
 */
@Component
public class MaterialTypeDao {
    @Autowired
    BaseDao baseDao;

    //添加素材
    public Integer addMaterialType(MaterialType material){
        String sql =" insert into t_material_type (name,flag) values(:name,:flag)";
        return baseDao.insert(sql,material);
    }


    //未审核列表
    public Page<MaterialType> getList(String search_name,Integer pagesize, Integer count) {
        if(search_name!=null && !search_name.equals("")) {
            String sql = "select * from t_material_type where name like ? and flag='0'";
            return baseDao.queryByPage(sql, MaterialType.class, new Object[]{"%" + search_name + "%"}, pagesize, count);
        }else{
            String sql = "select * from t_material_type where flag='0'";
            return baseDao.queryByPage(sql, MaterialType.class, new Object[]{}, pagesize, count);
        }
    }


    public MaterialType selectMaterialById(Integer id) {
        String sql = "select * from t_material_type where id=? ";
        return baseDao.queryById(sql,MaterialType.class,new Object[]{id});
    }



    public List<MaterialType> getMaterialTypes() {
        String sql = "select * from t_material_type where flag='0' ";
        return baseDao.query(sql,MaterialType.class,new Object[]{});
    }


    //删除素材
    public Integer zxMaterialType(String id){
        String sql = "update t_material_type set flag='1' where id=?";
        return baseDao.update2(sql,new Object[]{id});
    }



    public Integer updateType(String id,String name){
        String sql = "update t_material_type set name=? where id=?";
        return baseDao.update2(sql,new Object[]{name,id});
    }



    //启用素材
    public Integer qyMaterialType(Integer id){
        String sql = "update t_material_type set flag='0' where id=?";
        return baseDao.update2(sql,new Object[]{id});
    }




}
