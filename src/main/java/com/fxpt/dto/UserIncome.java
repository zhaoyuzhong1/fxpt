package com.fxpt.dto;

import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by james on 2018/12/14.
 * Update by wcw on 2018/12/29.
 */
public class UserIncome extends BaseDTO {
    private Integer id;
    private Integer userid;
    private String username;
    private String mobile;
    private String yearm;
    private BigDecimal money;
    private BigDecimal reward;
    private BigDecimal totalp;
    private Integer cuser;
    private Date cdate;
    private String flag;
    private String newapplydate;
    private String name;
    private String usermobile;

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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getYearm() {
        return yearm;
    }

    public void setYearm(String yearm) {
        this.yearm = yearm;
    }

    public BigDecimal getMoney() {
        return money;
    }

    public void setMoney(BigDecimal money) {
        this.money = money;
    }

    public BigDecimal getReward() {
        return reward;
    }

    public void setReward(BigDecimal reward) {
        this.reward = reward;
    }

    public BigDecimal getTotalp() {
        return totalp;
    }

    public void setTotalp(BigDecimal totalp) {
        this.totalp = totalp;
    }

    public Integer getCuser() {
        return cuser;
    }

    public void setCuser(Integer cuser) {
        this.cuser = cuser;
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

    public String getNewapplydate() {
        return newapplydate;
    }

    public void setNewapplydate(String newapplydate) {
        this.newapplydate = newapplydate;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsermobile() {
        return usermobile;
    }

    public void setUsermobile(String usermobile) {
        this.usermobile = usermobile;
    }
}
