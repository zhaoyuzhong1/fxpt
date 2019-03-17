package com.fxpt.dto;

import java.util.Date;

/**
 * Created by Administrator on 2019/1/19/019.
 */
public class UpGrade extends BaseDTO {
    private Integer id;
    private Integer userid;
    private Integer roleid;
    private String rolename;
    private Integer uproleid;
    private String uprolename;
    private double totalprice;
    private Date cdate;
    private String flag;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Integer getRoleid() {
        return roleid;
    }

    public void setRoleid(Integer roleid) {
        this.roleid = roleid;
    }

    public Integer getUproleid() {
        return uproleid;
    }

    public void setUproleid(Integer uproleid) {
        this.uproleid = uproleid;
    }

    public Date getCdate() {
        return cdate;
    }

    public void setCdate(Date cdate) {
        this.cdate = cdate;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }

    public String getRolename() {
        return rolename;
    }

    public void setRolename(String rolename) {
        this.rolename = rolename;
    }

    public String getUprolename() {
        return uprolename;
    }

    public void setUprolename(String uprolename) {
        this.uprolename = uprolename;
    }

    public double getTotalprice() {
        return totalprice;
    }

    public void setTotalprice(double totalprice) {
        this.totalprice = totalprice;
    }
}
