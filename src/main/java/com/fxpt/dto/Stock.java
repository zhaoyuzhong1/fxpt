package com.fxpt.dto;

import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by wcw on 2018/12/29.
 */
public class Stock extends BaseDTO {
    private Long id;
    private Integer userid;
    private String username;
    private String mobile;
    private Integer goodid;
    private String goodname;
    private String type;
    private BigDecimal price;
    private Integer buynum;
    private  BigDecimal buyprice;
    private Date cdate;
    private String postname;
    private String postmobile;
    private String postadd;
    private String message;
    private String flag;
    private  String ccdate;
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

    public Integer getGoodid() {
        return goodid;
    }

    public void setGoodid(Integer goodid) {
        this.goodid = goodid;
    }

    public String getGoodname() {
        return goodname;
    }

    public void setGoodname(String goodname) {
        this.goodname = goodname;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Integer getBuynum() {
        return buynum;
    }

    public void setBuynum(Integer buynum) {
        this.buynum = buynum;
    }

    public BigDecimal getBuyprice() {
        return buyprice;
    }

    public void setBuyprice(BigDecimal buyprice) {
        this.buyprice = buyprice;
    }

    public Date getCdate() {
        return cdate;
    }

    public void setCdate(Date cdate) {
        this.cdate = cdate;
    }

    public String getPostname() {
        return postname;
    }

    public void setPostname(String postname) {
        this.postname = postname;
    }

    public String getPostmobile() {
        return postmobile;
    }

    public void setPostmobile(String postmobile) {
        this.postmobile = postmobile;
    }

    public String getPostadd() {
        return postadd;
    }

    public void setPostadd(String postadd) {
        this.postadd = postadd;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }

    public String getCcdate() {
        return ccdate;
    }

    public void setCcdate(String ccdate) {
        this.ccdate = ccdate;
    }
}
