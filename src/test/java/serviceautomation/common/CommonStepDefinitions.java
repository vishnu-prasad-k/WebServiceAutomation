package serviceautomation.common;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.restlet.data.Reference;
import serviceautomation.RestClient;
import serviceautomation.RestImplementation;
import serviceautomation.compare.DataBaseVsWebService;
import serviceautomation.compare.WebServiceVsUserInput;
import serviceautomation.compare.WebServiceVsWebService;
import serviceautomation.util.CommonModel;

import javax.ws.rs.core.MultivaluedHashMap;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import static serviceautomation.CommonUtil.validateFieldAndCheckDataNotNull;
import static serviceautomation.CommonUtil.validateFieldAndData;
import static serviceautomation.DatabaseConnector.closeConnection;
import static serviceautomation.RestImplementation.*;

/**
 * Created by vishnuprasadk on 4/1/2017.
 * This class contains the common step definitions that can be reused by all
 * Only add those step definitions which are highly reused here
 */

public class CommonStepDefinitions {

    private static final Logger logger = Logger.getLogger(CommonStepDefinitions.class.getName());

    @Before
    public void beforeScenario(Scenario scenarioName) {
        scenario = scenarioName;
    }

    @After
    public void afterScenario() throws IOException {

    }

    //The below method is to perform all the initial setup related to a test case
    @Given("^All the setup is completed$")
    public void setUp() throws InterruptedException, IOException {
        String currentDir = System.getProperty("user.dir");
        logger.info("Working Directory = " + currentDir);
        projectFolder = currentDir.replace("\\", "/") + "/";
        logger.info("working Directory = " + projectFolder);

        exactMatchRequired = false;
        headerSet = false;
        header = new MultivaluedHashMap<>(10);
    }

    /*-------------------------------
    * The below method is to set up the serviceEnvironment and the server endpoint
    * Following environments are supported:
    * 1. Local
    * 2. Dev
    * 3. SIT
    * 4. UAT
    *
    * Also, certificates are setup for respective serviceEnvironment in this function
    * -------------------------------*/
    @And("^I change the endpoint to (.*)$")
    public void changeEndPoint(String env) throws IOException {
        RestImplementation.changeEndPoint(env);
    }

    @Given("^I have the below json input$")
    public void inputJson(String json) {
        jsonBodyInput = json;
        logger.info("The json payload for the request is: \n" + jsonBodyInput);
    }

    @And("^I verify the following fields are present in the service response$")
    public void verifyFieldsInResponse(List<String> fields) throws Exception {
        ArrayList<String> notFound = validateFieldAndData(fields);
        if (notFound.size() > 0) {
            logger.info("The json response is:\n" + RestClient.getOutputResponse());
            Assert.fail("The fields that were not found in the json response are:\n" + notFound);
        } else {
            logger.info("All the fields are found");
        }
    }

    @And("^I verify the following fields are not having empty or null value in the service response$")
    public void verifyFieldValuesInResponse(List<String> fields) throws Exception {
        ArrayList<String> emptyResponse = validateFieldAndCheckDataNotNull(fields);
        if (emptyResponse.size() > 0) {
            logger.info("The json response is:\n" + RestClient.getOutputResponse());
            Assert.fail("The below fields were having empty or null values or they were not found int he json response\n" + emptyResponse);
        } else {
            logger.info("All the fields are having values");
        }
    }

    @And("^I validate the value of the following fields between the webservice response and database resultset$")
    public void compareDataWebServiceDataBase(List<CommonModel> fieldNames) throws Throwable {
        try {
            DataBaseVsWebService compare = new DataBaseVsWebService();
            compare.compareDbVsWs(fieldNames);
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        } finally {
            closeConnection();
        }
    }

    @And("I validate the value of the following fields from the webservice response against the expected value provided")
    public void compareDataWebServiceUserInput(List<CommonModel> fieldNames) throws Throwable {
        try {
            WebServiceVsUserInput compare = new WebServiceVsUserInput();
            compare.compareStaticValues(fieldNames);
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @And("I validate the value of the following fields from the webservice response against the expected multiple values provided")
    public void compareDataWebServiceMultipleUserInput(List<CommonModel> fieldNames) throws Throwable {
        try {
            WebServiceVsUserInput compare = new WebServiceVsUserInput();
            compare.compareMultipleInputValues(fieldNames);
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    static String firstWebServiceResponse = null;
    static String secondWebServiceResponse = null;

    @And("^I store the response of first web service call$")
    public void storeResponseFirst(){
        firstWebServiceResponse = RestClient.getOutputResponse();
    }

    @And("^I store the response of second web service call$")
    public void storeResponseSecond(){
        secondWebServiceResponse = RestClient.getOutputResponse();
    }

    @And("^I compare the two web service responses$")
    public void validateDataResponseAgainstResponse(List<CommonModel> fieldNames) {
        try{
            WebServiceVsWebService compare = new WebServiceVsWebService();
            compare.compareWebServiceResponses(firstWebServiceResponse,secondWebServiceResponse,fieldNames);
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @And("^I set the PID as (.*)$")
    public void setRMPID(String pid) throws Exception {
        user = pid;
    }

    //to be used if a vase64 encrypted header needs to be passed in the request
    @And("^I pass the header (.*) as (.*)$")
    public void setEncryptedHeader(String headerName, String headerValue) throws Exception {
        inputHeaderName = headerName;
        inputHeaderValue = headerValue;
    }

    @And("^I set the following headers$")
    public void setHeaders(List<CommonModel> headers) {
        for (CommonModel header : headers) {
            addHeaders(header.headerKey, header.headerValue);
        }
        headerSet = true;
    }

    //The below method verifies the 200 (success) code of the web service response
    @Then("^I Check for the Success Status Code$")
    public void checkStatusCode() throws IOException {
        if (RestClient.getStatusCode() != 200) {
            Assert.fail("Web service failed to execute successfully. Response code returned = " + RestClient.getStatusCode());
        }
    }

    //The below method is to validate the different failure status code, which can be passed from the cucumber feature file
    @Then("^I check for Status Code as (.*)$")
    public void checkFailureStatus(int statusCode) throws IOException {
        if (RestClient.getStatusCode() != statusCode) {
            Assert.fail("Web service didnt return expected response. Response code returned = " + RestClient.getStatusCode());
        }
    }

    @When("I hit the (.*) service url (.*)")
    public void hitServiceURL(String methodType, Reference path) throws Exception {
        executeRestService(methodType, path);
    }

    @Given("^I want exact match$")
    public void setExactMatchRequired() {
        exactMatchRequired = true;
    }

}
