package com.fxpt.dto;

import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class SysMenu extends BaseDTO {
	private int id;
	private String name;
	private String url;
	private int pid;
	private int order;
	private Date cdate;
	private int cuser;
	private String flag;
	private String iconcss;

	private String pidname;
	private String cusername;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public int getOrder() {
		return order;
	}

	public void setOrder(int order) {
		this.order = order;
	}

	public Date getCdate() {
		return cdate;
	}

	public void setCdate(Date cdate) {
		this.cdate = cdate;
	}

	public int getCuser() {
		return cuser;
	}

	public void setCuser(int cuser) {
		this.cuser = cuser;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public String getIconcss() {
		return iconcss;
	}

	public void setIconcss(String iconcss) {
		this.iconcss = iconcss;
	}

	public String getPidname() {
		return pidname;
	}

	public void setPidname(String pidname) {
		this.pidname = pidname;
	}

	public String getCusername() {
		return cusername;
	}

	public void setCusername(String cusername) {
		this.cusername = cusername;
	}
}
