package com.fxpt.service;

import java.sql.*;

public class testContext {

    public Connection conn=null;
    public Statement stmt=null;
    public ResultSet rs=null;
    private static String driver="com.mysql.jdbc.Driver";
    private static String URL="jdbc:mysql://localhost:3306/fxpt?useUnicode=true&characterEncoding=UTF-8&useSSL=false";
    private static String user="root";
    private static String password="";

    public static Connection getConnection() {
        Connection conn = null;

        try {
            Class.forName(driver);
            conn = DriverManager.getConnection(URL, user, password);
            if(!conn.isClosed()){
                System.out.println("Succeeded connecting DB");
            }
        }
        catch (Exception ee){
            ee.printStackTrace();
        }
        if (conn == null) {
//System.err.println("Wrong user password");
        }
        return conn;
    }

    public ResultSet executeQuery(String sql) { //sql query as an argument
        try {
            conn = getConnection();
            stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,
                    ResultSet.CONCUR_READ_ONLY);
            rs = stmt.executeQuery(sql);
        }
        catch (SQLException ex){
            System.out.println(ex.getMessage());
        }
//System.out.println(sql);
        return rs; //return result
    }
    public void close() {
        try {
            rs.close();
            stmt.close();
            conn.close();
        } catch (SQLException e) {
// TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    public static void main(String args[]){
        getConnection();
    }

}
