package serviceautomation;

import cucumber.api.Scenario;
import org.junit.Assert;
import org.restlet.data.Reference;
import serviceautomation.util.ServerInfoBean;
import serviceautomation.util.ServerInfoXmlParser;

import javax.ws.rs.core.MultivaluedHashMap;
import javax.ws.rs.core.MultivaluedMap;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import static javax.ws.rs.HttpMethod.*;
import static serviceautomation.CommonUtil.base64encode;
import static serviceautomation.CommonUtil.getJsonPathString;
import static serviceautomation.util.Constants.*;

/**
 * Created by vishnuprasadk on 3/25/2017.
 * This is the main class for the framework where all the setup codes are written
 * DO NOT UPDATE
 */
public class RestImplementation {


    public static String jsonBodyInput;
    public static String projectFolder;
    private static String serviceEnvironment;
    private static String databaseEnvironment;
    public static String user = null;
    public static String inputHeaderName = "";
    public static String inputHeaderValue = null;

    public static Boolean exactMatchRequired;

    //fields for logging purpose
    public static String logfile = null;

    //Scenario Object
    public static Scenario scenario = null;

    //For web service response and status
    public static boolean headerSet;
    public static MultivaluedMap<String, Object> header = null;
    private static ServerInfoBean serverInfoBean;
    private static Map<String, String> authorization = new HashMap<>();

    public static final java.util.logging.Logger logger = Logger.getLogger(RestImplementation.class.getName());

    public static void changeEndPoint(String env) throws IOException {
        String environment = System.getProperty(SERVICE_ENVIRONMENT);
        if (environment != null && environment.length() != 0) {
            RestImplementation.setServiceEnvironment(environment);
        } else {
            RestImplementation.setServiceEnvironment(env);
        }
        logger.info("Service Environment = " + RestImplementation.getServiceEnvironment());

        serverInfoBean = ServerInfoXmlParser.getServerDetails(RestImplementation.getServiceEnvironment());
    }

    //Common service to be called for executing REST service
    //Different types currently supported - GET, POST, PUT
    public static void executeRestService(String requestType, Reference path) throws Exception {
        try {
            setHeaders(path);
            logger.info("URL = " + path);
            switch (requestType) {
                case POST:
                    RestClient.callHttpsPostUrl(serverInfoBean, path, header, jsonBodyInput);
                    break;
                case PUT:
                    RestClient.callHttpsPutUrl(serverInfoBean, path, header, jsonBodyInput);
                    break;
                case GET:
                    RestClient.callHttpsGetUrl(serverInfoBean, path, header);
                    break;
                default:
                    Assert.fail("The TYPE value passed for the service execution is not a valid type");
            }
            logger.info("The response code is " + RestClient.getStatusCode());
            logger.info("The json response is:\n" + RestClient.getOutputResponse());
            header.clear();
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Error while executing the rest service\n" + e.getMessage(), e);
            throw e;
        }
    }

    private static void setHeaders(Reference path) throws Exception {
        if (!headerSet) {
            //for ifapi service add the ifapi headers
            if (path.toString().toLowerCase().contains("/ifapi/")) {
                if (path.toString().toLowerCase().contains("login.json?pid=")) {
                    addHeaders("RME_TXN_ID", RME_TXN_ID);
                    addHeaders("wm_user", WM_USER);
                } else {
                    addIfapiheaders(fetchRmeToken());
                    if (inputHeaderName.length() > 0) {
                        addHeaders(inputHeaderName, base64encode(inputHeaderValue));
                    }
                }
            } else if (inputHeaderName.length() > 0) {
                addHeaders(inputHeaderName, base64encode(inputHeaderValue));
            }
        }
    }

    private static int timeoutCounter = 0;

    //Below method hits the RME login.json service and extracts the RME_TOKEN value which will be then saved to the authorization variable
    private static String fetchRmeToken() throws Exception {
        logger.info("RM pid to be used in the script: " + user);
        if (authorization.get(user) == null) {
            String resourceRef = "/foundation/ifapi/cs/pb/apac/v3/Login.json?pid=" + user;
            Reference reference = new Reference(resourceRef);
            MultivaluedHashMap<String, Object> headers = new MultivaluedHashMap<>();
            headers.add("RME_TXN_ID", RME_TXN_ID);
            headers.add("wm_user", WM_USER);
            logger.info("resourceRef = " + resourceRef);
            String authToken = null;
            try {
                if (timeoutCounter > 2) {
                    Assert.fail("Login timeout counter reached. Failing all the tests..");
                }
                RestClient.callHttpsGetUrl(serverInfoBean, reference, headers);
                if (RestClient.getStatusCode() == 408) {
                    timeoutCounter++;
                }
                authToken = getJsonPathString(RME_TOKEN);
                logger.info("New auth token generated: " + authToken);
            } catch (Exception e) {
                Assert.fail(e.getMessage());
            }
            authorization.put(user, authToken);
        }
        return authorization.get(user);
    }

    //For adding headers to the service calls for REST services
    public static void addHeaders(String name, String value) {
        if (header != null) {
            header.add(name, value);
        } else {
            header = new MultivaluedHashMap<String, Object>();
            header.add(name, value);
        }
    }

    public static void addIfapiheaders(String token) {
        addHeaders("RME_TXN_ID", RME_TXN_ID);
        addHeaders("wm_user", WM_USER);
        addHeaders("authorization", token);
    }

    private static String getServiceEnvironment() {
        return serviceEnvironment;
    }

    private static void setServiceEnvironment(String serviceEnv) {
        serviceEnvironment = serviceEnv;
    }

    public static String getDatabaseEnvironment() {
        return databaseEnvironment;
    }

    public static void setDatabaseEnvironment(String databaseEnv) {
        databaseEnvironment = databaseEnv;
    }

}
