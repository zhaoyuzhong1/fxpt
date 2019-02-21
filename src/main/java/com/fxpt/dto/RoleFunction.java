package com.fxpt.dto;

/**
 * Created by james on 2018/10/16.
 */
public class RoleFunction extends BaseDTO {
    private int roleid;
    private int functionid;

    public int getRoleid() {
        return roleid;
    }

    public void setRoleid(int roleid) {
        this.roleid = roleid;
    }

    public int getFunctionid() {
        return functionid;
    }

    public void setFunctionid(int functionid) {
        this.functionid = functionid;
    }
}
