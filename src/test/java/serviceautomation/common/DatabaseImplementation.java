package serviceautomation.common;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import serviceautomation.util.DataBaseBean;

import java.io.IOException;
import java.sql.SQLException;
import java.util.logging.Logger;

import static serviceautomation.DatabaseConnector.*;
import static serviceautomation.RestImplementation.getDatabaseEnvironment;
import static serviceautomation.RestImplementation.setDatabaseEnvironment;
import static serviceautomation.util.Constants.DB_ENVIRONMENT;
import static serviceautomation.util.DatabaseDetailsXmlParser.getDataBaseDetails;

/**
 * Created by v.prasad.kandangath on 4/1/2017.
 */
public class DatabaseImplementation {

    private static final Logger logger = Logger.getLogger(DatabaseImplementation.class.getName());

    private static DataBaseBean dbDetails;

    @And("^I set the Database credentials to (.*)$")
    public void  setDBCredentials(String env) throws IOException {
        String environment = System.getProperty(DB_ENVIRONMENT);
        if (environment != null && environment.length() != 0) {
            setDatabaseEnvironment(environment);
        } else {
            setDatabaseEnvironment(env);
        }
        logger.info("Database Environment: " + getDatabaseEnvironment());
        dbDetails = getDataBaseDetails(getDatabaseEnvironment());
    }

    @When("^I establish the Database connection$")
    public void getConnection() throws SQLException, ClassNotFoundException {
        establishConnection(dbDetails.getHostName(), dbDetails.getUserName(), dbDetails.getPassword());
    }

    @Then("^I close the database connection$")
    public void closeDataBaseConnection() throws Exception {
        closeConnection();
    }

    @And("^I pass the database query$")
    public void executeQuery(final String query) throws Exception {
        saveQuery(query);
        executeQuery(query);
    }

}
