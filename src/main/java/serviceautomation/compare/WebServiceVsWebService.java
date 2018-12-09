package serviceautomation.compare;

import com.jayway.jsonpath.JsonPathException;
import org.junit.Assert;
import serviceautomation.CommonUtil;
import serviceautomation.util.CommonModel;

import java.util.List;
import java.util.logging.Logger;

import static serviceautomation.CommonUtil.getJsonPathList;

public class WebServiceVsWebService {

    private String fieldNameWebServiceResponse1;
    private String fieldNameWebServiceResponse2;
    private String formattedValueWebServiceResponse1;
    private String formattedValueWebServiceResponse2;
    private static String errorOutput;
    private static Boolean webServiceResponseMissingField = false;

    private static final Logger logger = Logger.getLogger(WebServiceVsWebService.class.getName());

    //Use the below method to compare the values when the json path is provided as the web service field name
    //All the json values for the json path provided are stored in a list and compared against the similar list fetched from the second service response
    public void compareWebServiceResponses(String response1, String response2, List<CommonModel> fieldNames) throws Exception {
        errorOutput = "";
        for(CommonModel fields: fieldNames) {
            formattedValueWebServiceResponse1 = "";
            formattedValueWebServiceResponse2 = "";
            fieldNameWebServiceResponse1 = fields.webServiceResponse1Field;
            fieldNameWebServiceResponse2 = fields.webServiceResponse2Field;

            List<String> webServiceValuesResponse1 = getValuesFromWebServiceResponse(response1, fieldNameWebServiceResponse1);
            if(webServiceValuesResponse1!=null){
                formattedValueWebServiceResponse1 = webServiceValuesResponse1.toString();
            }
            List<String> webServiceValuesResponse2 = getValuesFromWebServiceResponse(response2, fieldNameWebServiceResponse2);
            if(webServiceValuesResponse2!=null){
                formattedValueWebServiceResponse2 = webServiceValuesResponse2.toString();
            }
            compareLists(webServiceValuesResponse1, webServiceValuesResponse2);
        }

        if(errorOutput.length() != 0) {
            logResponse(response1, response2);
            Assert.fail("Below values were mismatching between the service responses:\n" + errorOutput);
        } else if (errorOutput.length() == 0 && webServiceResponseMissingField) {
            logResponse(response1, response2);
            Assert.fail("The web service response was missing one or more fields");
        }
    }

    private void logResponse(String response1, String response2) {
        logger.info("First web service response:\n" + response1);
        logger.info("Second web service reponse:\n" + response2);
    }

    private List<String> getValuesFromWebServiceResponse (String jsonResponse, String fieldName) throws Exception {
        try{
            List<String> webServiceValuesResponse = getJsonPathList(jsonResponse, fieldName);
            for(int j=0; j<webServiceValuesResponse.size(); j++) {
                webServiceValuesResponse.set(j, webServiceValuesResponse.get(j));
            }
            return webServiceValuesResponse;
        } catch (JsonPathException e) {
            logger.info("The response provided is not having the json field "+ fieldName);
            webServiceResponseMissingField = true;
            return null;
        }
    }

    //method to compare the list of values from the web service responses
    private void compareLists(List<String> valuesFromWebServiceResponse1, List<String> valuesFromWebServiceResponse2) {
        if(valuesFromWebServiceResponse1 == null) {
            logger.info("Web service response 1 results were empty or null for the field: " + fieldNameWebServiceResponse1);
        }
        if(valuesFromWebServiceResponse2 == null) {
            logger.info("Web service response 2 results were empty or null for the field: " + fieldNameWebServiceResponse2);
        }
        if(valuesFromWebServiceResponse1 == null && valuesFromWebServiceResponse2 == null) {
            logSuccess();
        } else if (CommonUtil.compareLists(valuesFromWebServiceResponse1, valuesFromWebServiceResponse2)) {
            logSuccess();
        } else logFailure();
    }

    private void logSuccess(){
        logger.info("Both the service responses are matching:\n\t" + fieldNameWebServiceResponse1 + " --> " + formattedValueWebServiceResponse1
                    + "\n\t" + fieldNameWebServiceResponse2 + " --> " + formattedValueWebServiceResponse2 + "\n");
    }

    private void logFailure(){
        errorOutput = errorOutput + fieldNameWebServiceResponse1 + " --> Web Service 1 value: " + formattedValueWebServiceResponse1
                    + "\n" + fieldNameWebServiceResponse2 + " --> Web Service 2 value: " + formattedValueWebServiceResponse2 + "\n";
    }
}
