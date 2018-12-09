package serviceautomation.compare;

import org.junit.Assert;
import serviceautomation.CommonUtil;
import serviceautomation.util.CommonModel;

import java.util.Arrays;
import java.util.List;
import java.util.logging.Logger;

import static serviceautomation.CommonUtil.*;
import static serviceautomation.RestClient.getOutputResponse;

/**
 * Created by vishnuprasadk on 28/12/17.
 * This class is used to validate the json response value against static user inputs
 */
public class WebServiceVsUserInput {

    private String webServiceResponseFieldName;
    private String webServiceValue;
    private String inputValue;
    private String errorOutput;
    private boolean webServiceFieldMissing;

    private static final Logger logger = Logger.getLogger(WebServiceVsUserInput.class.getName());

    public void compareStaticValues(List<CommonModel> fieldNames) throws Exception {
        errorOutput = "";
        webServiceFieldMissing = false;
        for (CommonModel field : fieldNames) {
            webServiceResponseFieldName = field.webServiceResponseField;
            inputValue = field.inputValue;
            try {
                webServiceValue = getJsonPathString(webServiceResponseFieldName);
                if (webServiceValue.equalsIgnoreCase(inputValue)) {
                    logSuccess();
                } else {
                    logFailure();
                }
            } catch (Exception e) {
                logger.info("The response is not having the json field " + webServiceResponseFieldName);
                webServiceFieldMissing = true;
            }
        }
        validateResult();
    }

    public void compareMultipleInputValues(List<CommonModel> fieldNames) throws Exception {
        errorOutput = "";
        webServiceFieldMissing = false;
        boolean invalidInput = false;
        for (CommonModel field : fieldNames) {
            webServiceResponseFieldName = field.webServiceResponseField;
            inputValue = field.inputValue;
            if (inputValue.contains(",")) {
                List<String> expectedValuesList = Arrays.asList(inputValue.split("\\s*,\\s*"));
                try {
                    List<String> serviceValueList = getJsonPathList(webServiceResponseFieldName);
                    webServiceValue = serviceValueList.toString();
                    compareLists(serviceValueList, expectedValuesList);
                } catch (Exception e) {
                    logger.info("The response is not having the json field " + webServiceResponseFieldName);
                    webServiceFieldMissing = true;
                }
            } else {
                logger.info("There is no ',' separation in the input values provided\nGiven input value = " + inputValue);
                invalidInput = true;
            }
        }
        validateResult();
        if (invalidInput) {
            Assert.fail("One of the input values were not separated by comma");
        }
    }

    private void compareLists(List<String> wsValues, List<String> inputValues) {
        if (wsValues == null && inputValues == null) {
            logger.info("Both the lists for comparison are empty or null");
        } else if (CommonUtil.compareLists(wsValues, inputValues)) {
            logSuccess();
        } else logFailure();
    }

    private void logSuccess() {
        logger.info("Value from the service response is matching with the user input:\n\t" + webServiceResponseFieldName + " --> " + webServiceValue
                + "\n\tExpected value (user input) --> " + inputValue + "\n");
    }

    private void logFailure() {
        errorOutput = errorOutput + webServiceResponseFieldName + " --> " + webServiceValue
                + "\nExpected value (user input) --> " + inputValue + "\n";
    }

    private void validateResult() {
        if (errorOutput.length() != 0) {
            Assert.fail("Below value(s) did not match:\n" + errorOutput);
        } else if (errorOutput.length() == 0 && webServiceFieldMissing) {
            logger.info("The json response is:\n" + getOutputResponse());
            Assert.fail("The web service response was missing one or more fields");
        }
    }

}
