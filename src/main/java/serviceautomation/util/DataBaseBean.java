package serviceautomation.util;

/**
 * Created by vishnuprasadk on 12/11/17.
 * This Bean is used to store the DB connection details
 */
public class DataBaseBean {

    private String hostName;
    private String userName;
    private String password;

    public DataBaseBean() {

    }

    public DataBaseBean(String hostName, String userName, String password) {
        this.hostName = hostName;
        this.userName = userName;
        this.password = password;
    }

    public String getHostName() {
        return hostName;
    }

    public void setHostName(String hostName) {
        this.hostName = hostName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
