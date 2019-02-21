package com.fxpt.dto;

/**
 * Created by Administrator on 2018/10/15/015.
 */
public class Function extends BaseDTO {
    private int id;
    private int pid;
    private String name;
    private String url;
    private String iconcss;
    private String flag;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getIconcss() {
        return iconcss;
    }

    public void setIconcss(String iconcss) {
        this.iconcss = iconcss;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }
}
