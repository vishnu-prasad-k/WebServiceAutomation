package serviceautomation;

import java.sql.*;
import java.util.logging.Logger;

/**
 * Created by vishnuprasadk on 12/11/17.
 * This class is used to establish database connection with oracle databases
 * This also returns the results after executing SWL queries on the connected database
 */
public class DatabaseConnector {

    private static Connection dbcon;
    private static ResultSet resultSet;
    private static String query;

    private static final Logger logger = Logger.getLogger(DatabaseConnector.class.getName());

    public static void establishConnection(String hostname, String username, String password) {
        try {
            dbcon = DriverManager.getConnection(hostname, username, password);
            logger.info("Connection established");
        } catch (Exception e) {
            logger.info("Failed to establish connection\n" + e.getMessage());
        }
    }

    public static void closeConnection() throws SQLException {
        dbcon.close();
    }

    public static void saveQuery(String q) throws Exception {
        query = q;
        logger.info("Query for the execution is:\n" + query);
    }

    public static void executeQuery() throws SQLException {
        try {
            Statement statement = dbcon.createStatement();
            resultSet = statement.executeQuery(query);
            setResultSet(resultSet);
            logger.info("Query executed successfully.");
        } catch (Exception e) {
            logger.info("Execution of SQL query failed.\n" + e.getMessage());
            throw e;
        }
    }

    public static ResultSet getResultSet() {
        return resultSet;
    }

    public static void setResultSet(ResultSet resultSet) {
        DatabaseConnector.resultSet = resultSet;
    }
}
