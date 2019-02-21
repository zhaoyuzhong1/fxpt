package com.fxpt.dto;

import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by wcw on 2018/12/29.
 */
public class Cash extends BaseDTO {
    private Long id;
    private Integer userid;
    private String username;
    private String mobile;
    private BigDecimal money;
    private Integer flag;
    private Date cdate;
    private String realname;
    private BigDecimal newmoney;
    private String ccdate;
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public BigDecimal getMoney() {
        return money;
    }

    public void setMoney(BigDecimal money) {
        this.money = money;
    }

    public Integer getFlag() {
        return flag;
    }

    public void setFlag(Integer flag) {
        this.flag = flag;
    }

    public Date getCdate() {
        return cdate;
    }

    public void setCdate(Date cdate) {
        this.cdate = cdate;
    }

    public String getRealname() {
        return realname;
    }

    public void setRealname(String realname) {
        this.realname = realname;
    }

    public BigDecimal getNewmoney() {
        return newmoney;
    }

    public void setNewmoney(BigDecimal newmoney) {
        this.newmoney = newmoney;
    }

    public String getCcdate() {
        return ccdate;
    }

    public void setCcdate(String ccdate) {
        this.ccdate = ccdate;
    }
}
