package com.fxpt.dto;

import java.util.Date;

/**
 * Created by wcw on 2018/12/29.
 */
public class GoodsFile extends BaseDTO {
    private Integer id;
    private String imgfile;
    private Integer goodid;
    private Date cdate;
    private Integer cuser;
    private String flag;
    private String fmflag;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImgfile() {
        return imgfile;
    }

    public void setImgfile(String imgfile) {
        this.imgfile = imgfile;
    }

    public Integer getGoodid() {
        return goodid;
    }

    public void setGoodid(Integer goodid) {
        this.goodid = goodid;
    }

    public Date getCdate() {
        return cdate;
    }

    public void setCdate(Date cdate) {
        this.cdate = cdate;
    }

    public Integer getCuser() {
        return cuser;
    }

    public void setCuser(Integer cuser) {
        this.cuser = cuser;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }

    public String getFmflag() {
        return fmflag;
    }

    public void setFmflag(String fmflag) {
        this.fmflag = fmflag;
    }
}
